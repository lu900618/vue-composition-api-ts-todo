<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 11:16:11
 * @LastEditTime: 2019-10-08 11:16:11
 * @LastEditors: your name
 -->
<template>
  <div class="status">
    <label for="all">
      All
      <input type="radio" name="status" id="all" value="all" v-model="status" />
    </label>
    <label for="completed">
      Completed
      <input type="radio" name="status" id="completed" value="completed" v-model="status" />
    </label>
    <label for="uncompleted">
      Uncompleted
      <input
        type="radio"
        name="status"
        id="uncompleted"
        value="uncompleted"
        v-model="status"
      />
    </label>
  </div>
</template>

<script>
import { reactive, watch, toRefs, createComponent } from '@vue/composition-api'
export default createComponent({
  setup(props, { emit }) {
    const data = reactive({ status: 'all' })

    // watch([() => data.a, () => data.b, () => data.c], ([val1, val2, val3]) => { console.log('conditions changed，do search', val1, val2, val3) })
    watch(() => data.status, val => {
      emit('change', val)
    })

    return {
      ...toRefs(data)
    }
  }
})
</script>

<style lang="less" scoped>
.status {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
</style>
