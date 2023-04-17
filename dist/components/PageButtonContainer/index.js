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
var react_1 = __importStar(require("react"));
var PaginationSearch_1 = require("../../PaginationSearch");
var PageButton_1 = __importDefault(require("../PageButton"));
var PageButtonContainer = function () {
    var _a = (0, react_1.useContext)(PaginationSearch_1.PaginationContext), currentPage = _a.currentPage, pageItems = _a.pageItems;
    var minSlice = currentPage - 3 > 0 ? currentPage : 3;
    var pageItemsCloseToCurrentPage = pageItems.slice(minSlice - 3, minSlice + 4);
    var _b = [pageItems[0], pageItems[pageItems.length - 1]], firstPage = _b[0], lastPage = _b[1];
    return (react_1.default.createElement("div", { className: 'pagination-button-container' },
        react_1.default.createElement(PageButton_1.default, { item: firstPage, type: "edgeItem" }),
        pageItemsCloseToCurrentPage.map(function (item) {
            return react_1.default.createElement(PageButton_1.default, { key: item, item: item });
        }),
        react_1.default.createElement(PageButton_1.default, { item: lastPage, type: "edgeItem" })));
};
exports.default = PageButtonContainer;
