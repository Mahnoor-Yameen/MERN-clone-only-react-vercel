import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "./../IMAGES/insta/img1.jpg"
import img2 from "./../IMAGES/insta/img2.jpg"
import img3 from "./../IMAGES/insta/img3.jpg"
import img4 from "./../IMAGES/insta/img4.jpg"

import img5 from "./../IMAGES/insta/img5.jpg"
import img6 from "./../IMAGES/insta/img6.jpg"
import img7 from "./../IMAGES/insta/img7.jpg"
import img8 from "./../IMAGES/insta/img8.jpg"

import img9 from "./../IMAGES/insta/w1.jpg"
import img10 from "./../IMAGES/insta/w2.jpg"
import img11 from "./../IMAGES/insta/w3.jpg"
import img12 from "./../IMAGES/insta/w4.jpg"




import './../CSS/upernechy.css'

const Insta = () => {

    
    
      return (
<>

{/* strands */}
<div>
<div >
  <hr />
  <h1 className='text-center my-5 text-dark '>Hair Strands</h1>
  </div>
<Link to='/hairunit' className='text-decoration-none'>
<section className="animal_section layout_padding">
  <div className="container">
    <div className="animal_container">
     
     
      <div className="box b1">
        <div className="img-box">
          <img src={img1} alt="" />
        </div>
        <div className="detail-box">
        <h5>Hair Strands 1</h5>

          
        </div>
      </div>
      <div className="box b2">
        <div className="img-box">
          <img src={img2} alt="" />
        </div>
        <div className="detail-box">
          <h5>Hair Strands 2</h5>
        
        </div>
      </div>
      <div className="box b1">
        <div className="img-box">
          <img src={img3} alt="" />
        </div>
        <div className="detail-box">
        <h5>Hair Strands 3</h5>

         
        </div>
      </div>
      <div className="box b2">
        <div className="img-box">
          <img src={img4} alt="" />
        </div>
        <div className="detail-box">
        <h5>Hair Strands 4</h5>

         
        </div>
      </div>
    </div>
  </div>
</section>
</Link>
</div>


{/* styling */}
<div>

 
<div>
  <hr />
  <h2 className='text-center my-5'> Our Hair Styling</h2>
  </div>
  <Link to='/hairdresser' className='text-decoration-none' >
<section className="animal_section layout_padding">
  <div className="container">
    <div className="animal_container">
     
     
      <div className="box b1">
        <div className="img-box">
          <img src={img5} alt="" />
        </div>
        <div className="detail-box">
          {/* <h5>Cute Dog</h5> */}
          
        </div>
      </div>
      <div className="box b2">
        <div className="img-box">
          <img src={img6} alt="" />
        </div>
        <div className="detail-box">
          {/* <h5>Birds</h5> */}
        
        </div>
      </div>
      <div className="box b1">
        <div className="img-box">
          <img src={img7} alt="" />
        </div>
        <div className="detail-box">
          {/* <h5>Fish</h5> */}
         
        </div>
      </div>
      <div className="box b2">
        <div className="img-box">
          <img src={img8} alt="" />
        </div>
        <div className="detail-box">
          {/* <h5>Cat Bite</h5> */}
         
        </div>
      </div>
    </div>
  </div>
</section>
</Link>

</div>

{/* wigs */}
<div>
<div>
  <hr />
  <h2 className='text-center my-5'> Our Wigs</h2>
  </div>
  <Link to='/hairunit' className='text-decoration-none'>
<section className="animal_section layout_padding">
  <div className="container">
    <div className="animal_container">
     
     
      <div className="box b1">
        <div className="img-box">
          <img src={img9} alt="" />
        </div>
        <div className="detail-box">
          <h5>Modern</h5>
          
        </div>
      </div>
      <div className="box b2">
        <div className="img-box">
          <img src={img10} alt="" />
        </div>
        <div className="detail-box">
          <h5>Collection</h5>
        
        </div>
      </div>
      <div className="box b1">
        <div className="img-box">
          <img src={img11} alt="" />
        </div>
        <div className="detail-box">
          <h5>Straight</h5>
         
        </div>
      </div>
      <div className="box b2">
        <div className="img-box">
          <img src={img12} alt="" />
        </div>
        <div className="detail-box">
          <h5>Curly</h5>
         
        </div>
      </div>
    </div>
  </div>
</section>
</Link>

</div>


</>
      );
    };
    

export default Insta;
