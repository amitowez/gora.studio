<template>
    <div class="login-view">
        <div class="login-header">
            <DataHeader :text="'вход'"/>
        </div>
       
        <div class="login-box text-start">
            <div class="input-cont">
                <p class="log-desc">Логин</p>
                <input v-model="login"
                       autocomplete="on"
                       class="log-input"
                       type="text">
            </div>
            <div class="input-cont"
                 style="margin-top: 20px;">
                <p class="log-desc">Пароль</p>
                <div style="display: flex;position: relative;">
                    <input v-model="password"
                           autocomplete="on"
                           class="log-input"
                           :type="showPass ? 'text' :  'password'">
                    <img class="vispass-icon"
                         :src="require('@/assets/vispass.svg')"
                         alt=""
                         @click="showPass = !showPass">
                </div>

            </div>
            <div class="login-btn"
                 @click="sendLogPas()">
                Войти
            </div>
        </div>
    </div>

</template>

<script>
import {LogIn} from "@/server/auth";
import DataHeader from "@/components/DataHeader.vue";


export default {
  components:{
    DataHeader,
  },
  data(){
    return {
      login:"",
      password:"",
      showPass:false,
    };
  },
  async created(){

  },
  methods:{
    async sendLogPas(){
      if(this.login && this.password && this.validateEmail(this.login)){
        let loginData = await LogIn({
          Email: this.login,
          Password: this.password
        });
        if(loginData){
          this.$emit("set-login-status", true);
        } else {
          this.$emit("notify", {header: "Неверный логин/пароль", message: "Если ошибка повторится и вы уверены что вводимые данные верны, обратитесь к администратору"});
        }
      } else {
        this.$emit("notify", {header: "Неверный формат логина/пароля", message: "Если ошибка повторится и вы уверены что вводимые данные верны, обратитесь к администратору"});
      }
    },
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  }
};
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.login-header {
  width: 32%;
}


.vispass-icon{
  height:15px;
  width: 15px;
  position: absolute;
  top: calc(50% - 7.5px);
  left: 94%;
  cursor: pointer;
}
.login-view {
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .login-btn{
    background-color: $primary-color;
    border-radius: 8px;
    color: white;
    height: 26px;
    margin-top: 20px;
    width: 9vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .login-btn:hover{
    transition: 300ms;
    background-color:rgba(22, 88, 188, 1);
  }
  .login-box {
    width: 588px;
    height: 300px;
    background: white;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 25px;
    margin-top: 50px;
  }
  .input-cont{
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .log-desc{
    margin: 10px 0 5px 0;
    display: flex;
    height: 28px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
  }
  .log-input{
    display: block;
    width:94%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color:#fff;
    background-clip: padding-box;
    border: 1px solid #dee2e6;
    border-radius:  0.375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  @media (max-width: 450px) {
  .login-header {
    width: 100%;
  }
  .login-box {
    width: 358px;
  }
}
  
</style>