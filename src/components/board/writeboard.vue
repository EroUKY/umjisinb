<template>
    <div>
        <SideBar></SideBar>
        <div class="container-fluid">
            <div class="row">
                <b-form id="board" name="board">
                    <div>
                        <input type="hidden" id="idx" name="idx" v-model="idx"  />
                        <input type="text" class="form-control" id="title" name="title" placeholder="title">
                    </div>
                    <div class="col h-100">
                        <div id="editor" name="editor"></div>
                    </div>
                </b-form>
            </div>
        </div>
        <div class="col-12 text-right pt-3">
            <b-button size="sm" variant="primary" class="btn btn-primary" >SAVE</b-button>
        </div>
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
        editor: Quill.prototype,
        idx: "1"
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
    },

    async save () {
        this.pending = true
        try {
            const {statusText} = await this.axios({
                url: `/writeboard/${this.No}`,
                method: 'put',
                data: {
                    title : this.title,
                    editor: this.editor
                }
            })
            this.toast(statusText, {title: 'Success', variant: 'success'})
            this.files = []
        } catch (e) {
            return e
        }
        this.pending = false
    }

}

</script>

<style scoped>

</style>