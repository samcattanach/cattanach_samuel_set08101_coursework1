function dropDownMenu(){
    // gets myDropDown element from html and changes class to showMenu
    document.getElementById("myDropdown").classList.toggle("showMenu");
}

// toggles the drop down menu's visabillity
window.onclick = function(event)
{
  if (!event.target.matches('.dropbtn'))
  {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var x;
    //makes each item in the drop down list invisible
    for (x = 0; i < dropdowns.length; x++)
    {
      var openDropdown = dropdowns[x];
      if (openDropdown.classList.contains('showMenu'))
      {
        openDropdown.classList.remove('showMenu');
      }
    }
  }
}
