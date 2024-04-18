//POST-IT NOTE (JAVASCRIPT)
if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
}
   
function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
}
   
var show = false;
function showNote(){
    if (show == false){
        document.getElementById("note").style.opacity = 1;
        show = true;
    }
    else if (show == true){
        document.getElementById("note").style.opacity = 0;
        show = false;
    }
}