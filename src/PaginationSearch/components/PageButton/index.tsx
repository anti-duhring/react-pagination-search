import React, { useContext } from "react"
import { PaginationContext } from "../../PaginationSearch"

const PageButton = ({ 
    item,
    type = 'middleItem'
}) => {

    const { 
        currentPage, 
        setCurrentPage, 
        pageItems
    } = useContext(PaginationContext)

    const isActive = item == currentPage
    const isEdgeItem = type == 'edgeItem'
    const isFirstEdgeItem = isEdgeItem && pageItems[0] == item

    const classes = [
        'page-item', 
        isActive ? 'page-item-active' : null, 
        isEdgeItem ? 'page-item-edge' : 'page-item-middle'
    ]

    if(type == 'edgeItem' && isActive) return null

    return (
        <>
            <button 
                className={classes.join(' ')}
                onClick={() => setCurrentPage(item)}
                disabled={!pageItems.length}
            >
                {isEdgeItem? isFirstEdgeItem ? '⟨' : '⟩' : item}
            </button>
        </>
    )
}

export default PageButton