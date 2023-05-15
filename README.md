## 项目规范

#### pinia 使用示例

```javascript
import { useUserStore } from '@/store';

const user = useUserStore();

const change = () => {
    user.$patch((state) => {
        state.age = 40;
        state.addres = '陕西汉中';
    });
};
```
