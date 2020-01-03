<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col h-100">
                    <div id="editor"></div>
                </div>
            </div>
        </div>
        <b-button> submit</b-button>
    </div>
</template>

<script>
    import Quill from 'quill'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
export default {
    name: "writeboard",
    props:{
        contents: String
    },
    data: () =>({
        editor: Quill.prototype
    }),
    mounted () {
        let toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{'list': 'ordered'}, { 'list': 'bullet' }],
            [{'script': 'sub'}, { 'script': 'super' }],
            [{'indent': '-1'}, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link', 'image'], ['clean']]
        let options = {
            modules: {
                toolbar: toolbarOptions
            },
            placeholder: '내용을 입력해 주세요',
            theme: 'snow'
        }
        this.editor = new Quill('#editor', options)
        if (this.contents) this.editor.root.innerHTML = this.contents
        this.editor.on('text-change', () => {
            this.$emit('update:contents', this.editor.root.innerHTML)
        })
    }
}

</script>

<style scoped>

</style>