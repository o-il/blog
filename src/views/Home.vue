<script setup>
import { onMounted } from "vue";
import { ref, reactive } from "vue";

const a = ref(1)
const b = ref(2)

const data = reactive({
  a: 123,
  b: 1234
})

onMounted(() => {
  console.log("页面加载")
})
</script>

<template>
  <main>
    1111

    <div>
      {{ a }}

      {{ b }}

      {{ data.a }}
      {{ data.b }}
      {{ data }}

      <div v-for="item in data">
        wowowowowow
        {{ item }}
      </div>
    </div>


    <div>
      ***************
      <RouterLink to="/manager/link">
        <el-button>123</el-button>
      </RouterLink>
    </div>
  </main>
</template>
