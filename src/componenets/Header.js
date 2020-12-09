import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';

function Header() {
    return (
        <div
             
      className="min-h-screen flex items-center justify-center"
      style={{
        background: '#091c29',
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/5">
          <LazyLoadImage
            src={content.header.img}
            effect="blur"
            placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
          />
           </div>
           </div> 
        </div>
    )
}

export default Header
