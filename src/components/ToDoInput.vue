<template>
 <div>
  <h1>留言板</h1>
  <input type="text" placeholder="在这输入" v-model="myValue">
  <button @click="handleAdd">Add</button>
 </div>
</template>

<script>
export default {
  data() {
   return {
    myValue:''
   }
  },
  methods: {
   handleAdd(){
    this.$bus.$emit('addEvent',this.myValue) 
   }
  },
}
</script>