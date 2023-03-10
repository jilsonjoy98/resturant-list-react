import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Review({reviews}) {
    console.log(reviews);
    const [open, setOpen] = useState(false);

  return (
    <div>
          <Button style={{color:'black',borderRadius:'20px',border:'none'}} className=' bg-warning'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Click here to view the Reviews
      </Button>

      <Collapse in={open}>
        <div className='my-2' id="example-collapse-text">
          {
            reviews.map(item=>(
                <div  className='mt-4'>
                    <hr></hr>
                    <h6> {item.name} : (<span>{item.date}</span>)</h6>
                    <p>Rating : {item.rating} </p>
                    <p>Comments : {item.comments}</p>
                </div>
            ))
          }
        </div>
      </Collapse>
    </div>
  )
}

export default Review