<template>
    <div>
        <div>

        </div>
        <form class="form-group">
            <div class="text-lg-center">
                <input type="text" id="userId" name="userId" class="form-control col-6" placeholder="ID입력"/>
            </div>
            <div>
                <input type="password" id="userPw" name="userPw" class="form-control col-6" placeholder="password입력"/>
            </div>
            <button type="button" class="btn btn-success mt-3" v-on:click="login">log In</button>
        </form>
        <button class="btn btn-warning mt-3" ><router-link to="/newAccount">New Account</router-link></button>
    </div>
</template>

<script>
export default {
    name: "login",
    data () {
        return {
            userId: '',
            userPw: ''
        }
    },
    methods: {
        async login (){
            try {
                console.log(this.$store)
                await this.$store.dispatch('logIn',{
                    userId: this.userId,
                    userPw: this.userPw
                })
                console.log("aa");
            }catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style scoped>

</style>
