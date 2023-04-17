import React, { useContext } from "react"
import { PaginationContext } from "../../PaginationSearch"
import PageButton from '../PageButton'

const PageButtonContainer = () => {
    const { 
        currentPage, 
        pageItems,
    } = useContext(PaginationContext)

    const minSlice = currentPage - 3 > 0? currentPage : 3

    const pageItemsCloseToCurrentPage = pageItems.slice(
        minSlice - 3, 
        minSlice + 4
    )
    const [firstPage, lastPage] = [pageItems[0], pageItems[pageItems.length - 1]]

    return (
        <div className='pagination-button-container'>

            <PageButton 
                item={firstPage} 
                type="edgeItem"
            />

            {pageItemsCloseToCurrentPage.map((item) => 
                <PageButton key={item} item={item} />
            )}

            <PageButton 
                item={lastPage} 
                type="edgeItem"
            />

        </div>
    )
}

export default PageButtonContainer