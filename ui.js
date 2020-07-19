class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  //display profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class='card card-body'>
        <div class='row'>
          <div class='col-md-3'>
            <img class='img-fluid mb-2' src='${user.avatar_url}' />
            <a
              class='btn btn-primary btn-block mb-4'
              src='${user.html_url}'
              target='_blank'
            >
              View Profile
            </a>
          </div>
          <div class='col-md-9'>
            <span class='badge badge-primary'>
              Public Repos : ${user.repos_url}
            </span>
            <span class='badge badge-secondary'>
              Gists Repos : ${user.gists_url}
            </span>
            <span class='badge badge-success'>
              Following : ${user.following_url}
            </span>
            <span class='badge badge-info'>
              Followers : ${user.followers_url}
            </span>

            <ul class='list-group mt-4'>
              <li class='list-group-item'>Company : ${user.company}</li>
              <li class='list-group-item'>Website/Blog : ${user.blog}</li>
              <li class='list-group-item'>Location : ${user.location}</li>
             
            </ul>
          </div>
        </div>
      </div>
  `;
  }
  // clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
  showAlert(msg, className) {
    const div = document.createElement("div");
    div.className = className;
    div.innerHTML = msg;
    const mainContainer = document.querySelector(".main-container");
    const search = document.querySelector(".search");
    mainContainer.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
}
