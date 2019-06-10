/* Task 1 */
var element = document.getElementById('heading')
console.log(element.innerText)

/* Task 2 using plain JavaScript */
//task 2a
var textBtn = document.getElementById('addText1')

textBtn.addEventListener('click', function(event){
    var task2 = document.getElementById('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText = "hello world"
    task2.appendChild(paragraph)
})

//task 2b
function changeBGColor(event){
    //console.log(event.target.innerText)
    var body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = event.target.innerText
}
//task 2 c
function redirectToGoogle(event){
    window.location.assign('http://www.google.com')
}
/* Task 4 using jQuery */
