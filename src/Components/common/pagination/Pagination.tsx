import React from 'react'
import s from './Pagination.module.css'

type UsersType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChangedCallback: (pageNumber: number) => void
}


export const Pagination: React.FC<UsersType> = (
    {currentPage, totalUsersCount, pageSize, onPageChangedCallback}) => {
    let pages = []
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && s.selectPageActive
                ? s.selectPageActive
                : s.selectPage}
                         key={p}
                         onClick={(event => onPageChangedCallback(p))}>{p}</span>
        })}
    </div>
}
