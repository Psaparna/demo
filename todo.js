
let inputBox = null;
let listConatiner=null;

window.onload = (event) => {
     inputBox = document.getElementById("input-box");
     listConatiner = document.getElementById("list-container");

    listConatiner.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    }, false);
};

const createInputElement = ()=>{
    var inputItem = document.createElement("input");
    inputItem.setAttribute('type', 'text');
    inputItem.setAttribute("class", "att")
    inputItem.value = inputBox.value;
    inputItem.disabled = true;
    inputItem.setAttribute("onblur", "goThere(event)");
    return inputItem;

}
const createButtonElement=(inputItem)=>{
    let button = document.createElement("button");
    button.innerText = 'button';
    button.id = "button2";
    button.addEventListener('click', function () {
        inputItem.disabled = false;

    })
    return button;
}
function addTask() {
    if (inputBox.value == '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        var inputItem = createInputElement();
        let button = createButtonElement(inputItem);

        li.appendChild(inputItem);
        

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      
        li.appendChild(button);
        listConatiner.appendChild(li);
      
    }
    inputBox.value = "";
}


function goThere(e) {
    // this.disabled = true;
    e.target.setAttribute("disabled", true);
    console.log("dfdf")
    // inputItem.disabled=true;
}




