/* Task 1 */
var element = document.getElementById('heading')
console.log(element.innerText)

/* Task 2 using plain JavaScript */
var textBtn = document.getElementById('addText1')

textBtn.addEventListener('click', function(event){
    var task2 = document.getElementById('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText = "hello world"
    task2.appendChild(paragraph)
})




/* Task 4 using jQuery */
