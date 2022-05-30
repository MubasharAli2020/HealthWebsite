import {React} from 'react';
import './Guide.css';
export default function Guide(){
    return(
        <div className='container guide my-2'>
         
         <div className='row banner  text-center'><h1 className='card'>How to Use and Get the Most out of Laogi App</h1></div>
         <div className='row 1-step'>
            
             <div className='col-md-6'>
             <div className='col-md-12'>
                 <img src="https://img.freepik.com/free-vector/app-installation-concept-illustration_114360-1273.jpg?w=2000" /></div>
             </div>
             
             <div className='col-md-6 align-self-center card'>
             <div className='col-md-12'>
                 <h4>1 - Install the App From the Play Store or Apple Store</h4> </div>
             </div>
         </div>
         <div className='row 2-step'>
         <div className='col-md-6 align-self-center card'>
         <div className='col-md-12'>
             <h4>2 - Choose your Location From the App</h4>      
        </div>
        </div>
             <div className='col-md-6'>
                 <div className='col-md-12'>
                 <img src="https://i.pinimg.com/736x/f9/7f/06/f97f065ddd8519ebde40758ec1673e96.jpg" />
                 </div>
                 </div>
        
         </div>
         <div className='row 3-step'>
         <div className='col-md-6'><img src="https://cdni.iconscout.com/illustration/free/thumb/online-doctor-appointment-4207644-3485594.png" /></div>
         <div className='col-md-6 align-self-center card'><h4>3 - Search the Preferred Doctor and Set Appointment</h4> </div>
         </div>
         <div className='row 3-step'>
         <div className='col-md-6 align-self-center card'>
             
             <h4>4 - Consult your Issue with the Doctor</h4> </div>
         <div className='col-md-6'><img src="https://cdn.dribbble.com/users/508588/screenshots/15761036/hd_m269_06_4x.jpg" /></div>

         </div>
         <div className='row'>
             <div className='col-md-12'>
                 <img src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-healthcare-application-4268084-3550444.png" />
             </div>
         </div>
        </div>
    )
}