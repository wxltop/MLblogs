import{_ as e,r as o,o as l,c,a as n,b as s,d as t,e as p}from"./app-aa9cafec.js";const i={},u=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"INFO"),n("p",null,"主要记录hot100之外的常考题")],-1),r=n("h2",{id:"双指针",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#双指针","aria-hidden":"true"},"#"),s(" 双指针")],-1),k=n("h3",{id:"_16-最接近三数之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_16-最接近三数之和","aria-hidden":"true"},"#"),s(" 16.最接近三数之和")],-1),d={href:"https://leetcode.cn/problems/3sum-closest/description/",target:"_blank",rel:"noopener noreferrer"},m=p(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">threeSumClosest</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        ans <span class="token operator">=</span> <span class="token number">0</span>
        gap <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token string">&#39;inf&#39;</span><span class="token punctuation">)</span>
        nums <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            a <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">and</span> a <span class="token operator">==</span> nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">continue</span>
            j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
            k <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>

            <span class="token keyword">while</span> j <span class="token operator">&lt;</span> k<span class="token punctuation">:</span>
                val <span class="token operator">=</span> a <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
                <span class="token keyword">if</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>val <span class="token operator">-</span> target<span class="token punctuation">)</span> <span class="token operator">&lt;</span> gap<span class="token punctuation">:</span>
                    gap <span class="token operator">=</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>val <span class="token operator">-</span> target<span class="token punctuation">)</span>
                    ans <span class="token operator">=</span> val
                <span class="token keyword">if</span> val <span class="token operator">&gt;</span> target<span class="token punctuation">:</span>
                    k <span class="token operator">-=</span> <span class="token number">1</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    j <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> ans 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本题与《三数之和》的区别在于while循环里面，特别是得到ans后，三数之和会j-=1，k+=1，然后循环去重。但是这里不能，还有不论是否满足<code>abs(val - target) &lt; gap</code>，都要进入判断val和target大小，不然没法移动j和k指针。</p><h2 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h2><h3 id="衣橱整理" tabindex="-1"><a class="header-anchor" href="#衣橱整理" aria-hidden="true">#</a> 衣橱整理</h3>`,4),v={href:"https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/description/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"hot100",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hot100","aria-hidden":"true"},"#"),s(" hot100")],-1),h=n("p",null,"hot100中不太熟悉的题目",-1),g=n("h3",{id:"单词搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#单词搜索","aria-hidden":"true"},"#"),s(" 单词搜索")],-1),w={href:"https://leetcode.cn/problems/word-search/",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"本题注意几点：",-1),y=n("ol",null,[n("li",null,[n("p",null,"visited[i][j]=True，访问完成(i, j)四个方向后，需要将visited[i][j]=False，即回溯的过程。")]),n("li",null,[n("p",null,"需要判断矩阵中是否存在单词，需要以每一个点作为起点开始遍历，而不是仅仅左上角。")]),n("li",null,[n("p",null,[s("时间复杂度："),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"M"),n("mi",null,"N"),n("msup",null,[n("mn",null,"3"),n("mi",null,"L")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(MN3^L)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0913em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"MN"),n("span",{class:"mord"},[n("span",{class:"mord"},"3"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8413em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"L")])])])])])])]),n("span",{class:"mclose"},")")])])]),s("，L是单词长度，每一个字母都可以作为起点搜索，每个字母可以搜索三个方向（来的方向不搜索），搜索的深度为L")])]),n("li",null,[n("p",null,[s("空间复杂度："),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"max"),n("mo",null,"⁡"),n("mo",{stretchy:"false"},"("),n("mi",null,"M"),n("mi",null,"N"),n("mo",{separator:"true"},","),n("mi",null,"L"),n("mo",{stretchy:"false"},")"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(\\max(MN,L))")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mop"},"max"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"MN"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"L"),n("span",{class:"mclose"},"))")])])]),s("，L是递归栈的深度")])])],-1),_=p(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> p<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> i_j<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> p <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        i<span class="token punctuation">,</span> j <span class="token operator">=</span> i_j
        m <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> i <span class="token operator">&gt;=</span> m <span class="token keyword">or</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> j <span class="token operator">&gt;=</span> n<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">if</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>

        <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> word<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">:</span>
            p <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>

        visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
        ans <span class="token operator">=</span> <span class="token boolean">False</span>
        ans <span class="token operator">|</span><span class="token operator">=</span> self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> p<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> <span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        ans <span class="token operator">|</span><span class="token operator">=</span> self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> p<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> <span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        ans <span class="token operator">|</span><span class="token operator">=</span> self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> p<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        ans <span class="token operator">|</span><span class="token operator">=</span> self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> p<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token keyword">return</span> ans

    <span class="token keyword">def</span> <span class="token function">exist</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> board<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> word<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        m <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

        visited <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">False</span><span class="token punctuation">]</span> <span class="token operator">*</span> n <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span>board<span class="token punctuation">,</span> word<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> visited<span class="token punctuation">,</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_33-搜索旋转排序数组" tabindex="-1"><a class="header-anchor" href="#_33-搜索旋转排序数组" aria-hidden="true">#</a> 33. 搜索旋转排序数组</h3>`,2),x={href:"https://leetcode.cn/problems/search-in-rotated-sorted-array/description/",target:"_blank",rel:"noopener noreferrer"},j=p(`<p>二分法解题，清楚流程，不要完全靠印象</p><ol><li><p>先判断Nums数组的形状，是左半部分长还是右半部分长，即确定mid的位置</p></li><li><p>若mid位于左半部分，则左半部分长，此时再判断target是位于左边界区域还是其他区域，位于左边界区域是最简单的，此时蜕变成了常规的二分法</p></li><li><p>若mid位于右半部分，则右半部分长，此时再判断target是位于右边界区域还是其他区域，位于右边界区域是最简单的，此时蜕变成了常规的二分法</p></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">search</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        left <span class="token operator">=</span> <span class="token number">0</span>
        right <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">while</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">:</span>
            mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
            <span class="token comment"># 先判断nums的形状，是左边部分长还是右边部分长</span>
            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span>
                <span class="token keyword">return</span> mid
            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span>  <span class="token comment"># mid位于左半部分</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">:</span>  <span class="token comment"># left boarder</span>
                    right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># mid位于右半部分</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>  <span class="token comment"># right boarder</span>
                    left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
            

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function L(M,N){const a=o("ExternalLinkIcon");return l(),c("div",null,[u,r,k,n("p",null,[n("a",d,[s("16. 最接近的三数之和 - 力扣（LeetCode）"),t(a)])]),m,n("p",null,[n("a",v,[s("LCR 130. 衣橱整理 - 力扣（LeetCode）"),t(a)])]),b,h,g,n("p",null,[n("a",w,[s("79. 单词搜索 - 力扣（LeetCode）"),t(a)])]),f,y,_,n("p",null,[n("a",x,[s("33. 搜索旋转排序数组 - 力扣（LeetCode）"),t(a)])]),j])}const C=e(i,[["render",L],["__file","leetcode.html.vue"]]);export{C as default};