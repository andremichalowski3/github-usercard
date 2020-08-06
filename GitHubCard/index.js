/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
import axios from "axios";

axios
  .get("https://api.github.com/users/andremichalowski")
  .then((response) => {
    console.log(response.data);
    const gitData = response.data;
    cards.appendChild(createCard(gitData));
  })
  .catch((err) => {
    console.log("Error:", err);
  });

const cards = document.querySelector(".cards");

///construct mark class content append return
function createCard(obj) {
  const card = document.createElement("div");
  card.className = "card";
  const userImg = document.createElement("img");
  userImg.setAttribute("src", obj.avatar_url);
  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  const name = document.createElement("h3");
  name.className = "name";
  name.textContent = obj.name;
  const userName = document.createElement("p");
  userName.className = "username";
  userName.textContent = obj.login;
  const location = document.createElement("p");
  location.textContent = obj.location;
  const profile = document.createElement("p");
  profile.textContent = "Profile: ";
  const profileAddress = document.createElement("a");
  profileAddress.textContent = obj.html_url;
  profileAddress.setAttribute("href", obj.html_url);
  const followers = document.createElement("p");
  followers.textContent = `Followers: ${obj.followers}`;
  const following = document.createElement("p");
  following.textContent = `Following: ${obj.following}`;
  const bio = document.createElement("p");
  bio.textContent = `Bio: ${obj.bio}`;

  card.appendChild(userImg);
  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profile.appendChild(profileAddress);

  return card;
}
