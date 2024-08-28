<template>
  <div v-bind="$attrs" class="field-group">
    <div class="label-line" v-if="label">
      <p class="label">
        {{ label }}<small v-if="subLabel">{{ subLabel }}</small>
      </p>
      <p
        class="required-badge"
        :class="{ 'is-required': required }"
        v-if="required !== null"
      >
        {{ required ? '必須' : '任意' }}
      </p>
    </div>
    <div class="field-wrap"><slot /></div>
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    <div class="note"><slot name="note" /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    subLabel: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>
.label-line {
  line-height: 1;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.label {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 0;

  small {
    font-weight: normal;
    margin-left: 7px;
    color: $black-600;
  }
}

.required-badge {
  font-size: 10px;
  font-weight: normal;
  display: inline-block;
  margin: 0 0 0 7px;
  padding: 0.5em 1em;
  color: $white;
  border-radius: 2em;
  background: $line-color;

  &.is-required {
    background: $black-700;
  }
}

.error-message {
  font-size: 12px;
  margin: 6px 0 0;
  color: $red;
}

.note {
  margin: 15px 0 0;
  font-size: 12px;
  color: $black-600;
}
</style>
