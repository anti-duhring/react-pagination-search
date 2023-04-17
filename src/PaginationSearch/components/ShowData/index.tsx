import React, { useContext } from "react"
import { PaginationContext } from "../../PaginationSearch"

const ShowData = ({
    render
}) => {

    const { data, slice } = useContext(PaginationContext)

    return (
        <>
            { data.slice(slice[0], slice[1]).map(render) }
        </>
    )
}

export default ShowData