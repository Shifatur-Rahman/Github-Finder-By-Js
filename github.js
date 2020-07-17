class Github {
  constructor() {
    this.client_id = "Iv1.df234396b67f0093";
    this.client_secret = "78a2ab6b0de9cece60088242e42c058d39c91302";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile,
    };
  }
}
