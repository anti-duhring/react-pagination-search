import React from 'react';
type TPaginationContext = {
    initialData: unknown[];
    data: unknown[];
    setData: React.Dispatch<unknown[]>;
    currentPage: number;
    setCurrentPage: React.Dispatch<number>;
    slice: number[];
    pageItems: number[];
};
export declare const PaginationContext: React.Context<TPaginationContext>;
declare const PaginationSearch: {
    ({ data, children, itemsPerPage }: {
        data?: any[];
        children: any;
        itemsPerPage?: number;
    }): JSX.Element;
    Buttons: () => JSX.Element;
    Data: ({ render }: {
        render: any;
    }) => JSX.Element;
    Searchbox: ({ placeholder, showSearchButton, SearchButton, SearchInput }: {
        placeholder?: string;
        showSearchButton?: boolean;
        SearchButton?: React.ReactElement<React.InputHTMLAttributes<HTMLButtonElement>, string | React.JSXElementConstructor<any>>;
        SearchInput?: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>, string | React.JSXElementConstructor<any>>;
    }) => JSX.Element;
};
export default PaginationSearch;
