"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var PaginationSearch_1 = require("../../PaginationSearch");
var Searchbox = function (_a) {
    var _b = _a.placeholder, placeholder = _b === void 0 ? "Type here..." : _b, _c = _a.showSearchButton, showSearchButton = _c === void 0 ? true : _c, SearchButton = _a.SearchButton, SearchInput = _a.SearchInput;
    var _d = (0, react_1.useContext)(PaginationSearch_1.PaginationContext), initialData = _d.initialData, setData = _d.setData, setCurrentPage = _d.setCurrentPage;
    var _e = (0, react_1.useState)(''), searchValue = _e[0], setSearchValue = _e[1];
    var search = function (e) {
        e.preventDefault();
        if (searchValue == '') {
            setData(initialData);
            return;
        }
        var dataFiltered = initialData.filter(function (item) {
            return Object.values(item).some(function (value) {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(searchValue.toLowerCase());
                }
                return false;
            });
        });
        setCurrentPage(0);
        setData(dataFiltered);
    };
    return (react_1.default.createElement("div", { className: "pagination-searchbox-container" },
        react_1.default.createElement("div", { className: "search-container-input" }, SearchInput ?
            react_1.default.cloneElement(SearchInput, {
                value: searchValue,
                onChange: function (e) { return setSearchValue(e.target.value); },
                onKeyDown: function (e) { return e.key == 'Enter' ? search(e) : null; }
            })
            :
                react_1.default.createElement("input", { type: "text", className: "search-input", placeholder: placeholder, value: searchValue, onChange: function (e) { return setSearchValue(e.target.value); }, onKeyDown: function (e) { return e.key == 'Enter' ? search(e) : null; } })),
        showSearchButton &&
            react_1.default.createElement(SearchButtonContainer, { Component: SearchButton, search: search })));
};
var SearchButtonContainer = function (_a) {
    var Component = _a.Component, search = _a.search;
    return (react_1.default.createElement("div", { className: "button-container" }, Component ?
        react_1.default.cloneElement(Component, {
            onClick: search
        }) :
        react_1.default.createElement("button", { className: "search-button", onClick: search }, "Search")));
};
exports.default = Searchbox;
