import React from "react";
type TPropsSearchbox = {
    placeholder?: string | null;
    showSearchButton?: boolean;
    SearchButton?: React.ElementType;
    SearchInput?: React.ElementType;
};
declare const Searchbox: ({ placeholder, showSearchButton, SearchButton, SearchInput }: TPropsSearchbox) => JSX.Element;
export default Searchbox;
