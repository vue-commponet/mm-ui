<template>
  <div class="layout">
    <div class="layout--left">
      <img src="../../assets/logo.png" class="layout--left__logo">
      <listGroup :groupData="list" class="layout--left__group"></listGroup>
    </div>
    <div class="layout--right">
      <router-view/>
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
    width: 1200px
    height: 100%
    margin: 0 auto
    /*background: #ccc*/
    .layout--left
      width: 200px
      border-right: 1px solid #ccc
      .layout--left__logo
        margin: 20px 0
    .layout--right
      flex: 1
      padding: 20px
</style>
