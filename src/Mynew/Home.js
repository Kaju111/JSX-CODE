import React from "react";
import "./Main.css";

function Home() {
  return (
    <div>
      <div className="Hom">
        <span className="Wu">
          Well Come to my. <span className="Ho">Home page</span>
        </span>
      </div>
      <div className="Home">
        Create user interfaces from components React lets you build user
        interfaces out
        <br /> of individual pieces called components. Create your own React
        components like <br />
        Thumbnail, LikeButton, and Video. Then combine them into
        <br /> entire screens, pages, and apps
      </div>
      <div className="container">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="Img">
        <img src="https://picsum.photos/640/360" alt="..." />
      </div>
      <div className="Last">
      Seamless Cross-Platform React <br/> components wrap existing native code and
      interact with native APIs via React's <br/>declarative UI paradigm and
      JavaScript. This enables <br/>native app development for whole new teams of
      developers,<br/> and can let existing native teams work much faster
      </div>
    </div>
  );
}

export default Home;
