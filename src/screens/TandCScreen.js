import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TandCScreen = () => {
  return (
    <Container className="py-3 content-container" fluid>

      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <div className=" container w-75 p-3" >

        <h1>Terms and Conditions</h1><br />
        <p style={{ color: '#000000' }}><strong>Welcome to Bhimdhwaja for buying rudraksha, gems, and rudraksha malas. These Terms and Conditions govern your use of Bhimdhwaja website and the purchase of products from Bhimdhwaja. By accessing or using Bhimdhwaja website, you agree to these Terms and Conditions. If you do not agree with these Terms and Conditions, please do not use our website.</strong></p>

        <p style={{ color: '#000000' }} ><strong>1. GENERAL TERMS:</strong></p>
        <p style={{ color: '#000000' }} ><strong>The terms “we”, “us” and “our” refer to the Bhimdhwaja website selling rudraksha, gems, and rudraksha malas. The term “you” refers to the user or viewer of Bhimdhwaja website. By using Bhimdhwaja website, you agree to comply with and be bound by the following terms and conditions of use, which together with our Privacy Policy govern our relationship with you.</strong></p><br />

        <p style={{ color: '#000000' }} ><strong>2. PRODUCTS:</strong></p>
        <p style={{ color: '#000000' }} ><strong>The products sold on Bhimdhwaja include rudraksha, gems, and rudraksha malas. We strive to provide accurate descriptions and photographs of our products at Bhimdhwaja, but we do not guarantee the accuracy, completeness, or reliability of any information or content provided at Bhimdhwaja. We reserve the right to modify, discontinue or change any product at any time without prior notice.</strong></p><br />

        <p style={{ color: '#000000' }} ><strong>3. PRICING AND PAYMENT:</strong></p>
        <p style={{ color: '#000000' }} ><strong>All prices at Bhimdhwaja are listed in Indian Rupees and are exclusive of any applicable taxes and shipping fees. Payment for products purchased at Bhimdhwaja must be made using the payment options provided on the website. We reserve the right to change the prices of our products at any time without prior notice.</strong></p><br />

        <p style={{ color: '#000000' }} ><strong>4. SHIPPING AND DELIVERY:</strong></p>
        <p style={{ color: '#000000' }} ><strong>We offer shipping only in India, subject to applicable customs regulations and restrictions. Delivery times and shipping fees may vary depending on your location. We are not responsible for any customs duties or taxes that may be levied on your order by the customs authority.</strong></p><br />

        <p style={{ color: '#000000' }} ><strong>5. RETURNS AND REFUNDS:</strong></p>
        <p style={{ color: '#000000' }} ><strong>Due to the nature of our products, we do not accept returns or replacements. All sales are final. If you receive a defective or damaged product, please contact us within three business days of receiving your order, and we will make every effort to resolve the issue. However, we do not guarantee that we will be able to replace the product.</strong></p><br />

        <p style={{ color: '#000000' }} ><strong>6. DISCLAIMER:</strong></p>
        <p style={{ color: '#000000' }} ><strong>Our products are intended for spiritual and decorative purposes only and are not intended to diagnose, treat, cure or prevent any disease or medical condition. We make no warranties or representations, express or implied, about the accuracy, completeness, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. We shall not be liable for any direct, indirect, incidental, special or consequential damages arising out of or in connection with the use of our website or the products sold on at Bhimdhwaja.</strong></p><br />

        <p style={{ color: '#000000' }} ><strong>7. INTELLECTUAL PROPERTY:</strong></p>
        <p style={{ color: '#000000' }} ><strong>All content on Bhimdhwaja website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Bhimdhwaja selling rudraksha, gems, and rudraksha malas and is protected by intellectual property laws. You may not reproduce, modify, distribute, transmit, display, perform, publish or otherwise use any content on Bhimdhwaja website without our prior written consent.</strong></p><br />

        <p style={{ color: '#000000' }} ><strong>8. GOVERNING:</strong></p>
        <p style={{ color: '#000000' }} ><strong>These terms and conditions shall be governed by and construed in accordance with the laws of the Indian Government, without giving effect to any principles of conflicts of law. Any dispute arising out of or relating to these terms and conditions shall be resolved exclusively in Indian Courts.</strong></p><br />

        <p style={{ color: '#000000' }} ><strong>9. CHANGES TO TERMS AND CONDITIONS:</strong></p>
        <p style={{ color: '#000000' }} ><strong>We reserve the right to update or modify these terms and conditions at any time without prior notice. Your use of Bhimdhwaja website and the purchase of our products after any such changes constitutes your acceptance of the new terms and conditions.</strong></p>
      </div>
    </Container>
  )
}

export default TandCScreen
