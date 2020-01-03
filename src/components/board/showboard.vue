<template>
    <div>
        <div>
            title
        </div>
        <div>
            content
        </div>
        <router-link class="btn btn-success" to="/writeboard">write</router-link>
        <router-link class="btn btn-primary" to="/list">go to list</router-link>
    </div>
</template>

<script>
    export default {
        name: "showboard"
    }
</script>

<style scoped>

</style>