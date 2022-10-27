function countRabbits() {
  document.getElementById("title1").innerHTML = "top";
  const remote = require('electron').remote;


  document.getElementById("close").addEventListener("click", function (e) {
       var window = remote.getCurrentWindow();
       window.close();
  });

}
