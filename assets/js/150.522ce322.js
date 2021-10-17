(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{519:function(v,_,t){"use strict";t.r(_);var a=t(46),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[v._v("#")]),v._v(" 锁")]),v._v(" "),t("p",[v._v("为了保证数据的一致性 在共享数据被并发访问时变得安全的规则")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("按操作")]),v._v(" "),t("ul",[t("li",[v._v("共享锁 读锁 针对同一份数据 多个事务读取操作可以同时加锁而不互相影响 但不能修改数据")]),v._v(" "),t("li",[v._v("排他锁 写锁 当前操作没有完成前 会阻断其他操作的读取和写入")])])]),v._v(" "),t("li",[t("p",[v._v("按力度")]),v._v(" "),t("ul",[t("li",[v._v("表级锁 会锁定整个表 开销小 加锁快 锁定力度大 发生锁冲突概率高 并发度低 不会出现死锁情况")]),v._v(" "),t("li",[v._v("行级锁 会锁定当前行 开销大 加锁慢 锁定力度小 发生锁冲突概率低 并发高 会出现死锁情况")])])]),v._v(" "),t("li",[t("p",[v._v("按使用方式")]),v._v(" "),t("ul",[t("li",[v._v("悲观锁 每次查询数据都认为别人会修改 查询时加锁")]),v._v(" "),t("li",[v._v("乐观锁 每次查询数据都认为别人不会修改 但更新时会判断一下期间别人有没有去更新这个数据")])])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210818181412768.png",alt:"image-20210818181412768"}})]),v._v(" "),t("h2",{attrs:{id:"共享锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共享锁"}},[v._v("#")]),v._v(" 共享锁")]),v._v(" "),t("p",[v._v("特点: 数据可以被多个事务查询 但不能修改")]),v._v(" "),t("p",[v._v("InnoDB 默认的是加行锁  如果列没有"),t("strong",[v._v("索引")]),v._v("则加的是表锁")]),v._v(" "),t("p",[v._v("如在有锁情况下修改 锁释放 修改数据失败")]),v._v(" "),t("ul",[t("li",[v._v("创建 select语句 lock in share mode;")])]),v._v(" "),t("h2",{attrs:{id:"排他锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排他锁"}},[v._v("#")]),v._v(" 排他锁")]),v._v(" "),t("p",[v._v("加锁后 不能被其他事务"),t("strong",[v._v("加锁")]),v._v("查询或者修改  (即不能存在第二把锁)")]),v._v(" "),t("p",[v._v("普通查询可以 加锁查询不能   普通和加锁修改都无法执行 必须提交事务")]),v._v(" "),t("ul",[t("li",[v._v("创建 select语句 for update;")])]),v._v(" "),t("h2",{attrs:{id:"myisam-读锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-读锁"}},[v._v("#")]),v._v(" MyISAM 读锁")]),v._v(" "),t("p",[v._v("所有连接只能查询不能修改数据")]),v._v(" "),t("p",[v._v("MyISAM 不支持事务 和 行锁   当前表也不能修改")]),v._v(" "),t("ul",[t("li",[v._v("加锁 lock table 表名 read;")]),v._v(" "),t("li",[v._v("解锁 unlock tables;")])]),v._v(" "),t("h2",{attrs:{id:"myisam-写锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-写锁"}},[v._v("#")]),v._v(" MyISAM  写锁")]),v._v(" "),t("p",[v._v("其他连接不能查询和修改数据   当前表可以查询和修改数据")]),v._v(" "),t("ul",[t("li",[v._v("加锁 lock table 表名 write;")]),v._v(" "),t("li",[v._v("解锁 unlock tables;")])]),v._v(" "),t("h2",{attrs:{id:"悲观锁和乐观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁和乐观锁"}},[v._v("#")]),v._v(" 悲观锁和乐观锁")]),v._v(" "),t("p",[v._v("以上都都是悲观锁 悲观锁一般都是依靠关系型数据库提供的锁机制")]),v._v(" "),t("p",[v._v("悲观锁和乐观锁 差别是一个执行前上锁  一个是不上锁 只是在更新时查看是否与被修改")]),v._v(" "),t("ul",[t("li",[v._v("添加一个版本号列  每次更新版本号+1  并在更新时检测版本号是否与查询时相同")])])])}),[],!1,null,null,null);_.default=s.exports}}]);