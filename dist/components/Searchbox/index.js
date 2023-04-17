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
    var _b = _a.placeholder, placeholder = _b === void 0 ? "Digite aqui..." : _b;
    var _c = (0, react_1.useContext)(PaginationSearch_1.PaginationContext), initialData = _c.initialData, setData = _c.setData, setCurrentPage = _c.setCurrentPage;
    var _d = (0, react_1.useState)(''), searchValue = _d[0], setSearchValue = _d[1];
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
    return (react_1.default.createElement("div", { className: "row pagination-searchbox-container" },
        react_1.default.createElement("div", { className: "search-container" },
            react_1.default.createElement("h4", { className: "list-title" }, "Pesquisar"),
            react_1.default.createElement("div", { className: "search-container-input" },
                react_1.default.createElement("input", { type: "text", className: "form-control pagination-searchbox", placeholder: placeholder, value: searchValue, onChange: function (e) { return setSearchValue(e.target.value); }, onKeyDown: function (e) { return e.key == 'Enter' ? search(e) : null; } }))),
        react_1.default.createElement("div", { className: "button-container" },
            react_1.default.createElement("button", { className: "button-full btn-save", onClick: search },
                react_1.default.createElement("i", { className: "fa fa-search" }),
                " Pesquisar"))));
};
exports.default = Searchbox;
