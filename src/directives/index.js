export const focusDirective = {
    mounted(el) {
        el.focus();
    }
}
export const rainbowDirective =  {
    mounted(el) {
        el.style.color = getRandomColor();
    }
}



function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
