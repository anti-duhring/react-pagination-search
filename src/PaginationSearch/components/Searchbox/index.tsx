import React, { useContext, useState } from "react"
import { PaginationContext } from "../../PaginationSearch"

const Searchbox = ({
    placeholder = "Digite aqui..."
}) => {

    const { 
        initialData, 
        setData,
        setCurrentPage
    } = useContext(PaginationContext)
    const [searchValue, setSearchValue] = useState('')

    const search = (e: any) => {
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
        <div className="row pagination-searchbox-container">
            <div className="search-container">
                <h4 className="list-title">Pesquisar</h4>
            <div className="search-container-input">
                <input
                    type="text"
                    className="form-control pagination-searchbox"
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => e.key == 'Enter' ? search(e) : null}
                />
            </div>
            </div>
            <div className="button-container">
                <button
                    className="button-full btn-save"
                    onClick={search}
                >
                    <i className="fa fa-search"></i> Pesquisar
                </button>
            </div>
        </div>
    )
}

export default Searchbox