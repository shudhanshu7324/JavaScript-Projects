// const button = document.querySelector(".btn");

// button.addEventListener("click", (event) => {
//   console.log("Button is click");
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  value = document.querySelector(".username").value;
  //   console.log(value);

  const inputUser = value;

  fetch(`https://api.github.com/users/${value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector(".user-name").innerHTML = data.name;
      document.querySelector(
        ".followers"
      ).innerHTML = `Followers: ${data.followers}`;
      document.querySelector(
        ".following"
      ).innerHTML = `Following: ${data.following}`;
      document.querySelector(".bio").innerHTML = `${data.bio}`;
      document.querySelector(".card-image").src = data.avatar_url;
    })
    .catch((error) => console.log(error));

});
