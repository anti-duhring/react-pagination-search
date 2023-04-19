import React from "react";
type TPropsSearchbox = {
    placeholder?: string | null;
    showSearchButton?: boolean;
    SearchButton?: React.ReactElement<React.InputHTMLAttributes<HTMLButtonElement>>;
    SearchInput?: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>;
};
declare const Searchbox: ({ placeholder, showSearchButton, SearchButton, SearchInput }: TPropsSearchbox) => JSX.Element;
export default Searchbox;
