<template>
  <div class="file_views">
    <button @click="toAddFile">添加文件</button>
    <button @click="toAddFolder">添加文件夹</button>
    <div class="projects">
      <el-tree
        style="max-width: 600px"
        :data="directories.structure"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick"
      />
    </div>
    <div class="view_area">

    </div>
    <files-tree :source="directories.structure[0]"></files-tree>
  </div>
</template>

<script setup>
  import { shallowReactive } from 'vue';
  import FilesTree from '@/components/FilesTree';

  console.log(FilesTree, 'FilesTree')

  // 读取本地储存
  const recordDirectories = localStorage.getItem('directories');

  const directories = shallowReactive({ structure: recordDirectories ? [JSON.parse(recordDirectories)] : null});

  const defaultProps = {
    children: 'children',
    label: 'name',
  }

  

  function toAddFile() {
    console.log('添加文件')
  }

  async function toAddFolder() {
    let handler;

    try {
      handler = await showDirectoryPicker();
    } catch (err) {
      console.log(err);
      handler = null;
    }

    if (!handler) return;

    const structure = await generateStructure(handler);

    console.log('structure'.toLocaleUpperCase(), structure);

    console.log('JSON', JSON.stringify(structure))

    localStorage.setItem('directories', JSON.stringify(structure));

    directories.structure = [structure];
  }


  async function generateStructure(handler, structure) {
    const current = structure || {
      handler: handler,
      name: handler.name,
      children: []
    }

    let i = 0;

    for await (const value of handler.values()) {
      current.children.push({handler: value, children: [], name: value.name,});
      
      if (value.kind === 'directory') {
        await generateStructure(value, current.children[i]);
      }

      i++;
    }

    return current;
  }

  const handleNodeClick = (data) => {
    console.log(data, data.handler, '???')
    console.dir(data.value)
  }
</script>