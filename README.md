# vue-atomcss-loader

> https://github.com/wujr5/vue-atomcss-loader

基于 vue 的**按需**生成**原子类**样式的 loader。

支持预编译语言：`pug`，其他预编译语言暂不支持。

## 使用

### 安装

```
npm i -D vue-atomcss-loader
```

### 配置

**webpack 或 vue.config.js 中添加配置**

```js
// ... 其他配置
module: {
  rules: [
    {
      test: /\.vue$/,
      use: [{
        loader: 'vue-atomcss-loader'
      }]
    }
  ]
}
// ... 其他配置
```

**项目根目录下的：atomcss.config.js**

```js
// atomcss.config.js
module.exports = {
  mode: 'px',
  config: {
    // 用于定制原子类
  }
}
```

关于 `mode` 的说明：
* 可选项：`px` 和 `rem`
* `px`：单位是 px，一般用于 PC Web；`rem`：单位是 rem，一般用于 Mobile Web（H5）
* 默认为 `px`

**引用通用原子类**

```js
import 'vue-atomcss-loader/atomcss-common.css'
```

## 定制原子类

在根目录增加配置文件：`atomcss.config.js`，根据规则定制自己的原子类：

```js
// atomcss.config.js
module.exports = {
  mode: 'px',
  config: {
    // 数值原子类配置示例
    '.fsize': 'font-size: $rpx',
    '.bd': 'border: $rpx solid #e1e5ee',

    // 通用原子类配置示例
    '.bgred': 'background: red',

    // 色值原子类配置示例
    '.backcolor': 'background-color: #'

    // ... 你的配置
  }
}
```

**数值原子类定制**

* 包含 `$` 符号，此符号代表属性值中的数字，`vue-atomcss-loader` 会将此替换成类名内的数值
* 使用形式为：`.fsize-100`，数字与主体用 `-` 隔开
* 如：`.fsize: 'font-size: $px'`，`.fsize-100`，会生成 css：`.fsize-100{font-size: 100px}`
* 根据 mode 来修改单位

**色值原子类定制**

* 包含 `#` 符号，此符号代表属性值中的色值，只支持十六进制表示的 rgb 色值，`vue-atomcss-loader` 会将此替换成类名内的色值
* 使用形式为：`.backcolor-aa33dd`，色值与主体用 `-` 隔开
* 如：`.backcolor: 'background-color: #'`，`.backcolor-aa33dd`，会生成 css：`.backcolor-aa33dd{background-color: #aa33dd}`

**通用原子类定制**

* 不包含 `$` 和 `#` 符号，使用时类名直接使用，不可包含数字
* 如：`.bg-red: 'background: red'`，使用时直接使用：`.bg-red`

## 数值原子类

> 属性值具有数字的原子类

### margin、padding、width、height、border-radius

**`margin`对应的缩写：**

* margin: m
* margin-left: ml
* margin-right: mr
* margin-top: mt
* margin-bottom: mb
* margin-left & margin-right: mx
* margin-top & margin-bottom: my

例子：

```html
<!-- html -->
<div class="m-10 ml-10 mr-10 mt-10 mb-10 mx-10 my-10"></div>
```

```pug
//- pug
div.m-10.ml-10.mr-10.mt-10.mb-10.mx-10.my-10
```

最终会生成如下css：

```css
.m-10{margin: 10px}
.ml-10{margin-left: 10px}
.mr-10{margin-right: 10px}
.mt-10{margin-top:10px}
.mb-10{margin-bottom: 10px}
.mx-10{margin-left: 10px; margin-right: 10px}
.my-10{margin-top: 10px; margin-bottom: 10px}
```

**`padding`对应的缩写：**

* padding: p
* padding-left: pl
* padding-right: pr
* padding-top: pt
* padding-bottom: pb
* padding-left & padding-right: px
* padding-top & padding-bottom: py

例子：

```html
<!-- html -->
<div class="p-10 pl-10 pr-10 pt-10 pb-10 px-10 py-10"></div>
```

```pug
//- pug
div.p-10.pl-10.pr-10.pt-10.pb-10.px-10.py-10
```

最终会生成如下css：

```css
.p-10{padding: 10px}
.pl-10{padding-left: 10px}
.pr-10{padding-right: 10px}
.pt-10{padding-top:10px}
.pb-10{padding-bottom: 10px}
.px-10{padding-left: 10px; padding-right: 10px}
.py-10{padding-top: 10px; padding-bottom: 10px}
```

**`width`、`height`、`border-radius`对应的缩写：**

* width: w
* width(%)：wp
* height: h
* height(%)：hp
* border-radius: br

例子：

```html
<!-- html -->
<div class="w-100.wp-50.h-100.hp-50.br-50"></div>
```

```pug
//- pug
div.w-100.wp-50.h-100.hp-50.br-50
```

最终会生成如下css：

```css
.w-100{width: 100px}
.wp-50{width: 50%}
.h-100{height: 100px}
.hp-50{height: 50%}
.br-50{border-radius: 50px}
```

### left、right、top、bottom

对应的缩写：

* left: l
* right: r
* top: t
* bottom: b

