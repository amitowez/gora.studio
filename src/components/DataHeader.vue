<template>
    <div class="title-box">
        <img  :src="require('@/assets/gora.svg')"
              alt="">
        <div class="title">
            gora.studio | {{ text }}
        </div>
      
    </div>
</template>
<script setup>
import {defineProps} from "vue";
defineProps(["text"]);
</script>
<style lang="scss">
.title {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    color: white;
  }
  
  .title-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    // background-color: rgb(22, 88, 188);
    border-radius: 8px;
    margin-left: 5px;
  }

  @media (max-width: 450px) {
  .title {
    // display: none;
    font-size: 16px;
  }

  }
</style>