<template>
    <div>
        <div>

        </div>
        <form class="form-group">
            <div class="text-lg-center">
                <input type="text" class="form-control col-6" placeholder="ID입력"/>
            </div>
            <div>
                <input type="password" class="form-control col-6" placeholder="password입력"/>
            </div>
            <b-button class="btn btn-success mt-3">log In</b-button>
        </form>
        <b-button class="btn btn-warning mt-3" ><router-link to="/newAccount">New Account</router-link></b-button>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>