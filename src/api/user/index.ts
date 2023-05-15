import { UserInfo } from '@/types/api/user';
import axios from 'utils/axios';

enum ApiUrl {
    Login = '/login',
}

const userApi = {
    login: () => {
        return axios<UserInfo>({
            url: ApiUrl.Login,
            method: 'get',
        });
    },
};

export default userApi;
