import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {DataType} from "../redux/auth-reducer";

type ResponseAuthType = {
    fieldsErrors: []
    messages: []
    resultCode: number
    data: DataType
    isAuth: boolean
}

type ResponseUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
type ResponseDeleteType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type ResponsePostType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
type ResponseProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '724c553c-960a-4a5c-aa67-c9d1bcd4ed73'
    },
})

export const authAPI = {
    getAuth() {
        return instance.get<ResponseAuthType>('auth/me')
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(userId: number | null) {
        return instance.delete<ResponseDeleteType>(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number | null) {
        return instance.post<ResponsePostType>(`follow/${userId}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ResponseProfileType>(`profile/` + userId)
            .then(response => response.data)
    }
}


