<script setup>
/*
 插值表达式 语法：{{数据名字/函数/对象调用API}}
    1、插值表达式不依赖标签，可以单独使用
    2、插值表达式中可以调用函数，将返回值渲染到指定的位置
    3、插值表达式中支持一些常见的运算符（{{ age > 18 ? '是' : '否' }}）
    4、插值表达式中支持对象调用API
 */
// 定义一些常见的类型数据
let msg = "hello vue3"
let getMsg = ()=> {
  return "hello vue3 message"
}
let age = 19
let bee = "蜜 蜂"
let carts = [{name:'可乐', price:3}, {name:'薯片', price:6}]
// 定义一个获得购物车商品总金额的方法
function compute() {
  let count = 0
  for (let index in carts) {
    count += carts[index].price
  }
  return count
}
</script>

<template>
  <div>
    <!-- 将数据绑定到下面的元素中 -->
    <h1>{{msg}}</h1>
    msg的值为{{getMsg()}}
    年龄： {{ age }},是否成年：{{ age > 18 ? '是' : '否' }} <br>
    {{ bee.split(' ').reverse().join('') }}

  </div>
</template>

<style scoped>

</style>
