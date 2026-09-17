# DEV-PLAN — Soul Beauty Healing Center 官网还原

生成日期:2026-09-15

## 一、输入素材(本次读取的"产品文档")

根目录没有 PRD/需求类 .md 文档,本次的需求来源是设计稿图片:

| 文件 | 内容 |
| :-- | :-- |
| `微信图片_20260915141051_36_1643.png` | Home 首页设计稿 |
| `微信图片_20260915141049_35_1643.png` | Services 服务页设计稿 |
| `微信图片_20260915141047_34_1643.png` | Booking 预约页设计稿 |
| `CHEN ZHOU.png` 等 7 张人像 | 团队成员头像(用于 Our Practitioners) |

已完成 Phase 1 逆向拆解(配色/字体/布局/组件/交互),色值通过脚本从原图采样得出。

## 二、已确认的范围决策

| 项 | 决策 |
| :-- | :-- |
| 预约功能 | **纯视觉还原**:日历、时间段、分类 Tab 有前端交互(可点击/高亮/切月),不接真实预约后端;"Book Appointment" 按钮留空跳转位 |
| 数据层 | **需要**:Prisma + PostgreSQL,内容可管理 |
| 数据库托管 | 本地 PostgreSQL(已装 14.20,开发时启动;上线前改 `DATABASE_URL` 即可切云端) |
| 团队成员 | 设计稿是 4 卡位,**调整为可容纳全部 7 位**(换行网格 / 横向滚动,保持卡片样式不变) |
| 部署 | 先本地预览,部署方式之后再定 |
| 技术栈 | Next.js(App Router) + TypeScript + Prisma + PostgreSQL + Tailwind CSS + shadcn/ui |

## 三、设计系统(Phase 1 采样结果)

