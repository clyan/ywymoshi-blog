(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{536:function(t,a,s){"use strict";s.r(a);var n=s(6),v=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("使用nginx启动一个静态服务器， 存放一个1像素的gif图片，请求这个图片带上参数,")]),t._v(" "),s("ol",[s("li",[t._v("图片支持跨域")]),t._v(" "),s("li",[t._v("创建图片发送请求并不需要添加节点到页面")]),t._v(" "),s("li",[t._v("gif图要比其他图片要小")]),t._v(" "),s("li",[t._v("不会阻塞页面")])]),t._v(" "),s("h1",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),s("p",[t._v("定时拆分日志： 每天的 0:00:00")]),t._v(" "),s("ol",[s("li",[t._v("获取nginx的 access.log文件")]),t._v(" "),s("li",[t._v("创建拆分后的日志目录")]),t._v(" "),s("li",[t._v("按天拆分文件，文件名为昨天的日期")]),t._v(" "),s("li",[t._v("将access.log的文件拷贝至昨日的文件，")]),t._v(" "),s("li",[t._v("清空access.log")]),t._v(" "),s("li",[t._v("结束")])]),t._v(" "),s("p",[t._v("定时分析日志，结果入库： 每天的 4:00:00 "),s("strong",[t._v("(视情况而定)")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("获取昨天的日期，找到对应的日期命名的accessLog文件")])]),t._v(" "),s("li",[s("p",[t._v("使用createReadStream创建流，使用readline逐行读取文件, 避免一次性加载进内存")])]),t._v(" "),s("li",[s("p",[t._v("获取event.git后面的携带的参数")])]),t._v(" "),s("li",[s("p",[t._v("按照category， action， label， value 统计")])]),t._v(" "),s("li",[s("p",[t._v("存储")])])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category.action'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category.action.label'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category.action.label.value'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("百度统计的实现：")]),t._v(" "),s("p",[t._v("category： 要监控的目标的类型名称，通常是同一组目标的名字，比如”视频”、”音乐”、”软件”、”游戏”等等。该项必选。")]),t._v(" "),s("p",[t._v("action： 用户跟目标交互的行为，如”播放”、”暂停”、”下载”等等。该项必选。")]),t._v(" "),s("p",[t._v("opt_label： 事件的一些额外信息，通常可以是歌曲的名称、软件的名称、链接的名称等等。该项可选。")]),t._v(" "),s("p",[t._v("opt_value： 事件的一些数值信息，比如权重、时长、价格等等，在报表中可以看到其平均值等数据。该项可选。")]),t._v(" "),s("p",[s("strong",[t._v("定时删除过期日志： 每天的 4:30:00 (视情况而定)")])]),t._v(" "),s("ol",[s("li",[t._v("遍历日志文件，根据文件名与当前时间的对比，是否超过7天，超过即删除。")])]),t._v(" "),s("h1",{attrs:{id:"定时任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[t._v("#")]),t._v(" 定时任务")]),t._v(" "),s("p",[s("strong",[t._v("方式：")])]),t._v(" "),s("ul",[s("li",[t._v("linux 的crontab")]),t._v(" "),s("li",[t._v("缺点： 不支持秒级")]),t._v(" "),s("li",[t._v("node-cron\n"),s("ul",[s("li",[t._v("优点：支持秒级，使用node服务的形式实现")])])])]),t._v(" "),s("p",[s("strong",[t._v("定时格式：")]),t._v(" 0 0 0 * * *： 每天的0：00：00 "),s("strong",[t._v("(视情况而定)")]),t._v("  执行 （日志拆分）")]),t._v(" "),s("h1",{attrs:{id:"数据库设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计"}},[t._v("#")]),t._v(" 数据库设计")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("id")]),t._v(" "),s("th",[t._v("eventKey")]),t._v(" "),s("th",[t._v("eventData")]),t._v(" "),s("th",[t._v("eventDate")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("61084ec0ae4ed6516da8ef70")]),t._v(" "),s("td",[t._v("h5.pv.51.14")]),t._v(" "),s("td",[t._v("{pv: 10, uv: 5}")]),t._v(" "),s("td",[t._v("2021-08-01 20:00:00.013")])])])]),t._v(" "),s("h1",{attrs:{id:"文件操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[t._v("#")]),t._v(" 文件操作")]),t._v(" "),s("p",[t._v("文件操作库：fs-extra")]),t._v(" "),s("p",[s("strong",[t._v("删除文件:")]),t._v(" removeSync")]),t._v(" "),s("p",[s("strong",[t._v("创建文件：")]),t._v(" ensureFileSync")]),t._v(" "),s("p",[s("strong",[t._v("向文件中写入内容：")]),t._v(" outputFileSync （会覆盖所有内容）")]),t._v(" "),s("p",[s("strong",[t._v("清空文件：")]),t._v(" outputFileSync('filepath', '')")]),t._v(" "),s("p",[s("strong",[t._v("复制文件内容到另外的文件：")]),t._v(" copySync")]),t._v(" "),s("p",[s("strong",[t._v("读取目录：")]),t._v(" readdirSync")])])}),[],!1,null,null,null);a.default=v.exports}}]);