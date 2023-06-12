import React from 'react'

const Footer = () => {
  return (
    <footer>

      <div class="container mt-5" style={{ backgroundColor: "#FFe8d6" }} >


        <footer class=" text-center text-black" style={{ fontWeight: '400' }}>

          <div class="container p-4">

            <section class="mb-4">

              <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-facebook-f"></i
              ></a>


              <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-twitter"></i
              ></a>

              <a class="btn btn-outline-dark btn-floating m-1" href="https://instagram.com/bhimdhwaja?igshid=NTc4MTIwNjQ2YQ==" role="button"
              ><i class="fab fa-instagram"></i
              ></a>


              <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-linkedin-in"></i
              ></a>
            </section>

            <section class="">
              <form action="">

                <div class="row d-flex justify-content-center">

                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>



                  <div class="col-md-5 col-12">

                    <div class="form-outline form-white mb-4">
                      <input type="email" id="form5Example2" class="form-control" />
                      <label class="form-label" for="form5Example2">Email address</label>
                    </div>
                  </div>



                  <div class="col-auto">

                    <button type="submit" class="btn btn-outline-dark mb-4"
                      style={{ fontWeight: '700' }}>
                      Subscribe
                    </button>
                  </div>

                </div>

              </form>
            </section>

            <section class="mb-4">
              <p>
                Your Destination for Exquisite Gems, Rudrakshas, and Malas.
                <br></br> Discover a world of natural beauty and spiritual significance with our handcrafted collection. Shop now for authentic treasures that enhance your well-being and elevate your spiritual journey.
              </p>
            </section>



            <section class="">

              <div class="row">

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Customer service</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="/privacy-policy" class="text-black">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">Blogs</a>
                    </li>
                    <li>
                      <a href="/shipping-and-return" class="text-black">Shipping & Returns</a>
                    </li>
                    <li>
                      <a href="/contact-us" class="text-black">Contact Us</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Our Brand</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-black">Why Bhimdwaja?</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions" class="text-black">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">Partner with Us</a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">Write us a Review</a>
                    </li>
                  </ul>
                </div>


                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Mail Us</h5>
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href={`mailto:bhimdhwaja@gmail.com`} class="text-black">bhimdhwaja@gmail.com</a>
                    </li>
                    <li>
                      <a href={`mailto:smrutikodilkar@gmail.com`} class="text-black">smrutikodilkar@gmail.com</a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">Call:+91 8668616591</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Address</h5>

                  <p>Bhimdhwaja Rudraksha Pune
                    Flat No 1, first floor, Pandurang Niwas society
                    Adjacent to Eknath Balak Mandir,
                    Tapkir Galli, Pune, Maharastra 411002</p>
                </div>
              </div>

            </section>

          </div>



          <div class="text-center p-3">
            © 2023 Copyright:
            <a class="text-black footer-name" href="https://www.bhimdhwaja.in" style={{ textDecoration: 'none', fontWeight: "inherit" }}> Bhimdhwaja.in</a>
          </div>

        </footer>


      </div>

    </footer>
  )
}

export default Footer


