<template>
  <div class="hello">
    <button @click="setMessage">添加属性</button>
    {{ student.name }}
    <input type="text" v-model="student.age">
  </div>
</template>


<script>
export default {
  data() {
    return {
      student: {
        name: '张三',
      }
    }
  },
  methods: {
    setMessage() {
      this.student.age = 15
      console.log(this.student)
    }
  }
}
</script>


<style>

</style>