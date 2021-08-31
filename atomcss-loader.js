/**
 * 原子类定义如下：
 *
 * margin：m、ml、mr、mt、mb、mx、my
 * padding：p、pl、pr、pt、pb、px、py
 * width：w、w-p
 * height：h、h-p
 * 四方向：l、r、t、b
 * 行高：lh
 * 字体：fs、fw
 * border-radius：br
 *
 */
const fs = require('fs');

let oClassNameMap = {
  // margin
  '.m': 'margin:$px;',
  '.ml': 'margin-left:$px;',
  '.mr': 'margin-right:$px;',
  '.mt': 'margin-top:$px;',
  '.mb': 'margin-bottom:$px;',
  '.mx': 'margin-left:$px;margin-right:$px;',
  '.my': 'margin-top:$px;margin-bottom:$px;',
  // margin !important
  '.mi': 'margin:$px !important;',
  '.mli': 'margin-left:$px !important;',
  '.mri': 'margin-right:$px !important;',
  '.mti': 'margin-top:$px !important;',
  '.mbi': 'margin-bottom:$px !important;',
  '.mxi': 'margin-left:$px !important;margin-right:$px !important;',
  '.myi': 'margin-top:$px !important;margin-bottom:$px !important;',
  // padding
  '.p': 'padding:$px;',
  '.pl': 'padding-left:$px;',
  '.pr': 'padding-right:$px;',
  '.pt': 'padding-top:$px;',
  '.pb': 'padding-bottom:$px;',
  '.px': 'padding-left:$px;padding-right:$px;',
  '.py': 'padding-top:$px;padding-bottom:$px;',
  // padding !important
  '.pi': 'padding:$px !important;',
  '.pli': 'padding-left:$px !important;',
  '.pri': 'padding-right:$px !important;',
  '.pti': 'padding-top:$px !important;',
  '.pbi': 'padding-bottom:$px !important;',
  '.pxi': 'padding-left:$px !important;padding-right:$px !important;',
  '.pyi': 'padding-top:$px !important;padding-bottom:$px !important;',
  // width
  '.w': 'width:$px;',
  '.wi': 'width:$px !important;',
  '.mw': 'min-width:$px;',
  '.wp': 'width:$%;',
  '.wpi': 'width:$% !important;',
  // height
  '.h': 'height:$px;',
  '.hi': 'height:$px !important;',
  '.mh': 'min-height:$px;',
  '.hp': 'height:$%;',
  '.hpi': 'height:$% !important;',
  // 四方向
  '.l': 'left:$px;',
  '.r': 'right:$px;',
  '.t': 'top:$px;',
  '.b': 'bottom:$px;',
  // 行高
  '.lh': 'line-height:$px;',
  // 字体
  '.fs': 'font-size:$px;',
  '.fw': 'font-weight:$;',
  // background
  '.bgs': 'background-size:$px;',
  // border
  '.br': 'border-radius:$px;'
};

let oAtomConfig = {}

// 读取配置文件，如果不存在，就是用默认的配置文件
try {
  oAtomConfig = require(__dirname + '/../../atomcss.config.js');
} catch (e) {
  oAtomConfig = require(__dirname + '/atomcss.config.js');
}

// 如果模式为 rem，则将 px 替换为 rem
if (oAtomConfig.mode === 'rem') {
  for (let key in oClassNameMap) {
    oClassNameMap[key] = oClassNameMap[key].replace(/\$px/ig, '$rem');
  }
}

oClassNameMap = Object.assign(oClassNameMap, oAtomConfig.config);

let sAtomRegExp = '';
for (let key in oClassNameMap) {
  let value = oClassNameMap[key];

  // 数值原子类的正则
  if (value.indexOf('$') != -1) {
    sAtomRegExp += `\\${key}-[0-9]+|`;
  // 通用原子类的正则
  } else {
    sAtomRegExp += `\\${key}|`
  }
}
// 去掉最后一个 | 符号
sAtomRegExp = sAtomRegExp.substr(0, sAtomRegExp.length - 1);

module.exports = function(sSource) {
  // 从 vue 文件中提取 pug 代码
  let sPugString;
  try {
    sPugString = sSource.match(/<template lang=("|')pug("|')>([\s\S]*)<\/template>/g)[0];
  } catch (e) {
    return sSource;
  }

  // 没有找到 template 模板，则无需处理
  if (!sPugString) return sSource;

  let atomReg = new RegExp(sAtomRegExp, 'ig');

  // 获取 pc 端原子类类名数组，并剔除重复的类名
  function uniq(value, index, self) {
    return self.indexOf(value) === index;
  }
  let aClassName = (sPugString.match(atomReg) || []).filter(uniq);

  // 输出 debug 数据
  this.query.debug && console.log('\n文件：', this.resourcePath, this.query);
  this.query.debug && console.log('desktop 类名：', aClassName);

  // 原子类样式接收数组
  let aStyleStr = [];

  // 开始生成原子类
  aClassName.forEach(item => {
    let sKey;

    if (/\d+/.test(item)) {
      sKey = item.match(/\.\w+/)[0];
    } else {
      sKey = item;
    }

    let nValue;

    // 百分比数值，字重，无需使用单位
    if (['.wp', '.hp', '.fw'].includes(sKey)) {
      nValue = item.match(/\d+/)[0];
    } else {
      /\d+/.test(item) && (nValue = +item.match(/\d+/)[0]);
    }

    aStyleStr.push(`${item}{${oClassNameMap[sKey].replace(/\$/g, nValue)}}`);
  });

  // 输出 debug 数据
  this.query.debug && console.log('desktop 样式：', aStyleStr);

  return `${sSource}\n<style>\n${aStyleStr.join('')}</style>\n`;
};
