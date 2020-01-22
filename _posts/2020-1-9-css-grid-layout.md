---
title: CSS Grid 布局
pageImg: https://imgs.wuazhu.cn/imgs/20200115_LVOces.jpg!slt
tag: css
---


从最原始的 `css` 布局, 包括 `float` 布局, `position` 布局, 到后来的 `flex` 布局, 再到现在的 `grid` 布局

<!-- more -->

> Grid 布局是将网页画成类似 Excel 似的一个个表格, 与 Flex 类似, Grid 就好比是二维布局, 决定你的 x 与 y.

## 基本概念
- 容器
  容器就是包裹项目的外层容器. 😀这话说起来好绕...
- 项目
  容器里的水平为行, 垂直为列, 横纵交替产生网格

::: 
  dd
:::

### 横纵 (行, 列)
- 列: `grid-template-columns`
- 行: `grid-template-rows`

#### 基本操作
```stylus
// 三行三列每个单元格为100高100宽
.container
  display grid
  grid-template-columns 100px 100px 100px
  grid-template-rows 100px 100px 100px

// 使用百分比
.container
  display grid
  grid-template-columns 33.3% 33.3% 33.3%
  grid-template-rows 33.3% 33.3% 33.3%

// repeat 函数, 与上面等价
.container
  display grid
  grid-template-columns repeat(3, 33.3%)
  grid-template-rows repeat(3, 33.3%)

// repeat 一组
.container
  display grid
  grid-template-columns repeat(3, 10px 20px 30px)

// 自动填充, 以一个100宽度的单元格去自动填充 container, 直到填充不了
.container
  display grid
  grid-template-columns repeat(auto-fill, 100px)
```

#### 骚操作
```stylus
// 关键字 fr  (fraction/片段) 类似 flex: 1 2344556... 1fr 代表占1份单位
.container
  display grid
  grid-template-columns 3fr 2fr 100px // 单元格1占用 (container 宽度 - 100px)/5 * 3

// minmax 函数, (min, max) 最小不超过 min 值, 最大不超过 max 值
.container
  display grid
  grid-template-columns 100px minmax(100px, 1fr)

// auto 关键字, 长度由浏览器决定
.container
  display grid
  grid-template-columns 100px auto

// auto 关键字
.container
  display grid
  grid-template-columns 100px auto

// 网格线名称. WTF? 完全不知道这鬼东西干什么用的
.container
  display grid
  grid-template-columns [c1] 100px [c2] 100px [c3] 200px
  grid-template-rows [r1] 100px [r2] 100px [r3] 200px

// 改变网格排列方向 
.container
  grid-auto-flow column/row/column dense/row dense
// 原本排序  1 2 3    // 改后排序    1 4 7
            4 5 6                 2 5 8
            7 8 9                 3 6 9
```
[demo/column dense](https://jsbin.com/wapejok/edit?css,output)
### 间距
```stylus
// 行列间距不占用最外层, 传统布局的 margin 会左右都有 margin, grid 的间距只在表格内最后一个元素的边为界
// **最新标准可以去掉 grid- 前缀**
.container
  grid-column-gap 20px  // column-gap 20px
  grid-row-gap 20px // row-gap 20px
// 等价于
  gap 20px 20px // 或者 gap 20px
// 行列间距简写
grid-gap: <grid-row-gap> <grid-column-gap>;
```

### 排列布局
```stylus
// justify-items 单元格水平位置
// align-items  单元格®垂直位置
// place-item  <align-item><justify-items>如上两个属性的简写
- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

// justify-content	 整个内容区域在容器里面水平位置
// align-content	整个内容区域的垂直位置
// place-content


```

