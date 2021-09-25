(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{520:function(s,t,a){"use strict";a.r(t);var n=a(6),v=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"作用域类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域类型"}},[s._v("#")]),s._v(" 作用域类型")]),s._v(" "),a("ul",[a("li",[s._v("全局作用域")]),s._v(" "),a("li",[s._v("函数作用域")]),s._v(" "),a("li",[s._v("块级作用域")])]),s._v(" "),a("h3",{attrs:{id:"定义到全局作用域场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义到全局作用域场景"}},[s._v("#")]),s._v(" 定义到全局作用域场景")]),s._v(" "),a("ul",[a("li",[s._v("全局对象下的方法与属性")]),s._v(" "),a("li",[s._v("在最外层声明的变量及方法")]),s._v(" "),a("li",[s._v("在非严格模式下 未进行声明但是直接进行使用的变量与方法")])]),s._v(" "),a("h3",{attrs:{id:"声明的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明的几种方式"}},[s._v("#")]),s._v(" 声明的几种方式")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("var")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在【非函数作用域】下声明的变量都会挂载到 windows 对象下")]),s._v(" "),a("ul",[a("li",[s._v("严格模式【不会阻止】变量挂载到全局变量中")])])]),s._v(" "),a("li",[a("p",[s._v("变量提升")]),s._v(" "),a("ul",[a("li",[s._v("默认声明为 undefined")])])]),s._v(" "),a("li",[a("p",[s._v("只能被函数的花括号约束")]),s._v(" "),a("ul",[a("li",[s._v("if for while 均不能")])])]),s._v(" "),a("li",[a("p",[s._v("已经声明的变量 能【再次声明】")])])])]),s._v(" "),a("li",[a("p",[s._v("let")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("声明的变量 在全局环境下 挂载到 【script 对象】下")])]),s._v(" "),a("li",[a("p",[s._v("变量提升")]),s._v(" "),a("ul",[a("li",[s._v("只是【未进行初始化赋值】操作")]),s._v(" "),a("li",[s._v("先使用 后声明的变量 会报错 【暂时性死区】")])])]),s._v(" "),a("li",[a("p",[s._v("声明的变量 能被【所有的花括号】 约束")])]),s._v(" "),a("li",[a("p",[s._v("已经声明的变量 无法再次声明 会报错")])])])]),s._v(" "),a("li",[a("p",[s._v("const")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("声明的值 无法再次赋值")]),s._v(" "),a("ul",[a("li",[s._v("基础类型无法修改,引用类型无法修改引用地址")])])]),s._v(" "),a("li",[a("p",[s._v("其余参考 let")])])])])]),s._v(" "),a("h3",{attrs:{id:"作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[s._v("#")]),s._v(" 作用域链")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("函数的[[scopes]]属性")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("[[scopes]]在【预解析】的阶段已经确认")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("即使函数声明了未使用 它的 scope 也有对应的值")]),s._v(" "),a("ul",[a("li",[s._v("值为 script（最外层用 let 或 const 声明的东西）+ global (全局作用域)")])])])])]),s._v(" "),a("li",[a("p",[s._v("是一个【数组】（由 变量对象组成）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("变量对象分别有")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Global 全局对象 不会做任何优化")])]),s._v(" "),a("li",[a("p",[s._v("script 对象 由 let 和 const 声明的变量对象")])]),s._v(" "),a("li",[a("p",[s._v("closure（闭包函数名） 闭包对象")]),s._v(" "),a("ul",[a("li",[s._v("会进行优化 仅保存当前作用域能够访问的变量属性")])])])])]),s._v(" "),a("li",[a("p",[s._v("如果未用到某一个层级中的【任何】变量 函数 参数 则该层级不会出现在 scopes 中")]),s._v(" "),a("ul",[a("li",[s._v("严格来说不是【逐一一层一层的查找】。是按预解析后的[[scopes]]的数组一层一层的查找,从左到右。")])])])])]),s._v(" "),a("li",[a("p",[s._v("实例")]),s._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("inner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("对应[[scopes属性]]")]),s._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"/img/js/image-scoped.png",alt:"image-20210923101533956"}})])])])])])])]),s._v(" "),a("li",[a("p",[s._v("完整作用域链")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("组成")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Global 全局对象")]),s._v(" "),a("ul",[a("li",[s._v("不会做任何优化")])])]),s._v(" "),a("li",[a("p",[s._v("script 对象 由 let 和 const 声明的变量对象")])]),s._v(" "),a("li",[a("p",[s._v("closure（闭包函数名） 闭包对象")]),s._v(" "),a("ul",[a("li",[s._v("进行优化 仅保存当前作用域能够访问的变量属性")])])]),s._v(" "),a("li",[a("p",[s._v("local 对象 （活动对象）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("组成")]),s._v(" "),a("ul",[a("li",[s._v("函数对象")]),s._v(" "),a("li",[s._v("var 声明的变量")]),s._v(" "),a("li",[s._v("let/const 声明的变量")]),s._v(" "),a("li",[s._v("function 声明的变量")]),s._v(" "),a("li",[s._v("class 声明的变量")]),s._v(" "),a("li",[s._v("this 指向")])])]),s._v(" "),a("li",[a("p",[s._v("无法做优化")]),s._v(" "),a("ul",[a("li",[s._v("因为无法在函数预解析时确认,需要在函数执行过程中才能确认")])])])])])])])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);