例子：

```html
<!-- html -->
<div class="l-10.r-10.t-10.b-10"></div>
```

```pug
//- pug
div.l-10.r-10.t-10.b-10
```

最终会生成如下css：

```css
.l-10{left: 10px}
.r-10{right: 10px}
.t-10{top: 10px}
.b-10{bottom: 10px}
```

### line-height、font

对应的缩写：

* line-height: lh
* font-size: fs
* font-weight: fw

> 注意：fw 一般用法是：fw-100、fw-200、fw-300、fw-400、fw-500、fw-600、fw-700、fw-800、fw-900，其他数值不生效

例子：

```html
<!-- html -->
<div class="lh-100.fs-40.fw-600"></div>
```

```pug
//- pug
div.lh-100.fs-40.fw-600
```

最终会生成如下css：

```css
.lh-100{line-height: 100px}
.fs-40{font-size: 40px}
.fw-600{font-weight: 600}
```

## 色值原子类

### color、background-color

例子：

```html
<!-- html -->
<html class="c-123a6d bgc-00ff00"></html>
```

```pug
<!-- pug -->
.c-123a6d.bgc-00ff00
```

```css
.c-123a6d{color: #123a6d}
.bgc-00ff00{background-color: #00ff00}
```

## 通用原子类

> 属性值不具有数字的原子类，使用时需要引入：`vue-atomcss-loader/atomcss-commom.scss`

### 水平垂直居中

```css
/* 通用水平垂直居中 */
.vh-parent {
  position: relative;
}
.v {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.h {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.vh {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* 块元素水平居中 */
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
```

### 单行和多行省略

```css
/* 行省略 */
.te-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.te-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 支持到： .te-3 ~ .te-10 */
```

### 换行

```css
.word-wrap {
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
}
```

### 禁止事件

```css
.event-disabled {
  pointer-events: none;
}
```

### 背景色

```css
/* 通用背景色 */
.bg-white {
  background-color: white;
}
.bg-yellow {
  background-color: yellow;
}
.bg-blue {
  background-color: blue;
}
.bg-green {
  background-color: green;
}
.bg-red {
  background-color: red;
}
.bg-black {
  background-color: black;
}
/* 图片占位色 */
.bg-image {
  background-color: #E1E3E8;
}
/* 文字占位色 */
.bg-text {
  background-color: #F5F7FA;
}
/* 背景loading图 */
.bg-loading {
  background-image: url('https://tva3.sinaimg.cn/large/ed796d65ly1gtzzp2we99g202p02pmy1.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
}
```

### 字体色

```css
/* 通用字体色 */
.c-white {
  color: white;
}
.c-yellow {
  color: yellow;
}
.c-blue {
  color: blue;
}
.c-green {
  color: green;
}
.c-red {
  color: red;
}
.c-black {
  color: black;
}
.c-gray {
  color: gray;
}
```

### 字体位置

```css
.t-c {
  text-align: center;
}
.t-l {
  text-align: left;
}
.t-r {
  text-align: right;
}
```

### display

```css
.dspl-inbl, .inbl {
  display: inline-block;
}
.dspl-bl {
  display: block;
}
```

### vertical-align

```css
.vtal-md {
  vertical-align: middle;
}
.vtal-bt {
  vertical-align: bottom;
}
.vtal-top {
  vertical-align: top;
}
```

### float

```css
.fl-r {
  float: right;
}
.fl-l {
  float: left;
}
```

### 鼠标

```css
.cs-pt {
  cursor: pointer;
}
```

### box-sizing

```css
.bs-ct {
  box-sizing: content-box;
}
.bs-bd {
  box-sizing: border-box;
}
```

### position

```css
.pst-rlt {
  position: relative;
}
.pst-absl {
  position: absolute;
}
.pst-fx {
  position: fixed;
}
```

### overflow

```css
.ovfl-hd {
  overflow: hidden;
}
.ovfl-scroll {
  overflow: scroll;
}
.ovfl-vsb {
  overflow: visible;
}
.ovfl-x-hd {
  overflow-x: hidden;
}
.ovfl-x-scroll {
  overflow-x: scroll;
}
.ovfl-x-auto {
  overflow-x: auto;
}
.ovfl-y-hd {
  overflow-y: hidden;
}
.ovfl-y-scroll {
  overflow-y: scroll;
}
.ovfl-y-auto {
  overflow-y: auto;
}
/* 水平滚动 */
.h-scroll {
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
```

### border-style

```css
.bd-solid {
  border-style: solid;
}
```

### 清除浮动

```css
.cl-b {
  clear: both;
}
.cl-l {
  clear: left;
}
.cl-r {
  clear: right;
}
```

### 体验优化

> 淡入淡出

```css
.fadein-init {
  opacity: 0;

  -webkit-transition: opacity 0.2s ease-in;
     -moz-transition: opacity 0.2s ease-in;
      -ms-transition: opacity 0.2s ease-in;
       -o-transition: opacity 0.2s ease-in;
          transition: opacity 0.2s ease-in;
}

.fadein {
  opacity: 1;
}
```
