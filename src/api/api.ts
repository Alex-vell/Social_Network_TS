import axios, {AxiosResponse} from "axios";
import {UserType} from "../redux/users-reducer";
import {ProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '4fa02be0-fc45-4f63-a405-9880e98f8e95',
        'Content-Type': 'application/json'
    },
})

export const authAPI = {
    me() {
        return instance.get<CommonResponseType<AuthMeType>>('auth/me')
    },
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<CommonResponseType<{ userId: number }>>>('/auth/login', data)  ///////
    },
    logout() {
        return instance.delete<CommonResponseType>('/auth/login')
    }
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(userId: number | null) {
        return instance.delete<CommonResponseType>(`follow/${userId}`)
    },
    followUser(userId: number | null) {
        return instance.post<CommonResponseType>(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
       // return instance.put<CommonResponseType>('profile/status/', {status})  ////////
        return instance.put<{ status: string }, AxiosResponse<CommonResponseType>>('profile/status/', {status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<any>('profile/photo/', formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put<any>('profile',profile)
    },

}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<any>(`security/get-captcha-url`)
    },


}


// types

export type CommonResponseType<T = {}> = {
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
    data: T
}

// Auth types
type AuthMeType = {
    id: number
    email: string
    login: string
}
export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string | null
}

// usersAPI types
type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
