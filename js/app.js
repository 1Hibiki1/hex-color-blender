/*
 * WARNING: Highly sacreligious and unmaintainable pile of junc ahead.
 *          If you've been having a good day so far, don't read.
*/

import ui from './UI';

//input fields----------------------------------------
const text_clr_1 = document.querySelector('#color1');
const clr_1 = document.querySelector('#clr-1');
const text_clr_2 = document.querySelector('#color2');
const clr_2 = document.querySelector('#clr-2');
const num = document.querySelector('#num');
//----------------------------------------------------


//initial colors
const initialColors = ["#4400ff", "#400fff", "#3c1dff", "#382bff", "#3339ff", "#2f47ff", "#2b55ff", "#2763ff", "#2271ff", "#1e7fff", "#1a8dff", "#169bff", "#11a9ff", "#0db7ff", "#09c5ff", "#05d3ff", "#00e1ff"];
ui.addColors(initialColors);


//bind textfields and color inputs-----------------------------------
clr_1.addEventListener('change', e=>{
    text_clr_1.value = e.target.value;
    document.querySelector("#clrw1").style.background = e.target.value;
    ui.addColors(blend(parseInt(num.value)));
})
clr_2.addEventListener('change', e=>{
    text_clr_2.value = e.target.value;
    document.querySelector("#clrw2").style.background = e.target.value;
    ui.addColors(blend(parseInt(num.value)));
})
text_clr_1.addEventListener('keyup', e=>{
    clr_1.value = e.target.value;
    document.querySelector("#clrw1").style.background = e.target.value;
    ui.addColors(blend(parseInt(num.value)));
})
text_clr_2.addEventListener('keyup', e=>{
    clr_2.value = e.target.value;
    document.querySelector("#clrw2").style.background = e.target.value;
    ui.addColors(blend(parseInt(num.value)));
})
//-------------------------------------------------------------------


//change number of intermediate colors on input---------------
num.addEventListener('keyup', e => {
    ui.addColors(blend(parseInt(e.target.value)));
})
num.addEventListener('change', e => {
    ui.addColors(blend(parseInt(e.target.value)));
})
//-------------------------------------------------------------


//function that inserts 0 before single hex digit
const cookStr = str => {
    if(str.length == 1) return `0${str}`
    return str
}

//main blend function
const blend = num => {
    //get integer r g b values from color inputs
    let r1 = parseInt(clr_1.value.slice(1,3), 16);
    let g1 = parseInt(clr_1.value.slice(3,5), 16);
    let b1 = parseInt(clr_1.value.slice(5,7), 16);

    const r2 = parseInt(clr_2.value.slice(1,3), 16);
    const g2 = parseInt(clr_2.value.slice(3,5), 16);
    const b2 = parseInt(clr_2.value.slice(5,7), 16);

    //value to be divided with
    const dr = Math.abs((r2-r1)/(num+1));
    const dg = Math.abs((g2-g1)/(num+1));
    const db = Math.abs((b2-b1)/(num+1));

    //add first color to output array
    const output = [`#${clr_1.value.slice(1,3)}${clr_1.value.slice(3,5)}${clr_1.value.slice(5,7)}`];
    let r,g,b;

    //push intermediate and last color values into output array
    for(let i = 1; i <= num+1; i++){
        if(r1<r2){
            r1 += dr; r = Math.ceil(r1);
            if(r > 255) r = 255
        }
        else {
            r1 -= dr; r = Math.ceil(r1); 
            if(r > 255) r = 255
        }

        if(g1<g2){
            g1 += dg; g = Math.ceil(g1);
            if(g > 255) g = 255
        }
        else {
            g1 -= dg; g = Math.ceil(g1);
            if(g > 255) g = 255
        }

        if(b1<b2){
            b1 += db; b = Math.ceil(b1);
            if(b > 255) b = 255
        }
        else {
            b1 -= db; b = Math.ceil(b1);
            if(b > 255) b = 255
        }

        const res = `#${cookStr(r.toString(16))}${cookStr(g.toString(16))}${cookStr(b.toString(16))}`;
        output.push(res);
    }

    return output;
}