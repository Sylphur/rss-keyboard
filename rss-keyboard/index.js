const KEYS = [
    {
        "en": "`",
        "ru": "ё",
        "shift": "~",
        "data": "Backquote",
        "beautify": true
        
    },
    {
        "en": "1",
        "ru": "1",
        "shift": "!",
        "data": "Digit1"    
    },
    {
        "en": "2",
        "ru": "2",
        "shift": "@",
        "data": "Digit2"    
    },
    {
        "en": "3",
        "ru": "3",
        "shift": "#", 
        "data": "Digit3"   
    },
    {
        "en": "4",
        "ru": "4",
        "shift": "$",
        "data": "Digit4"    
    },
    {
        "en": "5",
        "ru": "5",
        "shift": "%", 
        "data": "Digit5"   
    },
    {
        "en": "6",
        "ru": "6",
        "shift": "^", 
        "data": "Digit6"   
    },
    {
        "en": "7",
        "ru": "7",
        "shift": "&",
        "data": "Digit7"    
    },
    {
        "en": "8",
        "ru": "8",
        "shift": "*", 
        "data": "Digit8"   
    },
    {
        "en": "9",
        "ru": "9",
        "shift": "(", 
        "data": "Digit9"   
    },
    {
        "en": "0",
        "ru": "0",
        "shift": ")",  
        "data": "Digit0"  
    },
    {
        "en": "-",
        "ru": "-",
        "shift": "_", 
        "data": "NumpadSubtract"   
    },
    {
        "en": "=",
        "ru": "=",
        "shift": "+", 
        "data": "Equal"   
    },
    {
        "en": "Backspace",
        "ru": "Backspace",
        "data": "Backspace",
        "beautify": true
    },
    {
        "en": "Tab",
        "ru": "Tab",
        "data": "Tab",
        "beautify": true
    },
    {
        "en": "q",
        "ru": "й",
        "data": "KeyQ"
    },
    {
        "en": "w",
        "ru": "ц",
        "data": "KeyW"
    },
    {
        "en": "e",
        "ru": "у",
        "data": "KeyE"
    },
    {
        "en": "r",
        "ru": "к",
        "data": "KeyR"
    },
    {
        "en": "t",
        "ru": "е",
        "data": "KeyT"
    },
    {
        "en": "y",
        "ru": "н",
        "data": "KeyY"
    },
    {
        "en": "u",
        "ru": "г",
        "data": "KeyU"
    },
    {
        "en": "i",
        "ru": "ш",
        "data": "KeyI"
    },
    {
        "en": "o",
        "ru": "щ",
        "data": "KeyO"
    },
    {
        "en": "p",
        "ru": "з",
        "data": "KeyP"
    },
    {
        "en": "[",
        "ru": "х",
        "shift": "{",
        "data": "BracketLeft"
    },
    {
        "en": "]",
        "ru": "ъ",
        "shift": "}",
        "data": "BracketRight"
    },
    {
        "en": "\\",
        "ru": "\\",
        "shift": "|",
        "data": "Backslash"
    },
    {
        "en": "Del",
        "ru": "Del",
        "data": "Delete",
        "beautify": true
    },
    {
        "en": "Caps Lock",
        "ru": "Caps Lock",
        "data": "CapsLock",
        "beautify": true
    },
    {
        "en": "a",
        "ru": "ф",
        "data": "KeyA"
    },
    {
        "en": "s",
        "ru": "ы",
        "data": "KeyS"
    },
    {
        "en": "d",
        "ru": "в",
        "data": "KeyD"
    },
    {
        "en": "f",
        "ru": "а",
        "data": "KeyF"
    },
    {
        "en": "g",
        "ru": "п",
        "data": "KeyG"
    },
    {
        "en": "h",
        "ru": "р",
        "data": "KeyH"
    },
    {
        "en": "j",
        "ru": "о",
        "data": "KeyJ"
    },
    {
        "en": "k",
        "ru": "л",
        "data": "KeyK"
    },
    {
        "en": "l",
        "ru": "д",
        "data": "KeyL"
    },
    {
        "en": ";",
        "ru": "ж",
        "shift": ":",
        "data": "Semicolon"
    },
    {
        "en": "'",
        "ru": "э",
        "shift": "\"",
        "data": "Quote"
    },
    {
        "en": "Enter",
        "ru": "Enter",
        "data": "Enter",
        "beautify": true
    },
    {
        "en": "Shift",
        "ru": "Shift",
        "data": "ShiftLeft",
        "beautify": true
    },
    {
        "en": "z",
        "ru": "я",
        "data": "KeyZ"
    },
    {
        "en": "x",
        "ru": "ч",
        "data": "KeyX"
    },
    {
        "en": "c",
        "ru": "с",
        "data": "KeyC"
    },
    {
        "en": "v",
        "ru": "м",
        "data": "KeyV"
    },
    {
        "en": "b",
        "ru": "и",
        "data": "KeyB"
    },
    {
        "en": "n",
        "ru": "т",
        "data": "KeyN"
    },
    {
        "en": "m",
        "ru": "ь",
        "data": "KeyM"
    },
    {
        "en": ",",
        "ru": "б",
        "shift": "<",
        "data": "NumpadDecimal"
    },
    {
        "en": ".",
        "ru": "ю",
        "shift": ">",
        "data": "Period"
    },
    {
        "en": "/",
        "ru": ".",
        "shift": "?",
        "data": "Slash"
    },
    {
        "en": "▲",
        "ru": "▲",
        "data": "ArrowUp",
        "beautify": true
    },
    {
        "en": "Shift",
        "ru": "Shift",
        "data": "ShiftRight",
        "beautify": true
    },
    {
        "en": "Ctrl",
        "ru": "Ctrl",
        "data": "ControlLeft",
        "beautify": true
    },
    {
        "en": "Win",
        "ru": "Win",
        "data": "MetaLeft",
        "beautify": true
    },
    {
        "en": "Alt",
        "ru": "Alt",
        "data": "AltLeft",
        "beautify": true
    },
    {
        "en": "Space",
        "ru": "Space",
        "data": "Space"
    },
    {
        "en": "Alt",
        "ru": "Alt",
        "data": "AltRight",
        "beautify": true
    },
    {
        "en": "◄",
        "ru": "◄",
        "data": "ArrowLeft",
        "beautify": true
    },
    {
        "en": "▼",
        "ru": "▼",
        "data": "ArrowDown",
        "beautify": true
    },
    {
        "en": "►",
        "ru": "►",
        "data": "ArrowRight",
        "beautify": true
    },
    {
        "en": "Ctrl",
        "ru": "Ctrl",
        "data": "ControlRight",
        "beautify": true
    }
    
];
//перезагрузака страницы
function setLocalStorage() {
    localStorage.setItem("lang", lang);
}
function getLocalStorage() {
    if (localStorage.getItem("lang")) {
        lang = localStorage.getItem("lang");
    }
    else {lang = "en"};
}

