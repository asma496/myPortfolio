import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
import content from '../content';
import './styles.css'
import image from 'react-bootstrap/Image';
import { Image } from 'react-bootstrap';


function Header() {
    return (
        <div>
        <Image src="https://images.unsplash.com/photo-1543270123-5b5c73132cdf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" fluid />
          
          

          
          </div>
           
         
            
      
      
    //     <div     
    //   className="min-h-screen flex items-center justify-center"
    //   style={{
    //      background: '#ECF0F1k',
    //   }}
    // >
    //   <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
    //     <div className="w-full md:w-2/5">
    //       <LazyLoadImage className='pic'
    //         src={content.header.img}
    //         effect="blur"
    //         placeholderSrc={process.env.PUBLIC_URL + '../images/pic1.jpg'}
    //       />
          
        
         
    // </div>
    // </div>
    //        </div>

      )
    }
   
export default Header
