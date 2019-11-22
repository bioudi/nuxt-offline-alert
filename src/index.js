import OfflineAlert from "./OfflineAlert.vue";

export default {
    install(Vue, options) {
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("offline-alert", OfflineAlert);
    }
};