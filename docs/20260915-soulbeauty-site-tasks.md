# 任务台账 — Soul Beauty 官网还原

进度唯一真相。每个周期:读台账 → 做 → 验证 → 回写状态。

| # | 单元 | 验收标准 | 产出 | 依赖 | 状态 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| 1 | 素材归位 | 3 张设计稿在 `docs/20260915-design-refs/`,7 张头像在 `public/images/practitioners/`,根目录无散图 | 目录结构 | — | ✅ |
| 2 | 脚手架 | `npm run dev` 能起,访问 `/` 出默认页 | Next.js + TS + Tailwind + App Router | — | ✅ |
| 3 | shadcn/ui 初始化 | `components.json` 存在,能 add 组件 | shadcn 配置 | 2 | ✅ |
| 4 | 设计 token + 字体 | Tailwind 里有 primary/lavender/gold 等色;Playfair+Inter+Dancing Script 加载 | `globals.css` / `layout.tsx` | 2 | ✅ |
| 5 | Prisma + 本地 PG | `prisma migrate dev` 成功,`prisma studio` 能看到表 | schema + migration | 2 | ✅ |
| 6 | 种子数据 | 4 分类 / 服务 / 7 位成员 / 评价 / 站点设置 全部入库 | `prisma/seed.ts` | 5 | ✅ |
| 7 | 图片裁切 | 从设计稿裁出服务配图与 Hero 图,存 `public/images/` | 裁图脚本 + 图片 | 1 | ✅ |
| 8 | 共享组件 | Header/Footer 三页复用,当前页高亮正确 | `components/site-header.tsx` 等 | 3,4 | ✅ |
| 9 | Home 页 | 与设计稿逐屏比对一致,数据来自 DB | `app/page.tsx` | 6,7,8 | ✅ |
| 10 | Services 页 | 同上 | `app/services/page.tsx` | 6,7,8 | ✅ |
| 11 | Booking 页 | 同上;Tab/日历/时间段可交互(纯前端) | `app/booking/page.tsx` | 6,7,8 | ✅ |
| 12 | About/Contact 占位 | 路由可访问、沿用 Header/Footer、无 404 | 两个占位页 | 8 | ✅ |
| 13 | 验证 | build 通过 / 控制台无红错 / 三页截图比对 / 响应式 1440·1024·768·390 不破版 | 截图证据 | 9-12 | ✅ |
| 14 | DEV-REPORT | 非技术语言汇报 | `DEV-REPORT.md` | 13 | ✅ |

## 关键数字 / 决策记录

- 设计稿尺寸:1448 × 1086,按 1440 桌面宽度还原
- 主色 `#33095C`(采样区间 #22004C~#380C5B)· 薰衣草底 `#ECE8FD` · 图标圆底 `#EEE4FD` · 评价条 `#EEE3FA` · 金棕 `#846134`
- 本地 PostgreSQL 14.20(Homebrew),开发时需先启动
- 外层浅紫圆角边框按"设计稿展示外框"处理,不实现
- 摄影素材无原图,先从设计稿裁切占位(报告中标注)

## 未解决问题

- 7 位成员的职称/简介文案缺失(先留空)
- About / Contact 无设计稿(先占位)
- 品牌字体未知(用 Google Fonts 近似)

## 完成记录(2026-09-16)

- 三页实现高度:首页 1131px / 服务页 ~1140px / 预约页 ~1230px(设计稿均 1086px)
- 预约页偏高是因为成员卡从 4 个扩到 7 个(需求变更),属预期
- 响应式实测:390 / 600 / 768 / 1024 / 1280 / 1366 / 1440 / 1600 共 8 档 × 5 页,全部无横向溢出
- `npm run build` 通过,ESLint 0 warning,浏览器控制台 0 error
- 三个数据页设为 `force-dynamic`,Prisma Studio 改完刷新即生效
