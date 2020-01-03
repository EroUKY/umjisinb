<template>
    <div>
        <SideBar></SideBar>
        <div id="contents">
<!--            <input type="text" placeholder="title" v-model="title" />-->
<!--            <input type="text" placeholder="author" v-model="author" />-->
<!--            <button>submit</button>-->
            <table class="table-responsive">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>번호들갈곳</td>
                        <td><router-link to="/showboard" class="btn btn-light">title</router-link></td>
                        <td>작성자 는 김기영</td>
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
        // title: 'UMJI',
        // author: 'KIM'
    })
}
</script>

<style scoped>

</style>
