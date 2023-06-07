import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Category from '../components/Category';
import Meta from '../components/Meta';
import useScrollToTop from '../components/ScrollToTop';
import category from '../category';

const CategoryPage = ({ match }) => {
  useScrollToTop();

  // Check if on the product page
  const isProductPage = match.path.startsWith('/products');

  return (
    <>
      <Meta />
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>

      {!isProductPage && (
        <Row>
          {category.map((category) => (
            <Col key={category.id} sm={12} md={6} lg={4} xl={3}>
              <Category category={category} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default CategoryPage;
