let c = 0;
let interval = setInterval(incrementCounter, 1000);

function incrementCounter(){
    document.getElementById("counter").innerHTML = ++c
};

function decrementCounter(){
    document.getElementById("counter").innerHTML = --c
};

let likeCounter = []

function likeNumber(){
    let number =  document.getElementById("counter").innerHTML;
    let ul = document.getElementsByClassName("likes")[0];
    let li = document.createElement("li");
    likeCounter.push(number)
    let count = 0;
        for(i = 0; i < likeCounter.length; ++i){
        if(likeCounter[i] == number)
            count++;
        }
    li.appendChild(document.createTextNode(number + " has been liked "  + count + " time(s)."));
    if(count>1){
        ul.lastChild.replaceWith(li)
    } else {
         ul.appendChild(li);
       }
}

function pauseButton(){
    if (document.getElementById("pause").innerText == "pause"){
        clearInterval(interval)
        document.getElementById("pause").innerText = "resume"
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
    } else {
        interval = setInterval(incrementCounter, 1000)
        document.getElementById("pause").innerText = "pause"
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
        }
}

function userComment() {
    let comment = document.getElementById("comment-input")
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(comment.value));
    ul.appendChild(li)
    comment.value = ""
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    userComment()})
document.getElementById("pause").addEventListener("click", pauseButton)
document.getElementById("minus").addEventListener("click", decrementCounter)
document.getElementById("plus").addEventListener("click", incrementCounter)
document.getElementById("heart").addEventListener("click", likeNumber)
document.addEventListener("load", interval)