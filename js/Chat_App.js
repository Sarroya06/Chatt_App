var message = document.getElementById('message');
var text = document.getElementById('text');
var btn1 = document.getElementById('btn1');
var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var shamay = (hours + ":" + min);

btn1.addEventListener("click", function (e) {
    e.preventDefault();

    if(text.value=="")
    {
        alert ("enter the message")
    }else{
    var newMessage = document.createElement('li');
    newMessage.setAttribute("id", "chatingli");
    var value1 = text.value;
    newMessage.setAttribute('class', 'newmessage')
    newMessage.innerHTML = `${text.value}   <span class="time-right"> ${shamay} </span>`;

    message.appendChild(newMessage);
        bot();
    }
    clear();

})


function bot() {     
    if (text.value == "") {

     alert("Enter the Message first")

        }
    else if (text.value == "i have a query") {
        var recieveMessage = document.createElement('li');
    recieveMessage.setAttribute('class', 'recieve');
    message.appendChild(recieveMessage);
        recieveMessage.innerHTML = `Please Enter your Query.We'll Get to You <span> ${shamay} </span>`;
    }

    else if (text.value == "thankyou") {
        var recieveMessage = document.createElement('li');
    recieveMessage.setAttribute('class', 'recieve');
    message.appendChild(recieveMessage);
        recieveMessage.innerHTML = `ThankYou For Connecting.   <span> ${shamay} </span>`;

    }
    else {
        var recieveMessage = document.createElement('li');
    recieveMessage.setAttribute('class', 'recieve');
    message.appendChild(recieveMessage);
        recieveMessage.innerHTML = `Hello Welcome to Techies <span> ${shamay} </span>`;

    }
}

function clear() {
    document.getElementById('text').value = '';

}
