import {React} from 'react';
import {  Link,NavLink } from 'react-router-dom';
import './Navbar.css';
export default function Navbar(){
    return(
<div className='navbar'>

<nav class="navbar  navbar-expand-lg navbar-light bg-transparent">
  <div class="container">
    <Link class="navbar-brand" to="/">Laogi</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav ms-auto" >
      <li class='nav-item fs-5 px-3'><Link class="nav-link active" to="/">Home</Link></li>
<li class='nav-item fs-5 px-3'><Link class="nav-link" to="/guide">Guidlines</Link></li>
<li class='nav-item fs-5 px-3'><Link class="nav-link" to="/contact">Contact</Link></li>
        
      </ul>
    </div>
  </div>
</nav>


</div>
    )
}


