import React, { useEffect } from 'react'
import { Carousel} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error} = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark carousel-container'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bhidhwaja-images.s3.amazonaws.com/Website+Images/bhimdhwaja-english-banner.jpg"
          alt="First slide"
          fluid="true"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bhidhwaja-images.s3.amazonaws.com/Website+Images/bhimdhwaja-marathi-banner.jpg"
          alt="Second slide"
          fluid="true"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel
