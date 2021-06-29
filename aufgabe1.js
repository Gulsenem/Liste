var inputText = document.getElementById("inputText");
var shoppingBox = document.getElementById("shoppingBox");
var zahl = 0;
function add()
{
    var div = document.createElement("div");

    zahl++;
    var span = document.createElement("span");
    span.innerHTML = zahl + ".  " +inputText.value;

    var divIcon = document.createElement("div");
    divIcon.classList.add("icons");

    var check_icon = document.createElement("i");
    check_icon.classList.add("far", "fa-check-square");
    check_icon.onclick = function dekor()
    {
        span.style.textDecoration = "line-through";
        check_icon.style.color = "green";
    }

    var kreuz_icon = document.createElement("i");
    kreuz_icon.classList.add("far", "fa-times-square");
    kreuz_icon.style.color = "red";
    kreuz_icon.onclick = function loschen()
    {
        div.style.display = "none";
    }

    shoppingBox.appendChild(div);

    div.appendChild(span);
    div.appendChild(divIcon);
    divIcon.appendChild(check_icon);
    divIcon.appendChild(kreuz_icon);

}