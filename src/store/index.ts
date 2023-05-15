import { User } from '@/types/store';
import { defineStore } from 'pinia';
import { Names } from './store-name';

export const useUserStore = defineStore(Names.USER, {
    state: (): User => {
        return {
            name: '张三',
            age: 30,
            addres: '陕西西安',
        };
    },

    // 类似 computed
    getters: {},

    // 可以执行 同步或者异步方法 提交state
    actions: {
        setAge() {
            this.age = 35;
        },
    },
});
