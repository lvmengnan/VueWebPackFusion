<template>
  <el-row class="nav_bar">
    <el-col>
      <h5 class="project_title">Vue WebPack Fusion</h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="activeIndex"
        text-color="#fff"
      >
        <template v-for="item in menus" :key="item.path">
          <el-menu-item
            v-if="!item.children?.length"
            :index="item.path"
            @click="menuItemOnclick">{{ item.name }}</el-menu-item>
          <el-sub-menu v-else :index="item.path">
            <template #title>
              {{ item.name }}
            </template>
            <el-menu-item
              v-for="subItem in item.children"
              :index="'/' + subItem.path"
              :key="subItem.path"
              @click="menuItemOnclick">{{ subItem.name }}</el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import { shallowRef, ref } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from '@/router';
import './index.scss';

const getMenus = routes => routes.filter(route => !!route.name);
const menus = shallowRef(getMenus(routes));

const router = useRouter();
function menuItemOnclick(it) {
  console.log(it.indexPath)
  router.push(it.indexPath.join(''))
}

const activeIndex = ref('');
router.beforeEach((to, from, next) => {
  const index = to.path.split('/').pop();
  activeIndex.value = '/' + index;
  next();
})

</script>