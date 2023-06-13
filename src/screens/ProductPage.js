import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import useScrollToTop from '../components/ScrollToTop'

const ProductPage = ({ match }) => {
  const keyword = match.params.keyword

  const category = match.params.category
  console.log(match)
  const pageNumber = match.params.pageNumber || 1

  const productList = useSelector((state) => state.productList)

  const dispatch = useDispatch()

  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, category, pageNumber))
  }, [dispatch, keyword, category, pageNumber])

  useScrollToTop()

  const categoryImageName = category ? category.toLowerCase() : '';

  return (
    <Container className="py-3 content-container" fluid>
      <Meta />
      {!keyword ? (
        <img
          className="d-block w-100"
          src={`https://bhidhwaja-images.s3.amazonaws.com/Website+Images/${categoryImageName}-banner.jpg`}
          alt="product banner"
          fluid="true"
        />
      ) : (
        <Link to='/categories' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>{category}</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </Container>
  )
}

export default ProductPage
