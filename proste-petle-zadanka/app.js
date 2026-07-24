// zad1: lista dzięki for
let text = '<ul>';
for (let i = 1; i <= 5; i++) { 
    text += `<li>Element nr ${i}</li>`;
}
text += '</ul>';
document.querySelector('#list1').innerHTML = text;

// zad2: lista dzięki while
let text2 = '<ul>';
let j = 12; 
while (j >= 2) {
    text2 += `<li>Element nr ${j}</li>`;
    j -= 2; 
}
text2 += '</ul>';
document.querySelector('#list2').innerHTML = text2;

// zad3: uniwersalna funkcja do list
function generateList(count, selectorId) {
    let text3 = '<ul>';
    for (let i = 1; i <= count; i++) {
        text3 += `<li>wygenerowany węzeł nr ${i}</li>`;
    }
    text3 += '</ul>';
    
    document.querySelector('#' + selectorId).innerHTML = text3;
}

generateList(8, "list3");