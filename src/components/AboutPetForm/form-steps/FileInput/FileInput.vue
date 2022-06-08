<template>
  <div @dragover.prevent @drop.prevent="dropFiles">
    <h3>Загрузите пару изображений питомца</h3>
    <label class="file__label">
      <span class="file__label-title">Выберите файлы или перетащите их сюда</span>
      <input
          class="file-input"
          type="file"
          ref="file"
          multiple
          :accept="formats">
    </label>
  </div>


</template>

<script>

export default {
  name: "FileInput",
  props:{
    formats: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // inputClasses() {
    //   return ['file', {'file--error': this.isError, 'file--success': this.isSuccess}]
    // },
  },
  methods:{
    // handleFileUpload() {
    //   console.log(1)
    //   this.files = this.$refs.file.files
    //   // this.files = FileListMutator.mergeFileLists(this.files, this.$refs.file.files)
    //   console.log(this.files)
    //   // this.validateFiles()
    // },
    dropFiles(e){
      console.log(e)
      // if (e.dataTransfer.files.length) {
      //   //если есть прикрепленные файлы
      //   this.$refs.file.files = e.dataTransfer.files;
      //   this.handleFileUpload()//Показать файл
      // }

    }
  }
}
</script>

<style scoped lang="scss">
  @import "FileInput";
</style>