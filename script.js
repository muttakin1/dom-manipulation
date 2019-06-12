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

//task 4a
$('#addText2').click(function(event){
   
    var paragraph = $('<p>').text('Hello World')
    $('#task4a').append(paragraph)
})

// task 4b
function changeBG(event){
    var color = event.target.innerText
    $('body').css('background-color',color)
}
// task 4c 

function Add(event){
 var sum = Number($('#Num1').val()) 
            + Number($('#Num2').val())
        $('#sum').text(sum)
}