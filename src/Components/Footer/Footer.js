import {React} from 'react';
import {  Link,NavLink } from 'react-router-dom';
import './Footer.css';
export default function Footer(){
    return(
        <div className='footer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />

                     <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
            <li class='list-inline-item'><Link  to="/">Home</Link></li>
<li class='list-inline-item'><Link  to="/guide">Guidlines</Link></li>
<li class='list-inline-item'><Link  to="/contact">Contact</Link></li>
            </ul>
            <h5 class="copyright">Company Name © 2022</h5>
        </footer>
</div>
    </div>
        
    )
}