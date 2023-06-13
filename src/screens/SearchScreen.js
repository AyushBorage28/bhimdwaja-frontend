import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions'
import useScrollToTop from '../components/ScrollToTop';
import Message from '../components/Message'
import Loader from '../components/Loader'

const SearchScreen = ({ match }) => {
  const keyword = match.params.keyword
  const category = match.params.category
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useScrollToTop()

  useEffect(() => {
    dispatch(listProducts(keyword, category, pageNumber))
  }, [dispatch, keyword, category, pageNumber])

  return (
    <Container className="py-3 content-container" fluid>
      <Meta />
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <h1>Search for: "{keyword}"</h1>
      <h1>Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : !products ? (
        <Message variant='danger'>No Products found! Try using different keyword.</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default SearchScreen