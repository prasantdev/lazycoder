//getting elements
const editorHeaders = document.getElementById('editor-header-container');
const workspaceContainer = document.getElementById('workspace-container');
const inpKey = document.getElementById('input-key');
const preview = document.getElementById('preview-body');
const inpValue = document.getElementById('input-value');
const addKey = document.getElementById('input-key-add');
const cancelKey = document.getElementById('input-key-cancel');
const previewPre = document.getElementById('pre-code');
const previewCode = document.getElementById('code-code');

//Event Listeners
editorHeaders.addEventListener('click', (e) => {
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
    e.target.classList.add('mode-open');
});

//Functions
let obj = {};
function addInpKey() {
let k = inpKey.value;
let vTemp = inpValue.value;
// let v = typeof JSON.parse(vTemp) === 'object'?typeof JSON.parse(vTemp) === 'object':(Number(vTemp)?Number(vTemp):vTemp);
let v;
if(isParsable(vTemp) && typeof JSON.parse(vTemp) === 'object'){
    console.log('yes')
    v = JSON.parse(vTemp);
}else if(Number(vTemp)){
    v = Number(vTemp);
}else{ 
    v = vTemp;
}
obj[k] = v;
let jsonCode = JSON.stringify(obj, undefined, 2).replace(/</g, '&lt;').replace(/&/g, '&amp;');
previewCode.innerHTML = jsonCode;
Prism.highlightElement(previewCode);
}
//Test codes
// let obj = {
//     "name1": 8,
//     "nmae2": {
//         "name21": "&lt;val21>",
//         "name22": [1, "test"],
//     }
// }

addKey.addEventListener('click', ()=> {
    addInpKey();
})

//lib 
function isParsable(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}