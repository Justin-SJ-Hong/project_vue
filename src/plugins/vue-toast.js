import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
    position : 'bottom-center',
    timeout : 3000,
};

Vue.use(Toast, options);