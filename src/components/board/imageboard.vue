<template>
    <div>
        <SideBar></SideBar>
        <b-form>
            <b-form-group>
                <b-form-input
                        type="text"
                        id="user-image-upload"
                        name="user-image-upload"
                        placeholder="파일 선택"
                ></b-form-input>
            </b-form-group>
            <div class="profile-thumbnail">
                ㅁㅁ
            </div>
            <div class="profile-thumbnail">
                ㄴㄴ
            </div>
        </b-form>
    </div>
</template>

<script>

    export default {
        name: "imageboard",
        data: () => ({
            imageFile: "aa",
            imagePreview: "bb"
        })
    }
</script>

<style scoped>
    div.profile-thumbnail{
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: inset 10px transparent;
        height: 30vh;
    }
</style>