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
    <div fluid>
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
                <a href='/categories'>
                  <img class="card-img-top" src="././images/rudraksha.png" alt="Card cap" href='/categories' />
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
          <div class="card-group" className='best-selling-card-grp'>
            <div class="card" className='best-selling-card '>
              <a href='/category/gauri-shankar'>
                <img class="card-img-top" src="././images/gaurishankar.png" alt="Card cap" />
              </a>

              <h4 class="card-title" >gauri <br></br> shankar</h4>

            </div>
            <div class="card" className='best-selling-card'>
              <a href='/category/one-mukhi-savar'>
                <img class="card-img-top" src="././images/1-mukhi-savar.png" alt="Card cap" />
              </a>

              <h4 class="card-title" >1 Mukhi Savar</h4>

            </div>
            <div class="card" className='best-selling-card '>
              <a href='/category/ganesha-rudraksha'>
                <img class="card-img-top" src="././images/ganesh.png" alt="Card cap" />
              </a>

              <h4 class="card-title" >ganesh</h4>

            </div>
            <div class="card" className='best-selling-card '>
              <a href='/category/six-mukhi'>
                <img class="card-img-top" src="././images/6mukhi.png" alt="Card cap" />
              </a>

              <h4 class="card-title" >6 mukhi</h4>

            </div>
            <div class="card" className='best-selling-card  '>
              <a href='/category/eleven-mukhi'>
                <img class="card-img-top" src="././images/11mukhi.png" alt="Card cap" />
              </a>

              <h4 class="card-title" >11 mukhi</h4>

            </div>

          </div>


          <FAQsScreen />
        </>
      )}
    </div>
  )
}

export default HomeScreen