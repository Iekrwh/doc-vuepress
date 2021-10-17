(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{451:function(a,t,s){"use strict";s.r(t);var n=s(46),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"多线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[a._v("#")]),a._v(" 多线程")]),a._v(" "),s("h2",{attrs:{id:"并行和并发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并行和并发"}},[a._v("#")]),a._v(" 并行和并发")]),a._v(" "),s("p",[a._v("并行:在同一时刻,有多个指令在多个cpu上"),s("strong",[a._v("同时")]),a._v("执行")]),a._v(" "),s("p",[a._v("并发:在同一时刻,有多个指令在单个CPU上"),s("strong",[a._v("交替")]),a._v("执行")]),a._v(" "),s("h2",{attrs:{id:"进程和线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[a._v("#")]),a._v(" 进程和线程")]),a._v(" "),s("h3",{attrs:{id:"进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[a._v("#")]),a._v(" 进程")]),a._v(" "),s("p",[a._v("进程:是正在运行的软件")]),a._v(" "),s("p",[a._v("独立性:进程是一贯能独立运行的基本单位")]),a._v(" "),s("p",[a._v("动态性:进程的实质是程序的一次执行过程")]),a._v(" "),s("p",[a._v("并发性:任何进程都可以同其他进程一起并发执行")]),a._v(" "),s("h3",{attrs:{id:"线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[a._v("#")]),a._v(" 线程")]),a._v(" "),s("p",[a._v("线程:是进程中的单个顺序控制流,是一条执行路径")]),a._v(" "),s("ul",[s("li",[a._v("单线程:一个进程只有一条执行路径")]),a._v(" "),s("li",[a._v("多线程:一个进程拥有多个执行路径")])]),a._v(" "),s("h2",{attrs:{id:"继承thread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承thread"}},[a._v("#")]),a._v(" 继承Thread")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("类继承Thread类")])]),a._v(" "),s("li",[s("p",[a._v("重写run()方法")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" xian "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("创建类对象")])]),a._v(" "),s("li",[s("p",[a._v("调用用start()方法 启动线程  交由JVM调用此线程的run()方法")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    xian x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xian")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"runnable接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runnable接口"}},[a._v("#")]),a._v(" Runnable接口")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("类实现Runnable接口")])]),a._v(" "),s("li",[s("p",[a._v("重写run方法")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" xian2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"线程启动"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("创建类对象")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("xian2 x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xian2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("创建Thread类对象,把类对象作为构造方法的参数")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" t1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("启动线程")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"callable接口与future"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callable接口与future"}},[a._v("#")]),a._v(" Callable接口与Future")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("类实现Callable接口")])]),a._v(" "),s("li",[s("p",[a._v("重写call()方法")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 接口的泛型是call方法返回的类型")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" xian3 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Callable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//返回的为线程执行完毕的结果,执行语句在方法体写")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"你好多线程"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("创建类对象")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("xian3 x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xian3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("创建Future的实现类FutureTask对象,并将类对象作为构造方法参数传递")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FutureTask")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" ft "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FutureTask")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("创建Thread类对象,并把FutureTask对象作为构造方法参数传递")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" t1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("启动线程")])]),a._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取线程执行完毕的结果,get方法一定在线程启动之后,否则get下面语句不执行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"thread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread"}},[a._v("#")]),a._v(" Thread")]),a._v(" "),s("h3",{attrs:{id:"getname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getname"}},[a._v("#")]),a._v(" getName")]),a._v(" "),s("p",[a._v("获取线程名称,线程有默认名称为 Thread-线程数")]),a._v(" "),s("h3",{attrs:{id:"setname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setname"}},[a._v("#")]),a._v(" setName")]),a._v(" "),s("p",[a._v("也可以通过构造方法设置线程名称")]),a._v(" "),s("p",[a._v("Thead类中带有带参构造方法,可以给线程设置名称,但是继承的类必须使用super关键字引用.")]),a._v(" "),s("h3",{attrs:{id:"currentthread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#currentthread"}},[a._v("#")]),a._v(" currentThread")]),a._v(" "),s("p",[a._v("返回当前正在执行的线程对象")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("如果Runnable接口或Callble接口想要使用Thread的方法可以")]),a._v(" "),s("p",[a._v("先捕抓到当前执行的线程 再使用Thread的方法")]),a._v(" "),s("h2",{attrs:{id:"线程休眠"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程休眠"}},[a._v("#")]),a._v(" 线程休眠")]),a._v(" "),s("p",[a._v("sleep()方法 让线程休眠指定毫秒")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"线程调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程调度"}},[a._v("#")]),a._v(" 线程调度")]),a._v(" "),s("ul",[s("li",[a._v("分时调度模型:所有线程"),s("strong",[a._v("轮流")]),a._v("使用cou的使用权,平均分配每个线程占用cpu的时间片")]),a._v(" "),s("li",[a._v("抢占式调度模型:优先让优先级高的线程使用cpu,如果优先级相同,那么会"),s("strong",[a._v("随机")]),a._v("选择一个,优先级高的线程获取cpu时间片相对多一些")])]),a._v(" "),s("h2",{attrs:{id:"线程的优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程的优先级"}},[a._v("#")]),a._v(" 线程的优先级")]),a._v(" "),s("h3",{attrs:{id:"getproiority"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getproiority"}},[a._v("#")]),a._v(" getProiority")]),a._v(" "),s("p",[a._v("获取指定线程的优先级")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"setpriority"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setpriority"}},[a._v("#")]),a._v(" setPriority")]),a._v(" "),s("p",[a._v("设置指定线程的优先级")]),a._v(" "),s("p",[a._v("默认为5 范围1-10")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("优先级高不代表运行的时间相对减少")]),a._v(" "),s("h2",{attrs:{id:"后台线程-守护线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台线程-守护线程"}},[a._v("#")]),a._v(" 后台线程/守护线程")]),a._v(" "),s("h3",{attrs:{id:"setdaemon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setdaemon"}},[a._v("#")]),a._v(" setDaemon")]),a._v(" "),s("p",[a._v("需要传递一个布尔值,true为设置为守护线程")]),a._v(" "),s("p",[a._v("当普通线程执行完后,那么守护线程没有继续执行下去的必要(自动结束)")]),a._v(" "),s("h2",{attrs:{id:"线程的安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程的安全问题"}},[a._v("#")]),a._v(" 线程的安全问题")]),a._v(" "),s("h3",{attrs:{id:"同步代码块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步代码块"}},[a._v("#")]),a._v(" 同步代码块")]),a._v(" "),s("p",[a._v("锁多条语句操作共享数据,可以使用同步代码块实现")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 传递任意对象,注意要是唯一的,否则线程认为是不同的同步锁")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 线程共享的操作数据")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("默认情况是打开的,只要有一个线程进去执行代码了,锁就会关闭,只有等代码块执行完毕才重新打开")]),a._v(" "),s("p",[a._v("同步的好处:")]),a._v(" "),s("p",[a._v("解决了多线程的数据安全问题")]),a._v(" "),s("p",[a._v("弊端:")]),a._v(" "),s("p",[a._v("当线程过多时,因为每个线程都会判断同步上的锁,耗费系统资源,运行效率降低")]),a._v(" "),s("h3",{attrs:{id:"同步方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步方法"}},[a._v("#")]),a._v(" 同步方法")]),a._v(" "),s("p",[a._v("在方法返回值前面加上关键字synchronized,该方法的所有代码都加上锁")]),a._v(" "),s("p",[a._v("此同步方法锁对象为this")]),a._v(" "),s("p",[a._v("如果此同步方法 是静态的 则锁对象为 类名.class")]),a._v(" "),s("h2",{attrs:{id:"lock锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lock锁"}},[a._v("#")]),a._v(" Lock锁")]),a._v(" "),s("p",[a._v("Lock是接口不能直接实例化,我们通过它的实现类ReentrantLock来实例化")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReentrantLock")]),a._v(" lock "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReentrantLock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lock"}},[a._v("#")]),a._v(" lock")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("lock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("lock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("加锁")]),a._v(" "),s("h3",{attrs:{id:"unlock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unlock"}},[a._v("#")]),a._v(" unlock")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("lock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("释放锁")]),a._v(" "),s("h2",{attrs:{id:"死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[a._v("#")]),a._v(" 死锁")]),a._v(" "),s("p",[a._v("线程死锁是指由于两个或者多个线程互相持有对象所需要的资源,导致这些线程处于等待状态,无法前往执行")]),a._v(" "),s("h2",{attrs:{id:"生成者消费者-等待-唤醒机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成者消费者-等待-唤醒机制"}},[a._v("#")]),a._v(" 生成者消费者(等待 唤醒机制)")]),a._v(" "),s("h3",{attrs:{id:"等待-wait"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#等待-wait"}},[a._v("#")]),a._v(" 等待 wait")]),a._v(" "),s("p",[a._v("同步代码块中锁的对象是什么则 wait方法在该对象调用")]),a._v(" "),s("h3",{attrs:{id:"唤醒-notify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唤醒-notify"}},[a._v("#")]),a._v(" 唤醒 notify")]),a._v(" "),s("p",[a._v("会随机唤醒该进程里的任意线程")]),a._v(" "),s("h3",{attrs:{id:"唤醒所有-notifyall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唤醒所有-notifyall"}},[a._v("#")]),a._v(" 唤醒所有  notifyall")]),a._v(" "),s("p",[a._v("锁的步骤:")]),a._v(" "),s("ol",[s("li",[a._v("while(true) 死循环")]),a._v(" "),s("li",[a._v("synchronized 同步锁,锁对象要唯一")]),a._v(" "),s("li",[a._v("判断,共享数据是否结束  结束的操作")]),a._v(" "),s("li",[a._v("判断,共享数据是否结束  没有结束的操作")])]),a._v(" "),s("h2",{attrs:{id:"阻塞队列实现等待唤醒机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞队列实现等待唤醒机制"}},[a._v("#")]),a._v(" 阻塞队列实现等待唤醒机制")]),a._v(" "),s("h3",{attrs:{id:"arrayblockingqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrayblockingqueue"}},[a._v("#")]),a._v(" ArrayBlockingQueue")]),a._v(" "),s("p",[a._v("底层是数组,有界,创建时通过带参构造方法,定义该阻塞队列的边界")]),a._v(" "),s("h4",{attrs:{id:"put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[a._v("#")]),a._v(" put")]),a._v(" "),s("p",[a._v('put("元素"),存储,底层有lock锁')]),a._v(" "),s("h4",{attrs:{id:"take"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#take"}},[a._v("#")]),a._v(" take")]),a._v(" "),s("p",[a._v("take()取出,如果取不出则会一直等待,直到下一关元素put进阻塞队列")]),a._v(" "),s("h3",{attrs:{id:"linkedblockingqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linkedblockingqueue"}},[a._v("#")]),a._v(" LinkedBlockingQueue")]),a._v(" "),s("p",[a._v("底层是链表,无界.但不是真正的无界,默认最大为int的最大值,也可以通过带参构造方法,定义阻塞队列的边界")])])}),[],!1,null,null,null);t.default=e.exports}}]);