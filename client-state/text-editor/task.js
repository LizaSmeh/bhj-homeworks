const textEditor = document.getElementById('editor');
const storedText = localStorage.getItem('text');

textEditor.value = storedText;

textEditor.addEventListener('input', () => {
    localStorage.setItem('text', textEditor.value);
})
