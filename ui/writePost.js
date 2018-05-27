document.getElementById("createProjectForm").onsubmit = function onSubmit(event) {
  event.preventDefault();
  var title = document.getElementById("titlePostInput").value;
  var details = document.getElementById("detailPostInput").value;
  var category = document.getElementById("categoryPostInput");
  category = category.options[category.selectedIndex].text.replace(/ +/g, "");


  var xhr = new XMLHttpRequest();
  var url = "/fn/holotrack/projectCreate";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  var data = JSON.stringify({
    title: title,
    details: details,
    category: category
  });
console.log('projectCreate', data);
  xhr.send(data);

  title = "";
  details = "";
  category = "";
  //window.history.back();
};
