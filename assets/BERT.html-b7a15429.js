import{_ as n,r as i,o as l,c as o,a as s,b as e,d as t,e as r}from"./app-aa9cafec.js";const c="/MLblogs/assets/2024-03-27-14-38-29-image-9757ad2c.png",p="/MLblogs/assets/2024-03-18-09-42-42-image-7e96e978.png",m="/MLblogs/assets/2024-03-27-16-31-12-image-0a3ac343.png",h="/MLblogs/assets/2024-03-27-17-24-47-image-e7f62fb1.png",d="/MLblogs/assets/2024-03-27-17-31-52-image-a3ebafc0.png",g={},b={class:"custom-container info"},u=s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8h.01"}),s("path",{d:"M11 12h1v4h1"})])],-1),f=s("p",{class:"custom-container-title"},"INFO",-1),_={href:"https://www.bilibili.com/video/BV1Ey4y1874y/?p=2&spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=29624dbb703a504c9a36c90ccf9558d4",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bilibili.com/video/BV1PL411M7eQ/?spm_id_from=333.337.search-card.all.click&vd_source=29624dbb703a504c9a36c90ccf9558d4",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV1AF411b7xQ/?spm_id_from=333.788&vd_source=29624dbb703a504c9a36c90ccf9558d4",target:"_blank",rel:"noopener noreferrer"},T=r('<h2 id="bert" tabindex="-1"><a class="header-anchor" href="#bert" aria-hidden="true">#</a> BERT</h2><p>BERT使用多个transformer的encoder堆叠而成。bert希望将CV中的在大数据集中预训练，然后再在小数据集中微调来适应下游任务的这一效果体现在NLP中。</p><h3 id="预训练和微调" tabindex="-1"><a class="header-anchor" href="#预训练和微调" aria-hidden="true">#</a> 预训练和微调</h3><p>使用大量无标签的数据预训练，然后使用有标号的领域数据微调，微调过程所有参数都会被改动。BERT是第一个基于微调的模型，在一系列的NLP任务上（包括句子层面和词元层面）都取得了最好的成绩。</p><h3 id="和gpt相比" tabindex="-1"><a class="header-anchor" href="#和gpt相比" aria-hidden="true">#</a> 和GPT相比</h3><p>相比于GPT这种仅通过前面的内容预测下一个词，bert使用完形填空的方式，根据单词的上下文来预测该单词，所以是双向的。双向的好处：可以通过上下文来理解一个句子或者一个单词的含义。bert除了要做完形填空之外，还有一个句子层面的任务，即给定两个句子，判断这两个句子是否是相邻的，还是说只是随机采样的两个句子，让模型学习句子层面的信息。</p><h3 id="bert的模型规模" tabindex="-1"><a class="header-anchor" href="#bert的模型规模" aria-hidden="true">#</a> bert的模型规模</h3><p>假设L表示encoder的层数，H表示隐藏层大小，A是多头注意力中的头的个数。bert base大小为：L=12, H=768, A = 12，参数总量为110M；bert large大小为：L=24, H = 1024, A = 16， 参数总量为340M。</p><h3 id="bert的参数量计算" tabindex="-1"><a class="header-anchor" href="#bert的参数量计算" aria-hidden="true">#</a> bert的参数量计算</h3><p>先看transformer的encoder，假设词的总量为30k，隐层大小为H，那么一个encoder的参数量由：self-attention部分+FFN部分，self-attention部分有QKV（大小都为HxH），之后还有一个HxH的矩阵用于融合，self-attention部分的参数量=4HxH，FFN部分由两个MLP组成，第一个MLP输入H，输出4H，第二个MLP输入是4H，输出是H，所以FFN部分的参数量=8HxH。除此之外还有embedding部分，参数量为30000xH。那么总的参数量为：30000xH + Lx(4HxH+8HxH)。</p><img src="'+c+'" title="" alt="" data-align="center"><h3 id="输入和输出" tabindex="-1"><a class="header-anchor" href="#输入和输出" aria-hidden="true">#</a> 输入和输出</h3><p>可以输入一个句子，可以输入两个句子的拼接，统称为输入一个序列。如果使用空格来切分单词，那么一个单词就是一个token，这样数据量相当大，对于模型权重而言，都集中在了embedding处，所以使用<strong>wordpiece</strong>来切词，其核心思想是：若一个词出现的频率不太大，那么可以将其切分开，其子序列很可能是一个词根，若这个子序列出现的概率较大，那么只保留这个子序列即可。这样可以将相对而言比较长的词切分为很多的片段，这些片段而且还是经常出现的，这样可以用一个相对比较小的字典来表示(3W)一个比较大的文本了。每一个序列的<strong>第一个单词是[CLS]</strong>，bert希望这个词能表示整个序列的信息，比如句子层面的信息，因为bert用的是transformer结构，每一个单词都可以和其他所有单词做交互，所以放在第一个词是完全可以的。在NSP任务重，因为允许输入两个句子，所以句子之间用一个[SEP]隔开。</p><p>输入到transformer encoder的内容有三个部分：token embeddings：比如随机初始化或者word2vec, Segment Embedding：表明这个词属于哪个句子（NSP需要两个句子）, position embeddings（可学习的）。</p><img src="'+p+'" title="" alt="" data-align="center"><h3 id="预训练" tabindex="-1"><a class="header-anchor" href="#预训练" aria-hidden="true">#</a> 预训练</h3><p><strong>第一个任务：完形填空（MLM：掩码语言模型）</strong>。对于一个输入的词元序列，如果一个词元是由wordpiece生成，那么其有15%的概率随机替换成一个掩码，但是特殊词元比如第一个词元[CLS]和中间分割的词元[SEP]就不做替换了，但是这样做有点问题，因为预训练的时候会将15%的词元mask掉，即换成[MASK]，但是在微调的时候是没有这个的，这导致在预训练和微调的时候有一点不一样，文中的解决方案是：对于这15%需要被替换的词元，有80%的概率是真的替换成了[MASK]，还有10%的概率替换成一个随机的词元，还有10%的概率不动（这个其实对应的是微调情况下的数据），具体80%、10%、10%如何选出来的，论文说有消融实验。</p><p><strong>第二个任务：预测下一个句子（NSP: next sentence prediction）。</strong> 训练的时候，选取一个句子A和一个句子B组合作为一个样本，其中B有50%的概率是A之后，还有50%的概率是随机从其他地方截取的。加入这个代价函数可以极大提升QA和语言推理的效果。</p><h3 id="微调" tabindex="-1"><a class="header-anchor" href="#微调" aria-hidden="true">#</a> 微调</h3><p>bert和transformer的编码器-解码器架构有什么不一样？transformer的编码器是看不到解码器的内容的，所以bert这样encoder-only的架构可以弥补这个问题，但是代价就是，无法做机器翻译的任务了。微调过程中，对于下游任务只需要修改输入和输出即可。</p><p><strong>GLUE：</strong> 是一个句子层面的任务，最终将[CLS]词元的向量拿出来，然后学习一个输出层，经过一个softmax就可以得到需要的结果，这就是一个多分类问题。</p><p><strong>QA：</strong> 给定一段话，从那段话中找到答案，这个答案是存在于那段话里的，只需要输出那段话起始和结束的位置即可。所以问题就转化为了，对于每一个词元，判断其是不是答案的开头、是否为答案的结尾。具体而言，学习两个向量S、E，分别表示的是每一个词元是答案的开始、答案的结尾。具体而言，用S和第二句输出的话中的每一个词元相乘，然后做softmax：</p><img title="" src="'+m+'" alt="" data-align="center"><h3 id="如何微调bert" tabindex="-1"><a class="header-anchor" href="#如何微调bert" aria-hidden="true">#</a> 如何微调BERT</h3><p>微调的四个步骤：比如做微博文本情感分析</p><ol><li><p>使用预训练模型（pretrain）</p></li><li><p>在相同领域的数据集中继续训练（domain transfer, 在大量微博文本预训练）</p></li><li><p>在任务相关的小数据集中继续训练（task transfer, 微博情感文本，有的文本不属于情感文本范畴）</p></li><li><p>在任务相关数据上做具体任务（fine-tune）</p></li></ol><h2 id="gpt" tabindex="-1"><a class="header-anchor" href="#gpt" aria-hidden="true">#</a> GPT</h2><p>GPT比BERT早出来，BERT中的预训练、微调思路也是来自GPT。</p><h3 id="transformer编码器和解码器的区别" tabindex="-1"><a class="header-anchor" href="#transformer编码器和解码器的区别" aria-hidden="true">#</a> Transformer编码器和解码器的区别</h3><p>编码器对第i个元素抽取特征的时候，可以看到整个序列所有的元素，但是对解码器而言，因为有掩码的存在，在抽取第i个元素的特征的时候，只能看到当前元素和之前的元素，后面的元素由于有掩码的存在，在做注意力机制的时候，注意力=0，所以是不看后面的元素的。</p><h3 id="预训练-1" tabindex="-1"><a class="header-anchor" href="#预训练-1" aria-hidden="true">#</a> 预训练</h3><p>预训练使用大量无标注的语料，给定一个窗口大小k，根据窗口内容预测下一个词，损失函数如下：</p><img src="'+h+'" title="" alt="" data-align="center"><p>Transformer decoder会将前一个输出作为输入，来预测下一个单词。</p><h2 id="微调-1" tabindex="-1"><a class="header-anchor" href="#微调-1" aria-hidden="true">#</a> 微调</h2>',35),k=s("p",null,[e("给定一个序列"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"x"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"x"),s("mn",null,"2")]),s("mo",{separator:"true"},","),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"x"),s("mi",null,"m")])]),s("annotation",{encoding:"application/x-tex"},"x_1,x_2,...,x_m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),e("，以及该序列的标号y，目的是预测该标号。将序列输入预训练模型中，得到最后一层transformer的输出之后（所有单词都预测完成之后），经过一个输出层，再经过softmax，预测概率：")],-1),w=r('<img src="'+d+'" title="" alt="" data-align="center"><p>但是论文说，给定序列，预测序列对应的标号y 与 给定序列，预测下一个词的两种目标函数都考虑进来效果更好。</p><h2 id="相关面试题" tabindex="-1"><a class="header-anchor" href="#相关面试题" aria-hidden="true">#</a> 相关面试题</h2><p><strong>为什么BERT使用transformer编码器架构，GPT使用transformer解码器架构？</strong></p><blockquote><p>根据任务定义的不同，GPT就是基于之前的信息来预测下一个单词，后面的内容不可以看见，而transformer的解码器中有一个mask self-attention，就能完成这个任务，所以选取这个模型可行。而BERT要做的是根据单词的上下文来预测这个单词，这就需要保证单词之间都能互相可见，而transformer的encoder就具备这样的能力，所以使用encoder来完成完形填空任务是可行的。</p></blockquote><p><strong>GPT比BERT效果差的可能原因？</strong></p><blockquote><p>在参数量没有达到一定的规模的情况下，GPT需要做的是预测未来内容的任务，而BERT完成的是根据未来和过去，预测当下内容的任务。从任务本身讲，GPT可能效果要差一点，但是后续的GPT3表明，当规模做到一定大的时候，效果更惊艳。</p></blockquote><p><strong>BERT的双向体现在哪？</strong></p><blockquote><p>双向性体现在其预训练过程和模型架构中：</p><p><strong>预训练任务</strong>：</p><ul><li>BERT 使用了两种不同的预训练任务来实现双向性：Masked Language Model（MLM）和Next Sentence Prediction（NSP）。</li><li>MLM 任务要求模型预测输入文本中部分单词被遮盖后的原始单词，这使得模型在预训练过程中需要考虑上下文中的所有单词信息，以便更好地填补被遮盖的单词。</li><li>NSP 任务要求模型判断两个句子是否是连续的，这鼓励模型学习句子之间的语义关系，包括句子的顺序、逻辑和连续性，使得模型能够理解句子之间的上下文关系。</li></ul><p><strong>模型架构</strong>：</p><ul><li>BERT 使用了 Transformer 编码器作为其基础模型架构。Transformer 模型由多个编码器层组成，每个编码器层都是一个由自注意力机制和前馈神经网络组成的模块。</li><li>在自注意力机制中，Transformer 模型能够同时考虑输入序列中每个位置的上下文信息，从而实现了双向的信息流动。这意味着在每个位置处，模型都可以利用序列中其他位置的信息来编码该位置的表示。</li></ul></blockquote>',9);function P(B,L){const a=i("ExternalLinkIcon");return l(),o("div",null,[s("div",b,[u,f,s("p",null,[s("a",_,[e("Bert输入部分详细解读_哔哩哔哩_bilibili"),t(a)])]),s("p",null,[s("a",x,[e("BERT 论文逐段精读【论文精读】_哔哩哔哩_bilibili"),t(a)])]),s("p",null,[s("a",v,[e("GPT，GPT-2，GPT-3 论文精读【论文精读】_哔哩哔哩_bilibili"),t(a)])])]),T,k,w])}const E=n(g,[["render",P],["__file","BERT.html.vue"]]);export{E as default};
