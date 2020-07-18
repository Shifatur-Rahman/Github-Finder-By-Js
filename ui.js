class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class='card card-body'>
        <div class='row'>
          <div class='col-md-3'>
            <img class='img-fluid mb-2' src="${user.avatar_url}" />
            <a class="btn btn-primary btn-block mb-4" src="${user.html_url}" target="_blank">View Profile</a>
          </div>
          <div class='col-md-9'></div>
        </div>
      </div>
    `;
  }
}
