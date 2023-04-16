import {instance} from "api/common.api";
import {ResponseAppType} from "common/types/common.types";

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<ResponseAppType<{ userId?: number }>>('auth/login', data);
    },
    logout() {
        return instance.delete<ResponseAppType<{ userId?: number }>>('auth/login');
    },
    me() {
        return instance.get<ResponseAppType<{ id: number; email: string; login: string }>>('auth/me')
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}