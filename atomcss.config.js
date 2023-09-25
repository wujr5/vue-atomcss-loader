module.exports = {
  mode: 'px', // px：单位是 px，rem：单位是 rem，默认是 px
  config: {
    // 数值原子类配置
    '.bd': 'border: $px solid #e1e5ee',
    '.bdi': 'border: $px solid #e1e5ee !important',
    '.bri': 'border-radius: $px !important',
    '.min-h': 'min-height: $px',
    '.min-hp': 'min-height: $%',
    '.min-hpi': 'min-height: $% !important',
    '.max-h': 'max-height: $px',
    '.max-hp': 'max-height: $%',
    '.max-hpi': 'max-height: $% !important',
    '.min-wp': 'min-weight: $%',
    '.min-wpi': 'min-weight: $% !important',
    '.max-wp': 'max-weight: $%',
    '.max-wpi': 'max-weight: $% !important',
    '.fsi': 'font-size: $px !important',
    '.mwi': 'min-width:$px !important',

    // 通用原子类配置（不能出现 $、#）
    '.bgred': 'background: red',
    '.td-none': 'text-decoration: none',
    '.dspl-none': 'display: none',

    // 色值原子类配置
    '.bgc': 'background-color: #',
    '.ci': 'color: # !important',

    // flex 布局：搭配通用原子类 dspl-flex 使用
    // ref：https://blog.csdn.net/m0_70612148/article/details/126308177
    '.fld-row': 'flex-direction: row;', // 水平方向排列（默认值）
    '.fld-row-r': 'flex-direction: row-reverse;', // 水平反方向排列
    '.fld-col': 'flex-direction: column;', // 垂直方向排列
    '.fld-col-r': 'flex-direction: column-reverse;', // 垂直反方向排列
    '.flw-nowrap': 'flex-wrap: nowrap;', // 不换行，会压缩盒子空间（默认）
    '.flw-wrap': 'flex-wrap: wrap;', // 换行
    '.flw-wrap-r': 'flex-wrap: wrap-reverse;', // 反向换行
    // flex-direction 和 flex-wrap 的组合
    '.fl-flow-rn': 'row nowrap', // 水平、不换行，默认
    '.fl-flow-rw': 'row wrap', // 水平、换行
    // 主轴对齐：justify-content
    '.justify-fs': 'justify-content: flex-start;', // 左对齐（默认）
    '.justify-fe': 'justify-content: flex-end;', // 右对齐
    '.justify-c': 'justify-content: center;', // 居中对齐
    '.justify-sb': 'justify-content: space-between;', // 子盒子之间等间隔对齐
    '.justify-sa': 'justify-content: space-around;', // 子盒子两侧等间隔对齐
    // 侧轴对齐：align-items
    '.align-i-fs': 'align-items: flex-start;', // 起点对齐
    '.align-i-fe': 'align-items: flex-end;', // 终点对齐
    '.align-i-c': 'align-items: center;', // 居中对齐
    '.align-i-st': 'align-items: stretch;', // 拉伸对齐
    '.align-i-bl': 'align-items: baseline;', // 以项目的第一行文字进行对齐
    // 侧轴之间对齐：align-content（多跟侧轴才起作用）
    '.align-c-fs': 'align-content: flex-start;', // 起点对齐
    '.align-c-fe': 'align-content: flex-end;', // 终点对齐
    '.align-c-c': 'align-content: center;', // 中间对齐
    '.align-c-st': 'align-content: stretch;', // 拉伸对齐
    '.align-c-sb': 'align-content: space-around;', // 拉伸对齐
    // 子盒子属性
    '.order': 'order: $', // 排序
    '.fl-g': 'flex-grow: $', // 剩余空间占比，默认 0
  },
};
