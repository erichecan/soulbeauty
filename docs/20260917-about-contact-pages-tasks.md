# About / Contact 页面 1:1 还原 — 任务台账

创建日期：2026-09-17
设计稿：`docs/20260915-design-refs/about.png`、`docs/20260915-design-refs/contact.png`（均 1448×1086）

## 已确认的范围决策

| 项 | 决策 | 来源 |
| :-- | :-- | :-- |
| Contact 表单 | 走 **mailto**，不建表、不做后端 | 用户 2026-09-17 确认 |
| Powered by Jane 署名 | **恢复显示**（about hero + contact 预约卡） | 用户 2026-09-17 确认 |
| 技师数据 | 用数据库真实 7 位 + 真实照片，职称取自客户 Jane 站 | 用户「包括里面技师的照片等等」 |
| schema | **不变更**，`Practitioner.title` 字段已存在只是为空 | — |

## 从客户 Jane 站取得的真实职称（2026-09-17 实测）

| slug | Jane staff id | Jane 科别 | 落库 title |
| :-- | :-- | :-- | :-- |
| chen-zhou | 5 | Acupuncture | Acupuncturist |
| julia-zhuang | 2 | Massage Therapy + Acupuncture | RMT & Acupuncturist |
| vinna-sun | 3 | Day Spa + Medical Aesthetics | Facial & Beauty Specialist |
| jennifer-kung | 4 | Day Spa + Medical Aesthetics | Facial & Beauty Specialist |
| sherry-pu | 11 | Social Work | Registered Social Worker |
| yang-yuan-li | 13 | Acupuncture | Acupuncturist |
| qian-feng | 18 | Acupuncture | Acupuncturist |

## 任务单元

| # | 任务 | 产出 | 验收标准 | 依赖 | 状态 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| 1 | 技师职称落库 | `prisma/seed.ts` 改 + DB 更新 | 7 位 title 全部非空，booking 页不再显示 "Profile coming soon" | — | ✅ |
| 2 | 补两条 testimonial | `prisma/seed.ts` + `getTestimonial(id)` | about / contact 各自显示设计稿上对应的那句话 | — | ✅ |
| 3 | FeatureStrip 参数化 | `home/feature-strip.tsx` 收 props | 首页视觉零变化，about / contact 复用同组件 | — | ✅ |
| 4 | AboutHero | `about/hero.tsx` | 标题/副标题/按钮/Powered by Jane/右侧手写栏与稿一致 | 素材 about.jpg ✅ | ✅ |
| 5 | 技师横向滚动卡 | `about/practitioners-carousel.tsx` | 真实照片+真实职称，桌面铺满、窄屏滚动，箭头可用 | 1 | ✅ |
| 6 | Story/Philosophy/Mission | `about/story-cards.tsx` | 三卡图标+文案+橄榄枝装饰与稿一致 | — | ✅ |
| 7 | About 页组装 | `app/about/page.tsx`（61 行） | 200 可访问，分区顺序与稿一致 | 3,4,5,6 | ✅ |
| 8 | ContactHero | `contact/hero.tsx` | GET IN TOUCH kicker + 三行副标题 + 右侧手写栏 | 素材 contact.jpg ✅ | ✅ |
| 9 | 联系信息条 | 复用 `FeatureStrip` | 四栏数据全部取自 SiteSettings，非硬编码 | 3 | ✅ |
| 10 | 留言表单（mailto） | `contact/message-form.tsx` | 必填校验，提交后打开邮件客户端并带入内容 | — | ✅ |
| 11 | 直接预约卡 + Quick Help | `contact/book-directly-card.tsx`、`contact/quick-help.tsx` | 按钮直连 Jane，带 Powered by Jane | — | ✅ |
| 12 | Contact 页组装 | `app/contact/page.tsx`（72 行） | 200 可访问 | 8,9,10,11 | ✅ |
| 13 | 清理 | 删 `placeholder-page.tsx` | 无残留引用，build 通过 | 7,12 | ✅ |
| 14 | 全量验证 | 截图比对 | build/lint 通过、5 页 200、桌面+390px 截图与稿比对 | 全部 | ✅ |
| 15 | 真实 Google 地图 | `lib/maps.ts` + contact/booking 两处 | 地址取自 SiteSettings，英文界面，桌面+移动端均正常渲染 | — | ✅ |

## 执行中的偏离与决定

- **技师卡数量**：设计稿画了 9 张并带横向滚动条示意。实际只有 7 位，故桌面端让卡片等分铺满容器（不留右侧空白），窄屏保持固定宽度横向滚动 + 箭头。组件形态与稿一致。
- **地图**（任务 15，用户中途追加）：改用 `maps.google.com/maps?q=<址>&output=embed`，**不需要 Google Maps API key**。已实测该端点无 `x-frame-options` 可嵌入；加 `hl=en` 锁定英文，否则地图界面会跟随访客浏览器语言（本地实测会变中文）。booking 页原来的 "Map coming soon" 一并替换。
- **表单提示行**：设计稿没有，但 mailto 方案下必须告知用户"会打开邮件客户端"，故在按钮下加了一行 12.5px 弱化说明。
- **TestimonialBand / AboutHero 移动端**：星星与标题在窄屏挤作一团、hero 按钮文字被压换行，各加了一处响应式修正。

## 已知缺口（需客户提供）

- **hero 原图**：`public/images/hero/about.jpg`(672×278)、`contact.jpg`(692×280) 目前是**从设计稿 PNG 裁切**得到的，1x 屏清晰，2x 屏会略糊。上线前应向客户索取高清原图替换，文件名保持不变即可。
- 地图：两稿均为 "Map coming soon" 占位，与现状一致，本次不接入地图服务。
