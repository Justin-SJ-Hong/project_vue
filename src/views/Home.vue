<template>
  <!-- <div>배포테스트1</div> -->
  <div>
    <h1>토스트 테스트1</h1>
    <div>
      <v-btn @click="toastTest1">토스트 Info</v-btn>
      <v-btn @click="toastTest2">토스트 Success</v-btn>
      <v-btn @click="toastTest3">토스트 Error</v-btn>
      <v-btn @click="toastTest4">토스트 Warning</v-btn>
      <v-btn @click="toastTest5">전역 에러</v-btn>
    </div>
    <h1>프로그래스 테스트</h1>
    <div>
      <v-btn @click="barTest1">Start</v-btn>
      <v-btn @click="barTest2">Finish</v-btn>
      <v-btn @click="barTest3">Fail</v-btn>
    </div>
  </div>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    /*components: {
      HelloWorld,
    },*/
    title() {
      console.log("Home.vue title mixin");
      return "My home";
    },
    serverPrefetch() {
      console.log("Home.vue serverPrefetch");
      return new Promise((resolve, reject) => {
        console.log("Home.vue serverPrefetch Promise");
        resolve();
      });
    },
    beforeCreate() {
      console.log("Home.vue beforeCreate");
    },
    created() {
      console.log("Home.vue created ssrContext : ", this.$ssrContext);
    },
    beforeMount() {
      console.log("Home.vue beforeMount");
    },
    mounted() {
      console.log("Home.vue mounted");
    },
    methods: {
      toastTest1() {
        this.$toast.info("Hello Info");
      },
      toastTest2() {
        this.$toast.success("Hello Success");
      },
      toastTest3() {
        this.$toast.error("Hello error");
      },
      toastTest4() {
        this.$toast.warning("Hello Warning");
      },
      toastTest5() {
        throw new Error("전역 에러");
      },
      barTest1() {
        this.$Progress.start();
        this.$toast.info("진행 시작")
      },
      barTest2() {
        this.$Progress.finish();
        this.$toast.success("진행 완료");
      },
      barTest3() {
        this.$Progress.fail();
        this.$toast.error("진행 실패...");
      },
    },
  };
</script>
