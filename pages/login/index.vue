  
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin?'login':'Sign up'}}</h1>
          <p class="text-xs-center">
            <a href>Have an account?</a>
          </p>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form>
            <fieldset class="form-group" v-if="!isLogin">
              <input
                v-model="username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <div
              @click="submit"
              class="btn btn-lg btn-primary pull-xs-right"
            >{{isLogin?'Sign in':'Sign up'}}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, register } from "@/api/user";
//仅在客户端加载
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    isLogin() {
      console.log(this.$router);
      return this.$route.name === "login";
    },
  },
  methods: {
    async submit() {
      let paramData = {
        email: this.email,
        password: this.password,
      };
      if (this.$route.name !== "login") {
        paramData.username = this.username;
      }
      let data;
      if (this.$route.name == "login") {
        data = await login({ user: paramData });
      } else {
        data = await register({ user: paramData });
      }
      this.$store.commit("setUser", data.data.user);
      //为防止刷新数据丢失，数据持久化
      Cookie.set("user", data.data.user);
      this.$router.push("/");
    },
  },
};
</script>