(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{472:function(t,a,s){"use strict";s.r(a);var e=s(46),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"多线程高级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多线程高级"}},[t._v("#")]),t._v(" 多线程高级")]),t._v(" "),s("h2",{attrs:{id:"线程状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程状态"}},[t._v("#")]),t._v(" 线程状态")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210727153351109.png",alt:"image-20210727153351109"}})]),t._v(" "),s("h2",{attrs:{id:"线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[t._v("#")]),t._v(" 线程池")]),t._v(" "),s("h3",{attrs:{id:"创建线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建线程池"}},[t._v("#")]),t._v(" 创建线程池")]),t._v(" "),s("p",[t._v("创建一关默认的线程池,默认为空,(空参构造方法)默认数量最多可以容纳int的最大值个线程")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" executorService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCachedThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("带参构造为该线程池指定数量的线程池,并不是线程池创建就拥有指定数量的线程,而是该线程池可以拥有线程的上限")]),t._v(" "),s("p",[t._v("Executors类为创建线程池对象类")]),t._v(" "),s("p",[t._v("ExecutorService类为控制线程池类")]),t._v(" "),s("h3",{attrs:{id:"提交-submit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交-submit"}},[t._v("#")]),t._v(" 提交 submit")]),t._v(" "),s("p",[t._v("把线程提交给线程池处理")]),t._v(" "),s("h3",{attrs:{id:"销毁-shutdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#销毁-shutdown"}},[t._v("#")]),t._v(" 销毁 shutdown")]),t._v(" "),s("p",[t._v("关闭线程池")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("executorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"threadpoolexecutor-自定义线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadpoolexecutor-自定义线程池"}},[t._v("#")]),t._v(" ThreadPoolExecutor  自定义线程池")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),t._v(" pool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayBlockingQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultThreadFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AbortPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("共有7个参数")]),t._v(" "),s("ol",[s("li",[t._v("核心线程数量 int  不能小于0")]),t._v(" "),s("li",[t._v("最大线程数  int  不能小于等于0.并且大于等于核心数")]),t._v(" "),s("li",[t._v("空闲线程最大存活时间  int  不能小于0")]),t._v(" "),s("li",[t._v("时间单位  Enum TimeUnit中的常量")]),t._v(" "),s("li",[t._v("任务队列   传递一个阻塞队列  不能为null  如果submit的线程过多则会缓存到队列中")]),t._v(" "),s("li",[t._v("创建线程工程   我们使用默认的线程池创建  Executors.defaultThreadFactory()   不能为null")]),t._v(" "),s("li",[t._v("任务的拒绝策略(即超出最大线程数如何处理)  我们使用new ThreadPoolExecutor.AbortPolicy()超出则拒绝   不能为null   当submit线程数量超出了最大线程数+任务队列边界时 触发 拒绝策略\n"),s("ul",[s("li",[t._v("ThreadPoolExecutor.AbortPolicy: 丢弃任务并抛出RejectedExecutionException异常. 默认的cl")]),t._v(" "),s("li",[t._v("ThreadPoolExecutor.DiscardPolicy: 丢弃任务 但不抛出异常  不太推荐使用")]),t._v(" "),s("li",[t._v("ThreadPoolExecutor.DiscardOldestPolicy: 抛弃队列中等待最久的任务  然后把当前任务加入队列中")]),t._v(" "),s("li",[t._v("ThreadPoolExecutor.CallerRunsPolicy: 调度任务的run()方法绕过线程池直接执行")])])])]),t._v(" "),s("h2",{attrs:{id:"volatile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile"}},[t._v("#")]),t._v(" Volatile")]),t._v(" "),s("ol",[s("li",[t._v("堆内存是唯一的,每一个线程都有自己的线程栈")]),t._v(" "),s("li",[t._v("每个线程在使用堆里面变量的时候,都会先拷贝一个变量的副本中.")]),t._v(" "),s("li",[t._v("在线程中,每一次使用都是从变量副本中获取")])]),t._v(" "),s("p",[t._v("如果A线程 修改了堆中共享的变量值,其他线程不一定能及时的使用最新的值")]),t._v(" "),s("p",[t._v("使用Volatile关键字可以解决这个问题,强制线程每次使用时,都会先去看一下共享区域中最新值")]),t._v(" "),s("p",[t._v("只需要共享数据前面加上Volatile关键字")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用synchronized同步代码块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用synchronized同步代码块"}},[t._v("#")]),t._v(" 使用Synchronized同步代码块")]),t._v(" "),s("p",[t._v("使用Synchronized同步代码块,也可以解决此问题")]),t._v(" "),s("ol",[s("li",[t._v("线程获取锁")]),t._v(" "),s("li",[t._v("清空变量副本")]),t._v(" "),s("li",[t._v("拷贝共享变量中最新的值到副本中")]),t._v(" "),s("li",[t._v("执行代码")]),t._v(" "),s("li",[t._v("将修改后变量副本中的值赋值给共享数据")]),t._v(" "),s("li",[t._v("释放锁")])]),t._v(" "),s("h2",{attrs:{id:"原子性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原子性"}},[t._v("#")]),t._v(" 原子性")]),t._v(" "),s("p",[t._v("原子性指的是在一次或多次操作中,要么所有的操作全部执行并且不会受到任何因素而中断,要么所有的操作都不执行,多个操作是一个不可以分割的整体")]),t._v(" "),s("p",[t._v("我们可以使用Synchronized 锁 来强制协议统一共享数据的唯一性")]),t._v(" "),s("p",[t._v("而Volatile只是让线程在执行时检测在共享数据中检测最新的值并同步 副本中")]),t._v(" "),s("h3",{attrs:{id:"原子类-atomic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原子类-atomic"}},[t._v("#")]),t._v(" 原子类 Atomic")]),t._v(" "),s("p",[t._v("JDK1.5提供了一个原子类 Atomic 该类下的的实现类都可以实现原子性,方便程序员在多线程环境下，无锁的进行原子操作。原子变量的底层使用了处理器提供的原子指令，但是不同的CPU架构可能提供的原子指令不一样，也有可能需要某种形式的内部锁,所以该方法不能绝对保证线程不被阻塞。")]),t._v(" "),s("h4",{attrs:{id:"atomicinteger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#atomicinteger"}},[t._v("#")]),t._v(" AtomicInteger")]),t._v(" "),s("ul",[s("li",[t._v("AtomicInteger(): 空参构造方法 默认为0")]),t._v(" "),s("li",[t._v("AtomicInteger(int initialValue): 带参构造方法 指定值原子型")]),t._v(" "),s("li",[t._v("get():   获取值")]),t._v(" "),s("li",[t._v("getAndIncrement():   以原子方式加+1   并且返回自增"),s("strong",[t._v("前")]),t._v("的值")]),t._v(" "),s("li",[t._v("incrementAndGet():  以原子方式加+1   并且返回自增"),s("strong",[t._v("后")]),t._v("的值")]),t._v(" "),s("li",[t._v("addAndGet(int data):  以原子方式 与指定值相加  并返回结果")]),t._v(" "),s("li",[t._v("getAndSet(int value):  以原子方式 设置原子型为指定值 并返回旧的值")])]),t._v(" "),s("p",[t._v("原理:")]),t._v(" "),s("p",[t._v("自旋锁 + CAS 算法")]),t._v(" "),s("p",[t._v("CAS算法:有3个操作数(内存值V , 旧的预期值A , 要修改的值B )")]),t._v(" "),s("p",[t._v("当旧的预期A == 内存值 此时修改成功  将V改为B")]),t._v(" "),s("p",[t._v("当旧的预期A != 内存值 修改失败 不做任何操作")]),t._v(" "),s("p",[t._v("并重新获取现在的最新值(这个动作称为自旋)")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210727174131889.png",alt:"image-20210727174131889"}})]),t._v(" "),s("h3",{attrs:{id:"synchronized-与-cas-的区别-乐观锁和悲观锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-与-cas-的区别-乐观锁和悲观锁"}},[t._v("#")]),t._v(" Synchronized 与 CAS 的区别(乐观锁和悲观锁)")]),t._v(" "),s("p",[t._v("相同点: 在多线程区块下,都可以保证共享数据的安全性")]),t._v(" "),s("p",[t._v("不同点:")]),t._v(" "),s("ul",[s("li",[t._v("Synchronized 总是从最坏的角度出发,认为每次获取数据的时候,别人都有可能修改.所以在每次操作共享数据之前,都会上锁.("),s("strong",[t._v("悲观锁")]),t._v(")")]),t._v(" "),s("li",[t._v("CAS 是乐观的角度出发,假设每次获取数据别人都不会修改,所以不会上锁.只不过在修改共享数据的时候,会去检查一下,别人有没有修改过这个数据. ("),s("strong",[t._v("乐观锁")]),t._v(")   如果别人修改过,那么再次获取最新的值   如果别人没有修改过,那么直接修改共享数据的值")])]),t._v(" "),s("h2",{attrs:{id:"hashtable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashtable"}},[t._v("#")]),t._v(" Hashtable")]),t._v(" "),s("p",[t._v("在多线程下使用HashMap不是线程安全的，在多线程并发的环境下，可能会产生死锁等问题。")]),t._v(" "),s("ol",[s("li",[t._v("Hashtable采用悲观锁 Synchronized 的形式保证数据的安全性")]),t._v(" "),s("li",[t._v("只有有线程访问,会将整张表全部锁起来,所以Hashtable效率低下")]),t._v(" "),s("li",[t._v("底层原理与hashmap一样也是数组+链表实现,其他无异")])]),t._v(" "),s("h2",{attrs:{id:"concurrenthashmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap"}},[t._v("#")]),t._v(" ConcurrentHashMap")]),t._v(" "),s("p",[t._v("如果map集合要使用多线程我们可以使用ConcurrentHashMap,它线程安全,效率较高")]),t._v(" "),s("p",[t._v("Hashtable已经被淘汰了")]),t._v(" "),s("h3",{attrs:{id:"jdk1-7原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-7原理"}},[t._v("#")]),t._v(" JDK1.7原理")]),t._v(" "),s("ol",[s("li",[t._v("创建一个默认长度为16,默认加载因 位0.75的数组 数组名为 Segmewnt  无法扩容")]),t._v(" "),s("li",[t._v("再创建一个长度为2的小数组(数组名为HashEntey) 把地址值赋值给Segmewnt数组中的索引0  (模板) 其他索引都为null")]),t._v(" "),s("li",[t._v("根据键的哈希值计算出 Segmewnt 数组索引")]),t._v(" "),s("li",[t._v("如果此索引为空 就会创建一个长度默认为2的数组  并把这个小数组的地址值 赋值给 该索引")]),t._v(" "),s("li",[t._v("再次利用键的哈希值计算出在 小数组 应存入的索引(二次哈希)")]),t._v(" "),s("li",[t._v("如果为空,则直接添加  如非空则equals比较 不同则存入 (链表形式挂载在新元素下面)")]),t._v(" "),s("li",[t._v("小数组的加载因 同样为0.75  当超过了2*0.75=1.5 强转为int=1  会"),s("strong",[t._v("自动扩容2倍")])]),t._v(" "),s("li",[t._v("Segmewnt数组无法扩容(恒定为16) 因为只有HashEntey小数组在扩容")]),t._v(" "),s("li",[t._v("ConcurrentHashMap 通过Segmewnt 索引 来加锁(悲观锁 Synchronized )  所以在JDK1.7 默认情况下,最多允许 16个线程同时访问")])]),t._v(" "),s("h3",{attrs:{id:"jdk1-8原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-8原理"}},[t._v("#")]),t._v(" JDK1.8原理")]),t._v(" "),s("p",[t._v("底层结构:哈希表(数组 链表 红黑树结合体)")]),t._v(" "),s("p",[t._v("结合CAS机制 + Synchronized  同步代码块形式来保证线程安全")]),t._v(" "),s("ol",[s("li",[t._v("如果使用空参构造方法创建ConcurrentHashMap,则什么事情都不做. 只有在第一次添加元素时候创建哈希表")]),t._v(" "),s("li",[t._v("计算出当前元素应存入的索引")]),t._v(" "),s("li",[t._v("如果该索引为为null,则利用CAS算法,将本结点添加到数组中")]),t._v(" "),s("li",[t._v("如果该索引不为null,则利用Volatile关键字获取当前位置最新的结点地址,挂载到它的下面,变成链表")]),t._v(" "),s("li",[t._v("当链表长度大于等于8时,自动转成红黑树")]),t._v(" "),s("li",[t._v("以链表或红黑树头结点为锁对象,配合悲观锁(Synchronized)保证多线程数据的安全性")])]),t._v(" "),s("h2",{attrs:{id:"countdownlatch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#countdownlatch"}},[t._v("#")]),t._v(" CountDownLatch")]),t._v(" "),s("p",[t._v("让某一条线程等待其他线程执行完毕之后在执行.")]),t._v(" "),s("ul",[s("li",[t._v("CountDownLatch(int count): 带参构造方法 传递线程数,表示等待线程数   定义一个计数器")]),t._v(" "),s("li",[t._v("await():  让线程等待   等待其他线程执行完毕后才执行  计数器为0执行")]),t._v(" "),s("li",[t._v("countDown():  当前线程执行完毕  将计数器-1")])]),t._v(" "),s("h2",{attrs:{id:"semaphore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#semaphore"}},[t._v("#")]),t._v(" Semaphore")]),t._v(" "),s("p",[t._v("可以控制访问特定资源的线程数量  在线程类中创建并使用")]),t._v(" "),s("ul",[s("li",[t._v("Semaphore(int permits): 带参构造方法  最多允许多少条线程同时执行")]),t._v(" "),s("li",[t._v("acquire():  获取通信证")]),t._v(" "),s("li",[t._v("release():   归还通信证")])])])}),[],!1,null,null,null);a.default=r.exports}}]);