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
            <b-button type="submit"  class="btn btn-success mt-3">log In</b-button>
        </form>
        <b-button class="btn btn-warning mt-3" ><router-link to="/newAccount">New Account</router-link></b-button>
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
                    await this.$store.dispatch('logIn',{
                        userId: this.userId,
                        userPw: this.userPw
                    })

                }catch (e) {
                    console.log(e)
                }
            }
        }

    }
</script>

<style scoped>

</style>