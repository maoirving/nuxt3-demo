<script setup lang="ts">
import { filterAndMap, getLastInArray } from '~~/examples/array'
import { numArr } from '~~/examples/array/data'
import { getCurrentTimeString } from '~~/lib/utilities/datetime'

const title = ref('Example Page')
const examples = ref([
  {
    title: '获取数组最后一个元素',
    description: 'Array.prototype.at(-1)',
    code: `[${numArr}].at(-1) = ${numArr.at(-1)}`,
  },
  {
    title: '数组filter和map的组合优化',
    description: 'Array.prototype.reduce()/Array.prototype.flatMap()',
    code: `see filterAndMap() in '~~/examples/array'`,
  },
])
getLastInArray()
filterAndMap()
console.log(getCurrentTimeString())
console.log(new Date().toTimeString())
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div>this is example page</div>
    <div>
      <NuxtLink :to="{ name: 'index' }"> back Home </NuxtLink>
    </div>
    <ul>
      <li v-for="(example, index) in examples" :key="index">
        <h3>{{ example.title }}</h3>
        <p>描述：{{ example.description }}</p>
        <p>
          示例代码：<code>{{ example.code }}</code>
        </p>
      </li>
    </ul>
  </div>
</template>
