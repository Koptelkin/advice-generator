"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function () {
    //Globals
    const title = document.getElementById('title');
    const inner = document.getElementById('text');
    const button = document.querySelector('button');
    let info;
    //Events
    document.addEventListener('DOMContentLoaded', initApp);
    button === null || button === void 0 ? void 0 : button.addEventListener('click', initApp);
    //Logic
    function fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch('https://api.adviceslip.com/advice');
                const resData = yield res.json();
                return resData.slip;
            }
            catch (error) {
                if (error instanceof Error)
                    alert(error);
            }
            return info;
        });
    }
    function initApp() {
        fetchData().then((value) => {
            info = {
                id: value.id,
                advice: value.advice,
            };
        });
        if (title)
            title.textContent = `ADVICE #${String(info.id)}`;
        if (inner)
            inner.textContent = `"${info.advice}"`;
    }
})();
