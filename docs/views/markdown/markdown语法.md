---
title: markdown语法
date: 2020-04-18
sidebar: false
tags: 
 - markdown
categories:
 - markdown
sticky:
 - true
---

<!-- more -->
<p style="font-size:30px;color:green;">1. 基本的markdown语法</p>

- 二级标题
## 这是二级标题
`语法： ##符号，然后后面紧跟一个空格符号加上内容`

<br/>

- 三级标题
### 这是三级标题
`语法：###符号，然后后面紧跟一个空格符号加上内容`

<br/>

- 区块
> 这是一个区块，使用 > 符号 ，然后后面紧跟一个空格符号加上内容

<br/>

- 字体

*字倾斜了*  <span>&nbsp;&nbsp;&nbsp;语法是：`*需要倾斜的字*`</span>

**字加粗了** <span>&nbsp;&nbsp;&nbsp;语法是：`**需要加粗的字**`</span>

~~字被划了~~   <span>&nbsp;&nbsp;&nbsp;语法是：`~~需要被划掉的字~~`</span>

<br/>

- 有序列表和无序列表

有序: 
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

`语法：数字后加 . 符号，然后直接加空格加内容`

无序:
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    * Nulla volutpat aliquam velit
+ Very easy!

`语法： 1级用 +符号, 2级用 -符号, 三级用 *符号`

<br/>

- 水平线

___
`语法： _符号2个`

<br/>

- 行内代码

`这是行内代码`
<p>语法是: \`行内代码`</p>

<br/>

- 代码块
```
用 ``` 包裹一段代码，并指定一种语言（也可以不指定），不指定会没有提示色：
$(document).ready(function () {
    alert('markdown');
});
```

<br/>

```js{2}
用 ```js{2} 选择语言包裹后会显示提示色, 2表示高亮第2行:
$(document).ready(function () {
    alert('markdown');
});
```
<br/>

- 超链接

[ES6 入门教程](https://es6.ruanyifeng.com/)

`语法：[链接文字](链接地址) 这种用法适合只用一次`

<br/>

[1]: http://static.runoob.com/images/runoob-logo.png
[菜鸟教程网站图标][1]

`进阶用法: 预先定义一个或多个超链接： [1]: http://static.runoob.com/images/runoob-logo.png`

`然后在该引用的地方使用：这是一个 [菜鸟教程网站图标][1]`

`这样清晰有条理，方便管理，并且可以复用`

<br/>

- 插入图片

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)

`语法：![描述文字](图片地址)`


<br/>

- 表格

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

```
语法如下:
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```

- 支持的html元素

<p>目前支持的 HTML 元素有：&lt;kbd&gt;&lt;b&gt;&lt;i&gt;&lt;em&gt;&lt;sup&gt;&lt;sub&gt;&lt;br&gt;等</p>

<br/>
相关网站链接：

[菜鸟教程 markdown教程](https://www.runoob.com/markdown/md-tutorial.html)

[菜鸟工具 markdown在线编辑器](https://c.runoob.com/front-end/712)
______
<br/>
<p style="font-size:30px;color:green;">2. vuepress扩展的markdown语法</p>

- 自定义容器
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

```
语法如下：
::: tip
这是一个提示
:::

key可以是: tip、warning、danger、details
```

相关网站链接：

[Vuepress Markdown 拓展](https://www.vuepress.cn/guide/markdown.html#header-anchors)


