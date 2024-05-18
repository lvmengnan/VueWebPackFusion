<template>
  <generate-nodes :source="source"></generate-nodes>
</template>
<script setup>
import { defineProps, h, withModifiers, ref, reactive  } from 'vue';
import './index.scss';

const props = defineProps({
  source: {
    type: Object,
    required: true
  },
  click: {
    type: Function
  },
  leftClick: {
    type: Function
  }
})

const isOpen = reactive({});


function clickHandler(id) {
  console.log(isOpen, 'isOpen', id);
  console.log(isOpen[id]);
  isOpen[id] = !isOpen[id];
  console.log(isOpen[id]);
  if (props.click) {
    
  }
}

function leftClickHandler(e) {
  console.log('执行LeftClick')
  if (props.leftClick) {
    
  }
}

function GenerateNodes({source}) {
  const id = '0';
  if(!isOpen[id]) isOpen[id] = false;

  return h('section', {
    class: 'root_node',
  }, [
    h('div', {
      class: 'root_node_name',
      onClick: () => clickHandler(id),
      onContextmenu: withModifiers(leftClickHandler, ['prevent'])
    }, [source.name || '--']),
    h('ul', {
      class: ["children_list", {show: isOpen[id]}]
    }, [...getChildren(source.children, id)])
  ])
}

function getChildren(sons = [], subId) {

  return sons.map((item, index) => {
    const { name, children, handler } = item;
    const { kind } = handler;
    const className = kind=== 'directory' ? 'folder_node' : 'file_node';
    const slefId = `${subId}-${index}`;
    if(!isOpen[slefId]) isOpen[slefId] = false;

    return h('div', {
      class: className,
    }, [
      h('div', {
          class: className + '_name',
          onClick: () => clickHandler(slefId),
          onContextmenu: withModifiers(leftClickHandler, ['prevent'])
        }, [name || '--']),
      !!children?.length && h('ul', {
          class: ["children_list", {show: isOpen[slefId]}]
        }, [...getChildren(children, slefId)])
    ])
  })
}

console.log(props.source, 'son-component')
</script>