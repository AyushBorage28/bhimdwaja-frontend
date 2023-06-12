import React from 'react'
import { Link } from 'react-router-dom'

const ShippingAndReturn = () => {
  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <div className=" container w-75 p-3" >
      <h1>Shipping And Return Policy</h1>
      <p style={{color: '#000000'}}><strong>At Bhimdhwaja, we take pride in providing efficient and reliable shipping services to our valued customers. Once we receive your payment, we initiate the process of preparing and dispatching your order promptly.</strong></p><br />

      <p style={{color: '#000000'}}><strong>Our dedicated team endeavors to ship your products within three business days, ensuring a swift turnaround time. We understand the importance of timely delivery and strive to fulfill your order efficiently.</strong></p><br />

      <p style={{color: '#000000'}}><strong>Shipping times, however, may vary based on your location and the destination to which your order is being shipped. While we make every effort to estimate and provide accurate delivery timelines, it is important to note that unforeseen circumstances or external factors beyond our control may occasionally affect the delivery schedule.</strong></p><br />

      <p style={{color: '#000000'}}><strong>On average, our shipping times typically range between 10 to 14 business days. Please keep in mind that these estimates serve as a general guideline, and actual delivery times may differ slightly depending on various factors such as customs procedures, local postal services, and other logistical considerations.</strong></p><br />

      <p style={{color: '#000000'}}><strong>To ensure a seamless and hassle-free shopping experience, we recommend referring to the shipping information provided during the checkout process. This will give you a more accurate estimate of the expected delivery timeframe based on your specific location.</strong></p><br />
      <p style={{color: '#000000'}}><strong>Rest assured, our commitment to exceptional customer service extends to the shipping process, and we continually strive to deliver your order to you in a timely manner. We appreciate your patience and understanding as we work diligently to ensure the safe and prompt arrival of your cherished Rudraksha or gemstone products.</strong></p><br />
      </div>
    </>
  )
}

export default ShippingAndReturn