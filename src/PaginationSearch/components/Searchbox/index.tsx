import React, { Component, useContext, useState } from "react"
import { PaginationContext } from "../../PaginationSearch"

type TPropsSearchbox = {
    placeholder?: string | null,
    showSearchButton?: boolean,
    SearchButton?: React.ReactElement<React.InputHTMLAttributes<HTMLButtonElement>>,
    SearchInput?: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>
}

type TPropsSearchButtonContainer = {
    Component: React.ReactElement<React.InputHTMLAttributes<HTMLButtonElement>>,
    search: (e: any) => void
}

const Searchbox = ({
    placeholder = "Type here...",
    showSearchButton = true,
    SearchButton,
    SearchInput
}: TPropsSearchbox) => {

    const { 
        initialData, 
        setData,
        setCurrentPage
    } = useContext(PaginationContext)
    const [searchValue, setSearchValue] = useState('')

    const search = (e) => {
        e.preventDefault()

        if(searchValue == '') {
            setData(initialData)
            return 
        }

        const dataFiltered = initialData.filter(item => {
            return Object.values(item).some(value => {
                if (typeof value === 'string') {
                  return value.toLowerCase().includes(searchValue.toLowerCase());
                }
                return false;
            })
        })
        setCurrentPage(0)
        setData(dataFiltered)
    }

    return (
        <div className="pagination-searchbox-container">
                <div className="search-container-input">
                    {
                        SearchInput?
                        React.cloneElement(SearchInput, {
                            value: searchValue,
                            onChange: (e) => setSearchValue(e.target.value),
                            onKeyDown: (e) => e.key == 'Enter' ? search(e) : null
                        })
                    : 
                        <input
                            type="text"
                            className="search-input"
                            placeholder={placeholder}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={(e) => e.key == 'Enter' ? search(e) : null}
                        />
                    }
                </div>
            
                {showSearchButton && 
                    <SearchButtonContainer
                        Component={SearchButton}
                        search={search}
                    />
                }
            
        </div>
    )
}

const SearchButtonContainer = ({ Component, search }: TPropsSearchButtonContainer) => {
    return (
        <div className="button-container">
            {Component? 
                React.cloneElement(Component, {
                    onClick: search
                }) :
                <button
                    className="search-button"
                    onClick={search}
                >
                    Search
                </button>
            }
        </div>
    )
}

export default Searchbox

