import React,{useState} from 'react'
import './styles.css'
import {useTransition, animated} from 'react-spring'
import Trail from './Trail'
import { Image } from 'react-bootstrap';


function Name() {
  <Navbar />
    const [open, set] = useState(true)
    return (
        <div>
      <Trail open={open} onClick={() => set((state) => !state)}>
        

        <span>I AM
        ASMA
        NOOR </span>
        <span >
            (WEB APP DEVELOPER)
        </span>
    
      </Trail>
    
      </div>
      
    )
  }
export default Name;
