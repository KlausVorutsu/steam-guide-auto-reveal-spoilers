// ==UserScript==
// @name         Steam Guide Auto-Reveal Spoilers
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically displays hidden spoiler images and text in Steam Guides without needing to hover.
// @author       KlausVorutsu
// @match        *://steamcommunity.com/sharedfiles/filedetails/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        /* Remove the black background block on spoilers */
        .bb_spoiler,
        .bb_spoiler > span {
            background-color: transparent !important;
            color: inherit !important;
        }

        /* Force images inside spoilers to be fully opaque and visible */
        .bb_spoiler img {
            opacity: 1 !important;
            visibility: visible !important;
        }
    `;
    document.head.appendChild(style);
})();