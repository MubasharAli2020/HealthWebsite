import {React} from 'react';
import './Contact.css';
export default function Contact(){
    return(
        <div className='contact container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://images.all-free-download.com/images/graphicwebp/communication_icons_modern_men_sketch_cartoon_characters_6844995.webp" />
                </div>
               <div className='col-md-4 offset-1'>
               <div class="container d-flex justify-content-center align-items-center">
		<form className='form form-items'>
		<h1 class="title text-center mb-4">Talk to Us</h1>

			
			<div class="form-group position-relative">
				<label for="formName" class="d-block">
					<i class="icon" data-feather="user"></i>
				</label>
				<input type="text" id="formName" class="form-control form-control-lg thick" placeholder="Name" />
			</div>

			
			<div class="form-group position-relative">
				<label for="formEmail" class="d-block">
					<i class="icon" data-feather="mail"></i>
				</label>
				<input type="email" id="formEmail" class="form-control form-control-lg thick" placeholder="E-mail" />
			</div>

			
			<div class="form-group message">
				<textarea id="formMessage" class="form-control form-control-lg" rows="7" placeholder="Mensagem"></textarea>
			</div>
		
			
			<div class="text-center">
				<button type="submit" class="submit-btn btn btn-primary" tabIndex="-1">Send message</button>
			</div>
	</form>
	
</div>
               </div>
            
            </div>

        </div>
    )
}