<template>
 <div>
  <h3>这是页脚</h3>
 </div>
</template>

<script>
export default {
 mounted(){
  //借助bus来完成事件的绑定,在事件处理函数中接收通过bus传来的数据
  this.$bus.$on('footerEvent',(msg)=>{
   console.log('页脚接收到的值:',msg) 
  })
 }
}
</script>