<template>
 <div>
   <ul>
     <button @click="handleClick">delete</button>
     {{myValue}}
   </ul>
 </div>
</template>
<script>
export default {
  props:['myValue','myIndex'],
  methods: {
    handleClick(){
     this.$emit('deleteEvent',this.myIndex)
    }
  },
}
</script>