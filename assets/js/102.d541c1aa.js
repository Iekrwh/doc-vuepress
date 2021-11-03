(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{474:function(v,_,t){"use strict";t.r(_);var a=t(46),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[v._v("#")]),v._v(" 方法")]),v._v(" "),t("p",[v._v("方法(method)是将具有独立功能的代码块组织成为一个整体，使其具有特殊功能的代码集")]),v._v(" "),t("p",[v._v("方法必须先创建才能使用，称为方法定义")]),v._v(" "),t("p",[v._v("方法创建后并不是直接运行的，需要手动使用后才执行，称为调用")]),v._v(" "),t("h2",{attrs:{id:"方法定义和调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法定义和调用"}},[v._v("#")]),v._v(" 方法定义和调用")]),v._v(" "),t("p",[v._v("格式")]),v._v(" "),t("p",[v._v("public static void 方法名(){")]),v._v(" "),t("p",[v._v("​\t//方法体")]),v._v(" "),t("p",[v._v("}")]),v._v(" "),t("p",[v._v("调用")]),v._v(" "),t("p",[v._v("方法名();")]),v._v(" "),t("h2",{attrs:{id:"带参数方法定义和调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#带参数方法定义和调用"}},[v._v("#")]),v._v(" 带参数方法定义和调用")]),v._v(" "),t("p",[v._v("格式:public static void 方法名(参数){…}")]),v._v(" "),t("p",[v._v("单个参数:public static void 方法名(数据类型 变量名){…}")]),v._v(" "),t("p",[v._v("多个参数:public static void 方法名(数据类型 变量名1,数据类型 变量名2,…){…}")]),v._v(" "),t("p",[v._v("注意：参数中的数据类型与变量名都不能缺少，多个参数之间使用逗号分隔")]),v._v(" "),t("p",[v._v("调用")]),v._v(" "),t("p",[v._v("方法名(参数,参数2)")]),v._v(" "),t("h2",{attrs:{id:"形参和实参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#形参和实参"}},[v._v("#")]),v._v(" 形参和实参")]),v._v(" "),t("p",[v._v("形参：方法定义中的参数")]),v._v(" "),t("p",[v._v("实参：方法调用中的参数")]),v._v(" "),t("h2",{attrs:{id:"带返回值方法的定义和调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#带返回值方法的定义和调用"}},[v._v("#")]),v._v(" 带返回值方法的定义和调用")]),v._v(" "),t("p",[v._v("pubilc static 数据类型\t方法名(参数){")]),v._v(" "),t("p",[v._v("​\treturn 数据;")]),v._v(" "),t("p",[v._v("}")]),v._v(" "),t("p",[v._v("方法定义是return后面的返回值要与方法定义上的数据类型一致，否则会报错")]),v._v(" "),t("p",[v._v("调用")]),v._v(" "),t("p",[v._v("数据类型 变量名 =方法名(参数);")]),v._v(" "),t("h2",{attrs:{id:"方法的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法的注意事项"}},[v._v("#")]),v._v(" 方法的注意事项")]),v._v(" "),t("p",[v._v("方法不能嵌套定义")]),v._v(" "),t("p",[v._v("void表示无返回值，可以省略return，也可单独书写return,后面不加数据")]),v._v(" "),t("p",[v._v("执行return后方法中后面的代码将不再向下执行")]),v._v(" "),t("h2",{attrs:{id:"方法的通用格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法的通用格式"}},[v._v("#")]),v._v(" 方法的通用格式")]),v._v(" "),t("p",[v._v("pubilc static 返回值类型 方法名(参数){")]),v._v(" "),t("p",[v._v("​\t方法体;")]),v._v(" "),t("p",[v._v("​\treturn 数据;")]),v._v(" "),t("p",[v._v("}")]),v._v(" "),t("p",[v._v("pubic static   修饰符，目前先记住这个格式")]),v._v(" "),t("p",[v._v("定义方法时，要明确返回值类型如没写void，明确参数类型和数量")]),v._v(" "),t("h2",{attrs:{id:"方法重载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法重载"}},[v._v("#")]),v._v(" 方法重载")]),v._v(" "),t("p",[v._v("方法重载指同一个类中定义多个方法之间的关系，满足以下条件则构成重载")]),v._v(" "),t("ol",[t("li",[v._v("多个方法在同一个类中")]),v._v(" "),t("li",[v._v("多个方法具有相同的方法")]),v._v(" "),t("li",[v._v("多个方法参数不同，类型不同或者数量不同")])]),v._v(" "),t("p",[v._v("与返回值无关")]),v._v(" "),t("p",[v._v("在调用的时候，java虚拟机会通过参数的不同来区分同名的")]),v._v(" "),t("h2",{attrs:{id:"方法的参数传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法的参数传递"}},[v._v("#")]),v._v(" 方法的参数传递")]),v._v(" "),t("p",[v._v("对于基本数据类型的参数，形式参数的改变，不影响实际参数的值")]),v._v(" "),t("p",[v._v("方法中的变量为局部变量，方法内值的改变不影响实际外的值")]),v._v(" "),t("p",[v._v("引用类型")]),v._v(" "),t("p",[v._v("对于引用类型的参数，形式参数的改变，影响实际参数的值")]),v._v(" "),t("p",[v._v("System.out.println(“内容”);\t输出内容并换")]),v._v(" "),t("p",[v._v("System.out.print(“内容”);\t输出内容不换行")]),v._v(" "),t("p",[v._v("System.out.println();\t起到换行的作业")])])}),[],!1,null,null,null);_.default=r.exports}}]);