import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardDeck } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import useScrollToTop from '../components/ScrollToTop'
import FAQsScreen from "./FAQsScreen";



const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useScrollToTop()

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1 className='text-center pt-4'>Shop by category</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div class="card-group">
            <div class="card" className='homepage-card category-card'>
              <a href='/category/one-mukhi'>
                <img class="card-img-top" src="././images/rudraksha.png" alt="Card image cap" href='/category/one-mukhi' />
              </a>
              <div class="card-body">
                <h5 class="card-title" className='text-center' style={{ fontSize: "20px" }}>Rudraksha</h5>
              </div>
            </div>
            <div class="card" className='homepage-card category-card'>
              <a href='/category/gem'>
                <img class="card-img-top" src="././images/gem.png" alt="Card image cap" />
              </a>
              <div class="card-body">
                <h5 class="card-title" className='text-center' style={{ fontSize: "20px" }}>Gems</h5>
              </div>
            </div>
            <div class="card" className='homepage-card category-card'>
              <a href='/category/mala'>
                <img class="card-img-top" src="././images/mala.png" alt="Card image cap" />
              </a>
              <div class="card-body">
                <h5 class="card-title" className='text-center' style={{ fontSize: "20px" }}>Mala</h5>
              </div>
            </div>

          </div>

          <h1 className='text-center pt-4'>Top 5 Best-Selling Rudraksha</h1>
          <div class="card-group">
            <div class="card" className='homepage-card'>
              <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card image cap" href="" />
              <div class="card-body">
                <h5 class="card-title homepage-card-title" style={{ fontSize: "12px" }}>5 Mukhi Rudraksha</h5>
              </div>
            </div>
            <div class="card" className='homepage-card'>
              <img class="card-img-top" src="././images/2-Mukhi-Rudraksha.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title homepage-card-title" style={{ fontSize: "12px" }}>2 Mukhi Rudraksha</h5>
              </div>
            </div>
            <div class="card" className='homepage-card'>
              <img class="card-img-top" src="././images/2-Mukhi-Rudraksha.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title homepage-card-title" style={{ fontSize: "12px" }}>2 Mukhi Rudraksha</h5>
              </div>
            </div>
            <div class="card" className='homepage-card'>
              <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title homepage-card-title" style={{ fontSize: "12px", marginLeft: "5px" }}>5 Mukhi Rudraksha</h5>
              </div>
            </div>
            <div class="card" className='homepage-card'>
              <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title homepage-card-title" style={{ fontSize: "12px", marginLeft: "5px" }}>5 Mukhi Rudraksha</h5>
              </div>
            </div>
          </div>

          <FAQsScreen />
        </>
      )}
    </>
  )
}

export default HomeScreen