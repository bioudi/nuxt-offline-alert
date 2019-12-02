<template>
  <transition name="component-fade" mode="out-in">
      <div class="offline-alert" v-if="isOffline">
        <span class="offline-alert-indicator offline-alert-indicator--offline"></span>
        <span class="offline-alert-text">{{ offlineMessage }}</span>
      </div>
      <div class="offline-alert" v-if="showOnline">
        <span class="offline-alert-indicator offline-alert-indicator--online"></span>
        <span class="offline-alert-text">{{ onlineMessage }}</span>
      </div>
  </transition>
</template>

<script>
export default {
    props: {
        onlineMessage: {
            type: String,
            default: 'Back online!'
        },
        offlineMessage: {
            type: String,
            default: 'You\'re offline!'
        },
    },
    data () {
        return {
            showOnline: false
        }
    },
    computed:{
        isOffline(){
            return  this.$nuxt.isOffline !== undefined ?
            this.$nuxt.isOffline :
            !navigator.onLine;
        }
    },
    watch: {
        isOffline(status) {
            if (!status) {
                this.showOnline = true;
                setTimeout(() => this.showOnline = false, 3000);
            }
        }
    }
}
</script>

<style>
    .offline-alert{
        z-index: 10;
        position: fixed;
        top: 5px;
        background: #18181E;
        color: #DCDDE0;
        padding: 20px 15px;
        display: flex;
        left: 0px;
        align-items: center;
    }
    .offline-alert-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }
    .offline-alert-indicator--offline {
        background-color: #FD3552;
    }
    .offline-alert-indicator--online {
        background-color: #07E088;
    }
    .offline-alert-text {
        margin-left: 15px;
    }
    @media only screen and (min-width: 768px) {
        /* tablets and desktop */
        .offline-alert{
            left: 50%;
            transform: translateX(-50%);
            min-width: 500px;
        }
    }

    @media only screen and (max-width: 767px) {
        /* phones */
        .offline-alert{
            width: 100% !important;
            top: 0px;
            justify-content: center;
        }
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }

    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>