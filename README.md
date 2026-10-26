# 物联网与视觉创作作品集

单页 Astro 静态网站，展示物联网测试实践、AI 视觉作品与短片。页面已移除姓名、邮箱、城市、学校名称、任职单位和精确履历时间；联系区暂不提供个人联系方式。

## 本地运行

使用 Node.js 22.23.4 或更高版本：

```text
npm ci
npm run dev
npm run build
npm run preview
```

构建输出位于 `dist/`。不需要后端、数据库或环境变量。源码位于仓库根目录，`src/config.ts` 集中管理公开文案与作品信息。作品图片和视频分别位于 `public/images/` 与 `public/videos/`。

首页按钮使用 React Bits SpecularButton 的 JS-CSS 源码，仅在支持 WebGL2 且未启用减少动画时增强显示；普通链接始终可用。组件和许可声明位于 `src/components/react/`。作品区使用原生横向滚动、滚动吸附、切换按钮与图片预览；视频由用户点击后加载。

## 发布前检查

- 如需公开联系方式，只在确认可公开后添加。当前代码不含邮箱和简历 PDF。
- `src/config.ts` 的 `isDemo` 为 `true`，页面包含 `noindex`。确认内容、素材使用权和正式网址后，再设置 `siteUrl` 并关闭预览模式。
- 影视混剪、品牌练习和生成平台素材可能涉及第三方权利；公开仓库或部署前应逐项确认可展示范围。

## 来源与许可

网站基于 [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) 改造，保留根目录的 MIT 许可声明。React Bits 组件的许可声明保存在 `src/components/react/LICENSE.react-bits.md`。页面学习 Apple 产品页的卡片、留白和滚动节奏，没有使用 Apple 的商标或专有素材。
