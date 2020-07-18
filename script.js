const github = new Github(); //  github.js er class declare korlam
const ui = new UI();
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", (e) => {
  const searchText = e.target.value;
  if (searchInput !== "") {
    github.getUser(searchText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
      } else {
        // show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
  }
});
