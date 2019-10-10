<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 10:21:38
 * @LastEditTime: 2019-10-10 14:03:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="main">
    <Inputer @submit="submit" />
    <Status @change="onStatusChanged" />
    <TodoList :list="onShowList" @toggle="toggleStatus" @delete="onItemDelete" />
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator';
import { createComponent, reactive, computed, toRefs } from '@vue/composition-api'
import Inputer from './components/Inputer.vue'
import TodoList from './components/TodoList.vue'
import Status from './components/Status.vue'

interface ITodoItem {
  completed: Boolean,
  content: String,
  id: Number
}

interface IStatus {
  isChecked: Boolean,
  id: Number
}

enum statusEnum{'all', 'completed', 'uncompleted'}

export default createComponent({
  components: {
    Inputer,
    TodoList,
    Status
  },
  setup(props) {
    const data: any = reactive({
      todoList: [],
      showingStatus: 'all',
      onShowList: computed(() => {
        const list: ITodoItem[] = data.todoList
        if (data.showingStatus === statusEnum[statusEnum['all']]) { // all
          return list
        } else if (data.showingStatus === statusEnum[statusEnum['completed']]) {
          return list.filter(({ completed }) => completed)
        } else if (data.showingStatus === statusEnum[statusEnum['uncompleted']]) {
          return list.filter(({ completed }) => !completed)
        }
      })
    })
    function submit(content: String) {
      data.todoList.push({
        completed: false,
        content,
        id: parseInt(Math.random() * 100000 + '')
      })
    }
    function onStatusChanged(status: String) {
      data.showingStatus = status
    }

    function toggleStatus({ isChecked, id }: IStatus) {
      const list: ITodoItem[] = data.todoList
      list.forEach(item => {
        if (item.id === id) {
          item.completed = isChecked
        }
      })
    }
    function onItemDelete(id: Number) {
      const list: ITodoItem[] = data.todoList
      let index = 0
      list.forEach((item, i) => {
        if (item.id === id) {
          index = i
        }
      })
      list.splice(index, 1)
    }

    return {
      ...toRefs(data),
      submit,
      onStatusChanged,
      toggleStatus,
      onItemDelete
    }
  }
})
</script>
