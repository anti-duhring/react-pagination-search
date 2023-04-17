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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationContext = void 0;
var react_1 = __importStar(require("react"));
var Searchbox_1 = __importDefault(require("./components/Searchbox"));
var ShowData_1 = __importDefault(require("./components/ShowData"));
var PageButtonContainer_1 = __importDefault(require("./components/PageButtonContainer"));
exports.PaginationContext = (0, react_1.createContext)({
    initialData: [],
    data: [],
    setData: function () { },
    currentPage: 0,
    setCurrentPage: function () { },
    slice: [0, 0],
    pageItems: []
});
var PaginationSearch = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, children = _a.children, _c = _a.itemsPerPage, itemsPerPage = _c === void 0 ? 10 : _c;
    var _d = (0, react_1.useState)(data), dataFiltered = _d[0], setDataFiltered = _d[1];
    var _e = (0, react_1.useState)(0), currentPage = _e[0], setCurrentPage = _e[1];
    var slice = [
        currentPage * itemsPerPage,
        (currentPage * itemsPerPage) + itemsPerPage
    ];
    var pages = Math.round(dataFiltered.length / itemsPerPage);
    var pageItems = new Array(pages).fill(0).map(function (_, index) { return index; });
    var value = {
        initialData: data,
        data: dataFiltered,
        setData: setDataFiltered,
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
        slice: slice,
        pageItems: pageItems,
    };
    return (react_1.default.createElement(exports.PaginationContext.Provider, { value: value },
        react_1.default.createElement("div", { className: 'pagination-container' }, children)));
};
PaginationSearch.Buttons = PageButtonContainer_1.default;
PaginationSearch.Data = ShowData_1.default;
PaginationSearch.Searchbox = Searchbox_1.default;
exports.default = PaginationSearch;
