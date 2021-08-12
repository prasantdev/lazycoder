//getting elements
const editorHeaders = document.getElementById('editor-header-container');
const workspaceContainer = document.getElementById('workspace-container');
const inpKey = document.getElementById('input-key');
const preview = document.getElementById('preview-body');

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

//Test codes
let obj = {
    "name1": 8,
    "nmae2": {
        "name21": "val21",
        "name22": "val22",
    }
}
let preEl = document.createElement('pre');
// preEl.innerHTML = JSON.stringify(obj);
preEl.innerHTML = JSON.stringify(obj, undefined, 2);
preview.append(preEl);