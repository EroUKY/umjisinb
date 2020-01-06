<template>
    <div>
        <SideBar></SideBar>
        <div id="contents">
<!--            <input type="text" placeholder="title" v-model="title" />-->
<!--            <input type="text" placeholder="author" v-model="author" />-->
<!--            <button>submit</button>-->
            <table class="table-responsive border">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="content in list" v-bind:key="content.no">
                        <td>{{content.no}}</td>
                        <td>
                            <router-link :to="`/showBoard/${content.no}`">
                                {{content.title}}
                            </router-link>
                        </td>
                        <td>{{content.author}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "index",
    data: () => ({
        list: [
            {
                no: 1,
                title: '1 컨텐츠',
                author: '김기영'
            },
            {
                no: 2,
                title: '2 컨텐츠',
                author: '김기영'
            },
            {
                no: 3,
                title: '3 컨텐츠',
                author: '김기영'
            },
            {
                no: 4,
                title: '4 컨텐츠',
                author: '김기영'
            }
        ]
    })
}
</script>

<style scoped>

</style>
