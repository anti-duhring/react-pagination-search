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
var PageButton = function (_a) {
    var item = _a.item, _b = _a.type, type = _b === void 0 ? 'middleItem' : _b;
    var _c = (0, react_1.useContext)(PaginationSearch_1.PaginationContext), currentPage = _c.currentPage, setCurrentPage = _c.setCurrentPage, pageItems = _c.pageItems;
    var isActive = item == currentPage;
    var isEdgeItem = type == 'edgeItem';
    var isFirstEdgeItem = isEdgeItem && pageItems[0] == item;
    var classes = [
        'page-item',
        isActive ? 'page-item-active' : null,
        isEdgeItem ? 'page-item-edge' : 'page-item-middle'
    ];
    if (type == 'edgeItem' && isActive)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { className: classes.join(' '), onClick: function () { return setCurrentPage(item); }, disabled: !pageItems.length }, isEdgeItem ? isFirstEdgeItem ? '⟨' : '⟩' : item)));
};
exports.default = PageButton;
