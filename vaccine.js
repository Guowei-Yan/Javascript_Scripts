// ==UserScript==
// @name         vaccine
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://portal.cvms.vic.gov.au/covidvaccine*
// @icon         https://www.google.com/s2/favicons?domain=vic.gov.au
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function reload_window(){
        location.reload();

    };
    if ((document.getElementsByClassName("btn btn-primary VICbtn-primary validatebutton").length==0) && (document.getElementsByClassName("submit-btn btn btn-primary").length==0)){
    reload_window();
    }else{
        if(document.getElementsByClassName("btn btn-primary VICbtn-primary validatebutton").length>0){
            document.getElementsByClassName("btn btn-primary VICbtn-primary validatebutton").click()
        }else{
            document.getElementsByClassName("submit-btn btn btn-primary").click();
        }
    }

})();
