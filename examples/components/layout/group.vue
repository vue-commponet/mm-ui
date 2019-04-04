<template>
  <div class="list">
    <div v-for="(item,index) in groupData" :key="index" class="group">
      <div class="title">{{ item.title }}</div>
      <ul class="children">
        <router-link v-for="children in item.children" :key="children.name" :to="children.path" >
          <li :class="active === children.key ? 'active':'' " class="children--item" @click="changeMenu(children.key)">{{ children.name }}</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script type="application/javascript">
export default {
  name: 'group',
  props: {
    groupData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      active: 'install'
    }
  },
  created () {

  },
  computed: {},
  methods: {
    changeMenu (key) {
      this.active = key
    }
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
  .group
    padding: 0 10px
    margin-top: 20px
    text-align: left
    .title
      line-height: 40px
      font-size: 16px
      font-weight: 700
      color: #333
    .children--item
      line-height: 30px
      font-size: 14px
      font-weight: 400
      color: #444
      cursor: pointer
      &:hover,&.active
        color: #1cc28b
</style>
