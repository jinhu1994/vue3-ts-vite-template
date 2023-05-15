<template>
    <div class="home-wrapper">
        <ul>
            <li>{{ user.name }}</li>
            <li>{{ user.age }}</li>
            <li>{{ user.addres }}</li>
        </ul>
        <el-button type="primary" @click="change">change</el-button>
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';

const user = useUserStore();

const change = () => {
    user.$patch((state) => {
        state.age = 40;
        state.addres = '陕西汉中';
    });
};
</script>

<style lang="less" scoped>
.home-wrapper {
    padding: 24px;

    ul {
        li {
            height: 20px;
            line-height: 20px;
            margin-bottom: 12px;
        }
    }
}
</style>
