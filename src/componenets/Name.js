import React,{useState} from 'react'
import './styles.css'
import {useTransition, animated} from 'react-spring'
import Trail from './Trail'
import { Image } from 'react-bootstrap';


function Name() {
    const [open, set] = useState(true)
    return (
        <div>
<Image src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" fluid className='img'/>
      <Trail open={open} onClick={() => set((state) => !state)}>
        

        <span>I AM
        ASMA
        NOOR </span>
        <span >
            (WEBSITE APP DEVELOPER)
        </span>
    
      </Trail>
    
      </div>
      
    )
  }
export default Name;
