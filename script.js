function login(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username == "Lokesh" && password == "lokesh123")
        {
            location.assign("page2.html");
        }
    else if(username == "Tharun" && password == "tharun123")
        {
            location.assign("page3.html");
        }
    else if(username == "Deepak" && password == "Deepak123")
        {
            location.assign("page4.html");
        }
    else{
        window.alert("!INVALID CREDENTIALS");
    }
}