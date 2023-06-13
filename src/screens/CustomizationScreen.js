import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomizationScreen = () => {
  return (
    <Container className="py-3 content-container" fluid>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <div className="container w-75 p-3">
        <h1>Our Customization</h1>
        <p style={{ color: '#2c2c2c' }}>
          <strong>
            At Bhimdhwaja, we have a deep passion for crafting exquisite and personalized creations using the timeless beauty of rudraksha beads and gemstones. With meticulous attention to detail, we bring together the natural allure of these elements with the brilliance of pure silver and gold to create truly unique pieces. Our commitment to customization sets us apart, and we take pride in following a set of principles to ensure that every customer receives a tailored experience:
          </strong>
        </p>
        <br />
        <p style={{ color: '#000000' }}>
          <strong>
            <ul>
              <li>
                To initiate the customization process, we encourage you to share your requirements with us via email. <span style={{ fontWeight: 'bold' }}> Reach out to us at bhimdhwaja@gmail.com </span>, and our dedicated team will carefully review your request. If you have any questions or need further clarification before confirming your requirements, please don't hesitate to <span style={{ fontWeight: 'bold' }}> contact us at  our helpline number: +918668616591 </span>. We are here to assist you every step of the way.
              </li>
              <br />
              <li>
                Once we have received your specifications, our skilled designers will begin their creative journey. Combining their expertise with your vision, they will conceptualize unique designs that reflect your individuality and style. In addition to the designs, we will provide you with detailed estimates and timelines, ensuring transparency throughout the process.
              </li>
              <br />
              <li>
                We understand the importance of trust and commitment in the realm of customized creations. Therefore, after the design has been finalized, we kindly request 100% payment to proceed with bringing your dream piece to life. To maintain the integrity of our process, we strictly adhere to a policy that prohibits cash-on-delivery or partial payments.
              </li>
              <br />
              <li>
                While our artisans pour their heart and soul into handcrafting your personalized rudraksha jewelry, please note that the creation process may require some time. As each piece is meticulously crafted with precision and care, it typically takes us around 3 to 4 weeks to complete your custom order. We appreciate your patience and assure you that the end result will be worth the wait.
              </li>
              <br />
              <li>
                For any further inquiries or to discuss your specific requirements, please feel free to reach out to us via email at bhimdhwaja@gmail.com or by contacting our dedicated helpline at +918668616591. We are more than happy to assist you in bringing your dream piece to life.
              </li>
              <br />
              <li>
                In addition to our specialization in customized rudraksha jewelry, we also offer a wide range of customization options for rings, pendants, and necklaces. Whether you desire a statement piece or a subtle accent, our team is dedicated to translating your vision into reality. Together, let's create a masterpiece that resonates with your unique style and personality.
              </li>
              <br />
            </ul>
          </strong>
        </p>
        <div className="image-container">
          <img
            src="https://bhidhwaja-images.s3.amazonaws.com/Website+Images/customization-image-1.jpeg"
            alt="Customization-example"
            className="custom-image"
          />
          <img
            src="https://bhidhwaja-images.s3.amazonaws.com/Website+Images/customization-image-2.jpeg"
            alt="Customization-example"
            className="custom-image"
          />
          <img
            src="https://bhidhwaja-images.s3.amazonaws.com/Website+Images/customization-image-3.jpeg"
            alt="Customization-example"
            className="custom-image"
          />
          <img
            src="https://bhidhwaja-images.s3.amazonaws.com/Website+Images/customization-image-4.jpeg"
            alt="Customization-example"
            className="custom-image"
          />
        </div>
      </div>
    </Container>
  );
};

export default CustomizationScreen;
