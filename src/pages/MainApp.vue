<template>
    <div>
        <ProjectHeader :text="'личный кабинет'"
                       @exit="exit()" />
        <div>
            <h1>Просто котик</h1>
            <img 
                style="height: 50vh; width: 50vw;"

                :src="require('@/assets/i.webp')" 
                alt="cat">
        </div>
    </div>

</template>
<script setup>
import { defineEmits } from "vue";
import ProjectHeader from "@/components/ProjectHeader.vue";
const emits = defineEmits(["exit"]);
function exit(){
  emits("exit");
}
</script>