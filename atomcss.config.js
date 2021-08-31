module.exports = {
  mode: 'px', // px：单位是 px，rem：单位是 rem，默认是 px
  config: {
    // 数值原子类定制
    '.fsize': 'font-size: $px;',
    '.bd': 'border: $px solid #e1e5ee;',

    // 通用原子类定制
    '.bg-red': 'background: red;',
  }
}
