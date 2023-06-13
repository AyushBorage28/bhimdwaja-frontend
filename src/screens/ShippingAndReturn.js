import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShippingAndReturn = () => {
  return (
    <Container className="py-3 content-container" fluid>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <div className="container w-75 p-2">
        <h1>Shipping & Returns</h1>
        <h4>Shipping Policy:</h4>
        <ul>
          <li>
            Once payment is received, we begin processing and dispatching your order promptly.
          </li>
          <li>
            Our dedicated team aims to ship your products within three business days for a swift turnaround time.
          </li>
          <li>
            Shipping times may vary depending on your location and the destination of your order.
          </li>
          <li>
            While we strive to provide accurate delivery timelines, unforeseen circumstances or external factors beyond our control may affect the delivery schedule.
          </li>
          <li>
            On average, shipping times range between 10 to 14 business days.
          </li>
          <li>
            Please note that these estimates are general guidelines, and actual delivery times may vary due to customs procedures, local postal services, and logistical considerations.
          </li>
          <li>
            During the checkout process, refer to the provided shipping information for a more accurate estimate based on your specific location.
          </li>
          <li>
            We are committed to exceptional customer service throughout the shipping process and work diligently to ensure the safe and prompt arrival of your Rudraksha or gemstone products.
          </li>
          <li>
            We appreciate your patience and understanding during the delivery process.
          </li>
        </ul>

        <h4>Return Policy:</h4>
        <ul>
          <li>
            At Bhimdhwaja, we strive for customer satisfaction, and we want you to be happy with your purchase.
          </li>
          <li>
            If you receive a defective or damaged item, please contact our customer service within 7 days of receiving the product.
          </li>
          <li>
            We may request photos or additional information to assess the issue before authorizing a return.
          </li>
          <li>
            Once your return is approved, we will provide you with instructions on how to proceed.
          </li>
          <li>
            For returns due to a defective or damaged item, we will cover the return shipping costs.
          </li>
          <li>
            If you wish to return an item for any other reason, please contact us within 7 days of receiving the product.
          </li>
          <li>
            In such cases, the customer is responsible for the return shipping costs.
          </li>
          <li>
            Once the returned item is received and inspected, we will issue a refund for the product's cost.
          </li>
          <li>
            Please note that certain items may not be eligible for return due to hygiene or safety reasons (e.g., earrings).
          </li>
          <li>
            If you have any questions or concerns regarding returns, please reach out to our customer service for assistance.
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default ShippingAndReturn;
