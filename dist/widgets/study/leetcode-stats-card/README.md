<a name="readme-top"></a>

<div align="center">
  <div>
    <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=160&section=header">
  </div>
  <a href="https://github.com/xiaohuohumax/readme-widget-hub">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=416&height=68&lines=%F0%9F%8E%96%EF%B8%8FReadme+Widget+Hub%F0%9F%8E%96%EF%B8%8F"/>
  </a>
  <p><b>用美观、可配置的徽章与状态卡片，让你的 README 更专业、更高效！</b></p>
  <div>
    <b>
       <a href="/README.md">首页</a>
      · <a href="README_en-US.md">English</a>
      · <a href="README_pt-BR.md">Português</a>
    </b>
  </div>
  <br/>
</div>

## LeetCode Stats Card

**在你的 GitHub 个人资料或网站上展示动态生成的 LeetCode 数据统计！**

[![ref-repo]](https://github.com/JacobLinCool/LeetCode-Stats-Card)
[![ref-online-tool]](https://leetcard.jacoblin.cool/)
[![ref-official-doc]](https://github.com/JacobLinCool/LeetCode-Stats-Card?tab=readme-ov-file#usage)

### 参数

<details >
<summary><small>点击显示/关闭参数</small></summary><p></p>

| 名称 | 类型 | 必填 | 默认值 | 参数描述 | 更多描述 |
| -------------------- | -------------------- | ------------------------ | ----------------------- | --------------------------- | ------------------------------- |
| ![ref-params] | | | | | |
| `username` | `string` | `true` |  | LeetCode 用户名 |  |
| ![ref-querys] | | | | | |
| `site` | `string` |  | `us` | LeetCode 站点 | 可选值：`us` `cn`。 |
| `theme` | `string` |  | `dark` | 主题 | 可选值：`dark` `light` `nord` `forest` `wtf` `unicorn` `transparent`。 |
| `font` | `string` |  | `baloo_2` | 字体 | 支持几乎所有的 [Google Fonts](https://fonts.google.com/) 字体。 |
| `width` | `number` |  | `500` | 宽度 |  |
| `height` | `number` |  | `200` | 高度 |  |
| `border` | `number` |  | `1` | 边框宽度 |  |
| `radius` | `number` |  | `4` | 圆角 |  |
| `animation` | `boolean` |  | `true` | 启用或禁用动画。 |  |
| `hide` | `string` |  |  | 隐藏卡片上的元素 | 可选值：`ranking` `total-solved-text` `easy-solved-count` `medium-solved-count` `hard-solved-count` 多个值用 `,` 分隔。 |
| `ext` | `string` |  |  | 扩展数据 | 可选值：`activity` `contest` `heatmap` 多个值用 `,` 分隔。 |
| `cache` | `number` |  | `60` | 缓存时间 | 单位：秒。 |
| `sheets` | `string` |  |  | 外部样式表 | 多个值用 `,` 例如：`sheets=url1,url2`，分隔 可以将自定义 CSS 上传到 gist 并使用该链接。 |

</details>

```txt
https://leetcard.jacoblin.cool/{username}{?site,theme,font,width,height,border,radius,animation,hide,ext,cache,sheets}
```

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

### 示例

```markdown
<!-- JacobLinCool -->
![Leetcode 统计](https://leetcard.jacoblin.cool/JacobLinCool?theme=wtf&ext=heatmap&font=Play)
```

<div>
  <img src="https://leetcard.jacoblin.cool/JacobLinCool?theme=wtf&#38;ext=heatmap&#38;font=Play" alt="Leetcode 统计" />
</div>

<p align="right"><a href="#readme-top"><img src="https://img.shields.io/badge/回到顶部-555555?style=for-the-badge"></a></p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=4D908E&height=100&section=footer">
</div>

[ref-params]: https://img.shields.io/badge/路径参数-526E86

[ref-querys]: https://img.shields.io/badge/查询参数-526E86

[ref-action-outputs]: https://img.shields.io/badge/动作输出-526E86

[ref-repo]: https://img.shields.io/badge/项目地址-555555?style=for-the-badge&logo=github

[ref-online-tool]: https://img.shields.io/badge/在线工具-F94144?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTIwOCAzNTJoLTY0YTk2IDk2IDAgMDEwLTE5Mmg2NE0zMDQgMTYwaDY0YTk2IDk2IDAgMDEwIDE5MmgtNjRNMTYzLjI5IDI1NmgxODcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjM2Ii8+PC9zdmc+

[ref-official-doc]: https://img.shields.io/badge/官方文档-277DA1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZD0iTTI1NiAxNjBjMTYtNjMuMTYgNzYuNDMtOTUuNDEgMjA4LTk2YTE1Ljk0IDE1Ljk0IDAgMDExNiAxNnYyODhhMTYgMTYgMCAwMS0xNiAxNmMtMTI4IDAtMTc3LjQ1IDI1LjgxLTIwOCA2NC0zMC4zNy0zOC04MC02NC0yMDgtNjQtOS44OCAwLTE2LTguMDUtMTYtMTcuOTNWODBhMTUuOTQgMTUuOTQgMCAwMTE2LTE2YzEzMS41Ny41OSAxOTIgMzIuODQgMjA4IDk2ek0yNTYgMTYwdjI4OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiLz48L3N2Zz4=