let lang;
getLocalStorage();

let capsLock = false;
//let shift = false; возможно переделать с ctrl на shift
let ctrl = false;

const BODY = document.body;
const TEXTCONTAINER = document.createElement("div");
TEXTCONTAINER.classList.add("textarea-container");
const TITLE = document.createElement("h1");
TITLE.classList.add("textarea-title");
TITLE.textContent = "RSS Virtual Keyboard";
const SUBTITLE = document.createElement("h2");
SUBTITLE.classList.add("textarea-subtitle");
SUBTITLE.textContent = "(ctrl+alt to change the language)";
const TEXTAREA = document.createElement("textarea");
TEXTAREA.classList.add("keyboard-imput");
const KEYBOARDCONTAINER = document.createElement("div");
KEYBOARDCONTAINER.classList.add("keyboard-container");
const KEYBOARD = document.createElement("div");
KEYBOARD.classList.add("keyboard");

BODY.append(TEXTCONTAINER);
TEXTCONTAINER.append(TITLE);
TEXTCONTAINER.append(SUBTITLE);
TEXTCONTAINER.append(TEXTAREA);
BODY.append(KEYBOARDCONTAINER);
KEYBOARDCONTAINER.append(KEYBOARD);

//отрисовка кнопок
function renderKeys(lang, capsLock) {
    KEYBOARD.innerHTML = ""; // удаление старых элементов перед переотрисовкой
    KEYS.forEach((item) => {
        const SPAN = document.createElement("span");
        SPAN.classList.add("keyboard-btn");
        SPAN.setAttribute("data-key", item.data);
        if (item.beautify) {SPAN.classList.add("beautify");}
        if (item.data == "Backspace") {SPAN.classList.add("backspace-btn");}
        else if (item.data == "Tab") {SPAN.classList.add("tab-btn");}
        else if (item.data == "CapsLock") {SPAN.classList.add("caps-btn");}
        else if (item.data == "Enter") {SPAN.classList.add("enter-btn");}
        else if (item.data == "ShiftLeft" || item.data == "ShiftRight") {SPAN.classList.add("shift-btn");}
        else if (item.data == "Space") {SPAN.classList.add("space-btn");}

        if (capsLock && !item.beautify && item.data != "Space") {SPAN.textContent = item[lang].toUpperCase();
        } else {SPAN.textContent = item[lang];}

        KEYBOARD.append(SPAN);
    });
}
renderKeys(lang, capsLock);

