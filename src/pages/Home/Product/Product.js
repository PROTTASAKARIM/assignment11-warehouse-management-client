import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReadMoreReact from 'read-more-react';

const Product = ({ inventory }) => {
    const { _id } = inventory;

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        console.log(id);
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='container'>
            {/* <h1>product : {inventory.name}</h1> */}
            <Card style={{ width: '20rem' }}>
                <Card.Img className='m-2' variant="top" src={inventory.img} />
                <Card.Body>
                    <Card.Title>{inventory.name}</Card.Title>
                    <Card.Text>
                        <ReadMoreReact text={inventory.shortDescription}
                            min={0}
                            ideal={500}
                            max={500}
                            readMoreText={"click here to read more......."} />
                        {/* {inventory.shortDescription} */}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price : {inventory.price}</ListGroupItem>
                    <ListGroupItem>Quantity : {inventory.quantity}</ListGroupItem>
                    <ListGroupItem>Supplier Name :{inventory.supplierName} </ListGroupItem>
                </ListGroup>
                <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-success'>Stock Update</button>
            </Card>
        </div>
    );
};

export default Product;