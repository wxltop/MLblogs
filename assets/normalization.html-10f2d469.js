import{_ as n,o as s,c as a,e}from"./app-aa9cafec.js";const t={},o=e(`<h2 id="l2-norm和z-score-norm的区别" tabindex="-1"><a class="header-anchor" href="#l2-norm和z-score-norm的区别" aria-hidden="true">#</a> L2-norm和Z-score norm的区别</h2><p>这两种标准化方法都是常见的数据预处理技术，用于在机器学习和统计分析中处理数据。它们分别是L2标准化（也称为向量范数归一化）和减去均值然后除以方差的标准化（也称为Z-score标准化）。</p><ol><li><p>L2标准化（向量范数归一化）： L2标准化是指将数据向量的每个元素除以其L2范数（也称为欧氏范数）。L2范数是指向量元素的平方和的平方根。通过L2标准化，数据向量的每个元素都被压缩到一个[0, 1]的范围内，使得整个向量成为一个单位向量。L2标准化在处理稀疏数据和特征向量长度不一致的数据时非常有用。</p></li><li><p>减去均值然后除以方差的标准化（Z-score标准化）： Z-score标准化是指对数据进行平均值减去均值，然后除以标准差。这种标准化方法使得数据的均值为0，标准差为1。Z-score标准化后的数据分布在正负无穷大的范围内，适合于大多数的统计分析方法和机器学习算法。它消除了特征之间的量纲差异，使得各个特征对模型的影响权重相对均衡。</p></li></ol><p>区别：</p><ul><li>L2标准化通过将每个样本向量除以其L2范数，使得所有样本的范数都变为1。它主要用于处理向量数据，并且能保留向量的方向信息。适用于稀疏数据和长度不一致的向量数据。</li><li>Z-score标准化是通过减去均值然后除以标准差，将数据映射到均值为0、标准差为1的分布。它适用于处理具有不同量纲的数据，可以使得特征之间具有相同的尺度。</li></ul><p>适用场景：</p><ul><li>L2标准化适用于特征向量的方向很重要的情况，比如文本分类中的词袋模型或者特征向量长度不一致的情况。</li><li>Z-score标准化适用于大多数统计分析和机器学习算法，尤其是涉及距离度量、梯度下降优化等的算法。它能消除特征之间的量纲差异，使得模型训练更稳定，避免特征权重受到尺度影响过大。</li></ul><p>给定一个张量，形状为：[b, l, s, h]，如何在l, s维度执行z-score 标准化？</p><p>要在张量的l维度和s维度上执行Z-score标准化，你可以使用PyTorch的<code>torch.mean</code>和<code>torch.std</code>函数来计算均值和标准差，并使用广播机制进行标准化。下面是实现的代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch

<span class="token comment"># 假设你有一个形状为 [b, l, s, h] 的张量 data</span>
data <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># 计算在 l 和 s 维度上的均值和标准差，保持维度为 [b, 1, 1, h]</span>
mean <span class="token operator">=</span> torch<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>data<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> keepdim<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
std <span class="token operator">=</span> torch<span class="token punctuation">.</span>std<span class="token punctuation">(</span>data<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> keepdim<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># 进行 Z-score 标准化</span>
normalized_data <span class="token operator">=</span> <span class="token punctuation">(</span>data <span class="token operator">-</span> mean<span class="token punctuation">)</span> <span class="token operator">/</span> std

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原始数据：&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;标准化后的数据：&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>normalized_data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们使用<code>dim=(1, 2)</code>来计算l维度和s维度上的均值和标准差，并通过<code>keepdim=True</code>保持维度，这样均值和标准差的形状将变为 <code>[b, 1, 1, h]</code>。然后，我们使用广播机制将均值和标准差应用于整个张量，最终得到在l和s维度上执行Z-score标准化后的张量。</p><h2 id="bn" tabindex="-1"><a class="header-anchor" href="#bn" aria-hidden="true">#</a> BN</h2><h2 id="ln" tabindex="-1"><a class="header-anchor" href="#ln" aria-hidden="true">#</a> LN</h2>`,13),p=[o];function c(l,i){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","normalization.html.vue"]]);export{u as default};