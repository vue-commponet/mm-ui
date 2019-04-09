<template>
  <div class="home">
    <h1>MM-UI,周氏前端组件</h1>
    <div class="home--btn">
      <router-link to="/docs"><div class="home--btn__start">开始使用</div></router-link>
      <mm-button
        type="primary"
        icon="iconfont iconloading"
        loadingIcon="iconfont iconloading"
        loading
        >123</mm-button>
      <div class="home--btn__github">github</div>
    </div>
  </div>
</template>

<script type="application/javascript">
export default {
  name: 'home',
  props: {},
  data () {
    return {}
  },
  created () {

  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus" scoped>
  .home
    padding-top: 200px
</style>
