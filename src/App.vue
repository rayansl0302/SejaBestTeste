<script setup>
import "./validator/validator";
</script>

<template>
  <router-view />
</template>

<style lang="less">
.form-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10% !important;
  margin-bottom: 10%;

  .form-content {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 35px;
    .steps {
      width: 200px;
      margin-left: auto;
      margin-right: auto;
    }
    h3 {
      font-size: 25px;
    }
    p {
      font-size: 16px;
    }
  }
}
//Breakpoints
@media (max-width: 790px) {
  .form-area {
    .form-content {
      padding: 5px;
      width: 100%;
    }
  }
}
</style>
