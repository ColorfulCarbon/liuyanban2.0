<template>
 <div>
  <h2>{{myTitle}}</h2>
  <button @click="handleclick">登录操作</button>
  <button @click="closeFooter">关闭Footer</button>
 </div>
</template>
<script>
export default {
  props:['myTitle'],
  methods: {
   handleclick(){
    this.$emit('loginEvent',true)
   },
   closeFooter(){
    this.$bus.$emit('footerEvent',true)
   }
  },
}
</script>