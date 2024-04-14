<template>
  <div class="slots_page">
    <has-slot>
      <template #header>
        <h3>Vue3中使用插槽（slot）</h3>
      </template>
      <div class="page_info">
        <p>这是一个展示slot的页面</p>
        <p>匿名插槽 - Content</p>
        <p>具名插槽 - Header</p>
        <p>作用域插槽 - footer</p>
      </div>
      <template #footer={data}>
        <h5>项目名称：{{ data.name }}</h5>
        <h5>页面创建时间：{{ data.date }}</h5>
      </template>
    </has-slot>
  </div>
</template>
<script setup>
import HasSlot from '@/components/HasSlot';
</script>