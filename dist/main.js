"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const MdBook_1 = require("./mdbook/MdBook");
const Linkcheck_1 = require("./mdbook/plugins/Linkcheck");
/**
 * Run the action async
 */
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const mdBook = new MdBook_1.MdBook();
    yield mdBook.setup();
    // Linkcheck - 3rd party backend plugin for mdbook
    if (core.getBooleanInput("use-linkcheck") === true) {
        const linkcheckPlugin = new Linkcheck_1.Linkcheck();
        yield linkcheckPlugin.setup();
    }
    // TODO: Epub - 3rd party backend plugin for mdbook
    if (core.getBooleanInput("use-epub") === true) {
        // use epub
    }
    // TODO: Katex - 3rd party preprocessor plugin for mdbook
    if (core.getBooleanInput("use-katex") === true) {
        // use KAtex plugin
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield run();
    }
    catch (err) {
        core.setFailed(`${err.message}`);
    }
}))();
