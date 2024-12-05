<template>
    <div class="notification">
        <img class="btn-close"
             :src="require('@/assets/icon-close.svg')"
             @click="dellNotify()" >
        <p class="notification-header"
           :style="`color:${item.color}`">{{item.header}}</p>
        <p class="notification-description">{{item.message}}</p>
    </div>
</template>

<script>
export default {
  props:["item",],
  created(){
    console.log(this.item);
    setTimeout(()=>{
      this.dellNotify();
    }, this.item.lifeTime);
  },
  methods:{
    dellNotify(){
      this.$emit("del-notify");
    }
  }
};
</script>

<style>
.notification-header{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    margin-bottom: 1vh;
}
.notification-description{
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
}
.notification{
    margin-top: 1vh;
    box-sizing: border-box;
    padding: 1vh;
    min-height: 5vh;
    border-radius: 20px;
    width: 100%;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 1);
}
.btn-close{
    position: absolute;
    right: 4vh;
    top: 4vh;
    cursor: pointer;
}
</style>