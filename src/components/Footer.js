import React from 'react'

const Footer = () => {
  return (
    <footer>

      <div className="container" style={{ backgroundColor: "#FFe8d6" }} >


        <footer className=" text-center text-black" style={{ fontWeight: '400' }}>

          <div className="container p-4">

            <section className="mb-4">

              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-facebook-f"></i
              ></a>


              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-twitter"></i
              ></a>

              <a className="btn btn-outline-dark btn-floating m-1" href="https://instagram.com/bhimdhwaja?igshid=NTc4MTIwNjQ2YQ==" target='_blank' role="button"
              ><i className="fab fa-instagram"></i
              ></a>


              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-linkedin-in"></i
              ></a>
            </section>

            <section className="mb-4 ">
              <form action="">

                <div className="row d-flex justify-content-center">

                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>



                  <div className="col-md-5 col-12">

                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form5Example2" className="form-control" />
                      <label className="form-label mt-2" htmlFor="form5Example2">Email address</label>
                    </div>
                  </div>



                  <div className="col-auto">

                    <button type="submit" className="btn btn-outline-dark mb-4"
                      style={{ fontWeight: '700' }}>
                      Subscribe
                    </button>
                  </div>

                </div>

              </form>
            </section>

            <section className="mb-4">
              <p>
                Your Destination for Exquisite Gems, Rudrakshas, and Malas.
                <br></br> Discover a world of natural beauty and spiritual significance with our handcrafted collection. Shop now for authentic treasures that enhance your well-being and elevate your spiritual journey.
              </p>
            </section>



            <section className="">

              <div className="row">

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Customer service</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/privacy-policy" className="text-black">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Blogs</a>
                    </li>
                    <li>
                      <a href="/shipping-and-return" className="text-black">Shipping & Returns</a>
                    </li>
                    <li>
                      <a href="/contact-us" className="text-black">Contact Us</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Our Brand</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-black">Why Bhimdwaja?</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions" className="text-black">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Partner with Us</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Write us a Review</a>
                    </li>
                  </ul>
                </div>


                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Mail Us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href={`mailto:bhimdhwaja@gmail.com`} className="text-black">bhimdhwaja@gmail.com</a>
                    </li>
                    <li>
                      <a href={`mailto:smrutikodilkar@gmail.com`} className="text-black">smrutikodilkar@gmail.com</a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">Call:+91 8668616591</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Address</h5>

                  <p>Bhimdhwaja Rudraksha Pune
                    Flat No 1, first floor, Pandurang Niwas society
                    Adjacent to Eknath Balak Mandir,
                    Tapkir Galli, Pune, Maharastra 411002</p>
                </div>
              </div>

            </section>

          </div>



          <div className="text-center p-3">
            © 2023 Copyright:
            <a className="text-black footer-name" href="https://www.bhimdhwaja.in" style={{ textDecoration: 'none', fontWeight: "inherit" }}> Bhimdhwaja.in</a>
          </div>

        </footer>


      </div>

    </footer>
  )
}

export default Footer


