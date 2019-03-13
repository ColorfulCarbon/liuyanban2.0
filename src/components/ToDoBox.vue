<template>
 <div>
  <todoinput></todoinput>
  <todolist></todolist>
 </div>
</template>
<script>
import ToDoInput from '@/components/ToDoInput.vue'
import ToDoList from '@/components/ToDoList.vue'
export default {
  components:{
   'todolist':ToDoList,
   'todoinput':ToDoInput
  }
}
</script>