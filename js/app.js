/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
    /**
     * RETURN_BUTTON - return button key code
     * SELECT_BUTTON - select button key code
     * LEFT_ARROW_BUTTON - select button key code
     * UP_ARROW_BUTTON - select button key code
     * RIGHT_ARROW_BUTTON - select button key code
     * DOWN_ARROW_BUTTON - select button key code
     * logoContainer - DIV containing Tizen logo elements.
     * moveTopLimit - limit when moving logo container up.
     * moveBottomLimit - limit when moving logo container down.
     * moveLeftLimit - limit when moving logo container left.
     * moveRightLimit - limit when moving logo container right.
     * moveRate - rate for moving logo container.
     * moveEventHandler - handler for time out.
     */
    var RETURN_BUTTON = 10009,
        SELECT_BUTTON = 13,
        LEFT_ARROW_BUTTON = 37,
        UP_ARROW_BUTTON = 38,
        RIGHT_ARROW_BUTTON = 39,
        DOWN_ARROW_BUTTON = 40,
        moveRate = 1,
        moveEventHandler;

    /**
     * Resets Tizen logo element.
     * @private
     * @param {string} direction - moving direction.
     */
    function resetLogo() {
    	console.log("Select BUTTON");
    }

    /**
     * Moves Tizen logo element.
     * @private
     * @param {string} keyCode - event key code.
     */
    function moveLogo(keyCode) {
        /**
         * containerStyle - getComputedStyle() gives the values of all the CSS properties.
         * containerMarginTop - logo container's marginTop.
         * containerMarginLeft - logo container's marginLeft.
         */
        if (keyCode === LEFT_ARROW_BUTTON) {
         
        	/**Requisição AJAX para testes*/
        	var settings = {
        			"async": true,
        			"crossDomain": true,
        			"url": "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=%7Bsource%7D&target=%7Btarget%7D&input=%7Binput%7D",
        			"method": "GET",
        			"headers": {
        				"x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
        				"x-rapidapi-key": "921646fa38mshb95e13d1bef7ef9p10f69ejsn9221034a9b2c"
        			}
        		}

        		$.ajax(settings).done(function (response) {
        			console.log(response);
        		});
        	/**Fim dos testes*/
        	
        } else if (keyCode === UP_ARROW_BUTTON) {

        	console.log("UP Button");
        	
        } else if (keyCode === RIGHT_ARROW_BUTTON) {
           
        	console.log("Right Button");

        } else if (keyCode === DOWN_ARROW_BUTTON) {
           
        	console.log("Down Button");
        	
        }

        // When button long press, change move rate.
        moveRate *= 1.2;
        // Clears previous timeout event.
        clearTimeout(moveEventHandler);
        // Resets move rate after 300ms.
        moveEventHandler = setTimeout(function() {
            moveRate = 1;
        }, 300);
    }

    /**
     * TV controller key event handler.
     * @private
     * @param {object} e - event object.
     */
    function keyEventHandler(e) {
        if (e.keyCode === RETURN_BUTTON) {
            tizen.application.getCurrentApplication().exit();
        } else if (e.keyCode === SELECT_BUTTON) {
            resetLogo();
        } else {
            moveLogo(e.keyCode);
        }
    }

    /**
     * Binds Default Events.
     * @private
     */
    function bindDefaultEvents() {
        document.addEventListener('keydown', keyEventHandler);
    }

    /**
     * Initiates the application.
     * @private
     */
    function init() {
        bindDefaultEvents();
    }

    window.onload = init;
}());