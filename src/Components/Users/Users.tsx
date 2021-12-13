import React from "react";
import {InitialStateUsersReducerType} from "../../redux/users-reducer";
import {Pagination} from "../common/pagination/Pagination";
import {User} from "./User";


type UsersType = {
    follow: (userId: number | null) => void
    unFollow: (userId: number | null) => void
    users: InitialStateUsersReducerType
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChangedCallback: (pageNumber: number) => void
    followingInProgress: Array<number | null>
}


export const Users: React.FC<UsersType> = (
    {
        totalUsersCount, pageSize, currentPage,
        onPageChangedCallback, users, followingInProgress,
        unFollow, follow
    }) => {

    return <div>
        <Pagination currentPage={currentPage}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChangedCallback={onPageChangedCallback}/>
        <div>
            {
                users.users.map(u => <User key={u.id}
                                           follow={follow}
                                           unFollow={unFollow}
                                           user={u}
                                           followingInProgress={followingInProgress}/>)

            }
        </div>
    </div>
}
