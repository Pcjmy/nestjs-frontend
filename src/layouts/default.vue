<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <!-- 左侧菜单栏组件 -->
        <SidebarNav :menus="store.menus" />
      </div>
      <div class="col-9">
        <div class="row">
          <div class="container-fluid">
            <!-- 头部导航 -->
            <HeaderNav />
            <!-- 主体内容 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarNav from "@/components/SidebarNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { useMenusStore } from "@/store/menus";

export default defineComponent({
  components: {
    SidebarNav,
    HeaderNav,
  },
  setup() {
    const store = useMenusStore();
    return {
      store,
    };
  },
});
</script>

<style scoped></style>
