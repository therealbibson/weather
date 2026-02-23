/**
 * DOM MANIPULATION EXAMPLES
 * 
 * 
 * 
 */

const sultoon = document.getElementById('sultoon')

// --- 1. SELECTION & CONTENT ---
// We use document.getElementById to "grab" the element from the tree.
const mainTitle = document.getElementById('main-title');
const textBtn = document.getElementById('change-text-btn');
const targetText = document.getElementById('text-target');

textBtn.addEventListener('click', () => {
    // textContent changes just the text, safely.
    targetText.textContent = "no worries i don change the dom .. mophor!";
    targetText.classList.add('text-yellow-400', 'italic');
});


// --- 2. STYLE & CLASS MANIPULATION ---
const styleBtn = document.getElementById('style-btn');
const box = document.getElementById('box');

styleBtn.addEventListener('click', () => {
    // toggle() adds the class if it's missing, removes it if it's there.
    box.classList.toggle('rounded-full');
    box.classList.toggle('bg-emerald-500');
    box.classList.toggle('bg-purple-600');
    box.classList.toggle('scale-125');
});


// --- 3. CREATING & APPENDING ELEMENTS ---
const addBtn = document.getElementById('add-item-btn');
const list = document.getElementById('my-list');
let count = 2;

addBtn.addEventListener('click', () => {
    // Step A: Create a new element node
    const newItem = document.createElement('li');

    // Step B: Add content and styles to it
    newItem.textContent = `New Dynamic Item #${count++}`;
    newItem.className = "text-white font-semibold animate-pulse";

    // Step C: Append it to the existing list (the parent)
    list.appendChild(newItem);
});






// --- 4. EVENT LISTENING (The Event Object) ---
const tracker = document.getElementById('mouse-tracker');
const posX = document.getElementById('pos-x');
const posY = document.getElementById('pos-y');

// 'e' is the event object, it contains data about the action (like mouse coordinates)
tracker.addEventListener('mousemove', (e) => {
    // offsetX/Y gives position relative to the element
    posX.textContent = e.offsetX;
    posY.textContent = e.offsetY;
});








