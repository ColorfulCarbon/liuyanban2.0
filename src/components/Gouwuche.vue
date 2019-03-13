<template>
 <div>
   <myHeader @loginEvent='handleclick' myTitle='我是购物车'></myHeader>
   <ul>
     <li>商品1</li>
     <li>商品2</li>
     <li>商品3</li>
   </ul>
  <myfooter></myfooter>
 </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
   methods: {
     handleclick(msg){
       console.log('父组件收到的消息为:',msg)
     }
   },
   components:{
     'myfooter':Footer
   }
}
</script>
