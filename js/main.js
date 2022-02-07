'use strict'

var gNextId = 0;
var gCurrQuestIdx = 0;

var gQuests = createQuests();

function init() {
    gCurrQuestIdx = 0;
    renderQuest();
}

function createQuests(){
    var quests = [
        { id: ++gNextId, opts: ['The tiger is swimming', 'The queen is dancing', 'The disco is dead'], correctOptIndex: 0 },
        { id: ++gNextId, opts: ['The boy is crying', 'The bird is flying', 'The girl is laughing'], correctOptIndex: 2 },
        { id: ++gNextId, opts: ['The dog can bark', 'The bug can code', 'The cat can lick his nose'], correctOptIndex: 2 },
        { id: ++gNextId, opts: ['The squirrel is eating a nut', 'The fox is sleeping alone', 'The cheeta is running a marathon'], correctOptIndex: 0 },
        { id: ++gNextId, opts: ['The eye of the tiger', 'The color is red', 'The panda is hungry'], correctOptIndex: 2 },
        { id: ++gNextId, opts: ['The ant is working 9-5', 'The bear is waving hello', 'The mouse is hiding from the computer'], correctOptIndex: 1 },
    ];
    return quests;
}

function renderQuest() {
    //reset message and replay button
    var elMessage = document.querySelector('.message')
    elMessage.innerText = '';

    var elResetBtn = document.querySelector('.reset-btn');
    elResetBtn.style.visibility = 'hidden';

    // update image file
    var elImage = document.querySelector('.in-image');
    elImage.src = `img/${gQuests[gCurrQuestIdx].id}.jpg`;

    //create buttons
    var elContainer = document.querySelector('.container');
    var currOpts = gQuests[gCurrQuestIdx].opts;
    var strHTML = '';

    for (var i = 0; i < currOpts.length; i++) {
        strHTML += `<button class="btn" onclick="checkAnswer(${i})">${currOpts[i]}</button>`;
    }
    elContainer.innerHTML = strHTML;
}

function checkAnswer(optIdx) {

    var elMessage = document.querySelector('.message')
    var correctAns = gQuests[gCurrQuestIdx].correctOptIndex;

    // if (elBtn.innerText === gQuests[gCurrQuestIdx].opts[correctAns]) {
    if (correctAns === optIdx) {
        // elMessage.innerText = 'Correct!';

        if (gCurrQuestIdx === gQuests.length - 1) {
            var elResetBtn = document.querySelector('.reset-btn');
            elResetBtn.style.visibility = 'visible';
            elMessage.innerText = 'Congratulations! You won!'
        }
        else {
            gCurrQuestIdx++;
            renderQuest();
            // setTimeout(renderBoard, 1000);
        }
    } else {
        elMessage.innerText = 'Oh no...Try again';
    };
}
