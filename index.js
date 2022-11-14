// Copyright (c) 2022 Sungbae Jeong
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import init, { Voca, rand } from "./pkg/vrot.js";
function readFilesAsText(file) {
    return new Promise((resolve, reject) => {
        let fr = new FileReader();
        fr.onload = () => { resolve(fr.result); };
        fr.onerror = () => { reject(fr); };
        fr.readAsText(file);
    });
}
function main(values) {
    let yamlStr = "";
    for (var value of values) {
        yamlStr += value;
    }
    let vocas = Voca.new(yamlStr);
    const vocasLen = vocas.length;
    let mainVoca = document.querySelector("#main-voca");
    let knownButton = document.querySelector("#known-word");
    let unknownButton = document.querySelector("#unknown-word");
    let answer = document.querySelector("#voca-answer");
    let idx = rand(vocasLen);
    mainVoca.textContent = vocas[idx].word;
    knownButton.addEventListener("click", () => {
        answer.style.display = "none";
        idx = rand(vocasLen);
        mainVoca.textContent = vocas[idx].word;
    });
    unknownButton.addEventListener("click", () => unknownButtonHandler(vocas, idx, answer));
}
function unknownButtonHandler(vocas, vocaIdx, answer) {
    let prevAnswer = document.querySelector("#prev-answer");
    let nextAnswer = document.querySelector("#next-answer");
    let infoLen = vocas[vocaIdx].info.length;
    let idx = 0;
    nextAnswer.style.display = infoLen <= 1 ? "none" : "block";
    showAnswer(vocas, vocaIdx, answer, idx);
    prevAnswer.addEventListener("click", () => {
        if (idx > 0) {
            idx -= 1;
        }
        showAnswer(vocas, vocaIdx, answer, idx);
        if (idx <= 0) {
            prevAnswer.style.display = "none";
        }
        if (idx + 1 < infoLen) {
            nextAnswer.style.display = "block";
        }
    });
    nextAnswer.addEventListener("click", () => {
        if (idx + 1 < infoLen) {
            idx += 1;
        }
        showAnswer(vocas, vocaIdx, answer, idx);
        if (idx > 0) {
            prevAnswer.style.display = "block";
        }
        if (idx + 1 >= infoLen) {
            nextAnswer.style.display = "none";
        }
    });
}
function showAnswer(vocas, vocaIdx, answer, idx) {
    let vocaMeaning = document.querySelector("#voca-meaning");
    let vocaSynos = document.querySelectorAll(".synos");
    let vocaSynosText = document.querySelector("#voca-synos");
    let vocaExample = document.querySelectorAll(".example");
    let vocaExampleText = document.querySelector("#voca-example");
    // change voca answers
    vocaMeaning.textContent = vocas[vocaIdx].info[idx].meaning;
    if (typeof (vocas[vocaIdx].info[0].synos) !== "undefined") {
        for (var item of vocaSynos) {
            item.style.display = "block";
        }
        vocaSynosText.textContent = vocas[vocaIdx].info[idx].synos.join(", ");
    }
    else {
        for (var item of vocaSynos) {
            item.style.display = "none";
        }
    }
    if (typeof (vocas[vocaIdx].info[idx].example) !== "undefined") {
        for (var item of vocaExample) {
            item.style.display = "block";
        }
        vocaExampleText.textContent = vocas[vocaIdx].info[idx].example;
    }
    else {
        for (var item of vocaExample) {
            item.style.display = "none";
        }
    }
    // show answer
    answer.style.display = "block";
}
// Main actor
const runWasm = async () => {
    await init();
    const fileSelector = document.querySelector("#yaml-reader");
    fileSelector.addEventListener('change', (event) => {
        let fileList = event.target;
        let readers = [];
        for (const file of fileList.files) {
            readers.push(readFilesAsText(file));
        }
        Promise.all(readers).then(main);
    });
};
runWasm();
