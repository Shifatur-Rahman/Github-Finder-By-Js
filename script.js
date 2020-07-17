const github = new Github(); //  github.js er class declare korlam

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", (e) => {
  const searchText = e.target.value;
  if (searchInput !== "") {
    github.getUser(searchText).then((data) => {
      console.log(data);
    });
  } else {
  }
});
