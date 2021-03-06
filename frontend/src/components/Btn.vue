<template>
  <button
    :disabled="disabled"
    :name="name"
    :type="type"
    @click="$emit('click')"
    :class="[
      `btn`,
      `btn--${color}`,
      {
        'btn--full-width': fullWidth,
        'btn--outlined': outlined,
        'btn--disabled': disabled,
        'btn--transparent': transparent,
      }
    ]"
  >
    <img class="btn__icon" v-if="icon" :src="icon" />
    <slot />
  </button>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { AuthAction } from '@/store/auth'

@Component()
export default class Btn extends Vue {
  @Prop(String) name
  @Prop({ type: String, default: 'button' }) type
  @Prop({ type: String, default: 'black' }) color
  @Prop({ type: Boolean, default: false }) outlined
  @Prop({ type: Boolean, default: false }) fullWidth
  @Prop({ type: Boolean, default: false }) disabled
  @Prop({ type: Boolean, default: false }) transparent
  @Prop({ type: [ String, Boolean ], default: false }) icon
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.btn {
  padding: 14px;
  font-family: $font-family-proxima-nova;
  font-weight: $font-weight-extra-bold;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  border: none;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:focus {
    outline: none;
  }

  &--black {
    color: $color-white-text;
    background-color: $color-black;
  }

  &--white {
    color: $color-black-text;
    background-color: $color-white;
  }

  &--outlined {
    border: 2px solid $color-black;
    color: $color-black;
  }

  &--transparent {
    background-color: transparent;
  }

  &--full-width {
    display: block;
    width: 100%;
  }

  &--disabled {
    color: $color-gray;
    border-color: $color-gray;
    cursor: not-allowed;
  }

  &__icon {
    height: 20px;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>
