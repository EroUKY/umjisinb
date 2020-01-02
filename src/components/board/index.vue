<template>
    <div id="contents">
        <input type="text" placeholder="title" v-model="title" />
        <input type="text" placeholder="author" v-model="author" />
        <button>submit</button>
    </div>

</template>

<script>
export default {
    name: "index",
    data: () => ({
        title: 'UMJI',
        author: 'KIM'
    })
}
</script>

<style scoped>

</style>
