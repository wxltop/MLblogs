import{_ as e,r as l,o as n,c as r,a as s,b as i,d as p,e as t}from"./app-aa9cafec.js";const c="/MLblogs/assets/2024-04-06-15-53-06-image-728dcee5.png",m="/MLblogs/assets/2024-04-06-16-16-14-image-865baa9c.png",o="/MLblogs/assets/2024-04-06-16-19-53-image-b48e3770.png",h="/MLblogs/assets/2024-04-06-16-21-00-image-00586c61.png",g={},d={class:"custom-container info"},u=s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8h.01"}),s("path",{d:"M11 12h1v4h1"})])],-1),v=s("p",{class:"custom-container-title"},"INFO",-1),y={href:"https://bbs.huaweicloud.com/blogs/362298#H11",target:"_blank",rel:"noopener noreferrer"},C=t('<h2 id="背景和动机" tabindex="-1"><a class="header-anchor" href="#背景和动机" aria-hidden="true">#</a> 背景和动机</h2><p>在推荐系统的精排模块，多任务学习的模型结构已成业界的主流。多任务学习（multi-task learning），本质上是希望使用一个模型完成多个任务的建模。在推荐系统中，多任务学习一般即指多目标学习（multi-label learning），不同目标输入相同的feature进行联合训练</p><h3 id="使用多任务学习的原因" tabindex="-1"><a class="header-anchor" href="#使用多任务学习的原因" aria-hidden="true">#</a> <strong>使用多任务学习的原因</strong></h3><p>（1）<strong>很多业界推荐的业务</strong>，就是一个多目标的建模场景，<strong>需要多目标共同优化</strong>。以vx视频号推荐为例，打开一个视频，（如下图）首页上：</p><ul><li>由于视频自动播放带来的“播放时长”、“完播率”（用户播放时长占视频长度的比例）目标</li><li>大量的互动标签，例如“点击好友头像”、“进入主页”、“关注”、“收藏”、“分享”、“点赞”、“评论”等。</li></ul><p>业界一般使用“日活用户”、“用户日均使用时长”、“留存率”来作为客观的<strong>间接的“用户满意度”</strong>（或者说算法工程师绩效）评价指标。</p><p><strong>而这些指标都是难以通过单一目标建模的</strong>，以使用时长为例，长视频播放长度天然大于短视频。所幸的是，虽然没有显式的用户满意度评价指标，但是现在的app都存在类似上述视频号推荐场景的丰富具体的隐式反馈。但这些独立的隐式反馈也存在一些<strong>挑战</strong>：</p><ul><li><strong>目标偏差</strong>：点赞、分享表达的满意度可能比播放要高</li><li><strong>物品偏差</strong>：不同视频的播放时长体现的满意度不一样，有的视频可能哄骗用户看到尾部（类似新闻推荐中的标题党）</li><li><strong>用户偏差</strong>：有的用户表达满意喜欢用点赞，有的用户可能喜欢用收藏</li></ul><p>因此我们需要使用多任务学习模型<strong>针对多个目标进行预测</strong>，并在<strong>线上融合多目标的预测结果进行排序</strong>。多任务学习也不能直接表达用户满意度，但是可以最大限度利用能得到的用户反馈信息进行充分的表征学习，并且可建模业务之间的关系，从而高效协同学习具体任务。</p><p><strong>（2）为什么要将多个任务合并在一个网络</strong></p><p>多任务学习的优势在于通过部分参数共享，联合训练，能在保证“还不错”的前提下，实现多目标共同提升。</p><p>一般推荐系统中排序模块延时需求在40ms左右，如果分别对每个任务单独训练一个模型，难以满足需求。出于控制成本的目的，需要将部分模型进行合并。合并之后，能更高效的利用训练资源和进行模型的迭代升级。</p><p><strong>（3）多任务学习的主要研究问题</strong></p><p>多任务的核心优势在于通过不同任务的网络参数共享，实现<strong>1+1&gt;2</strong>的提升，因此多任务学习的一大主流研究方向便是如何设计有效的网络结构。多个label的引入自然带来了多个loss，那么如何在<strong>联合训练中共同优化多个loss</strong>则是关键问题。</p><h2 id="esmm" tabindex="-1"><a class="header-anchor" href="#esmm" aria-hidden="true">#</a> ESMM</h2><p>ESMM(Entire Space Multi-Task Model)，不同的目标由于业务逻辑，有显式的依赖关系，例如<strong>曝光→点击→转化</strong>。用户必然是在商品曝光界面中，先点击了商品，才有可能购买转化。</p><p>ESMM模型虽然为多任务学习模型，但<strong>本质上是以CVR为主任务</strong>，<strong>引入CTR和CTCVR作为辅助任务，解决CVR预估的挑战</strong>。</p><h3 id="传统cvr中的ssb和ds问题" tabindex="-1"><a class="header-anchor" href="#传统cvr中的ssb和ds问题" aria-hidden="true">#</a> 传统CVR中的SSB和DS问题</h3><p>传统的CVR预估问题存在着两个主要的问题：<strong>样本选择偏差</strong>（sample selection bias，SSB）和<strong>稀疏数据</strong>。传统CVR预估使用的训练样本仅为灰色和黑色的数据：</p><img src="'+c+'" title="" alt="" data-align="center"><p>这会导致两个问题：</p><ul><li>样本选择偏差（sample selection bias，SSB）：CVR模型的正负样本集合={<strong>点击后未转化的负样本</strong>+<strong>点击后转化的正样本</strong>}，但是<strong>线上预测</strong>的时候是<strong>样本一旦曝光，就需要预测出CVR和CTR以排序</strong>，<strong>样本集合={曝光的样本}</strong>。构建的<strong>训练样本集相当于是从一个与真实分布不一致的分布中采样得到的</strong>，这一定程度上违背了机器学习中训练数据和测试数据独立同分布的假设。</li><li>训练数据稀疏（data sparsity，DS）：点击样本只占整个曝光样本的很小一部分，而转化样本又只占点击样本的很小一部分。<strong>如果只用点击后的数据训练CVR模型，可用的样本将极其稀疏</strong>。</li></ul><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><p>阿里妈妈团队提出ESMM，借鉴多任务学习的思路，引入两个辅助任务CTR、CTCVR(已点击然后转化)，同时消除以上两个问题。</p><p>三个预测任务如下：</p><ul><li><strong>pCTR</strong>：p(click=1 | impression)；</li><li><strong>pCVR</strong>: p(conversion=1 | click=1,impression)；</li><li><strong>pCTCVR</strong>: p(conversion=1, click=1 | impression) = p(click=1 | impression) * p(conversion=1 | click=1, impression)；</li></ul><blockquote><p>注意：其中只有CTR和CVR的label都同时为1时，CTCVR的label才是正样本1。如果出现CTR=0，CVR=1的样本，则为不合法样本，需删除。<br> pCTCVR是指，当用户已经点击的前提下，用户会购买的概率；pCVR是指如果用户点击了，会购买的概率。</p></blockquote><p>三个任务之间的关系为：</p>',28),w=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("munder",null,[s("munder",null,[s("mrow",null,[s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"y"),s("mo",null,"="),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mi",null,"z"),s("mo",null,"="),s("mn",null,"1"),s("mo",null,"∣"),s("mi",null,"x"),s("mo",{stretchy:"false"},")")]),s("mo",{stretchy:"true"},"⏟")]),s("mtext",null,"pCTCVR")]),s("mo",null,"="),s("munder",null,[s("munder",null,[s("mrow",null,[s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"y"),s("mo",null,"="),s("mn",null,"1"),s("mo",null,"∣"),s("mi",null,"x"),s("mo",{stretchy:"false"},")")]),s("mo",{stretchy:"true"},"⏟")]),s("mtext",null,"pCTR")]),s("mo",null,"×"),s("munder",null,[s("munder",null,[s("mrow",null,[s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"z"),s("mo",null,"="),s("mn",null,"1"),s("mo",null,"∣"),s("mi",null,"y"),s("mo",null,"="),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mi",null,"x"),s("mo",{stretchy:"false"},")")]),s("mo",{stretchy:"true"},"⏟")]),s("mtext",null,"pCVR")])]),s("annotation",{encoding:"application/x-tex"}," \\underbrace{p ( y = 1 , z = 1 ∣ x )}_{\\text{pCTCVR}} = \\underbrace{p ( y = 1 ∣ x )}_{\\text{pCTR}} × \\underbrace{p ( z = 1 ∣ y = 1 , x )}_{\\text{pCVR}} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4624em","vertical-align":"-1.7124em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{style:{top:"-1.4237em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"pCTCVR")])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{class:"svg-align",style:{top:"-2.102em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"stretchy",style:{height:"0.548em","min-width":"1.6em"}},[s("span",{class:"brace-left",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`})])]),s("span",{class:"brace-center",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMidYMin slice"},[s("path",{d:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`})])]),s("span",{class:"brace-right",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMaxYMin slice"},[s("path",{d:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`})])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∣"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.898em"}},[s("span")])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.7124em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4624em","vertical-align":"-1.7124em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{style:{top:"-1.4237em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"pCTR")])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{class:"svg-align",style:{top:"-2.102em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"stretchy",style:{height:"0.548em","min-width":"1.6em"}},[s("span",{class:"brace-left",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`})])]),s("span",{class:"brace-center",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMidYMin slice"},[s("path",{d:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`})])]),s("span",{class:"brace-right",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMaxYMin slice"},[s("path",{d:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`})])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∣"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.898em"}},[s("span")])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.7124em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4624em","vertical-align":"-1.7124em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{style:{top:"-1.4237em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"pCVR")])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{class:"svg-align",style:{top:"-2.102em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"stretchy",style:{height:"0.548em","min-width":"1.6em"}},[s("span",{class:"brace-left",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`})])]),s("span",{class:"brace-center",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMidYMin slice"},[s("path",{d:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`})])]),s("span",{class:"brace-right",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMaxYMin slice"},[s("path",{d:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`})])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∣"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.898em"}},[s("span")])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.7124em"}},[s("span")])])])])])])])])],-1),R=t('<p>其中x表示曝光，y表示点击，z表示转化。针对这三个任务，设计了如下图所示的模型结构，其中左边是主任务，右边是辅助任务：</p><img src="'+m+'" title="" alt="" data-align="center"><p>如图，主任务和辅助任务共享特征，不同任务输出层使用不同的网络，将cvr的预测值*ctr的预测值作为ctcvr任务的预测值，利用ctcvr和ctr的label构造损失函数：</p><img src="'+o+'" title="" alt="" data-align="center"><p>该架构具有两大特点，分别给出上述两个问题的解决方案：</p><ul><li>帮助CVR模型在完整样本空间建模（即曝光空间X）。</li></ul><img src="'+h+'" title="" alt="" data-align="center"><p>​ 从公式中可以看出，<strong>pCVR 可以由pCTR 和pCTCVR推导出</strong>。从原理上来说，<strong>相当于分别单独训练两个模型拟合出pCTR 和pCTCVR</strong>，<strong>再通过pCTCVR 除以pCTR 得到最终的拟合目标pCVR</strong> 。在训练过程中，<strong>模型只需要预测pCTCVR和pCTR，利用两种相加组成的联合loss更新参数</strong>。<strong>pCVR 只是一个中间变量</strong>。而<strong>pCTCVR和pCTR的数据是在完整样本空间中提取的，从而相当于pCVR也是在整个曝光样本空间中建模</strong>。</p><ul><li><p>提供特征表达的迁移学习（embedding层共享）。CVR和CTR任务的两个子网络共享embedding层，网络的embedding层把大规模稀疏的输入数据映射到低维的表示向量，该层的参数占了整个网络参数的绝大部分，需要大量的训练样本才能充分学习得到。</p></li><li><p>由于CTR任务的训练样本量要大大超过CVR任务的训练样本量，ESMM模型中特征表示共享的机制能够使得<strong>CVR子任务也能够从只有展现没有点击的样本中学习，从而能够极大地有利于缓解训练数据稀疏性问题</strong>。</p></li></ul><p>模型训练完成后，可以同时预测cvr、ctr、ctcvr三个指标，线上根据实际需求进行融合或者只采用此模型得到的cvr预估值。</p><h3 id="模型训练" tabindex="-1"><a class="header-anchor" href="#模型训练" aria-hidden="true">#</a> 模型训练</h3><p>与Shared-Bottom同样的共享底层机制，之后两个独立的Tower网络，分别输出CVR和CTR，计算loss时只利用CTR与CTCVR的loss。CVR Tower完成自身网络更新，CTR Tower同时完成自身网络和Embedding参数更新。在评估模型性能时，重点是评估主任务CVR的auc。</p><h3 id="总结和拓展" tabindex="-1"><a class="header-anchor" href="#总结和拓展" aria-hidden="true">#</a> 总结和拓展</h3><p>可以思考以下几个问题</p><ol><li><p>能不能将乘法换成除法？<br> 即分别训练CTR和CTCVR模型，两者相除得到pCVR。论文提供了消融实验的结果，表中的DIVISION模型，比起BASE模型直接建模CTCVRR和CVR，有显著提高，但低于ESMM。原因是pCTR 通常很小，除以一个很小的浮点数容易引起数值不稳定问题。</p></li><li><p>网络结构优化，Tower模型更换？两个塔不一致？<br> 原论文中的子任务独立的Tower网络是纯MLP模型，事实上业界在使用过程中一般会采用更为先进的模型（例如DeepFM、DIN等），两个塔也完全可以根据自身特点设置不一样的模型。这也是ESMM框架的优势，子网络可以任意替换，非常容易与其他学习模型集成。</p></li><li><p>比loss直接相加更好的方式？<br> 原论文是将两个loss直接相加，还可以引入动态加权的学习机制。</p></li><li><p>更长的序列依赖建模？<br> 有些业务的依赖关系不止有曝光-点击-转化三层，后续的改进模型提出了更深层次的任务依赖关系建模。比如：</p><p>（1）阿里的ESMM2: 在点击到购买之前，用户还有可能产生加入购物车（Cart）、加入心愿单（Wish）等行为。</p><p>​ 相较于直接学习 click-&gt;buy (稀疏度约2.6%)，可以通过Action路径将目标分解，以Cart为例：click-&gt;cart (稀疏 度为10%)，cart-&gt;buy(稀疏度为12%)，通过分解路径，建立多任务学习模型来分步求解CVR模型，缓解稀疏问题，该模型同样也引入了特征共享机制。</p><p>（2）美团的AITM：信用卡业务中，用户转化通常是一个<strong>曝光-&gt;点击-&gt;申请-&gt;核卡-&gt;激活</strong>的过程，具有5层的链路。</p></li></ol><blockquote><p>美团提出了一种自适应信息迁移多任务（<strong>Adaptive Information Transfer Multi-task，AITM</strong>）框架，该框架通过自适应信息迁移（AIT)模块对用户多步转化之间的序列依赖进行建模。AIT模块可以自适应地学习在不同的转化阶段需要迁移什么和迁移多少信息。</p></blockquote><p>总结：ESMM首创了利用用户行为序列数据在完整样本空间建模，并提出利用学习CTR和CTCVR的辅助任务，迂回学习CVR，避免了传统CVR模型经常遭遇的样本选择偏差和训练数据稀疏的问题，取得了显著的效果。</p>',17);function x(M,V){const a=l("ExternalLinkIcon");return n(),r("div",null,[s("div",d,[u,v,s("p",null,[s("a",y,[i("【推荐系统】多任务学习之ESMM模型（更新ing）-云社区-华为云 (huaweicloud.com)"),p(a)])])]),C,w,R])}const T=e(g,[["render",x],["__file","multi-task.html.vue"]]);export{T as default};