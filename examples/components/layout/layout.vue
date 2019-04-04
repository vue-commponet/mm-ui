<template>
  <div class="layout">
    <div class="layout--top">
      <router-link to="/home">
        <img src="../../assets/logo.png" class="layout--top__logo">
        <span class="layout--top__name">MM-UI</span>
      </router-link>
    </div>
    <div class="layout--main">
      <div class="layout--left">
        <img src="../../assets/logo.png" class="layout--left__logo">
        <listGroup :groupData="list" class="layout--left__group"></listGroup>
      </div>
      <div class="layout--right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script type="application/javascript">
import listGroup from './group'
export default {
  name: 'layout',
  props: {},
  data () {
    return {
      list: [
        {
          title: '开发指南',
          children: [
            {
              key: 'install',
              name: '安装',
              path: '/install'
            },
            {
              key: 'start',
              name: '快速上手',
              path: '/start'
            }
          ]
        },
        {
          title: '组件',
          children: [
            {
              key: 'button',
              name: '按钮',
              path: '/button'
            },
            {
              key: 'input',
              name: '输入框',
              path: '/input'
            }
          ]
        }
      ]
    }
  },
  created () {

  },
  computed: {},
  methods: {},
  components: {
    listGroup
  }
}
</script>

<style lang="stylus" scoped>
  .layout
    display: flex
    flex-direction: column
    height: 100%
    .layout--top
      display: flex
      justify-content: space-between
      align-items: center
      height: 60px
      padding: 0 20px
      border-bottom: 1px solid #eee
      .layout--top__logo
        height: 30px
        vertical-align: middle
      .layout--top__name
        margin-left: 14px
        font-size: 24px
        font-weight: 600
    .layout--main
      display: flex
      flex: 1
      width: 1200px
      margin: 0 auto
      /*background: #ccc*/
      .layout--left
        width: 200px
        border-right: 1px solid #eee
        .layout--left__logo
          margin: 20px 0
      .layout--right
        flex: 1
        padding: 20px
</style>
