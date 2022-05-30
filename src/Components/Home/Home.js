import {React} from 'react';
import {  Link,NavLink } from 'react-router-dom';
import './Testimonial';
import './Home.css';
import Testimonial from './Testimonial';
import About from './About';
import Stats from './Stats';
export default function Home(){
    return(
<div className='home'>
<div class="Header my-2">
  <div class="Header-background"></div>
  <div class="row gx-5 Header-content text-center">
    <div class="col-md-6 Header-hero">
      <h1>The best Health app you've <br/> ever seen</h1>
      <p>You'll be blown away with all it does</p>
      <button class="Button">Sign up</button>
    </div>
    <div class="col-md-6 Header-visuals">
      <div class="Iphone"></div>
    </div>
  </div>
</div>
<About />
<Stats />
<div className='container showcase-2'>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-80">
      <img src="https://media.istockphoto.com/vectors/dentist-and-child-vector-id1175163250?k=20&m=1175163250&s=612x612&w=0&h=DfcBI3WkGmk0tQ-9WvljrtD5qV4UJzI7azMupt0WFy8=" class="card-img-top" alt="..." />
      
    </div>
  </div>
  <div class="col">
    <div class="card h-80">
      <img src="https://img.freepik.com/free-vector/pilates-concept-illustration_114360-1111.jpg?w=2000" class="card-img-top" alt="..." />
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://media.istockphoto.com/vectors/africanamerican-man-wearing-a-protective-face-mask-to-prevent-virus-vector-id1222257412?b=1&k=20&m=1222257412&s=170667a&w=0&h=e8RnCkQMDIxIIGcwICuvryHpzs8wbxBmsZfmHAB9bVk=" class="card-img-top" alt="..." />
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.oregonlive.com/home/olive-media/width2048/img/health_plus/photo/2018/02/21/heart-7-tips-outline-f892e95d3bb7bebc.jpg" class="card-img-top" alt="..." />
      
    </div>
  </div>
  <div class="col">
    <div class="card h-80">
      <img src="https://media.istockphoto.com/vectors/heart-research-or-diagnotic-concept-doctors-examining-the-heart-flat-vector-id1180869020?k=20&m=1180869020&s=612x612&w=0&h=PsZIoOdRi6C2P-XUEpg07ABuPKd1T1h-uCt4kK5A7ko=" class="card-img-top" alt="..." />
      
    </div>
  </div>
  <div class="col">
    <div class="card h-80">
      <img src="https://i.pinimg.com/originals/00/75/c8/0075c8e9a607b28ddb7b5352f2698b5c.jpg" class="card-img-top" alt="..." />
      
    </div>
  </div>
</div>
</div>
<Testimonial />
</div>
    )
}


