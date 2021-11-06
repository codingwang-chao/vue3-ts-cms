<template>
  <div class="baseCardContainer">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{title}}</span>
          <slot name="header-right"></slot>
        </div>
      </template>
      <div class="cardContent">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '卡片'
    }
  }

}
</script>

<style lang='less' scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .box-card {
    width: 100%;
  }
</style>