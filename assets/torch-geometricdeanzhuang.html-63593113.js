import{_ as t,r as o,o as c,c as r,a,b as e,d as i,e as n}from"./app-aa9cafec.js";const p="/MLblogs/imgs/2023-08-07-08-57-57-image.png",l={},d=n(`<h2 id="版本确定" tabindex="-1"><a class="header-anchor" href="#版本确定" aria-hidden="true">#</a> 版本确定</h2><p>查看python、torch、cuda版本：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> python

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> torch
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> torch<span class="token punctuation">.</span>__version__
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> torch<span class="token punctuation">.</span>version<span class="token punctuation">.</span>cuda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我的版本：</p><p>python 3.7.12</p><p>torch 1.12.1</p><p>CUDA 11.3</p><h2 id="下载和安装" tabindex="-1"><a class="header-anchor" href="#下载和安装" aria-hidden="true">#</a> 下载和安装</h2>`,8),h={href:"https://pytorch-geometric.com/whl/",target:"_blank",rel:"noopener noreferrer"},u=n('<div align="center"><img src="'+p+`" title="" alt="" data-align="center"></div><p>对于<code>torch_sparse</code>，<code>torch_scatter</code>，<code>torch_cluster</code>，找到对应版本的安装包下载到本地，然后<code>pip install</code>，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 注意是安装包名：</span>
pip <span class="token function">install</span> torch_cluster-1.6.0+pt112cu113-cp37-cp37m-linux_x86_64.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后安装<code>geometric</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install torch<span class="token operator">-</span>geometric
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function m(g,v){const s=o("ExternalLinkIcon");return c(),r("div",null,[d,a("p",null,[e("去 "),a("a",h,[e("pytorch-geometric.com/whl/"),i(s)]),e(" 找到对应版本：")]),u])}const b=t(l,[["render",m],["__file","torch-geometricdeanzhuang.html.vue"]]);export{b as default};