import {React} from 'react';
import './About.css';
export default function About(){
    return(
        <div className='about'>
            <div className='container'>
          <div className='row'>
              <div className='col-md-5 align-self-center'>
                  <h2>What is Laogi</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it </p>
              </div>
              <div className='col-md-5 offset-1'>
                  <img src='https://www.tekkiwebsolutions.com/wp-content/uploads/telemedicine-app-development.png' />
              </div>

          </div>
          </div>
        </div>
    )
}