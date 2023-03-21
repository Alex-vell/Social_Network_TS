import React, {useState} from 'react'
import s from './Pagination.module.scss'
import {logo} from "../../../assets/images";

type UsersType = {
    currentPage: number
    totalItemsCount: number
    pageSize: number
    onPageChangedCallback: (pageNumber: number) => void
    portionSize?: number
}


export const Pagination: React.FC<UsersType> = (
    {
        currentPage, totalItemsCount, pageSize, onPageChangedCallback,
        portionSize = 10
    }) => {
    let pages = []
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.pagination}>
        {portionNumber > 1 &&
            <div onClick={() => {setPortionNumber(portionNumber - 1)}}>
                <img src={logo.arrowLeft} alt="previous" className={s.arrow}/>
            </div>
        }

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={currentPage === p
                    ? `${s.pageNumber} ${s.selectPageActive}`
                    : s.pageNumber}
                            key={p}
                            onClick={(event => onPageChangedCallback(p))}>{p}</span>
            })}

        {portionCount > portionNumber &&
            <div onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>
                <img src={logo.arrowRight} alt="previous" className={s.arrow}/>
            </div>
        }
    </div>
}
