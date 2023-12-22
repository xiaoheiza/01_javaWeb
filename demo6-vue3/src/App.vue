<script setup>
/* 引入一个.vue组件 */
import Haha from "./components/Haha.vue"

/* css样式的导入方式
  1、在.vue文件中的style标签中
  2、将css样式保存到独立的css文件中，那个.vue需要就导入
    1）在script标签中可以导入   import './style/test.css'
    2）style标签中导入          @import './style/test.css'
  3、如果某个样式需要在全局生效，可以在main.js文件中导入

*/

/* import './style/test.css' */
</script>

<template>
  <!-- 语法上，要求template只能有一个一级子标签 -->
  <div>
    <span class="s1">你好</span>
  </div>
</template>

<style scoped>
/* .s1{
  color: aqua;
  font-size: 40px;
} */
/* @import './style/test.css' */
</style>
