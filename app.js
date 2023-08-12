const textArea = document.querySelector('textarea');
const characters = document.getElementById('character');
const remainEl = document.getElementById('remain');
const warning = document.getElementById('msg');

let remain = 50;

textArea.addEventListener('keyup', () => {
    console.log(textArea.value.length);
    if (textArea.value != "") {
        let textLength = +textArea.value.length;

        characters.textContent = textLength;
        remainEl.textContent = remain - textLength;
        
        console.log(textLength);
        if (textLength > 49) {
          remainEl.textContent = 0;
          textArea.disabled = true;
          warning.textContent =
            `Tu peut pas Depasser Les ${textLength} lettres!`;
        }
    }
})