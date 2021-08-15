//getting elements
const editorHeaders = document.getElementById('editor-header-container');
const workspaceContainer = document.getElementById('workspace-container');
const inpKey = document.getElementById('input-key');
const preview = document.getElementById('preview-body');
// const inpKey = document.getElementById('input-key');
const inpValue = document.getElementById('input-value');
const addKey = document.getElementById('input-key-add');
const cancelKey = document.getElementById('input-key-cancel');
const previewPre = document.getElementById('pre-code');
const previewCode = document.getElementById('code-code');

//Event Listeners
editorHeaders.addEventListener('click', (e) => {
    // console.log(e.target)
    if (e.target.className.includes('mode-open')) return;

    editorHeaders.childNodes.forEach(elem => {
        if (elem.className && elem.className.includes('mode-open')) {
            elem.classList.remove('mode-open');
        }
    })

    workspaceContainer.childNodes.forEach(el => {
        if (el.id) {
            if (el.id === e.target.dataset.openmode) {
                el.className.includes('workspace-closed') ? el.classList.remove('workspace-closed') : false;
            } else {
                el.classList.add('workspace-closed');
            }
        }
    });
    // console.log(workspaceContainer.childNodes)
    e.target.classList.add('mode-open');
});

// inpKey.addEventListener('input')

//Functions
function addInpKey(json, newJson) {
    // let preEl = document.createElement('pre');
    // preEl.setAttribute('class', 'preEl');
// let previewCode = document.createElement('code');
previewCode.setAttribute('class', 'language-json line-numbers match-braces');
// previewCode.setAttribute('contenteditable', 'true');
let jsonCode = JSON.stringify(obj, undefined, 2).replace(/</g, '&lt;').replace(/&/g, '&amp;');
previewCode.innerHTML = jsonCode;

// preEl.append(previewCode);
// preview.append(preEl);
}
//Test codes
let obj = {
    "name1": 8,
    "nmae2": {
        "name21": "&lt;val21>",
        "name22": "val22",
    }
}
addInpKey(obj, "nmae2");
// let preEl = document.createElement('pre');
// let codeEl = document.createElement('code');
// codeEl.setAttribute('class', 'language-json line-numbers match-braces');
// codeEl.innerHTML = JSON.stringify(obj, undefined, 2);

// preEl.append(codeEl);
// preview.append(preEl);