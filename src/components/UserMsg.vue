<template>
  <section v-if="msg" class="user-msg" :class="msg.type">
    <p>{{msg.txt}}</p>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventBus.service.js';
export default {
  data() {
    return {
      msg: null,
      removeEventListener: null,
    };
  },
  created() {
    this.removeEventListener = eventBus.on('show-msg', this.showMsg);
  },
  methods: {
    showMsg(msg) {
      this.msg = msg;
      setTimeout(() => {
        this.msg = null;
      }, 3000);
    },
  },
  destroyed() {
    this.removeEventListener();
  },
};
</script>

<style lang="scss" scoped>
.user-msg {
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 10px 15px;
  border-radius: 4px;
  &.success {
    background-color: rgb(87, 197, 87);
  }
  &.error {
    background-color: red;
    color: white;
  }
}
</style>