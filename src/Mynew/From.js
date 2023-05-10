import React from 'react'
import "./Main.css"
import Contect from './Contect'

function From(props) {
  return (
    <div>



<div className="Righ">
      DOM stands for 'Document Object Model'. It is a
      structured representation of HTML <br/>in the webpage 
      or application. It represents the entire UI(User<br/>
      Interface) of the web application as the tree data 
      structure. It is a structural<br/> representation of HTML 
      elements of a web application in simplewords.
     </div>


    <div className='container'>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
    </div>
  )
}

export default From
