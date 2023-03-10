import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Row,Col,Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Review from './Review';
import { useDispatch,useSelector } from 'react-redux';
import { RestuarantList } from '../Actions/homeAction';

function RestaurantView() {
  const params =useParams()
  console.log(params.id);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(RestuarantList())
  },[])

    const {restuarants}=useSelector(state=>state.restuarantReducer)

    const restuarant =restuarants.find(item=>item.id== params.id)
    console.log(restuarant);


  return (
    <>
      {
        restuarant ? (
        <Row className='p-5'>
        <Col md={3}>
       
        <Image style={{height:'420px',borderRadius:'25px'}} className='border solid p-2' src={restuarant.photograph} alt={restuarant.name} fluid></Image>
        </Col>
  
        <Col md={8}>
        <ListGroup style={{borderRadius:'20px'}}>
      <ListGroup.Item>
        <h2>{restuarant.name}</h2>
      <p>{restuarant.neighborhood}</p>
      </ListGroup.Item>
      <ListGroup.Item><p className='my-3'>Cuisine : {restuarant.cuisine_type}</p></ListGroup.Item>
      <ListGroup.Item><p v>Address : {restuarant.address}</p></ListGroup.Item>
      <ListGroup.Item>

      <Button  className='my-3' variant="warning" onClick={handleShow} style={{color:'black',borderRadius:'20px'}}>
       Operating hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday: {restuarant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {restuarant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday: {restuarant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday: {restuarant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday: {restuarant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {restuarant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {restuarant.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>

        </Modal.Body>
      </Modal>
      </ListGroup.Item>

      <ListGroup.Item style={{marginTop:'10px'}}>
        <p  className='my-3'>
        <Review reviews={restuarant.reviews}/>
        </p>
      </ListGroup.Item>

       </ListGroup>
        </Col>
      </Row>) :'Nothing to display'
      }
    </>
  )
}

export default RestaurantView