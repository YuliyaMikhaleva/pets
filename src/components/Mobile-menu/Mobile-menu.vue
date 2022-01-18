<template>
    <nav class="mobile-menu">
      <div class="mobile-menu__icon" @click="isActive=!isActive" :class="{'mobile-menu__active-icon': isActive}">
        <div class="mobile-menu__wrp" :class="{'open':isActive}">
          <span class="mobile-menu__line" :class="{'top':isActive}"></span>
          <span class="mobile-menu__line" :class="{'middle':isActive}"></span>
          <span class="mobile-menu__line" :class="{'bottom':isActive}"></span>
        </div>
      </div>
      <ul v-if="isActive == true" class="mobile-menu__list">
        <li class="mobile-menu__item">
          <a class="mobile-menu__link-svg" href="#">
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="mobile-menu__svg-path" fill-rule="evenodd" clip-rule="evenodd" d="M12.0028 14.62C13.2361 14.62 14.24 15.6154 14.24 16.8389V19.9857C14.24 20.2486 14.4511 20.4594 14.7215 20.4655H16.674C18.2126 20.4655 19.4634 19.2317 19.4634 17.7157V8.79095C19.4562 8.26921 19.2073 7.77817 18.7801 7.45183L12.0263 2.07287C11.1198 1.35574 9.85156 1.35574 8.9419 2.07491L2.2342 7.44979C1.79063 7.78635 1.54171 8.2774 1.53659 8.80834V17.7157C1.53659 19.2317 2.78737 20.4655 4.326 20.4655H6.29693C6.57454 20.4655 6.7999 20.2455 6.7999 19.9755C6.7999 19.9161 6.80707 19.8568 6.81937 19.8005V16.8389C6.81937 15.6226 7.81712 14.6282 9.04127 14.62H12.0028ZM16.674 22H14.7031C13.5742 21.9734 12.7035 21.0885 12.7035 19.9857V16.8389C12.7035 16.4614 12.389 16.1545 12.0028 16.1545H9.04639C8.66839 16.1566 8.35595 16.4645 8.35595 16.8389V19.9755C8.35595 20.0522 8.34571 20.1259 8.3242 20.1954C8.21356 21.2082 7.34693 22 6.29693 22H4.326C1.94019 22 0 20.0778 0 17.7157V8.80118C0.0102439 7.78431 0.479415 6.85337 1.28971 6.24059L7.9841 0.874926C9.45819 -0.291301 11.5121 -0.291301 12.9831 0.87288L19.7257 6.24366C20.5175 6.84621 20.9867 7.7751 21 8.77969V17.7157C21 20.0778 19.0598 22 16.674 22Z" fill="#EDF2F7"/>
            </svg>
          </a>
          <a class="mobile-menu__link" href="#">Home</a>
        </li>
        <li class="mobile-menu__item">
          <a class="mobile-menu__link-svg" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_229_91)">
                <path class="mobile-menu__svg-stroke" d="M6.37205 7.22508L6.37219 7.22581C6.54558 8.14129 6.33089 8.98761 5.9295 9.59419C5.51993 10.2131 4.97193 10.5139 4.49914 10.5139C3.36607 10.5139 1.96484 9.30039 1.96484 7.61988C1.96484 6.70027 2.19756 5.76388 2.58138 5.08206C2.97461 4.38353 3.42543 4.10449 3.82566 4.10449C4.32916 4.10449 4.86243 4.37663 5.34481 4.94659C5.82533 5.51435 6.20216 6.32316 6.37205 7.22508Z" stroke="#EDF2F7" stroke-width="1.5"/>
                <path class="mobile-menu__svg-stroke" d="M11.1988 1.71289L11.199 1.71296C11.6912 1.85744 12.1417 2.2774 12.4643 2.96987C12.7851 3.65839 12.9423 4.54822 12.8782 5.46635C12.8121 6.39815 12.3905 7.1465 11.8568 7.61077C11.3134 8.08339 10.7171 8.21855 10.2618 8.08541C9.73075 7.92862 9.18489 7.47284 8.82501 6.80532C8.47018 6.14719 8.33083 5.34387 8.53872 4.55534L8.53885 4.55483C8.77144 3.67008 9.23143 2.83758 9.76948 2.2937C10.3181 1.7391 10.8139 1.59978 11.1988 1.71289Z" stroke="#EDF2F7" stroke-width="1.5"/>
                <path class="mobile-menu__svg-stroke" d="M19.0424 9.28567L19.0424 9.28561C19.4529 8.4783 19.6529 7.59832 19.6248 6.82787C19.5964 6.05332 19.3443 5.46182 18.9367 5.10747L18.935 5.10601C18.6165 4.82747 18.1117 4.75048 17.4129 5.01568C16.7207 5.27842 15.9852 5.83619 15.434 6.54055L15.4338 6.54085C14.9473 7.16199 14.7624 7.95179 14.8342 8.7128C14.907 9.48325 15.2347 10.1476 15.6728 10.5293L19.0424 9.28567ZM19.0424 9.28567C18.177 10.9879 16.4133 11.1743 15.6728 10.5294L19.0424 9.28567Z" stroke="#EDF2F7" stroke-width="1.5"/>
                <path class="mobile-menu__svg-stroke" d="M19.7826 12.4586L19.782 12.4589C19.1901 12.7634 18.7701 13.3181 18.5632 13.9605C18.3539 14.6106 18.3862 15.2781 18.6096 15.7604L18.6097 15.7606C18.9923 16.5871 20.4768 17.0871 21.7333 16.0772L19.7826 12.4586ZM19.7826 12.4586C20.4711 12.1035 21.2585 11.9384 21.9071 11.9944M19.7826 12.4586L21.9071 11.9944M21.9071 11.9944C22.5577 12.0505 22.9389 12.3054 23.1012 12.6554M21.9071 11.9944L23.1012 12.6554M23.1012 12.6554C23.3081 13.1035 23.3048 13.6799 23.0593 14.3151C22.8144 14.9486 22.3469 15.583 21.7337 16.0769L23.1012 12.6554Z" stroke="#EDF2F7" stroke-width="1.5"/>
                <path class="mobile-menu__svg-stroke" d="M3.56641 16.5965C3.56641 15.0724 4.54577 13.5874 6.08765 12.4775C7.62253 11.3726 9.5793 10.7449 11.2704 10.8554C13.5195 11.0051 15.7579 13.0461 16.3925 16.5947C16.7 18.3206 16.5181 19.7889 15.7331 20.8043C14.9632 21.8001 13.4582 22.5562 10.6575 22.5142C8.9379 22.4862 7.1405 21.8098 5.78049 20.7136C4.42066 19.6175 3.56641 18.1631 3.56641 16.5965Z" stroke="#EDF2F7" stroke-width="1.5"/>
              </g>
              <defs>
                <clipPath id="clip0_229_91">
                  <rect  width="24" height="24" fill="transparent"/>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a class="mobile-menu__link" href="#">Pets</a>
        </li>
        <li class="mobile-menu__item">
          <a class="mobile-menu__link-svg" href="#">
            <svg class="mobile-menu__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="mobile-menu__svg-stroke" d="M1.5 7.75H22.5V6.25H1.5V7.75ZM6 0.75H18C20.8995 0.75 23.25 3.10051 23.25 6V18C23.25 20.8995 20.8995 23.25 18 23.25H6C3.10051 23.25 0.75 20.8995 0.75 18V6C0.75 3.10051 3.10051 0.75 6 0.75Z" stroke="#EDF2F7" stroke-width="1.5"/>
            </svg>
          </a>
          <a class="mobile-menu__link" href="#">Blog</a>
        </li>
        <li class="mobile-menu__item">
          <a class="mobile-menu__link-svg" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="mobile-menu__svg-path" fill-rule="evenodd" clip-rule="evenodd" d="M4.01683 17.8409C4.33242 18.1574 4.49045 18.5981 4.44785 19.0431C4.35239 20.0401 4.13253 21.0778 3.85016 22.0417C5.94249 21.5581 7.22036 20.9972 7.80122 20.7028C8.13093 20.5357 8.51072 20.4963 8.86774 20.592C9.8545 20.8566 10.9061 21 12 21C17.9934 21 22.5 16.7887 22.5 12C22.5 7.21132 17.9934 3 12 3C6.0066 3 1.5 7.21132 1.5 12C1.5 14.2021 2.42596 16.2456 4.01683 17.8409ZM3.27734 23.6984C3.26724 23.7004 3.25712 23.7024 3.24699 23.7044C3.10925 23.7315 2.96883 23.7583 2.82573 23.7845C2.62499 23.8212 2.41896 23.857 2.20758 23.8916C1.90906 23.9405 1.68055 23.6282 1.79847 23.3496C1.87551 23.1676 1.95146 22.9769 2.02545 22.7791C2.07246 22.6535 2.11867 22.525 2.16388 22.3941C2.16583 22.3885 2.16777 22.3828 2.16972 22.3772C2.54133 21.2976 2.84395 20.0567 2.95468 18.9001C1.11459 17.0548 0 14.6413 0 12C0 6.20101 5.37258 1.5 12 1.5C18.6274 1.5 24 6.20101 24 12C24 17.799 18.6274 22.5 12 22.5C10.7749 22.5 9.59262 22.3394 8.47926 22.0408C7.70005 22.4357 6.02151 23.1545 3.27734 23.6984Z" fill="#EDF2F7"/>
            </svg>
          </a>
          <a class="mobile-menu__link" href="#">Chat</a>
        </li>
        <li class="mobile-menu__item">
          <a class="mobile-menu__link-svg" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="mobile-menu__svg-path" fill-rule="evenodd" clip-rule="evenodd" d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6ZM12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.993C21.9971 21.4995 21.6925 20.0209 20.3358 18.6642C19.0313 17.3597 16.5782 16 12 16C7.42177 16 4.96872 17.3597 3.6642 18.6642C2.30752 20.0209 2.00286 21.4995 2.00001 21.993H22Z" fill="#EDF2F7"/>
            </svg>
          </a>
          <a class="mobile-menu__link" href="#">Profile</a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: "Mobile-menu",
  data(){
    return {
      isActive: false,
    }
  },

}
</script>

