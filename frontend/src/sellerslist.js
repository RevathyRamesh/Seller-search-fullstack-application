import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Card, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";  

const SellerList = () => {
  const [sellers, setSellers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/sellers").then((response) => {
      setSellers(response.data);
    });
  }, []);

  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="my-5">
      <h2 className="text-center">Sellers</h2>
      <Form.Group className="mb-3">
      <InputGroup>
          <InputGroup.Text>
            <FaSearch /> {/* Add the search icon */}
          </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search Sellers by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </InputGroup>
      </Form.Group>
      <Row>
        {filteredSellers.map((seller) => (
          <Col sm={12} md={6} lg={4} className="mb-4" key={seller.id}>
            <Card>
              <Card.Body>
                <Card.Title>{seller.name}</Card.Title>
                <Card.Text>
                  <strong>Rating:</strong> {seller.rating} / 5
                  <br />
                  <strong>Review:</strong> {seller.review}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SellerList;