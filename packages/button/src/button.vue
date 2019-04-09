<template>
  <div
    :class="[buttonSize,
    buttonType,
    {
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading
    }
    ]"
    class="mm-button">
    <i v-if="loading" :class="loadingIcon" class="is-loading"></i>
    <i v-if="icon && !loading" :class="icon" class="is-icon"></i>
    <span v-if="$slots.default" class="mm-button--text"><slot></slot></span>
  </div>
</template>

<script type="application/javascript">
export default {
  name: 'mmButton',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    loadingIcon: {
      type: String,
      default: ''
    },
    round: Boolean,
    circle: Boolean,
    loading: Boolean
  },
  data () {
    return {}
  },
  created () {

  },
  computed: {
    buttonSize () {
      return `mm-button--size__${this.size}`
    },
    buttonType () {
      return `mm-button--type__${this.type}`
    }
  },
  methods: {},
  components: {}
}
</script>
