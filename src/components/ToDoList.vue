 <template>
  <ul>
   <li>
    <todoitem @deleteEvent='handleEvent' :myIndex='index' :myValue="tmp" v-for="(tmp,index) in list" :key="index"></todoitem>
   </li>
  </ul>
  
 </template>
 
 <script>
 import ToDoItem from '@/components/ToDoItem.vue'
 export default {
  data() {
   return {
    list:[]
   }
  },
  methods: {
   handleEvent(index){
    this.list.splice(index,1)
   }
  },
  mounted() {
   //事件绑定 
   this.$bus.$on('addEvent',(msg)=>{
    console.log(msg);
    this.list.push(msg)
   }) 
  },
  components:{
   'todoitem':ToDoItem
  }
 }
 </script>