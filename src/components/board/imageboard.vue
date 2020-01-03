<template>
    <div>
        <b-form>
            <b-form-group>
                <b-form-file
                        id="user-image-upload"
                        v-model="imageFile"
                        :state="Boolean(imageFile)"
                        placeholder="파일 선택"
                        drop-placeholder="드래그 앤 드롭"
                ></b-form-file>
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
            imageFile: null,
            imageUrl: null,
            imagePreview: null
        }),
        inputImage (value) {
            let url
            try {
                url = new URL(value).toString()
            } catch (e) {}
            if (url) {
                this.imageUrl = url
            }
        }
    }
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