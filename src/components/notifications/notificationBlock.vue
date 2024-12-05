<template>
    <div v-if="notifications"
         class="notification-container">
        <template v-if="notifications">
            <notificationItem  
                v-for="(notify, index) in notifications" 
                :key="index" 
                :item="notify" 
                :notifications="notifications"
                @del-notify="emits('del-notify', notify)" />
        </template>
    </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";
import notificationItem from "./notificationItem.vue";
const emits = defineEmits(["del-notify"]);
defineProps(["notifications"]);

</script>

<style>
.notification-container{
    position: fixed;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 2vh;
    z-index: 1000000;
    width: 50vh;
    min-height: 10%;
}
</style>