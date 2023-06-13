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
  const { loading, error } = productList

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
          <div className="card-group">
            <div className='row' >

              <div className='card category-card col-4'>
                <a href='/category/gems'>
                  <img className="card-img-top" src="././images/gem.png" alt="Card cap" />
                </a>
                <div className="card-body">
                  <h5 className=" homescreen-title" >Gems</h5>
                </div>
              </div>
              <div className='card category-card col-4'>
                <a href='/categories'>
                  <img className="card-img-top" src="././images/rudraksha.png" alt="Card cap" href='/categories' />
                </a>
                <div className="card-body">
                  <h5 className=" homescreen-title title-rudraksha" >Rudraksha</h5>
                </div>
              </div>
              <div className='card category-card col-4'>
                <a href='/category/rudraksha-mala'>
                  <img className="card-img-top" src="././images/mala.png" alt="Card cap" />
                </a>
                <div className="card-body">
                  <h5 className=" homescreen-title">Mala</h5>
                </div>
              </div>
            </div>
          </div>



          <h1 className='text-center pt-4'>Our Best-Selling Rudraksha</h1>
          <div className='card-group best-selling-card-grp'>
            <div className='card best-selling-card '>
              <a href='/category/gauri-shankar'>
                <img className="card-img-top" src="././images/gaurishankar.png" alt="Card cap" />
              </a>

              <h4 className=" homescreen-title" >gauri <br></br> shankar</h4>

            </div>
            <div className='card best-selling-card'>
              <a href='/category/one-mukhi-savar'>
                <img className="card-img-top" src="././images/1-mukhi-savar.png" alt="Card cap" />
              </a>

              <h4 className=" homescreen-title" >1 Mukhi Savar</h4>

            </div>
            <div className='card best-selling-card '>
              <a href='/category/ganesha-rudraksha'>
                <img className="card-img-top" src="././images/ganesh.png" alt="Card cap" />
              </a>

              <h4 className=" homescreen-title" >ganesh</h4>

            </div>
            <div className='card best-selling-card '>
              <a href='/category/six-mukhi'>
                <img className="card-img-top" src="././images/6mukhi.png" alt="Card cap" />
              </a>

              <h4 className=" homescreen-title" >6 mukhi</h4>

            </div>
            <div className='card best-selling-card  '>
              <a href='/category/eleven-mukhi'>
                <img className="card-img-top" src="././images/11mukhi.png" alt="Card cap" />
              </a>

              <h4 className=" homescreen-title" >11 mukhi</h4>

            </div>

          </div>


          <FAQsScreen />
        </>
      )}
    </>
  )
}

export default HomeScreen