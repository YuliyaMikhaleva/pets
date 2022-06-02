<template>
  <form class="accaunt" @submit="saveData">
    <h3 class="accaunt__title">Информация</h3>

    <label for="avatar" class="accaunt__label-add-avatar">
      <button class="accaunt__button-add">
        <img src="icons/icon-image.svg" alt="add image" class="accaunt__button-add--without-photo">
      </button>
    </label>
    <input type="file" id="avatar" @change="addNewAvatar" multiple class="accaunt__add-avatar">

    <div class="accaunt__form">
      <input-block v-model="information.name" :value="information.name">Имя</input-block>
      <input-block type="text" :date="true" v-model="information.dateBirdth" :value="information.dateBirdth">Дата рождения</input-block>
      <input-block type="text" v-model="information.status" :value="information.status">Статус</input-block>
      <div class="accaunt__location">
        <select-block :array="getCountries" @selectBlock="setSelectCountry"/>
        <select-block :array="getCities" @selectBlock="setSelectCity"/>
      </div>

    </div>
    <h3 class="accaunt__title accaunt__title--second">Безопасность</h3>
    <div class="accaunt__form">
      <input-block v-model="information.oldPassword" :value="information.oldPassword">Текущий пароль</input-block>
      <input-block v-model="information.newPassword" :value="information.newPassword">Новый пароль</input-block>
    </div>
    <Button class="button button--save" type="submit">Сохранить</Button>
  </form>

</template>

<script>
import Button from "@/components/Button/Button";
import InputBlock from "@/components/InputBlock/InputBlock";
import {mapActions, mapGetters} from "vuex";
import SelectBlock from "@/components/SelectBlock/SelectBlock";
export default {
  name: "Account-info",
  components:{
    SelectBlock,
    InputBlock,
    Button
  },
  data(){
    return{
      information:{
        name:"",
        dateBirdth:"",
        status:"",
        country:"",
        city:"",
        oldPassword:"",
        newPassword:"",
        avatar:""
      }
    }
  },

  mounted() {
      if (!this.getCountries.length){
        this.loadCountries();
      }
      if (!this.getCities.length){
        this.loadCities();
      }
      this.setName();
      this.setPassword();

  },
  computed:{
    ...mapGetters('profileModule',['getUser']),
    ...mapGetters('locationsModule',['getCities', 'getCountries']),

  },
  methods:{
    ...mapActions('locationsModule',['loadCities', 'loadCountries']),
    ...mapActions('profileModule',['changeProfile']),
    setName(){
      this.information.name = this.getUser.name
    },
    setPassword(){
      this.information.oldPassword = this.getUser.password
    },
    saveData(e){
      console.log('Отправка формы')
      e.preventDefault();
      this.changeProfile({
        name: this.information.name,
        dateBirdth:this.information.dateBirdth,
        status:this.information.status,
        country:this.information.country,
        city:this.information.city,
        password: this.information.newPassword,
        email: this.getUser.email,
        avatar: this.information.avatar
      })
      setTimeout(() => {
        document.querySelector('.button--save').textContent = "Сохранено"
      },500)
    },
    setSelectCountry(country){
      this.information.country = country
    },
    setSelectCity(city){
      this.information.city = city
    },
    addNewAvatar(){
      let file = document.querySelector('.accaunt__add-avatar').files[0]
      let button = document.querySelector('.accaunt__button-add')
      console.log('file',file)

      let img = document.createElement("img");
      img.classList.add('accaunt__button-new')
      let oldAvatar = document.querySelector('.accaunt__button-add--without-photo')
      oldAvatar.classList.add('hidden')
      img.file = file;
      button.appendChild(img); // Предполагается, что "preview" это div, в котором будет отображаться содержимое.


      let reader = new FileReader();
      reader.onload = (function(aImg) {
        return function(e) {
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(file);
    }
  }
}
</script>

<style scoped lang="scss">
  @import "Accaunt";
</style>