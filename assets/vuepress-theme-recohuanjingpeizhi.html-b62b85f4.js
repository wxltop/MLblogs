import{_ as p,r as o,o as i,c as l,a as n,b as s,d as e,e as t}from"./app-af00e0a0.js";const c="/MLblogs/imgs/2023-07-28-18-18-43-image.png",r="/MLblogs/imgs/2023-07-28-18-18-49-image.png",d="/MLblogs/imgs/2023-08-02-16-10-59-image.png",u="/MLblogs/imgs/2023-08-02-16-13-09-image.png",m="/MLblogs/imgs/2023-08-02-16-16-38-image.png",v={},k=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"INFO"),n("p",null,"vuepress-theme-reco主题确实好用，但是官方文档不详细，我为了配这个环境走了不少坑。")],-1),g=n("h2",{id:"基本环境配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本环境配置","aria-hidden":"true"},"#"),s(" 基本环境配置")],-1),b=n("h3",{id:"node-js配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#node-js配置","aria-hidden":"true"},"#"),s(" Node js配置")],-1),h={href:"https://nodejs.org/zh-cn/download",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"16.19.0",-1),q={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>nvm -v # 查看版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令行输入nvm install node 版本号，如：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>nvm install 16.19.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功后，输入命令行nvm use node 版本号：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>nvm use 16.19.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看node js版本号：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>node -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看已经安装的 node.js版本：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>nvm ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装yarn，在 cmd 进行：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm i -g yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vuepress配置" tabindex="-1"><a class="header-anchor" href="#vuepress配置" aria-hidden="true">#</a> vuepress配置</h3>`,12),f={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},_=t(`<li><p>创建一个目录，比如我的：<code>myblogs/</code></p></li><li><p>（初始化项目）在该目录下打开cmd, 执行：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git init
yarn init  # 执行这个的时候先一路回车
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将 VuePress 安装为本地依赖：在cmd执行：（这一步要求node版本&gt;= 16.19.0）</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>yarn add -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将默认的临时目录和缓存目录添加到 .gitignore 文件中：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>echo &#39;node_modules&#39; &gt;&gt; .gitignore
echo &#39;.temp&#39; &gt;&gt; .gitignore
echo &#39;.cache&#39; &gt;&gt; .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加主题，执行（在cmd执行，不然无法上下选择）：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中比较重要的两个问题：是否创建一个新的directory，<strong>选n</strong>，然后是 home page style，<strong>选2.x</strong></p></li><li><p>执行：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>yarn install 
# 或者 
npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,6),w=n("p",null,"在本地启动服务器来开发你的文档网站：",-1),j=n("div",{class:"language-cmd line-numbers-mode","data-ext":"cmd"},[n("pre",{class:"language-cmd"},[n("code",null,`yarn dev
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},M=t(`<p>添加一些实用功能：</p><p>打开<code>.vuepress/config.ts</code>文件，在内部添加如下内容：</p><p><strong>自动设置分类（注意注释掉最后两行）</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 自动设置分类</span>
<span class="token literal-property property">autoSetBlogCategories</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token comment">// 自动将分类和标签添加至头部导航条</span>
<span class="token literal-property property">autoAddCategoryToNavbar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  location<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 默认 0</span>
  categoryText<span class="token operator">:</span> <span class="token string">&#39;分类&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认 categories</span>
  tagText<span class="token operator">:</span> <span class="token string">&#39;标签&#39;</span> <span class="token comment">// 默认 tags</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值</span>
<span class="token literal-property property">autoAddCategoryToNavbar</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),C={href:"https://vuepress-theme-reco.recoluan.com/docs/theme/auto-set-category.html#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},L=t('<div align="center"><img src="'+c+`"></div><p><strong>自动设置series</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 自动设置分类</span>
<span class="token literal-property property">autoSetSeries</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),T={href:"https://vuepress-theme-reco.recoluan.com/docs/theme/auto-set-series.html#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},A=n("div",{align:"center"},[n("img",{src:r})],-1),N=t('<h2 id="坑" tabindex="-1"><a class="header-anchor" href="#坑" aria-hidden="true">#</a> 坑</h2><p>有几个坑着实坑了我好久：</p><p><strong>首先是标题，不能用H1，只能用H2或者H3及以下。</strong></p><p><strong>其次是文章开头，将这三个字段都包含进去：title，date，categories。我一开始没加就是部署不了。</strong></p><p><strong>文章开头很容易搞错，建议在源码模式下弄markdown</strong>。比如categories和tags之后加英文冒号，回车，空格，减号，空格，再是文字。</p><p><code>.vuepress/config.ts</code><strong>文件内设置docs也有坑</strong>，比如我docs目录下现有五个目录(<strong>pic1</strong>)：</p><div align="center"><img src="'+d+'" title="pic1" alt="" data-align="center"></div><p>我希望每一个都是一个单独的doc，点开之后可以分级管理各自的每一篇文章，类似这样(<strong>pic2</strong>)：</p><div align="center"><img src="'+u+'" title="pic2" alt="" data-align="center"></div><p>这里所示的是<code>docs/刷题/</code>目录下的一篇<code>贪心.md</code>文件，这个<code>贪心.md</code>属于<code>LeetCode</code>下属，如何实现呢？首先要将本地的docs各个目录的中文改为英文或者拼音，如下：</p><div align="center"><img src="'+m+`" title="" alt="" data-align="center"></div><p>然后再在<code>.vuepress/config.ts</code>文件内设置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// { text: &quot;Categories&quot;, link: &quot;/categories/reco/1/&quot; },</span>
      <span class="token comment">// { text: &quot;Tags&quot;, link: &quot;/tags/tag1/1/&quot; },</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Docs&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;transformer&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/transformer/transformer&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;基础知识&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/basic_knowledge/bk1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;深度学习tricks&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/DL_tricks&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;刷题&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/shuati/tanxin&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;论文笔记&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/paper_notes&quot;</span><span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的目录名是啥不重要，但是换成英文最好（我反正试着中文无法路由），自己能认识就行，然后children里的每一个text就是显示在导航栏里的字体。至此，导航栏部分的下拉选项搞定，就是注意两项：<strong>1. 用英文；2. 在config.ts内设置</strong></p><p>然后就是点击跳转的问题。比如我点击下拉选项中的<code>刷题</code>，希望打开的是<code>刷题/贪心.md</code>，这里我也是试着中文不行，也不知是不是文件名和内容的标题名冲突，改为<code>刷题/tanxin.md</code>后，在<code>config.ts</code>内设置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/docs/shuati/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;LeetCode&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tanxin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以显示如上图pic2所示的效果。那为啥LeetCode下面第一篇文章名字不是<code>tanxin</code>而是<code>贪心</code>呢？因为他显示的是文章标题名，不是你本地的<code>.md</code>文件名。其他的doc设置类似。</p><h2 id="结合github-page部署" tabindex="-1"><a class="header-anchor" href="#结合github-page部署" aria-hidden="true">#</a> 结合GitHub page部署</h2><p>新建一个github仓库，比如我的仓库是：</p><p><code>git@github.com:wxltop/ML-blogs.git</code></p><p>在<code>myblogs/pakage.json</code>里添加：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git@github.com:wxltop/ML-blogs.git&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>.vuepress/config.ts</code>文件内添加<code>base</code>字段：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/ML-blogs/&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，格式一定要一样，即<code>/</code>+<code>repo_name</code>+<code>/</code>。</p><p>在<code>myblogs/</code>下添加文件：<code>deploy.sh</code>，其内容为(注意需要修改的是下面的发布链接那里，如果你的仓库是username.github.io.git，则改前一个，如果是username.github.io/repo，则改后一个，我属于后一个)：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run build

<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-W</span> caniuse-lite
npx update-browserslist-db@latest

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> .vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:wxltop/ML-blogs.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要部署的时候，git bash执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参考</strong>：</p>`,30),D={href:"https://blog.csdn.net/zjjxxh/article/details/127173968",target:"_blank",rel:"noopener noreferrer"},P={href:"https://vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://juejin.cn/post/7041134607869149215",target:"_blank",rel:"noopener noreferrer"},z={href:"https://zhuanlan.zhihu.com/p/393344955",target:"_blank",rel:"noopener noreferrer"},B=t(`<h2 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h2><p>如果部署期间遇到什么问题(如果遇到莫名其妙的问题建议还是通过<code>yarn dev</code>来排查)，比如觉得被自己弄乱了，想重新来一遍。</p><p><strong>第一种方法</strong>：删掉新建的github仓库（这一步不是必须的，比如我的ML-blogs），然后：</p><ol><li><p>先备份一下几个重要文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>myblogs/blogs/
myblogs/docs/
myblogs/.gitignore
myblogs/deploy.sh
myblogs/package.json
myblogs/README.md
myblogs/.vuepress/public/
myblogs/.vuepress/config.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后删除：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>myblogs/.vuepress/.cache
myblogs/.vuepress/.temp
myblogs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后执行下面三个指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>等执行完了之后，再将备份的文件拖进<code>myblogs/</code>，再次在git bash执行<code>bash deploy.sh</code>即可。</p></li></ol><p><strong>第二种方法</strong>：这个方法其实和下面的<strong>在github上存储博客</strong>是对应的。可以将这些重要的文件传到github中，每一次环境弄乱的时候，可以先<code>git push</code>一下，然后删掉如下文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>myblogs/.vuepress/.cache
myblogs/.vuepress/.temp
myblogs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行三个指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后<code>git pull</code>一下即可。</p><h2 id="插入图片" tabindex="-1"><a class="header-anchor" href="#插入图片" aria-hidden="true">#</a> 插入图片</h2><p>经过百般尝试，可以在<code>.vuepress/public</code>目录下新建一个目录：<code>imgs/</code>然后将所有的图像放入这个目录下，要引用的时候这样表示即可：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code># 居中：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>center</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/imgs/image.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
# 不居中：
![image](/imgs/image.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可能刚开始新建<code>imgs/</code>目录然后在文中引用图片之后没办法运行<code>bash deplopy.sh</code>部署，可以先不在文中引用，这个时候可以成功部署，部署成功之后再将图片引用，再次部署即可。</p><h2 id="数学公式" tabindex="-1"><a class="header-anchor" href="#数学公式" aria-hidden="true">#</a> 数学公式</h2><p>先安装包：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm i -D vuepress-plugin-md-enhance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在<code>config.ts</code>中添加如下内容：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mdEnhancePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdEnhancePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 使用 KaTeX 启用 TeX 支持</span>
      katex<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 使用 mathjax 启用 TeX 支持</span>
      mathjax<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>感动，为数不多的可以直接按照网上博客步骤来执行，且成功的案例。</p>`,19),V={href:"https://www.cnblogs.com/fhlsteven/p/17587762.html",target:"_blank",rel:"noopener noreferrer"},Q=t(`<h2 id="在github上存储博客" tabindex="-1"><a class="header-anchor" href="#在github上存储博客" aria-hidden="true">#</a> 在github上存储博客</h2><p>博客存在本地万一丢失了就损失大了，我将博客存在github上：</p><ol><li><p>先新建一个仓库，比如我新建的是<code>git@github.com:wxltop/ML-materials.git</code></p></li><li><p>在最开始的时候已经对<code>myblogs/</code>执行了<code>git init</code>，如果没执行就执行一下。</p></li><li><p><code>myblogs/.gitignore</code>文件添加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.vuepress/.cache
.vuepress/.temp
.vuepress/dist
node_modules
yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将<code>myblogs/</code>关联到该仓库：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git remote add origin git@github.com:wxltop/ML-materials.git
git branch -M main
git add --all
git commit -m &quot;git init&quot;
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>这样的话每一次修改了本地，先将md文件传到github上，然后再部署。如果换了电脑，可以在另一个电脑中先配置好环境，然后直接将md文件pull到本地。</p></li></ol><h2 id="多端设备写博客" tabindex="-1"><a class="header-anchor" href="#多端设备写博客" aria-hidden="true">#</a> 多端设备写博客</h2><p>如果我在自己电脑配置了环境写好了博客，想在实验室也配置一个，防止每次都要将自己电脑背来背去，按照如下流程进行（默认git都已经在本地弄好了）：</p><ol><li><p>先按照上面【基本环境配置】步骤给实验室电脑配置好环境，直到执行<code>yarn dev</code>止。</p></li><li><p>将实验室里的<code>myblogs/</code>目录里的git仓库关联到远程存储<code>md</code>文件的仓库：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git remote add origin git@github.com:wxltop/ML-materials.git
git branch -M main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>拉取远程博客覆盖本地：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git fetch --all &amp;&amp; git reset --hard origin/main &amp;&amp; git pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装支持数学公式的插件：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm i -D vuepress-plugin-md-enhance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>第一次 push 的时候不要省略：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git add --all
git commit -m &quot;update&quot;
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>然后就OK了，记得每次离开前<code>git push</code>一遍。</p><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2><p>附件这一小节附上我的<code>.vuepress/config.ts</code>文件的内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DefaultThemeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> recoTheme <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-reco&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mdEnhancePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Makeittrue&#39;s blogs&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;记录学习. &quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/ML-blogs/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 添加浏览器图标</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/fig.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 主题 移动端优化</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;viewport&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;width=device-width,initial-scale=1,user-scalable=no&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdEnhancePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 使用 KaTeX 启用 TeX 支持</span>
      <span class="token literal-property property">katex</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 使用 mathjax 启用 TeX 支持</span>
      <span class="token literal-property property">mathjax</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&quot;@vuepress-reco/style-default&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;/logo.png&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&quot;Makeittrue&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">authorAvatar</span><span class="token operator">:</span> <span class="token string">&quot;/fig.png&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// docsRepo: &quot;https://github.com/vuepress-reco/vuepress-theme-reco-next&quot;,</span>
    <span class="token comment">// docsBranch: &quot;main&quot;,</span>
    <span class="token comment">// docsDir: &quot;example&quot;,</span>
    <span class="token literal-property property">lastUpdatedText</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// series 为原 sidebar</span>
    <span class="token comment">// 自动设置分类</span>
    <span class="token literal-property property">autoSetSeries</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/docs/shuati/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;LeetCode&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tanxin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 自动设置分类</span>
    <span class="token literal-property property">autoSetBlogCategories</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 自动将分类和标签添加至头部导航条</span>
    <span class="token comment">// // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值</span>
    <span class="token literal-property property">autoAddCategoryToNavbar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// { text: &quot;Categories&quot;, link: &quot;/categories/reco/1/&quot; },</span>
      <span class="token comment">// { text: &quot;Tags&quot;, link: &quot;/tags/tag1/1/&quot; },</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Docs&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;transformer&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/transformer/transformer&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;基础知识&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/basic_knowledge/bk1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;深度学习tricks&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/DL_tricks&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;刷题&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/shuati/tanxin&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;论文笔记&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/paper_notes&quot;</span><span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 公告：</span>
    <span class="token comment">// bulletin: {</span>
    <span class="token comment">//   body: [</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;text&quot;,</span>
    <span class="token comment">//       content: \`🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。\`,</span>
    <span class="token comment">//       style: &quot;font-size: 12px;&quot;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;hr&quot;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;title&quot;,</span>
    <span class="token comment">//       content: &quot;QQ 群&quot;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;text&quot;,</span>
    <span class="token comment">//       content: \`</span>
    <span class="token comment">//       &lt;ul&gt;</span>
    <span class="token comment">//         &lt;li&gt;QQ群1：1037296104&lt;/li&gt;</span>
    <span class="token comment">//         &lt;li&gt;QQ群2：1061561395&lt;/li&gt;</span>
    <span class="token comment">//         &lt;li&gt;QQ群3：962687802&lt;/li&gt;</span>
    <span class="token comment">//       &lt;/ul&gt;\`,</span>
    <span class="token comment">//       style: &quot;font-size: 12px;&quot;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;hr&quot;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;title&quot;,</span>
    <span class="token comment">//       content: &quot;GitHub&quot;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;text&quot;,</span>
    <span class="token comment">//       content: \`</span>
    <span class="token comment">//       &lt;ul&gt;</span>
    <span class="token comment">//         &lt;li&gt;&lt;a href=&quot;https://github.com/vuepress-reco/vuepress-theme-reco-next/issues&quot;&gt;Issues&lt;a/&gt;&lt;/li&gt;</span>
    <span class="token comment">//         &lt;li&gt;&lt;a href=&quot;https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1&quot;&gt;Discussions&lt;a/&gt;&lt;/li&gt;</span>
    <span class="token comment">//       &lt;/ul&gt;\`,</span>
    <span class="token comment">//       style: &quot;font-size: 12px;&quot;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;hr&quot;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       type: &quot;buttongroup&quot;,</span>
    <span class="token comment">//       children: [</span>
    <span class="token comment">//         {</span>
    <span class="token comment">//           text: &quot;打赏&quot;,</span>
    <span class="token comment">//           link: &quot;/docs/others/donate.html&quot;,</span>
    <span class="token comment">//         },</span>
    <span class="token comment">//       ],</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//   ],</span>
    <span class="token comment">// },</span>

    <span class="token comment">// commentConfig: {</span>
    <span class="token comment">//   type: &#39;valie&#39;,</span>
    <span class="token comment">//   // options 与 1.x 的 valineConfig 配置一致</span>
    <span class="token comment">//   options: {</span>
    <span class="token comment">//     // appId: &#39;xxx&#39;,</span>
    <span class="token comment">//     // appKey: &#39;xxx&#39;,</span>
    <span class="token comment">//     // placeholder: &#39;填写邮箱可以收到回复提醒哦！&#39;,</span>
    <span class="token comment">//     // verify: true, // 验证码服务</span>
    <span class="token comment">//     // notify: true,</span>
    <span class="token comment">//     // recordIP: true,</span>
    <span class="token comment">//     // hideComments: true // 隐藏评论</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// debug: true,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function H(R,U){const a=o("ExternalLinkIcon");return i(),l("div",null,[k,g,b,n("p",null,[s("先安装 node.js："),n("a",h,[s("下载 | Node.js"),e(a)]),s(" 双击下载后的文件即可安装，建议不要安装最新版本，安装"),y,s("版本即可，如果安装了高版本后面的指令会报错，低了不行，建议安装一个nvm（管理node.js的版本，类似conda管理python包），下载连接（下载nvm-setup.exe文件）：")]),n("p",null,[n("a",q,[s("Releases · coreybutler/nvm-windows · GitHub"),e(a)])]),x,n("p",null,[s("参考： "),n("a",f,[s("快速上手 | VuePress (vuejs.org)"),e(a)])]),n("ol",null,[_,n("li",null,[w,j,n("p",null,[s("浏览器打开："),n("a",E,[s("localhost:8080"),e(a)])])]),n("li",null,[M,n("p",null,[s("参考："),n("a",C,[s("自动设置分类 | vuepress-reco (recoluan.com)"),e(a)])]),L,n("p",null,[s("参考："),n("a",T,[s("自动设置系列 | vuepress-reco (recoluan.com)"),e(a)])]),A])]),N,n("p",null,[n("a",D,[s("Vue 报错error:0308010C:digital envelope routines::unsupported_柠檬果子青的博客-CSDN博客"),e(a)])]),n("p",null,[n("a",P,[s("快速上手 | VuePress"),e(a)])]),n("p",null,[n("a",S,[s("一篇带你用 VuePress + Github Pages 搭建博客 - 掘金"),e(a)])]),n("p",null,[n("a",z,[s("利用 Vuepress 搭建一个精美好看的技术文档"),e(a)])]),B,n("p",null,[s("参考："),n("a",V,[s("VuePress@next 使用数学公式插件 - 梨花大将 - 博客园 (cnblogs.com)"),e(a)])]),Q])}const X=p(v,[["render",H],["__file","vuepress-theme-recohuanjingpeizhi.html.vue"]]);export{X as default};
