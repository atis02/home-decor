import React from 'react'
import axios from 'axios'

const baseUrl =  'http://216.250.9.208:1498/api/paintings'
class  API extends React.Component {
    super(props)

    axios.get(baseUrl)
    .then((res)=>{
        console.log(res.data);
    })
  render(){ 
    return (
    <div>
      
    </div>
  )
}
}