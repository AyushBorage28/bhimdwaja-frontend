import React, { useContext } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import { CategoryContext } from '../context'

const Header = () => {
  const dispatch = useDispatch()
  const categoryContext = useContext(CategoryContext)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useHistory()
  console.log(categoryContext);
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar style={{ backgroundColor: "#56201c" }} variant='dark' className='py-2'>
        <Container>
          <Nav className='ml-auto'>
            <Button variant="light" href='/customization' size="sm" active>Our Customization</Button>{' '}
            <Button variant="light" href='/energization' size="sm" className='ml-3' active>Our Energization</Button>{' '}
          </Nav>
        </Container>
      </Navbar>

      <Navbar style={{ backgroundColor: "#FFe8d6" }} variant='light' expand='lg' collapseOnSelect className='main-navbar'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <a href=''>
                <img src="/Logo.png" width="125" height="35" ></img>
              </a>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' >
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto pr-0' >
              <NavDropdown title="Rudraksha" id="basic-nav-dropdown" className='mr-3'>
                <table variant="dark" style={{ marginBottom: 0, marginLeft: 15, width: 250 }}>
                  <tbody style={{ textAlign: 'center' }}>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }}>
                        <a style={{ textDecoration: 'none', fontSize: 13, fontWeight: 900, color: 'black' }}><strong>All Rudraksha</strong></a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link'>
                        <a href='/category/one-mukhi' style={{ textDecoration: 'none' }}>1-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/two-mukhi' style={{ textDecoration: 'none' }}>2-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link'>
                        <a href='/category/three-mukhi' style={{ textDecoration: 'none' }}>3-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/four-mukhi' style={{ textDecoration: 'none' }}>4-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/five-mukhi' style={{ textDecoration: 'none' }}>5-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link'>
                        <a href='/category/six-mukhi' style={{ textDecoration: 'none' }}>6-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/seven-mukhi' style={{ textDecoration: 'none' }}>7-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/eight-mukhi' style={{ textDecoration: 'none' }}>8-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link'>
                        <a href='/category/nine-mukhi' style={{ textDecoration: 'none' }}>9-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/ten-mukhi' style={{ textDecoration: 'none' }}>10-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/eleven-mukhi' style={{ textDecoration: 'none' }}>11-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/twelve-mukhi' style={{ textDecoration: 'none' }}>12-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/thirteen-mukhi' style={{ textDecoration: 'none' }}>13-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/fourteen-mukhi' style={{ textDecoration: 'none' }}>14-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/fifteen-mukhi' style={{ textDecoration: 'none' }}>15-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/sixteen-mukhi' style={{ textDecoration: 'none' }}>16-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/seventeen-mukhi' style={{ textDecoration: 'none' }}>17-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/eighteen-mukhi' style={{ textDecoration: 'none' }}>18-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/nineteen-mukhi' style={{ textDecoration: 'none' }}>19-Mukhi</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/twenty-mukhi' style={{ textDecoration: 'none' }}>20-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/twentyone-mukhi' style={{ textDecoration: 'none' }}>21-Mukhi</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/gaurishankar-mukhi' style={{ textDecoration: 'none' }}>Gauri Shankar</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/trijutirudraksha' style={{ textDecoration: 'none' }}>Trijuti Rudraksha</a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/ganesh-mukhi' style={{ textDecoration: 'none' }}>Ganesh</a>
                      </td>
                      <td style={{ paddingRight: 15, paddingBottom: 5 }} className='category-link' >
                        <a href='/category/gorbhagauri' style={{ textDecoration: 'none' }}>Gorbha Gauri</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </NavDropdown>


              <Nav.Link className=' ml-0 pl-0 ' title="Gems" id="basic-nav-dropdown" onClick={() => { history.push("/category/Gems") }}>Gems
              </Nav.Link>

              <Nav.Link title="Malas" id="basic-nav-dropdown" className='mr-3' onClick={() => { history.push("/category/Malas") }}>Mala
              </Nav.Link>


              <LinkContainer to='/cart'>
                <Nav.Link className='cart-text'>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                userInfo.isAdmin ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className='signin-text'>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header







