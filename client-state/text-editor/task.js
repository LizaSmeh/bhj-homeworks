const textEditor = document.getElementById('editor');
const storedText = localStorage.getItem('text');

if(storedText !== null) {
    textEditor.value = storedText;
}

textEditor.addEventListener('input', () => {
    localStorage.setItem('text', textEditor.value);
})
