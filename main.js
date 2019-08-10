// variables
let state = {
    currentSceneId: 1,
    score: 0
};

// functions
function startGame() {
    showScene(state.currentSceneId);
}

function showScene(sceneIndex) {
    const sceneText = document.getElementById('scene-text');
    const optionButtons = document.getElementById('options');
    const scene = scenes.find(scene => scene.id === sceneIndex);
    sceneText.innerText = scene.text;
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    //optionButtons.empty();

    scene.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => transition(option));
        optionButtons.appendChild(button);
    });

    const insightBar = document.getElementById('insight-bar');
    insightBar.innerText = state.score;
}

function transition(option) {
    const nextSceneId = option.nextScene;
    state.currentSceneId = nextSceneId;
    const clueState = option.clue;
    if (clueState === true && state.score <= 8) {
        state.score++;
    }

    showScene(state.currentSceneId);
}

function printDetails() {
    console.log(state);
}

// initial actions
startGame();