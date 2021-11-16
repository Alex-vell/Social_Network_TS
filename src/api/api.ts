import axios, {AxiosResponse} from "axios";
import {UserType} from "../redux/users-reducer";

// usersAPI types
type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

// profileAPI types

// type GetStatusType = {
//     status: string
// }
// type UpdateStatusType = {
//     fieldsErrors: Array<string>
//     resultCode: number
//     messages: Array<string>
//     data: {
//         status: string
//     }
// }
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type GetProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

// Auth types
type DataType = {
    id: number
    email: string
    login: string
}

// type ResponsePostLoginType = {
//     resultCode: number
//     messages: Array<string>,
//     data: {
//         userId: number
//     }
// }

type CommonResponseType<T = {}> = {
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
    data: T
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '724c553c-960a-4a5c-aa67-c9d1bcd4ed73'
    },
})

export const authAPI = {
    me() {
        return instance.get<CommonResponseType<DataType>>('auth/me')
    },
    login(email: string | null, password: string | null, rememberMe = false) {
        return instance.post<any>('/auth/login', {email, password, rememberMe})  ///////
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
    getProfile(userId: number) {
        return instance.get<GetProfileDataType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<any>('profile/status/', {status})  ////////
    },
    // updateStatus(status: string) {
    //     return instance.put<CommonResponseType<{status: string}>, AxiosResponse<CommonResponseType<{status: string}>>>('profile/status/', {status})
    // }
}


