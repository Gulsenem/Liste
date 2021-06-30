var inputText = document.getElementById("inputText");
var liElemente = [];

function add()
{
    if(inputText.value =="")
    {return}

    var liste = document.getElementById("liste");

    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerHTML = inputText.value;

    var divIcon = document.createElement("div");
    divIcon.classList.add("icons");

    var check_icon = document.createElement("i");
    check_icon.classList.add("far", "fa-check-square");
    check_icon.onclick = function ()
    {
        span.style.textDecoration = "line-through";
        li.style.color = "green";
        check_icon.style.color = "green";
    }

    var kreuz_icon = document.createElement("i");
    kreuz_icon.classList.add("far", "fa-times-square");
    kreuz_icon.style.color = "red";
    kreuz_icon.onclick = function()
    {
        li.style.display = "none";
    }



    liste.appendChild(li);
    li.appendChild(span);
    li.appendChild(divIcon);
    divIcon.appendChild(check_icon);
    divIcon.appendChild(kreuz_icon);

    inputText.value ="";
    
}