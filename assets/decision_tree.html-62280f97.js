import{_ as t,o as n,c as e,a as s,b as a,e as l}from"./app-aa9cafec.js";const m={},i=s("h2",{id:"信息熵与信息增益",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#信息熵与信息增益","aria-hidden":"true"},"#"),a(" 信息熵与信息增益")],-1),p=s("p",null,[a("一个问题的不确定性越大，要搞清楚这个问题，"),s("strong",null,"需要了解的信息越多，其信息熵越大"),a("。信息熵的计算公式：")],-1),r=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H"),s("mo",{stretchy:"false"},"("),s("mi",null,"X"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mo",null,"−"),s("munder",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"x"),s("mo",null,"∈"),s("mi",null,"X")])]),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mn",null,"2")]),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," H(X)=-\\sum_{x\\in X}P(x)\\log_2 P(x) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3717em","vertical-align":"-1.3217em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.05em"}},[s("span",{style:{top:"-1.8557em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"x"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.07847em"}},"X")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3217em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.207em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")])])])])],-1),c=l('<p>举个例子：盒子里全是白球，问取出一个球，其颜色？这是一个确定性事件，概率为1，<strong>不需要使用额外的信息就可以确定答案</strong>，所以信息熵为0。</p><p>将概率P(x)作为横坐标，信息熵Entropy作为纵坐标，将信息熵和概率的函数关系Entropy=-P(x)logP(x)在二维坐标轴上画出来，容易发现，当P(x)接近0和1的时候，信息熵是最小的。其不确定性最小，数据越纯。</p><p>所以<strong>信息增益</strong>可以用来衡量数据变得更有序、更纯净的程度的指标。</p><h2 id="决策树的分裂原理" tabindex="-1"><a class="header-anchor" href="#决策树的分裂原理" aria-hidden="true">#</a> 决策树的分裂原理</h2><p>决策树的构建过程，是从训练数据中归纳出一组分类规则，使得具有较强的泛化能力。</p><p><strong>构建一个决策树的时候，应该优选选择哪个特征作为划分数据集呢？</strong></p><blockquote><p>遍历所有特征，分别计算利用该特征来划分数据集前后信息熵的变化值，<strong>选择信息熵变化幅度（信息增益）最大的那个特征</strong>来优选作为数据集的划分依据。</p></blockquote><h2 id="决策树的创建" tabindex="-1"><a class="header-anchor" href="#决策树的创建" aria-hidden="true">#</a> 决策树的创建</h2><ol><li><p>计算数据集划分前的信息熵</p></li><li><p>遍历所有未作为划分条件的特征，分别计算根据每个特征划分数据集后的信息熵。</p></li><li><p>选择信息增益最大的特征，并使用该特征作为节点来划分数据</p></li><li><p>递归地处理被划分后的所有子数据集，从未被选择的特征里继续选择最优数据划分特征来划分数据集。</p></li></ol><p>那合适递归结束呢？两种方式：1. 所有特征都用完了；2. 划分后的信息增益足够小了。此时需要设定信息增益阈值。</p><h2 id="正则化" tabindex="-1"><a class="header-anchor" href="#正则化" aria-hidden="true">#</a> 正则化</h2><p>在构建决策树时，我们选择能最大化信息增益的特征来作为划分数据集的节点，但是极端情况下，容易走捷径，导致过拟合。比如使用物品的唯一ID来划分数据集，这样确实信息熵=0，非常纯净，但是不是我们希望看到的结果。</p><p>解决方法是，计算划分后的子数据集的信息熵时，<strong>加上一个和类别个数成正比的正则项，来作为最后的信息熵</strong>。这样当算法选择的某个类别较多的特征时，由于类别个数受到限制，导致最终的信息熵也会比较大。</p><h2 id="基尼不纯度" tabindex="-1"><a class="header-anchor" href="#基尼不纯度" aria-hidden="true">#</a> 基尼不纯度</h2><p>基尼不纯度（Gini impurity），也是衡量信息不纯度的指标，计算如下：</p>',15),o=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G"),s("mi",null,"i"),s("mi",null,"n"),s("mi",null,"i"),s("mo",{stretchy:"false"},"("),s("mi",null,"D"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("munder",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"x"),s("mo",null,"∈"),s("mi",null,"X")])]),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," Gini(D)=\\sum_{x\\in X}P(x)(1-P(x)) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"G"),s("span",{class:"mord mathnormal"},"ini"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3717em","vertical-align":"-1.3217em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.05em"}},[s("span",{style:{top:"-1.8557em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"x"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.07847em"}},"X")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3217em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},"))")])])])])],-1),h=l('<p>将基尼不纯度作为纵坐标，概率P(x)作为横坐标，画出来的图像和 以Entropy作为纵坐标时的图像一样，所以使用基尼不纯度也可以作为特征选择标准。</p><h2 id="剪枝算法" tabindex="-1"><a class="header-anchor" href="#剪枝算法" aria-hidden="true">#</a> 剪枝算法</h2><p>为防止过拟合，使用剪枝算法对决策树剪枝处理。分为前剪枝和后剪枝：</p><blockquote><p>前剪枝是在构造决策树的同时剪枝，若构建过程中，无法进一步降低信息熵，就停止创建分支，为了避免过拟合，可以设定一个阈值，当信息增益小于该阈值的时候，停止创建分支。</p></blockquote><blockquote><p>后剪枝是构造完成决策树之后进行剪枝。对拥有同样父节点的一组节点进行检查，若发现将他们合并之后，信息熵的增加量少于某一阈值，则可以将这一组节点合并为一个节点。</p><p>后剪枝的一个思路是：自底向上，从已经构建好的决策树中找到一个子树，然后用子树的根节点代替这课子树，作为新的叶子节点，然后使用交叉验证数据集来测试简化版本的决策树，看看错误率是否降低了。</p></blockquote><h2 id="常用决策树算法" tabindex="-1"><a class="header-anchor" href="#常用决策树算法" aria-hidden="true">#</a> 常用决策树算法</h2><p>常用决策树算法有ID3，C4.5，CART。</p><p>ID3：利用<strong>最大信息增益</strong>来选择特征，对数据集进行划分。</p><p>C4.5：利用<strong>信息增益比</strong>来进行特征的选择，<strong>不再使用信息增益</strong>，解决了ID3不能处理连续取值特征的问题。 信息增益比是在信息增益的基础上×一个调节参数，特征取值个数越多，该参数越小，信息增益比定义如下：</p>',9),g=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mtext",null,"gain"),s("mi",null,"R")]),s("mo",{stretchy:"false"},"("),s("mi",null,"D"),s("mo",{separator:"true"},","),s("mi",null,"F"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mtext",null,"gain"),s("mo",{stretchy:"false"},"("),s("mi",null,"D"),s("mo",{separator:"true"},","),s("mi",null,"F"),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("msub",null,[s("mtext",null,"Entropie"),s("mi",null,"F")]),s("mo",{stretchy:"false"},"("),s("mi",null,"D"),s("mo",{stretchy:"false"},")")])])]),s("annotation",{encoding:"application/x-tex"}," \\text{gain}_R(D,F)=\\frac{\\text{gain}(D, F)}{\\text{Entropie}_F(D)} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"gain")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2342em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.00773em"}},"R")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.363em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"Entropie")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2342em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"F")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"gain")]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),u=s("p",null,[a("调节参数为："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mtext",null,"Entropie"),s("mi",null,"F")]),s("mo",{stretchy:"false"},"("),s("mi",null,"D"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\text{Entropie}_F(D)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"Entropie")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2342em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"F")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mclose"},")")])])]),a("的倒数，表示数据集D以特征F作为随机变量的熵，n为特征F取值的个数：")],-1),y=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mtext",null,"Entropie"),s("mi",null,"F")]),s("mo",{stretchy:"false"},"("),s("mi",null,"D"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mo",null,"−"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"n")]),s("mfrac",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("msub",null,[s("mi",null,"D"),s("mi",null,"i")]),s("mi",{mathvariant:"normal"},"∣")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"D"),s("mi",{mathvariant:"normal"},"∣")])]),s("mi",null,"log"),s("mo",null,"⁡"),s("mfrac",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("msub",null,[s("mi",null,"D"),s("mi",null,"i")]),s("mi",{mathvariant:"normal"},"∣")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"D"),s("mi",{mathvariant:"normal"},"∣")])])]),s("annotation",{encoding:"application/x-tex"}," \\text{Entropie}_F(D)=-\\sum_{i=1}^n\\frac{|D_i|}{|D|}\\log\\frac{|D_i|}{|D|} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"Entropie")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2342em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"F")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.9291em","vertical-align":"-1.2777em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mord"},"∣")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"∣")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mord"},"∣")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"∣")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),d=[i,p,r,c,o,h,g,u,y];function v(x,b){return n(),e("div",null,d)}const _=t(m,[["render",v],["__file","decision_tree.html.vue"]]);export{_ as default};