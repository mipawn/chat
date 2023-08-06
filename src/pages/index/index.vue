<template>
  <view :class="styles.container">
    <!-- <view :class="styles.header">
      header
    </view> -->

    <!-- 聊天信息 -->
    <scroll-view
      :class="styles.list"
      :scroll-y="true"
    >
      <view v-for="item in 10" :key="item" :class="styles['list-item']">
        <view :class="styles.avatar">
          
          <!-- <nut-avatar size="small">Me</nut-avatar> -->
          <nut-avatar size="small">
            <image src="@/assets/images/chatgpt.png" />
          </nut-avatar>
        </view>
        <view :class="styles['list-content']">
          小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明小明
        </view>
      </view>
    </scroll-view>

    <!-- 对话框 -->
    <view :class="styles.footer">
      <view :class="styles.input">
        <nut-input
          v-model="state.text"
          :clearable="true"
          :border="false"
          placeholder="在此输入对话"
        />
      </view>
     
      <view :class="styles.submit" @tap="onSubmit">
        <image src="@/assets/images/arrow-top.png" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { useCssModule, reactive, onMounted } from 'vue';
import { getChatList } from '@/api/chat'

import { Input, Avatar } from '@nutui/nutui-taro';

const styles = useCssModule();

const state = reactive({
  text: '',
});

const onSubmit = () => {
  console.log('submit')
}

onMounted(() => {
  getChatList().then(res => {
    console.log(res)
  })
})

</script>

<style lang="scss" module>
.container {
  background-color: #fff;
  padding: 0 20px;
}
.header {
  position: fixed;
  right: 20px;
  top: 20px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.input {
  border: 1px solid $input-border-bottom;
  border-radius: 40px;
  flex: 1;
  overflow: hidden;

  >.nut-input {
    border-radius: 40px;
  }

}

.submit {
  background-color: $primary-color;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  image {
    width: 40px;
    height: 40px;
  }
}

.list {
  width: 100%;
  height: calc(100% - 70px);
  padding: 20px 0 140px;

  &-item {
    margin-bottom: 40px;
  }

  &-content {
    padding: 10px 20px;
    display: inline-block;
    max-width: 80%;
    font-size: 16PX;
  }
  .avatar {
    image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>
