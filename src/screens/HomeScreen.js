import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
            <div className='row' >

              <div class="card" className=' category-card col-4'>
                <a href='/category/gem'>
                  <img class="card-img-top" src="././images/gem.png" alt="Card cap" />
                </a>
                <div class="card-body">
                  <h5 class="card-title" >Gems</h5>
                </div>
              </div>
              <div class="card  " className='category-card col-4'>
                <a href='/category/one-mukhi'>
                  <img class="card-img-top" src="././images/rudraksha.png" alt="Card cap" href='/category/one-mukhi' />
                </a>
                <div class="card-body">
                  <h5 class="card-title title-rudraksha" >Rudraksha</h5>
                </div>
              </div>
              <div class="card " className=' category-card col-4'>
                <a href='/category/mala'>
                  <img class="card-img-top" src="././images/mala.png" alt="Card cap" />
                </a>
                <div class="card-body">
                  <h5 class="card-title">Mala</h5>
                </div>
              </div>
            </div>
          </div>



          <h1 className='text-center pt-4'>Our Best-Selling Rudraksha</h1>
          {/* <div class="card-group">
            <div className='row' >

              <div class="card" className=' category-card col-2'>
                <a href='/category/gem'>
                  <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card cap" />
                </a>
                <div class="card-body">
                  <h5 class="card-title" >Gems</h5>
                </div>
              </div>
              <div class="card" className=' category-card col-2'>
                <a href='/category/gem'>
                  <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card cap" />
                </a>
                <div class="card-body">
                  <h5 class="card-title" >Gems</h5>
                </div>
              </div>
              <div class="card" className=' category-card col-2'>
                <a href='/category/gem'>
                  <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card cap" />
                </a>
                <div class="card-body">
                  <h5 class="card-title" >Gems</h5>
                </div>
              </div>
              <div class="card" className=' category-card col-2'>
                <a href='/category/gem'>
                  <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card cap" />
                </a>
                <div class="card-body">
                  <h5 class="card-title" >Gems</h5>
                </div>
              </div>
              <div class="card" className=' category-card col-2'>
                <a href='/category/gem'>
                  <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card cap" />
                </a>
                <div class="card-body">
                  <h5 class="card-title" >Gems</h5>
                </div>
              </div>
              <div class="card" className=' category-card col-2'>
                <a href='/category/gem'>
                  <img class="card-img-top" src="././images/5-Mukhi-Rudraksha.png" alt="Card cap" />
                </a>
                <div class="card-body">
                  <h5 class="card-title" >Gems</h5>
                </div>
              </div>
             
            </div>
          </div> */}

          <FAQsScreen />
        </>
      )}
      </>
  )
}

export default HomeScreen