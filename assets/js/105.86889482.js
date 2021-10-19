(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{477:function(a,t,s){"use strict";s.r(t);var v=s(46),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#树"}},[a._v("#")]),a._v(" 树")]),a._v(" "),s("h2",{attrs:{id:"二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[a._v("#")]),a._v(" 二叉树")]),a._v(" "),s("p",[a._v("每个个节点存放4个属性分别为   父节点地址    值   左子节点地址   右子节点地址")]),a._v(" "),s("p",[a._v("度: 每个节点的子节点数量  左右子节点的总数")]),a._v(" "),s("p",[a._v("在二叉树中,任意一个节点的度要"),s("strong",[a._v("小于等于2")])]),a._v(" "),s("p",[a._v("查找效率慢")]),a._v(" "),s("h2",{attrs:{id:"二叉查找树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉查找树"}},[a._v("#")]),a._v(" 二叉查找树")]),a._v(" "),s("p",[a._v("二叉查找树,又称二叉排序树或二叉搜索树")]),a._v(" "),s("p",[a._v("特点:")]),a._v(" "),s("ol",[s("li",[a._v("每个节点最多有两个子节点")]),a._v(" "),s("li",[a._v("每个节点的"),s("strong",[a._v("左")]),a._v("子结点都是"),s("strong",[a._v("小于")]),a._v("自身的")]),a._v(" "),s("li",[a._v("每个节点的"),s("strong",[a._v("右")]),a._v("子结点都是"),s("strong",[a._v("大于")]),a._v("自身的")])]),a._v(" "),s("p",[a._v("查找效率比普通二叉树快")]),a._v(" "),s("h3",{attrs:{id:"添加节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加节点"}},[a._v("#")]),a._v(" 添加节点")]),a._v(" "),s("p",[a._v("规则:")]),a._v(" "),s("ol",[s("li",[a._v("小的存左边")]),a._v(" "),s("li",[a._v("大的存右边")]),a._v(" "),s("li",[a._v("一样的不存")])]),a._v(" "),s("p",[a._v("首先与根节点做比较,再逐层比较")]),a._v(" "),s("p",[a._v("查询效率比二叉查找树快")]),a._v(" "),s("h2",{attrs:{id:"平衡二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平衡二叉树"}},[a._v("#")]),a._v(" 平衡二叉树")]),a._v(" "),s("ul",[s("li",[a._v("二叉树左右两个子树的"),s("strong",[a._v("高度差不超过1")])]),a._v(" "),s("li",[a._v("任意节点的左右两个字树都是一颗平衡二叉树")])]),a._v(" "),s("h3",{attrs:{id:"左旋"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左旋"}},[a._v("#")]),a._v(" 左旋")]),a._v(" "),s("p",[a._v("当添加一个节点破坏了平衡二叉树规则时,并且是添加在根节点右边,我们可以通过左旋来恢复平衡二叉树.")]),a._v(" "),s("p",[a._v("只需要把根节点向左下方拉扯,并且连接的所有节点跟着移动即可.")]),a._v(" "),s("p",[a._v("当添加12节点时破坏了平衡二叉树了")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723072123043.png",alt:"image-20210723072123043"}})]),a._v(" "),s("p",[a._v("我们通过左旋来恢复平衡,把根节点的右子节点往上拉")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723072628472.png",alt:"image-20210723072628472"}})]),a._v(" "),s("h4",{attrs:{id:"如果被提级的节点已有左节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果被提级的节点已有左节点"}},[a._v("#")]),a._v(" 如果被提级的节点已有左节点")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723073135301.png",alt:"image-20210723073135301"}})]),a._v(" "),s("p",[a._v("先忽略左子节点存在,再提级,然后放置在原先的根节点的右子节点")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723073156321.png",alt:"image-20210723073156321"}})]),a._v(" "),s("p",[a._v("左旋:就是将根节点的右侧往左拉,原先的右子节点变成新的父节点,并把多余的左子节点出让,给已经降级的根节点当右子节点")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/20180722220546910.gif",alt:"这里写图片描述"}})]),a._v(" "),s("h3",{attrs:{id:"右旋"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#右旋"}},[a._v("#")]),a._v(" 右旋")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/20180722222413303.gif",alt:"这里写图片描述"}})]),a._v(" "),s("p",[a._v("右旋:将根节点的左侧往右拉,左子节点变成了新的父节点,并把多余的右子节点出让,给已经降级根节点当左子节点")]),a._v(" "),s("h4",{attrs:{id:"左左"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左左"}},[a._v("#")]),a._v(" 左左")]),a._v(" "),s("p",[a._v("当根节点左子树的左子树有节点插入,导致二叉树不平衡")]),a._v(" "),s("p",[a._v("我们只需要将此二叉树右旋既可")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723080834880.png",alt:"image-20210723080834880"}})]),a._v(" "),s("h4",{attrs:{id:"右右"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#右右"}},[a._v("#")]),a._v(" 右右")]),a._v(" "),s("p",[a._v("当根节点左子树的右子树有节点插入,导致二叉树不平衡")]),a._v(" "),s("p",[a._v("我们发现单单靠一次的右旋是无法恢复平衡状态")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723080914937.png",alt:"image-20210723080914937"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723080959156.png",alt:"image-20210723080959156"}})]),a._v(" "),s("p",[a._v("我们需要将5当为根节点 左旋一次")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723081043559.png",alt:"image-20210723081043559"}})]),a._v(" "),s("p",[a._v("再由根节点7 右旋一次")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723081116012.png",alt:"image-20210723081116012"}})]),a._v(" "),s("h4",{attrs:{id:"右右-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#右右-2"}},[a._v("#")]),a._v(" 右右")]),a._v(" "),s("p",[a._v("当根节点右子树的右子树有节点插入,导致二叉树不平衡")]),a._v(" "),s("p",[a._v("我们只需要将此二叉树左旋既可")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723083959803.png",alt:"image-20210723083959803"}})]),a._v(" "),s("h4",{attrs:{id:"右左"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#右左"}},[a._v("#")]),a._v(" 右左")]),a._v(" "),s("p",[a._v("当根节点右子树的左子树有节点插入,导致二叉树不平衡")]),a._v(" "),s("p",[a._v("我们发现单单靠一次的左旋是无法恢复平衡状态")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723084119255.png",alt:"image-20210723084119255"}})]),a._v(" "),s("p",[a._v("把10当为根节点,右旋一次")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723084425042.png",alt:"image-20210723084425042"}})]),a._v(" "),s("p",[a._v("再以根节点 左旋")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723084405696.png",alt:"image-20210723084405696"}})]),a._v(" "),s("h2",{attrs:{id:"红黑树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[a._v("#")]),a._v(" 红黑树")]),a._v(" "),s("p",[a._v("红黑树又称平衡二叉B树")]),a._v(" "),s("p",[a._v("它是一种特色的二叉查找树,红黑树的每个节点上都有存储位表示节点的颜色")]),a._v(" "),s("p",[a._v('每一个节点可以是红或黑;红黑树不是高度平衡的,它的平衡是通过"红黑规则"进行实现的')]),a._v(" "),s("p",[a._v("而平衡二叉树是高度平衡的,当左右子树高度差超过1时则触发旋转")]),a._v(" "),s("p",[a._v("而红黑树是根据定于的红黑规则触发旋转的")]),a._v(" "),s("h3",{attrs:{id:"红黑规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#红黑规则"}},[a._v("#")]),a._v(" 红黑规则")]),a._v(" "),s("ol",[s("li",[a._v("每一个节点或是红色,或者是黑色")]),a._v(" "),s("li",[a._v("根节点必须是黑色")]),a._v(" "),s("li",[a._v("如果一个节点没有子节点或者父节点,则该节点相应的指针属性值为Nil,这些Nil视为叶节点,每个叶节点(Nil)是黑色的")]),a._v(" "),s("li",[a._v("如果某个节点是红色的,那么它的子节点必须是黑色(不能出现两个红色节点相连的情况)")]),a._v(" "),s("li",[a._v("对每个节点,从该节点到其所有后代节点的简单路径上,均包"),s("strong",[a._v("含相同数目的黑色节点")])])]),a._v(" "),s("h3",{attrs:{id:"添加节点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加节点-2"}},[a._v("#")]),a._v(" 添加节点")]),a._v(" "),s("p",[a._v("添加节点时,默认为红色,效率比为黑色要高")]),a._v(" "),s("p",[a._v("并遵循二叉查找树的规则")]),a._v(" "),s("h4",{attrs:{id:"当父节点也是红色-叔叔节点也是红色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当父节点也是红色-叔叔节点也是红色"}},[a._v("#")]),a._v(" 当父节点也是红色,叔叔节点也是红色")]),a._v(" "),s("p",[a._v("因为默认是添加红色,如果父节点为红色,叔叔节点也为红色")]),a._v(" "),s("ol",[s("li",[a._v("父节点改为黑色")]),a._v(" "),s("li",[a._v("叔叔(祖父节点的左/右子节点)节点改为黑色")]),a._v(" "),s("li",[a._v("将祖父节点改为红色")]),a._v(" "),s("li",[a._v("如果祖父节点为根节点则重新变回黑色")])]),a._v(" "),s("h4",{attrs:{id:"当父节点也是红色-叔叔节点是黑色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当父节点也是红色-叔叔节点是黑色"}},[a._v("#")]),a._v(" 当父节点也是红色,叔叔节点是黑色")]),a._v(" "),s("ol",[s("li",[a._v("将父节点改为黑色")]),a._v(" "),s("li",[a._v("将祖父节点改为红色")]),a._v(" "),s("li",[a._v("以祖父节点为支点进行旋转\n"),s("ul",[s("li",[a._v("左节点大于则右旋")]),a._v(" "),s("li",[a._v("右节点大于则左旋")]),a._v(" "),s("li",[a._v("可以把Nil先忽略,旋转完后再加回叶节点,比较好理解")])])])]),a._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210723094236460.png",alt:"image-20210723094236460"}})])])}),[],!1,null,null,null);t.default=_.exports}}]);