window.onload = function() {
    // Lyssna efter händelser
    var profiles = document.getElementsByClassName("team-member");

    for(var i = 0; i < profiles.length; i++){
      profiles[i].addEventListener("click", (e) => editTitle(e));
      profiles[i].addEventListener("mouseover", (e) => effectOn(e));
      profiles[i].addEventListener("mouseout", (e) => effectOff(e));
    }
}

var editTitle = function(e) {
    // Ändra "team-title"
    var element;
    if(e.target.className == "team-member"){
      element = e.target;
    }else{
      element = e.target.parentElement;
    }
    element.getElementsByClassName("team-title")[0].innerHTML = prompt("Give new job title:");
};

function effectOn(e){
    // Rita en ram runt personen, kanske lite drop shadow?
    var element;
    if(e.target.className == "team-member"){
      element = e.target;
    }else{
      element = e.target.parentElement;
      if(element.className != "team-member"){
        return
      }
    }
    element.classList.add("hovering");
}

function effectOff(e){
    // Stäng av effekten när musen inte längre är ovanför personen
    var element;
    if(e.target.className == "team-member hovering"){
      element = e.target;
    }else{
      element = e.target.parentElement;
      console.log(element.className);
      if(element.className != "team-member hovering"){
        return
      }
    }
    element.classList.remove("hovering");
}
