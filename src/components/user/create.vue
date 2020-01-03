<template>
    <div class="col-12 col-sm-7">
        <b-form class="w-100 h-100 d-inline-flex justify-content-center align-items-center" @submit.stop.prevent>
            <div class="w-100">
                <!-- user id start-->
                <b-form-group
                        id="user-id-label"
                        label="User ID"
                        label-for="user-id"
                        label-align="left"
                        description="use your email."
                        v-if="progress === 0">
                    <b-form-input
                            id="user-id"
                            name="user-id"
                            ref="user-id"
                            key="user-id"
                            v-model="form.userID"
                            type="email"
                            required
                            placeholder="userID"
                            v-validate.initial="{required: true, min: 4, email: true}"
                            v-on:keyup="checkUserID"
                    ></b-form-input>
                    <b-spinner small label="Small Spinner" v-if="formPending.userID"></b-spinner>
                    <small class="text-danger">{{ errors.first('user-id') }}</small>
                </b-form-group>
                <!-- user id end-->
                <!--user name start-->
                <b-form-group
                        id="user-name-label"
                        label="User name"
                        label-for="user-name"
                        label-align="left"
                        description="We'll never share your email with anyone else."
                        v-if="progress === 1"
                >
                    <b-form-input
                            id="user-name"
                            name="user-name"
                            ref="user-name"
                            key="user-name"
                            v-model="form.userName"
                            type="text"
                            placeholder="user Name"
                            v-validate.initial="{required: true, min: 2}"
                    ></b-form-input>
                    <small class="text-danger">{{ errors.first('user-name') }}</small>
                </b-form-group>
                <!--user name end-->
                <!--password start-->
                <b-form-group
                        id="user-password-label"
                        label="User PWD"
                        label-for="user-password"
                        label-align="left"
                        description="We'll never share your email with anyone else."
                        v-if="progress === 2"
                >
                    <b-form-input
                            id="user-password"
                            name="user-password"
                            ref="user-password"
                            key="user-password"
                            v-model="form.userPWD"
                            type="password"
                            placeholder="userPWD"
                            v-validate.initial="{required: true, min: 8}"
                            autocomplete="on"
                    ></b-form-input>
                    <password v-model="form.userPWD" :strength-meter-only="true"/>
                    <small class="text-danger">{{ errors.first('user-password') }}</small>
                </b-form-group>
                <!--password end-->
                <div class="row py-4">
                    <div class="col" v-if="progress>0">
                        <b-button type="button" variant="danger" :disabled="pending" v-on:click="prev()" block>
                            Prev
                        </b-button>
                    </div>
                    <div class="col">
                        <b-button type="button" :variant="progressArray.length-1 > progress ? 'primary' : 'success' " :disabled="!nextValid" v-on:click="progress < (progressArray.length - 1) ? next() : submit()" block>
                            {{ (progressArray.length-1 > progress ? 'Next ' : 'Submit') }}
                        </b-button>
                    </div>
                </div>
            </div>
        </b-form>
    </div>
</template>

<script>
    import password from 'vue-password-strength-meter'
    export default {
        name: "create",
        component:{password
        },
        data: ()=>({

        })
    }
</script>

<style scoped>

</style>