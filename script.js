const github = new Github(); //  github.js er class declare korlam
const ui = new UI(); //ui.js r class declare korlam
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", (e) => {
  const searchText = e.target.value;
  if (searchText !== "") {
    github.getUser(searchText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User Not found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    ui.clearProfile();
  }
});
