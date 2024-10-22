import{_ as o,r as p,o as c,c as l,a as n,b as s,d as t,e}from"./app-aa9cafec.js";const i="/MLblogs/assets/2024-02-03-12-58-33-image-42afdec4.png",r="/MLblogs/assets/2024-02-03-13-03-42-image-31e6881f.png",u={},d={class:"custom-container info"},k=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),h=n("p",{class:"custom-container-title"},"INFO",-1),x=n("p",null,"深度可分离卷积由mobilenet提出，旨在将常规的卷积操作分为两个步骤：先只考虑空间计算，不进行通道融合（Depthwise）；然后进行通道融合（Pointwise）。",-1),_={href:"https://zhuanlan.zhihu.com/p/165632315",target:"_blank",rel:"noopener noreferrer"},m=e('<h2 id="常规卷积" tabindex="-1"><a class="header-anchor" href="#常规卷积" aria-hidden="true">#</a> 常规卷积</h2><p>输入：5x5x3特征图</p><p>输出：3x3x4特征图</p><p>卷积核：3x3</p><p>参数量：3x3x3x4 = 108 (<strong>卷积核大小x输入通道数x输出通道数</strong>)</p><p>计算量（主要算乘法）：3x3x3x(5 - 2)x(5 - 2)x4 = 972 （<strong>卷积核W x 卷积核H x (图片W-卷积核W+1) x (图片H-卷积核H+1) x 输入通道数 x 输出通道数</strong>）</p><h2 id="深度可分离卷积" tabindex="-1"><a class="header-anchor" href="#深度可分离卷积" aria-hidden="true">#</a> 深度可分离卷积</h2>',7),b={href:"https://github.com/tstandley/Xception-PyTorch/blob/master/xception.py",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SeparableConv2d</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>in_channels<span class="token punctuation">,</span>out_channels<span class="token punctuation">,</span>kernel_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>stride<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>padding<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>dilation<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>bias<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>SeparableConv2d<span class="token punctuation">,</span>self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>conv1 <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span>in_channels<span class="token punctuation">,</span>in_channels<span class="token punctuation">,</span>kernel_size<span class="token punctuation">,</span>stride<span class="token punctuation">,</span>padding<span class="token punctuation">,</span>dilation<span class="token punctuation">,</span>groups<span class="token operator">=</span>in_channels<span class="token punctuation">,</span>bias<span class="token operator">=</span>bias<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>pointwise <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span>in_channels<span class="token punctuation">,</span>out_channels<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>bias<span class="token operator">=</span>bias<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">forward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> self<span class="token punctuation">.</span>conv1<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        x <span class="token operator">=</span> self<span class="token punctuation">.</span>pointwise<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        <span class="token keyword">return</span> x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Depthwise Convolution. 这一层卷积核的个数和输入通道数相等，每一个卷积核大小为3x3x1，只和对应的通道相乘( nn.Conv2d 的 groups 参数)，如下图：</p><img src="`+i+'" title="" alt="" data-align="center"><p>参数量：3x3x1x3 = 27 (<strong>卷积核Wx卷积核Hx输入通道数</strong>)</p><p>计算量：3x3x1x(5-2)x(5-2)x3 = 243 (<strong>卷积核W x 卷积核H x (图片W-卷积核W+1) x (图片H-卷积核H+1) x 输入通道数</strong>)</p></li><li><p>Pointwise Convolution. 沿着通道聚合，因为上一步没有通道聚合的过程。</p><img src="'+r+'" title="" alt="" data-align="center"><p>参数量：1x1x3x4 = 12 (<strong>1 x 1 x 输入通道数 x 输出通道数</strong>)</p><p>计算量：3x3x3x1x4 = 108 (<strong>特征层W x 特征层H x 输入通道数 x 1 x 输出通道数</strong>)</p></li></ul><p>参数量对比：108~12+27</p><p>计算量对比：972~243+108</p><p>所以理论上，深度可分离卷积应该更快，但是实际上却更慢。</p><h2 id="为什么实际更慢" tabindex="-1"><a class="header-anchor" href="#为什么实际更慢" aria-hidden="true">#</a> 为什么实际更慢</h2>',6),g={href:"https://zhuanlan.zhihu.com/p/613598877",target:"_blank",rel:"noopener noreferrer"},f=n("strong",null,"Depthwise 卷积操作对于流水线型 CPU、ARM 等移动设备更友好，对于并行计算能力强的 GPU 和具有加速功能的硬件（专用硬件设计-NPU 芯片）上比较没有效率",-1),w=n("strong",null,"多数时候 GPU芯片算力的瓶颈在于访存带宽",-1),y={href:"https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2201.03297.pdf",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"低 channel 数的情况下 (如网路的前几层)，在有加速功能的硬件使用普通 convolution 通常会比 separable convolution 有效率。（来源 MobileDets 论文）",-1);function C(z,H){const a=p("ExternalLinkIcon");return c(),l("div",null,[n("div",d,[k,h,x,n("p",null,[n("a",_,[s("深度可分离卷积（Depthwise separable convolution） - 知乎 (zhihu.com)"),t(a)])])]),m,n("p",null,[s("先给出代码"),n("a",b,[s("Xception-PyTorch/xception.py at master · tstandley/Xception-PyTorch (github.com)"),t(a)]),s("：")]),v,n("p",null,[n("a",g,[s("知识蒸馏、轻量化模型架构、剪枝…几种深度学习模型压缩方法 - 知乎 (zhihu.com)"),t(a)])]),n("p",null,[f,s("。Depthwise 卷积算子实际上是使用了大量的低 FLOPs、高数据读写量的操作。因为这些具有高数据读写量的操作，再加上"),w,s("，使得模型把大量的时间浪费在了从显存中读写数据上，从而导致 GPU 的算力没有得到“充分利用”。结论来源知乎文章-FLOPs与模型推理速度和论文 "),n("a",y,[s("G-GhostNet"),t(a)])]),P])}const M=o(u,[["render",C],["__file","depthwise_separable_convolutions.html.vue"]]);export{M as default};