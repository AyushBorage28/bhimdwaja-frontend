import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import Category from '../components/Category';
import Meta from '../components/Meta';
import useScrollToTop from '../components/ScrollToTop';
import category from '../category';

const CategoryPage = ({ match }) => {
  useScrollToTop();

  // Check if on the product page
  const isProductPage = match.path.startsWith('/products');

  return (
    <Container className="py-3 content-container" fluid>
      <Meta />
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>

      {!isProductPage && (
        <>
        <h1 className='text-center pt-4'>Collections of Rudraksha</h1>
        <Row>
          {category.map((category) => (
            <Col key={category.id} sm={12} md={6} lg={4} xl={3}>
              <Category category={category} />
            </Col>
          ))}
        </Row>
        </>
      )}
    </Container>
  );
};

export default CategoryPage;
