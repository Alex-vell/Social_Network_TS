import axios from "axios";
import {UserType} from "../redux/users-reducer";

// usersAPI types
type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
type UnFollowUserType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type followUserType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

// profileAPI types
type GetProfileType = {
    userId: number
}
type GetStatusType = {
    userId: number
}
type UpdateStatusType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
/*export type ContactsType = {
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
    //aboutMe: string
}*/




// Auth types
type DataType = {
    id: number
    email: string
    login: string
}
type ResponseAuthGetType = {
    /* fieldsErrors: []*/
    resultCode: number
    messages: []
    data: DataType
    /*isAuth: boolean*/
}
type ResponsePostLoginType = {
    resultCode: number
    messages: Array<string>,
    data: {
        userId: number
    }

}
type ResponseDeleteLogoutType = {
    resultCode: number
    messages: Array<string>,
    data: {}
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
        return instance.get<ResponseAuthGetType>('auth/me')
    },
    login(email: string | null, password: string | null, rememberMe = false) {
        return instance.post<any>('/auth/login', {email, password, rememberMe})  ///////
    },
    logout() {
        return instance.delete<ResponseDeleteLogoutType>('/auth/login')
    }
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(userId: number | null) {
        return instance.delete<UnFollowUserType>(`follow/${userId}`)
    },
    followUser(userId: number | null) {
        return instance.post<followUserType>(`follow/${userId}`)
    },
    // getProfile(userId: string) {
    //     return instance.get<ResponseProfileType>(`profile/` + userId)
    // },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<GetProfileType>(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get<any>('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put<any>('profile/status/', {status: status})
    }
}


