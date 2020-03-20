import React , {component} from 'react'
import './HealthBar.css'
import { render } from '@testing-library/react'
import './App'

import ProgressBar from 'react-bootstrap/ProgressBar'
  

  class Health extends React.Component {
    
    render() { 
      return ( 
        <div>
          <ProgressBar min={0} striped variant="info" now={100} />
        </div>
       );
    }
  }
   
  export default Health;



// export default ProgressBar