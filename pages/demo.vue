<template>
  <div>
    <h3>user2</h3>
    <div>user2: {{ user2.name }}</div>
    <button @click="updateUser2Name">update user2 name</button>

    <h3>user3</h3>
    <div>user3 name: {{ name }} user3 age: {{ age }}</div>
    <button @click="updateUser3Name">update user3 name</button>

    <h3>count2</h3>
    <div>count2: {{ count2 }}</div>
    <button @click="plus2">plus2</button>
    <button @click="decrease2">decrease2</button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, isReactive } from 'vue'
export default defineComponent({
  setup() {
    const _user = { name: 'randy2' }
    const user2 = reactive(_user)
    const updateUser2Name = () => {
      // reactive定义的变量可以直接修改
      user2.name += '!'

      // 原始对象的修改并不会响应式，也就是页面并不会重新渲染
      // _user.name += "!";
      // 代理对象被改变的时候，原始对象会被修改
      // console.log(_user);
    }

    // 使用toRefs可以响应式解构出来，在模板能直接使用啦。
    const user3 = reactive({ name: 'randy3', age: 24 })
    const updateUser3Name = () => {
      user3.name += '!'
    }

    // 使用reactive定义基本数据类型会报错
    const count2 = reactive(0)

    const plus2 = () => {
      count2.value++
    }
    const decrease2 = () => {
      count2.value--
    }

    // 检查对象是否是由 reactive 创建的响应式代理。
    console.log(isReactive(user2)) // true
    console.log(isReactive(count2)) // false

    return {
      user2,
      updateUser2Name,
      // ...user3, // 直接解构不会有响应式
      ...toRefs(user3),
      updateUser3Name,
      count2,
      plus2,
      decrease2,
    }
  },
})
</script>
