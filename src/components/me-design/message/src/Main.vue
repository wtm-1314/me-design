<template>
  <transition name="slide-fade">
    <div class="m-message" :class="{
      'm-message-dark': theme === 'dark'
    }" v-show="show">
      <m-icon :name="iconName" :fontSize="18" :class="iconName" />
      <span class="text">
        {{ msg }}
      </span>
    </div>
  </transition>
</template>

<script>
import { ref, computed } from "vue";
import MIcon from "../../icon";
export default {
  name: "MMessage",
  components: { MIcon },
  props: {
    msg: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 3000,
    },
    bindId: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  setup(props) {
    const el = document.querySelector(`#${props.bindId}`);
    let time = props.duration || 3000;
    let timer = null;
    const show = ref(true);
    const init = () => {
      timer = setTimeout(() => {
        show.value = false;
        setTimeout(() => {
          el && document.querySelector("#ming-msg-container")?.removeChild(el);
        }, 500);
      }, time);
    };
    init();

    el?.addEventListener("mouseover", () => {
      timer && clearTimeout(timer);
    });
    el?.addEventListener("mouseout", () => {
      init();
    });
    const iconName = computed(() => {
      switch (props.type) {
        case "error":
          return "close-circle-fill";
        case "success":
          return "check-circle-fill";
        default:
          return "info-circle-fill";
      }
    });

    const iconColor = () => { };

    return {
      show,
      iconName,
      iconColor,
    };
  },
};
</script>

<style lang="scss" scoped>
.m-message {
  display: inline-block;
  min-width: 260px;
  padding: 12px 16px;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 5px 12px -1px rgba(0,0,0,.25);
  background: rgb(255, 255, 255);
  text-align: left;
  animation: fadein 0.3s ease;
  display: flex;
  align-items: flex-start;

  .text {
    font-size: 14px;
    color: $font_color;
  }

  &.m-message-dark {
    background: rgb(21, 21, 21);
    box-shadow: 0 5px 12px -1px rgba(0,0,0,.25);
    .text {
      color: #fff;
    }
  }

  .close-circle-fill {
    color: $danger_color;
  }

  .info-circle-fill {
    color: $warning_color;
  }

  .check-circle-fill {
    color: $success_color;
  }

}
</style>
