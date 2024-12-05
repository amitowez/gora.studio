<template>
    <div>
        <notificationBlock :notifications="notifications"
                           @del-notify="(val) =>delNotify(val)" />
        <loginPage v-if="!isLogin"
                   @notify="(val) => createNotify(val)"
                   @set-login-status="isLogin = true" />
        <MainApp v-else
                 @exit="isLogin = false" />
    </div>
</template>

<script setup>
import notificationBlock from "./components/notifications/notificationBlock.vue";
import MainApp from "./pages/MainApp.vue";
import { reactive, ref } from "vue";
import loginPage from "./pages/LoginPage.vue";
const isLogin = ref(false);
const notifications = reactive([]);
function createNotify(notify){
  notifications.push({
    header: notify.header,
    message: notify.message,
    color:   "red",
    lifeTime: 5000
  });
}
function delNotify(notify){
  let index = notifications.findIndex(it => it.message == notify.message);
  notifications.splice(index, 1);
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
