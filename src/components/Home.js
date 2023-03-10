import React, {useState,useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';
import { RestuarantList } from '../Actions/homeAction';
import { useDispatch, useSelector } from 'react-redux';

function Home() {

    const dispatch =useDispatch()

    useEffect(() => {
        // fetchData()
        dispatch(RestuarantList())
    },[])

    
   const {restuarants} = useSelector(state=>state.restuarantReducer)
 console.log(restuarants);
  return (
    <Row>
      {
        restuarants.map(item=>(
          <Col className=' px-5 py-2 ' sm={6} md={4} lg={3}>
          <RestaurantCard restaurants={item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default Home