| Token | 色值 | 用途 |
| :-- | :-- | :-- |
| `--primary` | `#33095C`(采样区间 #22004C~#380C5B) | 标题、按钮底、步骤圆圈、Tab 选中 |
| `--accent` | `#7C3AED` 附近 | 星级、引号图标等点缀 |
| `--lavender-bg` | `#ECE8FD` | Hero 底色 |
| `--lavender-soft` | `#EEE4FD` | 图标圆底 |
| `--band-bg` | `#EEE3FA` | 评价横条 |
| `--gold` | `#846134` | Logo 圆环与 "SOUL BEAUTY" 字样 |
| `--surface` | `#FFFFFF` / `#FCFAFE` | Header / Footer / 卡片 |
| `--text-muted` | 紫灰系(约 #6B5A85) | 正文说明文字 |

字体:大标题衬线体(拟用 Playfair Display)· 正文无衬线(拟用 Inter)· 装饰手写体(拟用 Dancing Script)。

## 四、模块拆解

**共享层**
- `SiteHeader`:Logo + 5 项导航(当前页高亮下划线)+ 深紫胶囊 CTA
- `SiteFooter`:Logo + 链接行 + 版权 + 社交图标
- `Button` / `IconCircle` / `ServiceCard` / `FeatureItem` / `SectionHeading` 等基础组件
- 装饰元素:叶子插画、手写体角标(SVG / 文字层实现)

**Home**:Hero(标题+正文+CTA+地址)→ 4 列图标特性条 → Our Services 紧凑 4 卡 → Why Soul Beauty 3 列 → 评价横条 → Footer

**Services**:Hero → Our Services 大卡网格(图+图标+标题+4条列表+Learn More)→ 3 列信息条(Pricing / Online Booking / More Than a Treatment)

**Booking**:Hero + 1-4 步骤条 → 左栏(Practitioners 7 人网格 + Contact & Location + 地图占位)/ 右栏(分类 Tab + 服务列表 + 月历 + 时间段 + CTA)

## 五、Schema 设计(Prisma)

```prisma
model ServiceCategory {
  id        String    @id @default(cuid())
  name      String                    // Massage Therapy / Acupuncture / Day Spa / Medical Aesthetics
  slug      String    @unique
  sortOrder Int       @default(0)
  services  Service[]
}

model Service {
  id          String          @id @default(cuid())
  name        String
  slug        String          @unique
  summary     String                       // 首页卡片一行简述
  bullets     String[]                     // 服务页项目符号列表
  durationMin Int?
  priceCents  Int?
  imageUrl    String?
  iconKey     String?
  categoryId  String
  category    ServiceCategory @relation(fields: [categoryId], references: [id])
  sortOrder   Int             @default(0)
  isActive    Boolean         @default(true)
}

model Practitioner {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  title       String?                      // 职称,如 RMT
  bio         String?
  photoUrl    String?
  specialties String[]
  sortOrder   Int      @default(0)
  isActive    Boolean  @default(true)
}

model Testimonial {
  id        String  @id @default(cuid())
  quote     String
  author    String?
  rating    Int     @default(5)
  sortOrder Int     @default(0)
  isActive  Boolean @default(true)
}

model SiteSettings {
  id      String @id @default("default")   // 单行配置
  address String
  phone1  String
  phone2  String?
  email   String
  hours   String
}
```

内容维护方式:v1 用 `npx prisma studio` 直接改数据(免建后台、免鉴权)。自建管理后台 + 登录鉴权属于独立阶段,本次不做。

## 六、路由清单

| 路由 | 说明 |
| :-- | :-- |
| `/` | 首页(有设计稿) |
| `/services` | 服务页(有设计稿) |
| `/booking` | 预约页(有设计稿) |
| `/about` | ⚠️ 导航里有,但**无设计稿** |
| `/contact` | ⚠️ 导航里有,但**无设计稿** |

数据获取全部走 Server Components 直读 Prisma,DB 访问统一放 `src/lib/db/`。

## 七、风险点与待决事项

1. **摄影素材缺失(最大风险)**:设计稿里的按摩/蜡烛/针灸/面部护理照片没有原始高清图。从 1448px 宽的设计稿裁出来会偏糊,影响"像素级还原"的观感。**需要你提供原图**,否则我先用裁图占位并在报告中标注。
2. **字体不确定**:设计稿字体族未知,我用 Google Fonts 里最接近的替代(Playfair Display / Inter / Dancing Script)。若客户有品牌字体文件,提供后可完全对齐。
3. **外层浅紫圆角边框**:三张图外围都有一圈浅紫底 + 圆角白容器,判断是设计稿的展示外框(Figma mockup frame),不是网站本身元素 —— **我按"不实现"处理**,如果你认为它是页面设计的一部分请指出。
4. **About / Contact 无设计稿**:先做成沿用 Header/Footer 的简单占位页,设计稿补齐后再还原。
5. **Logo 与叶子插画**:设计稿里是位图,我会用 SVG 近似重绘;若有原始矢量文件(AI/SVG)请提供。
6. **7 位成员照片与姓名匹配**:按文件名推断姓名(CHEN ZHOU / Jennifer Kung / Julia Zhuang / Sherry Pu / Qian Feng / Vinna Sun / YANG YUAN LI),职称和简介设计稿里没有 —— 先留空,需要你补充文案。
7. **素材归位**:计划把 3 张设计稿移到 `docs/20260915-design-refs/`,7 张头像移到 `public/images/practitioners/`,根目录保持整洁。

## 八、架构与性能评估(大改必查)

- **架构边界**:纯展示站 + 只读数据层,无写操作、无用户体系。页面组件(视觉层)与 `src/lib/db/` (数据层)分离,便于后续替换数据来源。
- **可复用性**:Header/Footer/卡片/按钮/图标圆底在三页高度重复,统一抽到 `src/components/`,禁止各页复制样式。
- **N+1 风险**:Booking 页服务列表按分类分组,用一次 `findMany + include category` 取全量,不在循环里查库。
- **分页**:数据总量 < 30 行,不需要分页;列表查询仍加 `orderBy` + `where isActive`。
- **鉴权**:v1 无写接口、无敏感读取,不涉及鉴权;若后续加管理后台,按 `api-auth-templates` 规范补。

## 九、验证清单(完成前必须全过)

- `npm run build` 无报错 / `npm run dev` 可启动 / 控制台无红色错误 / 迁移全部应用
- `/`、`/services`、`/booking` 三个路由可访问无 404,数据库读写正常
- 三页与设计稿逐屏比对:配色、字号层级、间距、圆角、按钮形状、图标风格一致
- 响应式:1440 桌面为主(设计稿尺寸),另保证 1024 / 768 / 390 不破版

---

📋 计划已生成,请确认:
1. 功能范围是否正确(尤其"预约纯视觉还原 + 不建管理后台,用 Prisma Studio 改数据")
2. 风险点第 1 条:**能否提供设计稿里那些摄影图的原始高清素材**?(直接影响还原度)
3. 风险点第 3 条:外层浅紫圆角边框按"设计稿展示外框、不实现"处理,是否认可?
4. 素材归位(设计稿移到 `docs/`、头像移到 `public/images/practitioners/`)是否可以

回复「确认,开始开发」后我才继续。
