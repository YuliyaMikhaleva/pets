<template>
  <div @dragover.prevent @drop.prevent="dropFiles">
    <h3 class="file__title">Загрузите пару изображений питомца</h3>
    <div class="file__comment" v-if="files.length<15">Вы можете загрузить не более 15 изображений</div>
    <label class="file__label" v-if="files.length == 0">
      <span class="file__label-title">Выберите файлы или перетащите их сюда</span>
      <input
          @change="handleFileUpload"
          class="file__input"
          type="file"
          ref="file"
          multiple
          :accept="formats">
    </label>
    <div v-if="files.length>0" class="file__list" ref="fileList" >

        <div v-for="(file, index) of filesURLS"
             ref="image"
             :key="file+index"
             class="file__preview-wrp"
             :class="{over: (file === over.file && file !== dragFrom), [over.dir]: (file === over.item && file !== dragFrom)}"
             draggable="true"
             @dragover="(e) => onDragOver(file, index, e)"
             @dragend="(e) => finishDrag(file, index, e)"
             @dragstart="(e) => startDrag(file, index, e)"
             @mousedown="addGrabCursor"
             @mouseup="removeGrabCursor"

        >
          <img :src="file" alt="file" class="file__preview-img">
        </div>


      <label class="file__preview-label" v-if="files.length <15">
        <div class="file__preview-plus">+</div>
        <input
            @change="handleFileUpload"
            class="file__input"
            type="file"
            ref="file"
            multiple
            :accept="formats">
      </label>
    </div>

  </div>


</template>

<script>
import FileListMutator from "@/assets/heplers/FileListMutator";

export default {
  name: "FileInput",
  props:{
    formats: {
      type: Array,
      default: () => [],
    },
  },
  data(){
    return{
      filesObjs:[],
      files:[],
      filesURLS:[],
      isSuccess: false,
      errors: [],
      isError: false,
      over: {},
      startLoc: 0,
      dragging: false,
      dragFrom: {}
    }
  },
  computed: {

  },
  watch:{
    over(){
      if (this.over === {}){
        this.$refs.image.forEach(el => {
          if (el.classList.contains('up')){
            el.classList?.remove('up')
          }
          if (el.classList.contains('down')){
            el.classList?.remove('down')
          }
        })
      }

    }
  },
  methods:{
    handleFileUpload() {
      this.files = FileListMutator.mergeFileLists(this.files, this.$refs.file.files)
      this.files.objs = [...this.files]
      let urls = [...this.files]
      this.filesURLS = urls.map(el => URL.createObjectURL(el))
    },
    dropFiles(e){
      if (e.dataTransfer.files.length) {
        this.$refs.file.files = e.dataTransfer.files;
        this.handleFileUpload();
      }
    },

    startDrag(item, i, e) {
      this.startLoc = e.clientY;
      this.dragging = true;
      this.dragFrom = item;
    },

    finishDrag(item, pos) {
      this.filesURLS.splice(pos, 1)
      this.filesURLS.splice(this.over.pos, 0, item);
      setTimeout(() => {
        this.over = {}
      }, 50)
    },

    onDragOver(item, pos, e) {
      const dir = (this.startLoc < e.clientY) ? 'down': 'up';
      setTimeout(() => {
        this.over = { item, pos, dir };
      }, 50)
    },

    addGrabCursor(e){
      e.target.style.cursor = 'grabbing'
    },
    removeGrabCursor(e){
      e.target.style.remove.cursor = 'auto'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "FileInput";
</style>