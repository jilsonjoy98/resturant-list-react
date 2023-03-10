import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({restaurants}) {
    console.log(restaurants);
  return (

    <Link to={`/view-resturant/${restaurants.id}`} style={{color:'white', textDecoration:'none'}}>

<Card style={{borderRadius:'25px'}} >
      <Card.Img style={{height:'350px', borderRadius:'25px'}} className='p-2' variant="top" src={restaurants.photograph} />
      <Card.Body >
        <Card.Title>{restaurants.name}</Card.Title>
        <Card.Text>
          <p>Cuisine: {restaurants.cuisine_type}</p>
        </Card.Text>
        <Card.Text>
          <p>{restaurants.neighborhood}</p>
        </Card.Text>
      </Card.Body>
    </Card>

    </Link>
  )
}

export default RestaurantCard