import {React} from 'react';
import './Contact.css';
export default function Contact(){
    return(
		<div className='contact'>	
		

		<div class="container">
		<div class="right"></div>
		<div class="left">
		  <div class="header">
			<h2 class="animation a1">Contact US</h2>
			<h4 class="animation a2">Contact US for any further inqueries</h4>
		  </div>
		  <div class="form">
			<input type="text" class="form-field animation a3" placeholder="Name" />
			<input type="email" class="form-field animation a4" placeholder="Email" />
			<textarea class="form-field animation a4" placeholder="Message" rows="7" ></textarea>
		   
			<button class="animation a6">Send</button>
		  </div>
		</div>
		
	  </div>
	  </div>
    )
}