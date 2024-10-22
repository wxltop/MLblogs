import{_ as n,o as s,c as a,e as t}from"./app-aa9cafec.js";const e={},p=t(`<h2 id="测试时数据增强" tabindex="-1"><a class="header-anchor" href="#测试时数据增强" aria-hidden="true">#</a> 测试时数据增强</h2><p>在预测的时候使用数据增强，通常被称为测试时的数据增强（Test-Time Augmentation, TTA）。主要目的是为了<strong>提高模型在新数据上的表现</strong>，<strong>提高预测结果的稳定性和精确性</strong>。</p><p>测试时的数据增强会对输入图像应用不同种类的增强技术（如旋转、翻转、缩放等），从而生成多个变种图像。然后，模型分别<strong>对这些变种图像进行预测，最终将这些预测结果进行合并（例如，通过投票或平均）来得出最终的预测结果</strong>。这样做的效果提升主要体现在：1. 增加鲁棒性：对同一图像的不同变种进行预测，可以减少单一图像中噪声或者特定视角、光照条件对预测结果的影响。2. 提升精确度：不同的变种可能包含有助于更好地识别目标的信息，通过结合这些信息可以提高预测结果</p><h2 id="特征空间数据增强" tabindex="-1"><a class="header-anchor" href="#特征空间数据增强" aria-hidden="true">#</a> 特征空间数据增强</h2><p>对于图像经过backbone得到的向量进行操作以达到数据增强效果是一种称为特征空间数据增强（feature space augmentation）的技术。这种技术可以在保持图像原始信息的同时，增加模型的泛化能力。以下是一些可以用于向量的特征空间增强方法和相关代码示例：</p><ol><li>向量随机扰动 (Random Perturbation) 向量随机扰动指的是给向量加上一个小幅度的随机噪声，这样做可以模拟图像中的小幅度变化。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch

<span class="token keyword">def</span> <span class="token function">random_perturbation</span><span class="token punctuation">(</span>features<span class="token punctuation">,</span> noise_std<span class="token operator">=</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    noise <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn_like<span class="token punctuation">(</span>features<span class="token punctuation">)</span> <span class="token operator">*</span> noise_std
    <span class="token keyword">return</span> features <span class="token operator">+</span> noise

<span class="token comment"># 假设我们的向量是 features</span>
features <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 假设向量长度为512</span>
features_aug <span class="token operator">=</span> random_perturbation<span class="token punctuation">(</span>features<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>向量混合 (Vector Mixup) 混合是将两个不同的向量按照一定比例混合起来，这对于提高模型对于不同特征组合的理解能力很有帮助。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">vector_mixup</span><span class="token punctuation">(</span>features1<span class="token punctuation">,</span> features2<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    lam <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>beta<span class="token punctuation">(</span>alpha<span class="token punctuation">,</span> alpha<span class="token punctuation">)</span>
    <span class="token keyword">return</span> lam <span class="token operator">*</span> features1 <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> lam<span class="token punctuation">)</span> <span class="token operator">*</span> features2

<span class="token comment"># 假设我们有两个向量 features1 和 features2</span>
features1 <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
features2 <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
features_aug <span class="token operator">=</span> vector_mixup<span class="token punctuation">(</span>features1<span class="token punctuation">,</span> features2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>向量掩蔽 (Vector Masking) 向量掩蔽是指随机将向量的某些部分置零，可以类比于图像中的随机遮挡。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">vector_masking</span><span class="token punctuation">(</span>features<span class="token punctuation">,</span> mask_prob<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    mask <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand_like<span class="token punctuation">(</span>features<span class="token punctuation">)</span> <span class="token operator">&gt;</span> mask_prob
    <span class="token keyword">return</span> features <span class="token operator">*</span> mask<span class="token punctuation">.</span><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 假设我们的向量是 features</span>
features <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
features_aug <span class="token operator">=</span> vector_masking<span class="token punctuation">(</span>features<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>向量投影 (Vector Projection) 向量投影是将向量投影到另一个随机生成的向量上，这可以模拟图像的各种变换。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">vector_projection</span><span class="token punctuation">(</span>features<span class="token punctuation">,</span> projection_size<span class="token operator">=</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    projection_vector <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token punctuation">(</span>features<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> projection_size<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">0.5</span>
    projection_vector <span class="token operator">=</span> projection_vector <span class="token operator">/</span> torch<span class="token punctuation">.</span>norm<span class="token punctuation">(</span>projection_vector<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> torch<span class="token punctuation">.</span>mm<span class="token punctuation">(</span>features<span class="token punctuation">,</span> projection_vector<span class="token punctuation">)</span>

<span class="token comment"># 假设我们的向量是 features</span>
features <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
features_aug <span class="token operator">=</span> vector_projection<span class="token punctuation">(</span>features<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，上述代码示例使用了PyTorch库进行操作，各方法的参数如噪声的标准差、混合的alpha值、掩蔽的概率等应根据实际情况进行调整。在实际使用这些方法之前，建议在验证集上进行评估以确定增强方法对于模型性能的影响。</p>`,14),o=[p];function c(u,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","augmentation.html.vue"]]);export{r as default};
