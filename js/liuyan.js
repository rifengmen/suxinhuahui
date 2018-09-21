let text = document.querySelector("textarea");
let inputs = document.querySelector(".names");
let num = document.querySelector(".text>span");
let btn = document.querySelector("button");
let ul = document.querySelector(".main-left");
let rem1 = document.querySelector(".rem1");
let rem2 = document.querySelector(".rem2");
let heights = document.querySelector(".main-right");
// console.log(rem1);
text.oninput = function () {
    let textnum = this.value.length;
    if (textnum > 100) {
        textnum = 100;
        this.value = this.value.slice(0,100);
    }
    num.innerHTML = textnum;
};
let name = inputs.value;
let con = text.value;

btn.onclick = function () {
    let name = inputs.value;
    let con = text.value;
    let dates = new Date();
    let years = dates.getFullYear();
    let months = dates.getMonth();
    let days = dates.getDate();
    let hours = dates.getHours();
    let minutes = dates.getMinutes();
    let seconds = dates.getSeconds();
    // console.log(name,con);
    let str = `<li>
                 <div class="icon">
                    <i class="iconfont icon-touxiang"></i>
                 </div>
                 <div class="inf">
                    <h4>${name}</h4>
                     <p>${con}</p>
                 </div>
                 <div class="times">
                      <span>${years}</span>
                      <span>-</span>
                      <span>${months}</span>
                      <span>-</span>
                      <span>${days}</span>&nbsp;
                      <span>${hours}</span>
                      <span>:</span>
                      <span>${minutes}</span>
                      <span>:</span>
                      <span>${seconds}</span>
                 </div>
             </li>`
    if (name == "" && con == "") {
        rem1.style.height = "auto";
        rem2.style.height = "auto";
        inputs.style.borderColor = "red";
        text.style.borderColor = "red";
        heights.style.height = "408px";
        return;
    }
    if (name == "") {
        rem1.style.height = "auto";
        inputs.style.borderColor = "red";
        heights.style.height = "388px";
        return;
    }
    if (con == "") {
        rem2.style.height = "auto";
        text.style.borderColor = "red";
        heights.style.height = "388px";
        return;
    }
    ul.innerHTML+=str;
    inputs.value = "";
    text.value = "";
    num.innerHTML = "0";
    // ul.push(str);
    console.log(ul);
    localStorage.setItem("massage",JSON.stringify(ul));
}
// inputs.onfocus = function () {
//     this.style.borderColor = "#358fe4";
// }
// inputs.onblur = function () {
//     this.style.borderColor = "#e4eaec";
//     if (name != "") {
//         rem1.style.height = 0;
//     }
// }
// text.onfocus = function () {
//     this.style.borderColor = "#358fe4";
// }
// text.onblur = function () {
//     this.style.borderColor = "#e4eaec";
//     if (con != "") {
//         rem2.style.height = 0;
//     }
// }
// 鼠标移入每个li进行样式变化
ul.onmouseover = function (e) {
    let event = e.target;
    if (event.nodeName === "LI" && event.classList.contains("list")) {
        event.style.backgroundColor = "#ccc";
    }
}
ul.onmouseout = function (e) {
    let event = e.target;
    if (event.nodeName === "LI" && event.classList.contains("list")) {
        event.style.backgroundColor = "#fff";
    }
}