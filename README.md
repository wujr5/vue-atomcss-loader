# vue-pug-atomcss-loader

此 loader 是基于 vue、pug 的类名生成原子类样式的工具。

## 使用

安装：

```
npm i -D vue-pug-atomcss-loader
```

配置：

> webpack 或 vue.config.js 中添加配置

```js
// ... 其他配置
module: {
  rules: [
    {
      test: /\.vue$/,
      use: [{
        loader: 'vue-pug-atomcss-loader'
      }]
    }
  ]
}
// ... 其他配置
```

## 默认的样式

### margin、padding、width、height、border

`margin`对应的缩写：

* margin: m
* margin-left: ml
* margin-right: mr
* margin-top: mt
* margin-bottom: mb
* margin-left & margin-right: mx
* margin-top & margin-bottom: my

例子：

```pug
div.m-10.ml-10.mr-10.mt-10.mb-10.mx-10.my-10
```

最终会生成如下css：

```css
.m-10{margin: 10px},.ml-10{margin-left: 10px},.mr-10{margin-right: 10px},.mt-10{margin-top:10px},.mb-10{margin-bottom: 10px},.mx-10{margin-left: 10px; margin-right: 10px},.my-10{margin-top: 10px; margin-bottom: 10px}
```

`padding`对应的缩写：

* padding: p
* padding-left: pl
* padding-right: pr
* padding-top: pt
* padding-bottom: pb
* padding-left & padding-right: px
* padding-top & padding-bottom: py

`width`对应的缩写：

* width: w
* width(%)：wp

`height`对应的缩写：

* height: h
* height(%)：hp

`border`对应的缩写：

* border-radius: br

### left、right、top、bottom

分组：

- `left`
- `right`
- `top`
- `bottom`

```css
@for $i from 0 through 750 {
  .r-#{$i} {
    right: $i * 1px;
  }
  .l-#{$i} {
    left: $i * 1px;
  }
  .t-#{$i} {
    top: $i * 1px;
  }
  .b-#{$i} {
    bottom: $i * 1px;
  }
}
```

### line-height、font-size

- `line-height`
- `font-size`
- `font-weight`

## 通用原子类

不具有单位，各端通用：`atom-commom.scss`。

gzip + min 1KB


### 水平垂直居中


```css
// 通用水平垂直居中
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
```


### 单行和多行省略


```css
// 单行省略
.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
// 多行省略 2 ~ 5
@for $i from 2 through 10 {
  .text-ellipsis-#{$i} {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $i;
    -webkit-box-orient: vertical;
  }
}
```


### 水平滑动


```css
// 水平滑动
.h-scroll {
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
```


### 折行


```css
// 折行
.word-wrap {
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
}
```


### 禁止事件


```css
// 禁止事件
.event-disabled {
  pointer-events: none;
}
```


### 背景色


```css
// 通用背景色
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
/* 占位图 */
.bg-image {
  background-color: #E1E3E8;
}
.bg-text {
  background-color: #F5F7FA;
}
```


### 字体色


```css
// 通用字体色
.color-white {
  color: white;
}
.color-black {
  color: black;
}
```


### 字体位置


```css
// text-align
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
```


### display


```css
// display
.dspl-inbl, .inbl {
  display: inline-block;
}
.dspl-bl {
  display: block;
}
```


### vertical-align


```css
// vertical-align
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
// float
.fl-right {
  float: right;
}
.fl-left {
  float: left;
}
```


### box-sizing


```css
// box-sizing
.bs-ct {
  box-sizing: content-box;
}
.bs-bd {
  box-sizing: border-box;
}
```


### position


```css
// position
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
// overflow
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
.ovfl-y-hd {
  overflow-y: hidden;
}
.ovfl-y-scroll {
  overflow-y: scroll;
}
```


### border-style


```css
// border-style
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


**淡入淡出效果**


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
