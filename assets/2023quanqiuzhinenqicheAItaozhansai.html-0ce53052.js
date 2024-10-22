import{_ as t,r as o,o as i,c as s,a as e,b as n,d as a,e as l}from"./app-aa9cafec.js";const p="/MLblogs/assets/2023-11-15-15-43-09-image-0d7cb36d.png",c={},h={href:"https://tianchi.aliyun.com/competition/entrance/532155",target:"_blank",rel:"noopener noreferrer"},g={href:"https://aistudio.baidu.com/projectdetail/7079524?forkThirdPart=1",target:"_blank",rel:"noopener noreferrer"},d={href:"https://arxiv.org/abs/2102.03334",target:"_blank",rel:"noopener noreferrer"},u={href:"https://arxiv.org/abs/2201.12086",target:"_blank",rel:"noopener noreferrer"},_={href:"https://hf-mirror.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://huggingface.co/models?sort=trending&search=clip",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/openai/CLIP",target:"_blank",rel:"noopener noreferrer"},m=l('<h2 id="赛题分析" tabindex="-1"><a class="header-anchor" href="#赛题分析" aria-hidden="true">#</a> 赛题分析：</h2><p>题目简单来说，输入视频，输出几个字段的真值，视频是虚拟的交通场景，字段包含如下：</p><img src="'+p+'" title="" alt="" data-align="center"><p>这在baseline代码里已经组织好了，我们的重心可以直接放在如何优化改善baseline上。</p><h2 id="baseline分析" tabindex="-1"><a class="header-anchor" href="#baseline分析" aria-hidden="true">#</a> baseline分析</h2><p>刚接触这个赛题有点像分类问题，但是似乎没有现有的模型能做到如此的广泛的分类能力，而且是针对视频的。而且复赛要求中有这样一句话：“附加视频数据的部分真值选项可能不在赛事发布数据说明的文本描述结构树中。”这就意味着，如果当做分类任务来做，可能复赛的部分真值无法处理。</p><p>知道看到baseline发现是clip才醒然大悟，<strong>clip不需要分类头，而且可以动态的去配对，也就是做到了零样本的迁移学习</strong>，我们在判断一个字段的真值时，可以将该字段对应的真值列表里的字符串转为向量，然后与图像的特征向量匹配，这不就实现了要求嘛。</p><p>初步看代码，其实代码里留下了很多可以优化的入口：</p><ol><li><p>首先是加载的模型权重上，可以使用更大的权重。</p></li><li><p>baseline推理过程中，仅仅让网络输出[&quot;weather&quot;, &quot;road_structure&quot;]两个key的真值，而且每一个视频仅仅读取一帧。一个是因为这两个是静态特征，每一个视频内这两个特征不会发生太大的变化，所以直接取视频的第一帧即可判断；其次是推理时间的问题。如果是一些动态的特征，如车的行为，这要获取视频的时序信息，这是难点所在。所以<strong>需要先考虑哪些标签可以从图片的角度来识别，哪些需要视频的角度</strong>（时序信息）。<strong>在实践的时候可以对视频抽帧，然后对每一帧的结果进行投票。</strong></p></li><li><p>baseline使用的是paddle clip，如果使用官方的clip会不会更好？</p></li><li><p>clip预训练的时候是图片与句子配对，所以拿来用的时候虽然可以丢单词进去，但是对结果还是有影响的，所以会先将单词变成一个句子，不过这在clip内部已经完成了操作，不需要我们来弄，除非有更好的prompt。对于静态的特征沿用官方的promt应该更好，但是动态特征不一定。</p></li></ol><p>直接跑完baseline可以获得93.0的分数，不要窃喜，满分远不止100分，所以提升空间很大。</p>',10);function I(L,k){const r=o("ExternalLinkIcon");return i(),s("div",null,[e("p",null,[n("赛题链接："),e("a",h,[n("2023全球智能汽车AI挑战赛——赛道二：智能驾驶汽车虚拟仿真视频数据理解赛道_算法大赛_天池大赛-阿里云天池的赛制 (aliyun.com)"),a(r)])]),e("p",null,[n("baseline链接："),e("a",g,[n("2023全球智能汽车AI挑战赛（赛道二：视频数据理解赛道） baseline - 飞桨AI Studio星河社区 (baidu.com)"),a(r)])]),e("p",null,[n("CLIP改进论文："),e("a",d,[n("[2102.03334] ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),a(r)])]),e("p",null,[e("a",u,[n("[2201.12086] BLIP: Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation"),a(r)])]),e("p",null,[n("huggingface镜像站："),e("a",_,[n("镜像"),a(r)])]),e("p",null,[n("huggingface官方站，下载clip模型："),e("a",f,[n("Models - Hugging Face"),a(r)])]),e("p",null,[n("CLIP项目网站："),e("a",b,[n("GitHub - openai/CLIP: CLIP (Contrastive Language-Image Pretraining), Predict the most relevant text snippet given an image"),a(r)])]),m])}const q=t(c,[["render",I],["__file","2023quanqiuzhinenqicheAItaozhansai.html.vue"]]);export{q as default};