import React from "react";
import "./Main.css";

function Contect(props) {
  return (
    <div>



      <div className="Con">
        <span className="Phn">
          Well Come to my. <span className="Mo">Contect page</span>
        </span>
      </div>

      <div className="Conte">
        Grid layout is one the most <br />
        powerful features available in modern CSS. Using grid layout can help
        you build complex, responsive and amazing html layouts
        <br /> without any external css frameworks (i.e. bootstrap). With grid
        layouts you <br />
        can structure responsive html sites
        <br /> quickly and easily. In this article we will go over everything
        you need to know about css grids.
      </div>
      <div className="container">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Main address"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Second address"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Misson chariali</option>
              <option>Patia chuburi</option>
              <option>Chandmari</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Pin
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div className="Foot">
        We created a break point and defined our <br />
        grid-template-areas. As you can see from the example it is very
        intuitive and someone looking at the <br />
        code will immediately be able to understand exactly what’s <br/>going on. The
        grid-template-rows and<br/> grid-template-columns properties in the example
        is defining the fraction <br/>amount that a particular area sloth will fill
        up. Our page at this point will look like below
      </div>
    </div>
  );
}

export default Contect;