<style lang="scss" scoped>
@import "./src/assets/variables";
  .mobile-menu{
    &__icon{
      width: 32px;
      height: 32px;
      border-radius: 7px;
      background-color: #4C6FFF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 20px;
      left: 30px;
      transition: all 0.3s;
      &::before{
        display: block;
        background-color: transparent;
        content: "";
        width: 32px;
        height: 32px;
        position: fixed;
        top: 20px;
        left: 30px;
        transition: all 0.3s;
        z-index: -1;
        border-radius: 7px;

      }
    }
    &__active-icon{
      transition: all 0.3s;
      &::before{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 0;
        background-color: #4C6FFF;
        z-index: 99999
      }
    }
    &__line{
      display: block;
      width: 16px;
      height: 2px;
      background-color: white;
      border-radius: 1px;
      transform-origin: 4px 0px;
      transition: all 0.3s;

      &:nth-child(2){
        margin: 4px 0 4px;
      }
    }
    &__line.top{
        transform: translate(0, 9px) rotate(-45deg);
        transition: all 0.3s;
    }
    &__line.middle{
        transform-origin: 0% 100%;
        opacity: 0;
        transition: all 0.3s;
    }
    &__line.bottom{
        transform: translate(2px, -8px) rotate(45deg);
        transition: all 0.3s;
    }
    &__wrp.open{
      z-index: 9999999;
      position: absolute;
      transition: all 0.3s;
    }
    &__list{
      position: absolute;
      top: 111px;
      left: 63px;
      z-index: 9999999;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item{
      margin-bottom: 40px;
      font-family: Rubik;
      font-weight: 700;
      font-style: normal;
      line-height: 18.96px;
      letter-spacing: -0.005em;
      display: flex;
      position: relative;
      cursor: pointer;
    }
    &__item:hover .mobile-menu__link{
      color: #17171B;
      transition: color 0.3s;
    }
    &__item:hover .mobile-menu__svg-path{
      fill: #17171B;
      transition: fill 0.3s;
    }
    &__item:hover .mobile-menu__svg-stroke{
      stroke: #17171B;
      transition: stroke 0.3s;
    }
    &__link{
      color: #FFFFFF;
      text-decoration: none;
      transition: color 0.3s;
    }
    &__link-svg{
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      top: -6px;
      left: -33px;
    }
    &__svg-path{
      transition: fill 0.3s;
    }
    &__svg-stroke{
      transition: stroke 0.3s;
    }

  }

</style>