//взаимодействие кнопки с текстовым полем
function writeText(key) {
    if (key == "Backspace") {TEXTAREA.value = TEXTAREA.value.slice(0, -1);}
    else if (key == "Del") {TEXTAREA.value = "";}
    else if (key == "Caps Lock") {
        capsLock = !capsLock;
        renderKeys(lang, capsLock);
        }
    else if (key == "Space") {TEXTAREA.value += " ";}
    else if (key == "Enter") {TEXTAREA.value += "\n";}
    else if (key == "Tab") {TEXTAREA.value += "     ";}
    //ничего не отрисовывающие кнопки
    else if (key != "Win" && key != "Shift" && key != "Ctrl" && key != "Alt" &&
    key != "▲" && key != "▼" && key != "►" && key != "◄") {TEXTAREA.value += key;}
}

//клики мышью
KEYBOARD.addEventListener ("click", function(event) {
    if (event.target.closest(".keyboard-btn")) {
        let target = event.target;
        writeText(target.textContent);
    }
});
KEYBOARD.addEventListener ("mousedown", function(event) {
    if (event.target.closest(".keyboard-btn")) {
        let target = event.target;
        target.classList.add("focused");
        if (target.textContent == "Shift") {
            //shift = true;
            let buttons = document.querySelectorAll(".keyboard span");
            buttons.forEach((button, i) => {
                if (KEYS[i].data == button.getAttribute("data-key") && KEYS[i].shift) {
                    if (lang == "ru") {
                        if (button.getAttribute("data-key").match(/Digit/gi) || button.getAttribute("data-key") == "Backslash" || 
                        button.getAttribute("data-key") == "NumpadSubtract" || button.getAttribute("data-key") == "Equal") {
                            button.textContent = KEYS[i].shift;
                        } else {
                            button.textContent = KEYS[i][lang].toUpperCase();
                        }
                    } else {
                        button.textContent = KEYS[i].shift;
                    }
                } else if (KEYS[i].data == button.getAttribute("data-key") && button.getAttribute("data-key").match(/Key/gi)) {
                    button.textContent = button.textContent.toUpperCase();
                }
            });
        }
    }
});
KEYBOARD.addEventListener ("mouseup", function(event) {
    if (event.target.closest(".keyboard-btn")) {
        let target = event.target;
        target.classList.remove("focused");
        if (target.textContent == "Shift") {
            //shift = true;
            let buttons = document.querySelectorAll(".keyboard span");
            buttons.forEach((button, i) => {
                if (KEYS[i].data == button.getAttribute("data-key") && KEYS[i].shift) {
                    button.textContent = KEYS[i][lang];
                } else if (KEYS[i].data == button.getAttribute("data-key") && button.getAttribute("data-key").match(/Key/gi)) {
                    button.textContent = button.textContent.toLowerCase();
                }
            });
        }
    }
});

BODY.addEventListener("keydown", function(event) {
    event.preventDefault();
    let buttons = document.querySelectorAll(".keyboard span");
    buttons.forEach((button) => {
        if (button.getAttribute("data-key") == event.code) {
            button.classList.add("focused");
            writeText(button.textContent);

            if (button.textContent == "Shift") {
                //shift = true;
                buttons.forEach((button, i) => {
                    if (KEYS[i].data == button.getAttribute("data-key") && KEYS[i].shift) {
                        if (lang == "ru") {
                            if (button.getAttribute("data-key").match(/Digit/gi) || button.getAttribute("data-key") == "Backslash" || 
                            button.getAttribute("data-key") == "NumpadSubtract" || button.getAttribute("data-key") == "Equal") {
                                button.textContent = KEYS[i].shift;
                            } else {
                                button.textContent = KEYS[i][lang].toUpperCase();
                            }
                        } else {
                            button.textContent = KEYS[i].shift;
                        }
                    } else if (KEYS[i].data == button.getAttribute("data-key") && button.getAttribute("data-key").match(/Key/gi)) {
                        button.textContent = button.textContent.toUpperCase();
                    }
                });
            }
            else if (button.textContent == "Ctrl") {ctrl = true;}
            else if (button.textContent == "Alt" && ctrl) {
                if (lang == "en") {
                    lang = "ru";
                    setLocalStorage()
                }
                else {
                    lang = "en";
                    setLocalStorage()
            }
                buttons.forEach((button, i) => {
                    button.textContent = KEYS[i][lang];
                });
            }

        }
    });
});

BODY.addEventListener("keyup", function(event) {
    let buttons = document.querySelectorAll(".keyboard span");
    buttons.forEach((button) => {
        if (button.getAttribute("data-key") == event.code) {
            button.classList.remove("focused");
            if (button.textContent == "Shift"){
                buttons.forEach((button, i) => {
                    if (KEYS[i].data == button.getAttribute("data-key") && KEYS[i].shift) {
                        button.textContent = KEYS[i][lang];
                    } else if (KEYS[i].data == button.getAttribute("data-key") && button.getAttribute("data-key").match(/Key/gi)) {
                        button.textContent = button.textContent.toLowerCase();
                    }
                });
            }
            else if (button.textContent == "Ctrl") {ctrl = false;}
        }
    });
});