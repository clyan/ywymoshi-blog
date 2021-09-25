(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{524:function(v,_,t){"use strict";t.r(_);var i=t(6),a=Object(i.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"默认绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认绑定"}},[v._v("#")]),v._v(" 默认绑定")]),v._v(" "),t("h3",{attrs:{id:"非严格模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非严格模式"}},[v._v("#")]),v._v(" 非严格模式")]),v._v(" "),t("ul",[t("li",[v._v("this 指向全局对象")])]),v._v(" "),t("h3",{attrs:{id:"严格模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#严格模式"}},[v._v("#")]),v._v(" 严格模式")]),v._v(" "),t("ul",[t("li",[v._v("函数内的 this 指向 undefined")]),v._v(" "),t("li",[v._v("全局中的 this 不改变")]),v._v(" "),t("li",[v._v("【不会阻止】对象绑定到 window 对象上")])]),v._v(" "),t("h2",{attrs:{id:"隐式绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐式绑定"}},[v._v("#")]),v._v(" 隐式绑定")]),v._v(" "),t("h3",{attrs:{id:"this-永远指向最后调用它的那个对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this-永远指向最后调用它的那个对象"}},[v._v("#")]),v._v(" this 永远指向最后调用它的那个对象")]),v._v(" "),t("h3",{attrs:{id:"隐式丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐式丢失"}},[v._v("#")]),v._v(" 隐式丢失")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("概念")]),v._v(" "),t("ul",[t("li",[v._v("被隐式绑定的函数在【特定的情况】会丢失绑定对象")])])]),v._v(" "),t("li",[t("p",[v._v("场景")]),v._v(" "),t("ul",[t("li",[v._v("使用另一个变量来给函数去别名")]),v._v(" "),t("li",[v._v("将函数作为参数传递时 会被隐式赋值 回调函数丢失 this 绑定")])])])]),v._v(" "),t("h3",{attrs:{id:"把一个函数当成参数传递到另一个函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#把一个函数当成参数传递到另一个函数"}},[v._v("#")]),v._v(" 把一个函数当成参数传递到另一个函数")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("this 指向")]),v._v(" "),t("ul",[t("li",[v._v("非严格 window")]),v._v(" "),t("li",[v._v("严格 undefined")])])]),v._v(" "),t("li",[t("p",[v._v("实例")]),v._v(" "),t("ul",[t("li",[v._v("相当于把 obj.foo 赋值给了一个变量 再传入 故发生隐式丢失")]),v._v(" "),t("li")])])]),v._v(" "),t("h2",{attrs:{id:"显式绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显式绑定"}},[v._v("#")]),v._v(" 显式绑定")]),v._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("通过某些方法 强行改变函数内 this 的指向")])]),v._v(" "),t("li",[t("p",[v._v("特殊的点")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("call、apply、bind")]),v._v(" "),t("ul",[t("li",[v._v("如果接收到的参数是空 或者 null 或者 undefined 忽略这个参数")])])]),v._v(" "),t("li",[t("p",[v._v("setTimeout 的调用者为 window")])]),v._v(" "),t("li",[t("p",[v._v("forEach、map、filter")]),v._v(" "),t("ul",[t("li",[v._v("第二个参数 可以传入 this 进行绑定")])])]),v._v(" "),t("li",[t("p",[v._v("fun().call(obj)")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("思路")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("根据 fun()的返回值 来决定")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("如果无返回值 则报错")]),v._v(" "),t("ul",[t("li",[v._v("undefined 无法调用 call")])])])])])])])])])])])]),v._v(" "),t("h2",{attrs:{id:"new-绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-绑定"}},[v._v("#")]),v._v(" new 绑定")]),v._v(" "),t("h3",{attrs:{id:"new-调用一个函数-会构造一个新对象并把这个新对象绑定到调用函数中的-this"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-调用一个函数-会构造一个新对象并把这个新对象绑定到调用函数中的-this"}},[v._v("#")]),v._v(" new 调用一个函数，会构造一个新对象并把这个新对象绑定到调用函数中的 this")]),v._v(" "),t("ul",[t("li",[v._v("相当于构造函数中 隐式的 return this")])]),v._v(" "),t("h2",{attrs:{id:"箭头函数绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数绑定"}},[v._v("#")]),v._v(" 箭头函数绑定")]),v._v(" "),t("h3",{attrs:{id:"this-指向-【函数定义】时的【外层作用域】的-this"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this-指向-【函数定义】时的【外层作用域】的-this"}},[v._v("#")]),v._v(" this 指向 【函数定义】时的【外层作用域】的 this")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("包裹箭头函数的函数")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("指向最近一层的非箭头函数的 this")]),v._v(" "),t("ul",[t("li",[v._v("如果无 非箭头函数 则为 this 为 undefined（严格模式）")])])])])])]),v._v(" "),t("h2",{attrs:{id:"题型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题型"}},[v._v("#")]),v._v(" 题型")]),v._v(" "),t("h3",{attrs:{id:"解题技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题技巧"}},[v._v("#")]),v._v(" 解题技巧")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("找（） 以括号为断点")])]),v._v(" "),t("li",[t("p",[v._v("看是否是绑定")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("绑定")]),v._v(" "),t("ul",[t("li",[v._v("将（）里面的对象替换 调用对象")])])])])]),v._v(" "),t("li",[t("p",[v._v("看调用的函数体")]),v._v(" "),t("ul",[t("li",[v._v("是否为箭头函数")])])]),v._v(" "),t("li",[t("p",[v._v("运行")]),v._v(" "),t("ul",[t("li",[v._v("判断调用对象")])])]),v._v(" "),t("li",[t("p",[v._v("按 1-4 重复执行判断")])])]),v._v(" "),t("h3",{attrs:{id:"对象方法返回函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象方法返回函数"}},[v._v("#")]),v._v(" 对象方法返回函数")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("对象方法 fn（非箭头）返回一个匿名函数（非箭头）")]),v._v(" "),t("ul",[t("li",[v._v("obj.fn.call(antoherObj)()")]),v._v(" "),t("li",[v._v("obj.fn()()")])])]),v._v(" "),t("li",[t("p",[v._v("对象方法 fn（非箭头）返回一个匿名函数（箭头）")]),v._v(" "),t("ul",[t("li",[v._v("结果中的 this 指向等于匿名函数外层 fn 的 this 指向")]),v._v(" "),t("li",[v._v("当 fn 被外部调用时 this 指向调用他的最后一个对象")])])]),v._v(" "),t("li",[t("p",[v._v("对象方法 fn（箭头）返回一个匿名函数(非箭头)")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("单层对象")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("如果对象是通过 new 绑定的 则 this 指向该对象")])]),v._v(" "),t("li",[t("p",[v._v("如果对象是通过字面量创建的 则 this 指向全局对象")]),v._v(" "),t("ul",[t("li",[v._v("非严格 window")]),v._v(" "),t("li",[v._v("严格 undefined")])])])])]),v._v(" "),t("li",[t("p",[v._v("多层对象")]),v._v(" "),t("ul",[t("li",[v._v("this 指向最近的一层对象")])])])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);