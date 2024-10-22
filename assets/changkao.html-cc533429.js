import{_ as a,o as t,c as e,a as n,b as s,e as p}from"./app-aa9cafec.js";const l="/MLblogs/assets/2024-10-05-22-02-16-image-dbee53b6.png",i="/MLblogs/assets/2024-10-14-22-05-08-image-1337af76.png",c="/MLblogs/assets/2024-10-14-22-43-49-image-55d36f9d.png",o="/MLblogs/assets/2024-10-14-22-46-13-image-a38108a6.png",u={},d=n("h2",{id:"垃圾回收机制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#垃圾回收机制","aria-hidden":"true"},"#"),s(" 垃圾回收机制")],-1),r=n("p",null,"java引入垃圾回收机制，令C++程序员最头疼的垃圾回收机制迎刃而解。java程序员可以将更多的经历放在业务开发上而不是内存管理上。",-1),k=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"INFO"),n("p",null,"内存泄漏是什么？"),n("p",null,[n("strong",null,"内存泄漏"),s("是指程序在申请内存后，无法释放已申请的内存空间，导致程序运行时间越长，占用的内存越多，最终可能导致程序崩溃或系统性能下降。")])],-1),m=p(`<p>垃圾回收机制做两件事：1. 发现无用对象。2. 回收无用对象占用的内存。</p><p>垃圾回收算法：</p><ol><li><p>引用计数法</p><p>每个对象都有一个引用计数器，当一个对象被引用时，计数器加1；当引用失效时，计数器减1。当一个对象的引用计数为0时，说明没有任何变量引用该对象，那么这个对象就可以被回收了。缺点：“循环引用的无用对象”无法识别。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token class-name">Student</span> friend<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        s1<span class="token punctuation">.</span>friend <span class="token operator">=</span> s2<span class="token punctuation">;</span>
        s2<span class="token punctuation">.</span>friend <span class="token operator">=</span> s1<span class="token punctuation">;</span>
        s1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        s2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当执行 <code>s1 = null;</code> 和 <code>s2 = null;</code> 时，虽然<code>s1</code>和<code>s2</code>这两个局部变量不再引用对象，但是两个对象内部的<code>friend</code>属性仍然相互引用，导致它们的引用计数始终为1。</li><li>由于引用计数永远不会为0，垃圾回收器就无法回收这两个对象，从而产生了内存泄漏。</li></ul></li><li><p>引用可达法（根搜索算法）</p></li></ol><p>程序将所有的引用关系看作一张图，从一个节点GC ROOT开始，寻找对应的引用节点，找到这个节点之后，继续寻找这个节点的引用节点，当所有的引用节点寻找完毕后，剩余的节点则被认为是没有被引用到的节点，即无用的节点。</p><h2 id="this关键字" tabindex="-1"><a class="header-anchor" href="#this关键字" aria-hidden="true">#</a> this关键字</h2><p>创建一个对象分为这几步：</p><ol><li><p>分配对象空间，并将对象成员变量初始化为0或空</p></li><li><p>执行属性值的显式初始化</p></li><li><p>执行构造方法</p></li><li><p>返回对象的地址给相关的变量</p></li></ol><p>this的本质是“创建好的对象的地址”，由于在构造方法之前，对象已经创建了，因此在构造方法中也可以使用this代表当前对象。</p><p>在类内有多个构造方法时，若想在一个构造方法内调用另一个构造方法，使用方法名的方式不行，只能使用this：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 报错Student(String)不存在，要改为 this(name);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;wangxiaolong&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态方法中不能调用非静态变量。因为程序会先将类中的静态变量和静态方法还有常量都存在方法区里，如果直接在静态方法里调用非静态成员就报错，因为非静态成员可能还未初始化。</p><img src="`+l+'" title="" alt="" data-align="center"><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><p>三大要素：继承，多态，封装</p><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装：</h3><p>将对象的属性和操作结合为一个整体，并尽可能隐藏对象内部的实现细节</p><p>实现：使用访问控制符实现封装：</p><img src="'+i+'" title="" alt="" data-align="center"><p>解释一下上面的表：</p><ul><li><p>private：若一个类定义了一个private的成员变量a，那么该类内的函数都可以访问a，但是该类之外，如定义了一个该类的对象，然后访问变量a，不行。该类的子类也无法访问a。这里举的例子是变量，如果举的例子是<strong>方法</strong>或者<strong>类</strong>也是一样的道理。</p></li><li><p>default：<strong>同一个包里的类</strong>都可以用。</p></li><li><p>protected：同一个类内可以用，同一个包内的类可以用，<strong>子类可以用</strong>。比如我在包1有一个类A，类A是public类型，在包2有一个类B，A中有属性a，若a是default，那么在B中新建一个类A的对象后，是无法访问属性a的。但是a是protected，且B是A的子类，那么可以访问。即，protected可以跨包访问，前提是访问的类是被访问类的子类。</p></li></ul><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><p>多态指的是同一个方法调用，由于对象不同可能会有不同的行为。</p><ul><li><p>多态指的是方法的多态</p></li><li><p>多态存在的3个必要条件：继承，方法重写，父类引用指向子类对象</p></li><li><p>父类引用指向子类对象后，用该父类引用调用子类重写的方法，此时多态就出现了。</p></li></ul><p>在3个必要条件中，继承和重写好理解。但是父类引用指向子类对象，其实是具体实例化，请看下例：</p><img title="" src="'+c+'" alt="" data-align="center" width="403"><p>这里TestPolym类里的animalCry传入的参数是父类Animal，如果传入的是Animal的子类，那就实现了“父类的引用指向子类的对象”，这样就实现了多态</p><p>如果没有多态呢？会很麻烦，比如：下面注释掉之前的animalCry函数，那么传入的是Dog的话需要写一个函数，传入Cat的话又要写一个函数，也就是重载。</p><img title="" src="'+o+'" alt="" data-align="center" width="343"><h2 id="final关键字" tabindex="-1"><a class="header-anchor" href="#final关键字" aria-hidden="true">#</a> Final关键字</h2><p>final修饰了变量，那么该变量值不可更改</p><p>final 修饰了方法，那么该方法不可被子类重写，但是可以被重载</p><p>final 修饰了类，那么该类不可以被继承</p>',32),v=[d,r,k,m];function h(g,b){return t(),e("div",null,v)}const _=a(u,[["render",h],["__file","changkao.html.vue"]]);export{_ as default};