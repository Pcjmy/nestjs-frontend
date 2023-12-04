<template>
  <div
    class="container d-flex justify-content-center align-items-center vh-100"
  >
    <div class="col-11 col-sm-8 col-lg-6 col-xl-4 col-xxl-4">
      <form class="border shadow-sm rounded p-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">用户名：</label>
          <input
            type="email"
            :class="['form-control']"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div class="invalid-feedback"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密码：</label>
          <input
            type="password"
            :class="['form-control']"
            id="exampleInputPassword1"
          />
          <div class="invalid-feedback"></div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">记住我</label>
        </div>
        <div class="d-flex flex-column align-items-center px-1">
          <button type="submit" class="btn btn-primary w-100 mb-2 text-light">
            登录
          </button>
          <router-link
            to="/reg"
            class="border rounded w-100 text-decoration-none text-center"
          >
            <button type="submit" class="btn">注册</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
