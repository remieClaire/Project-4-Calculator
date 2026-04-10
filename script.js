const screen = document.getElementById('screen');

// make selection
const all_buttons = document.querySelectorAll('.num-btn');

let numValue = 0;
// store button number value
all_buttons.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        numValue = btn.value;
    })
})
// display clicked value
all_buttons.addEventListener('click', () => displayNumber(numValue));

function displayNumber(num) {
    screen.textContent = num;
}
