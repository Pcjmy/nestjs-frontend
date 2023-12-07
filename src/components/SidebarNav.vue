<template>
  <ul class="nav flex-column">
    <li class="nav-item" v-for="item in menus" :key="item.id">
      <router-link
        class="nav-link active"
        aria-current="page"
        :to="item.routeName ? { name: item.routeName } : item.path"
        >{{ item.name }}</router-link
      >
    </li>
    <!-- <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'users'}">用户管理</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'roles'}">角色管理</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'menus'}" tabindex="-1" aria-disabled="true">菜单管理</router-link>
    </li> -->
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuItem } from "./types/SidebarNav";

export default defineComponent({
  props: {
    menus: {
      type: Array as PropType<Array<MenuItem>>,
      default: () => [] as MenuItem[],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
