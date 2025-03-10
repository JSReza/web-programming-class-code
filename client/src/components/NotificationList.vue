<script setup lang = "ts" >
    import { ref } from 'vue'
    const notifications = ref([
                    {text: 'This is a primary notification #1', type: 'is-primary'},
                    {text: 'This is a primary notification #2', type: 'success'},
                    {text: 'This is a primary notification #3', type: 'alert'},
                    {text: 'This is a primary notification #4', type: 'info'},
                    {text: 'This is a primary notification #5', type: 'warning'},
                  ]);

                  function removeNotification(index:number) {
                    notifications.value.splice(index, 1);
                  };

</script>
<template>
    <div>
        <h1 class="title">Notification List</h1>
        <div v-for="(message, index) in notifications" :key="index" class="notification is-success is-light">
                            <button class="delete" @click="removeNotification(index)"></button>
                            {{ message.text }}
                        </div>
     
    </div>
</template>


<style scoped>
</style>