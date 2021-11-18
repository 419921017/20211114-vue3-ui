import { onMounted, onUnmounted, ref } from 'vue';

export function useButton() {
  const buttonLoading = ref(true);
  let timer: NodeJS.Timeout;
  onMounted(() => {
    timer = setTimeout(() => {
      buttonLoading.value = false;
    }, 2000);
  });
  onUnmounted(() => {
    timer && clearTimeout(timer);
  });

  const buttonClick = () => {
    alert('点击按钮');
  };

  return {
    buttonLoading,
    buttonClick,
  };
}
