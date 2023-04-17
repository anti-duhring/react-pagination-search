import React, { createContext, useState } from 'react';
import Searchbox from './components/Searchbox';
import ShowData from './components/ShowData';
import PageButtonContainer from './components/PageButtonContainer';

type TPaginationContext = {
    initialData: unknown[],
    data: unknown[],
    setData: React.Dispatch<unknown[]>,
    currentPage: number,
    setCurrentPage: React.Dispatch<number>,
    slice: number[],
    pageItems: number[]
}

export const PaginationContext = createContext<TPaginationContext | null>({
    initialData: [],
    data: [],
    setData: () => {},
    currentPage: 0,
    setCurrentPage: () => {},
    slice: [0, 0],
    pageItems: []
})

const PaginationSearch = ({
    data = [],
    children,
    itemsPerPage = 10
}) => {
    const [dataFiltered, setDataFiltered] = useState(data)
    const [currentPage, setCurrentPage] = useState(0)
    const slice = [
        currentPage * itemsPerPage, 
        (currentPage * itemsPerPage) + itemsPerPage
    ]

    const pages = Math.round(dataFiltered.length / itemsPerPage)
    const pageItems = new Array(pages).fill(0).map((_, index) => index)

    const value = { 
        initialData: data,
        data: dataFiltered,
        setData: setDataFiltered,
        currentPage, 
        setCurrentPage, 
        slice, 
        pageItems,
    }

    return (
        <PaginationContext.Provider value={value}>
            <div className='pagination-container'>{children}</div>
        </PaginationContext.Provider>
    )
}


PaginationSearch.Buttons = PageButtonContainer
PaginationSearch.Data = ShowData
PaginationSearch.Searchbox = Searchbox

export default PaginationSearch