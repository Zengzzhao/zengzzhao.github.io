---
title: 关于DataV在vue3版本的BUG
date: 2025-01-08
updated: 2025-01-08
categories: vue3
tags:
  - vue3
  - DataV
---

# 关于DataV在vue3版本的BUG

> BUG说明：
>
> Module not found: Error: Can't resolve '@dataview/datav-vue3'
> 找不到模块：错误：无法解析“@dataview/datav-vue3”

github上官方项目的issue中民间老哥的解决办法：[解决方案](https://github.com/DataV-Team/DataV-Vue3/issues/46)

该方案是该老哥fork的新包修复了这个错误。

```
npm install @newpanjing/datav-vue3
```

之后按照官网说明正常使用即可

> 老哥修改后的源码：[源码](https://github.com/newpanjing/DataV-Vue3?tab=readme-ov-file)