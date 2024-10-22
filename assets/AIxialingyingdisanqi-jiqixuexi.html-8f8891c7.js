import{_ as r,r as l,o as n,c as o,a as t,b as e,d as i,e as s}from"./app-aa9cafec.js";const a={},c=t("h2",{id:"用户新增预测挑战赛",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#用户新增预测挑战赛","aria-hidden":"true"},"#"),e(" 用户新增预测挑战赛")],-1),g=t("strong",null,"赛题链接",-1),x={href:"https://challenge.xfyun.cn/topic/info?type=subscriber-addition-prediction&ch=ymfk4uU",target:"_blank",rel:"noopener noreferrer"},p=s('<p><strong>赛题背景</strong>：用户新增预测是分析用户使用场景以及预测用户增长情况的关键步骤，有助于进行后续产品和应用的迭代升级。</p><p><strong>赛事任务</strong>：参赛选手需要基于提供的样本构建模型，预测用户的新增情况。</p><p><strong>赛事数据集</strong>：数据由约<em>62万条训练集、20万条测试集数据</em>组成，共包含<em>13个字段</em>。数据集格式如下：</p><table><thead><tr><th style="text-align:left;">字段</th><th>含义</th></tr></thead><tbody><tr><td style="text-align:left;">uuid</td><td>样本唯一标识</td></tr><tr><td style="text-align:left;">eid</td><td>访问行为ID</td></tr><tr><td style="text-align:left;">udmap</td><td>行为属性。其中的key1到key9表示不同的行为属性，如项目名、项目id等相关字段</td></tr><tr><td style="text-align:left;">common_ts</td><td>应用访问记录发生时间（毫秒时间戳）</td></tr><tr><td style="text-align:left;">x1</td><td>用户相关的属性，为匿名处理字段</td></tr><tr><td style="text-align:left;">x2</td><td>用户相关的属性，为匿名处理字段</td></tr><tr><td style="text-align:left;">x3</td><td>用户相关的属性，为匿名处理字段</td></tr><tr><td style="text-align:left;">x4</td><td>用户相关的属性，为匿名处理字段</td></tr><tr><td style="text-align:left;">x5</td><td>用户相关的属性，为匿名处理字段</td></tr><tr><td style="text-align:left;">x6</td><td>用户相关的属性，为匿名处理字段</td></tr><tr><td style="text-align:left;">x7</td><td>用户相关的属性，为匿名处理字段</td></tr><tr><td style="text-align:left;">x8</td><td>用户相关的属性，为匿名处理字段</td></tr><tr><td style="text-align:left;">target</td><td>预测目标，即是否为新增用户</td></tr></tbody></table><p><strong>评价指标</strong>：<strong>f1_score</strong>，分数越高，效果越好</p><blockquote><p><strong>本题建议使用传统机器学习而不是深度学习方法，为什么？</strong></p><p>赛题是一个典型的数据挖掘的比赛，需要人工提取特征并构建模型，并且特征差异将会带来很大分数差异。在许多机器学习问题中，特征工程的重要性不容忽视。如果特征工程能够充分捕捉数据的关键特征，那么机器学习算法也能够表现很好。深度学习在某种程度上可以自动学习特征，但对于特定问题，手动设计特征可能会更有效。</p></blockquote><blockquote><p><strong>从逻辑回归和决策树中选择，哪一个模型更加合适？</strong></p><ul><li><p>决策树能够处理非线性关系，并且可以自动捕获特征之间的交互作用。</p></li><li><p>它可以生成可解释的规则，有助于理解模型如何做出决策。</p></li><li><p>决策树能够处理不同类型的特征，包括分类和数值型。</p></li></ul></blockquote>',7);function f(_,y){const d=l("ExternalLinkIcon");return n(),o("div",null,[c,t("p",null,[g,e("："),t("a",x,[e("2023 iFLYTEK A.I.开发者大赛-讯飞开放平台"),i(d)])]),p])}const u=r(a,[["render",f],["__file","AIxialingyingdisanqi-jiqixuexi.html.vue"]]);export{u as default};