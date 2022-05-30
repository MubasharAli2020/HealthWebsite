import {React} from 'react';
import './Stats.css';
export default function Stats(){
    return(
        <div className='stats'>
                <div class="stats">
      <div class="container">
        <div class="row stats-heading my-3 text-center">
          <h3 className='col'>
             Our Achievements So Far
          </h3>
        </div>
        <div class="row my-4 py-4 text-center">
          <div className='col'>
          <i class="fa-solid fa-4x fa-download"></i>        
 <h3>10,349,405</h3>
            <p class="text-secondary">App Download's</p>
          </div>
          <div className='col'>
          <i class="fa-solid fa-users fa-3x"></i>
            <h3>3,349,405</h3>
            <p class="text-secondary">Active Customers</p>
          </div>
          <div className='col'>
          <i class="fa-solid fa-briefcase-medical fa-3x"></i>                                          <h3>234,343</h3>
            <p class="text-secondary">Doctors and Professionals</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}