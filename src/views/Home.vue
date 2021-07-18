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
  </div>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    /*components: {
      HelloWorld,
    },*/
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
    },
  };
</script>
