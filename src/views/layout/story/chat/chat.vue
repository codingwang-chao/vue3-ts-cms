<template>
  <section class="p-10">
    <h1> {{ screenWidth }} × {{ screenHeight }} </h1>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        screenWidth: '',
        screenHeight: ''
      };
    },
    mounted() {
      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      window.onresize = () => {
        console.log('hello')
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.screenHeight = document.body.clientHeight;
        })();
      };
    }
  }
</script>

<style lang="less">
</style>