import React,{useState} from 'react'
import {useTransition, animated} from 'react-spring'


function Name() {
    const [items, set] = useState([{text:'ASMA', key:1}
])
const transitions = useTransition(items, item => item.key, {
from:  { transform: 'translate3d(0,-40px,0)' },
enter: { transform: 'translate3d(0,0px,0)' },
leave: { transform: 'translate3d(0,-40px,0)' },
})


return transitions.map(({ item, props, key }) =>
<animated.div key={key} style={props}>{item.text}</animated.div>
        
    )
}

export default Name
