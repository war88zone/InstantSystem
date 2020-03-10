<template lang="html">
  <ul class="RadioButtonList">
    <li class="RadioButtonList-item"
        v-for="(item, index) in items"
        :key="'radio-button-list_'+index">
      <label class="RadioButtonList-label">
        <input class="RadioButtonList-input u-clientColor"
               type="radio"
               :value="item.id"
               v-model="radio"/>
        <span class="RadioButtonList-iconOutside"
              :class="{'RadioButtonList-iconOutside--checked': currentValue === item.id}">
          <span class="RadioButtonList-iconInside"
                :class="{'u-clientBackgroundColor': currentValue === item.id}"></span>
        </span>
        <span class="RadioButtonList-text">{{ item.label }}</span>
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
      value: {
        type: [Number, String],
        required: true
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    computed: {
      radio: {
        get () {
          return this.currentValue
        },
        set (newValue) {
          this.currentValue = newValue
          this.$emit('change', newValue)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/_variables';

  .RadioButtonList {
    margin: 0;
    padding: 0;
    list-style: none;

    &-item {
      padding: $padding-small 0;
    }

    &-label {
      display: flex;
      cursor: pointer;
      white-space: normal;
      align-items: center;

      &:hover {
        .RadioButtonList-iconOutside {
          background-color: $fontColor-grey;

          &--checked {
            background-color: $fontColor-white;
          }
        }
      }
    }

    &-input {
      display: none;
    }

    &-iconOutside {
      display: flex;
      width: 20px;
      height: 20px;
      border: 1px solid $fontColor-grey;
      border-radius: 100%;
      align-items: center;
      justify-content: center;

      &--checked {
        background-color: $fontColor-white;
      }
    }

    &-iconInside {
      width: 15px;
      height: 15px;
      border-radius: 100%;
      transition: background-color .3s;
    }

    &-text {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      margin-left: 2rem;
      color: $fontColor-white;
      font-size: $font-small;
    }
  }
</style>
