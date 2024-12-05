<template>
    <div class="header">
        <DataHeader :text="text"/>
        <div class="header-user-profile"
             @click="open = !open">
            <img width="44"
                 height="44"
                 :src="require('@/assets/photo-header.png')"
                 alt="">
            <div v-if="open"
                 class="header-dropdown">
                <div class="header-dropdown-option"
                     @click="exit()">
                    <p>Выйти</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DataHeader from "@/components/DataHeader.vue";
export default {
  components:{
    DataHeader,
  },
  props:["text"],
  data(){
    return {
      open:false,
    };
  },
  methods:{
    exit(){
      this.$emit("exit");
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 15px 25px;
    box-sizing: border-box;
    margin-bottom: 3vh;
    background-color: $primary-color;
    border-radius:20px;
}
.header-user-profile{
    position: relative;
    cursor: pointer;
}
.header-dropdown{
    position: absolute;
    width: 200px;
    height: 100px;
    z-index: 100;
    top:50px;
    right: 50px;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 8px;
}
.header-dropdown-option{
    cursor: pointer;
    width: 100%;
}
</style>