// selected elements are not array value.It's nodelist.That's why u can't use some array method like pop(),sort(),etc

let firstArr = Array.from(document.querySelectorAll('#hover-event'));//alter to array 
let secondArr = Array.from(document.querySelectorAll('.hover-elem'));

for (let i = 0; i < firstArr.length; i++) {
    if (firstArr.indexOf(firstArr[i]) == secondArr.indexOf(secondArr[i])) {
        firstArr[i].addEventListener('mouseover', function () {
            secondArr[i].style.display = "flex";
        })
    }
    if (firstArr.indexOf(firstArr[i]) == secondArr.indexOf(secondArr[i])) {
        firstArr[i].addEventListener('mouseout', function () {
            secondArr[i].style.display = "none";
        })
    }
}