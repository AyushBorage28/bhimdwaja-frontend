import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

const FAQsScreen = () => {
    return (
        <Container className="py-3 content-container" fluid>
            <h1 className='text-center pt-4'>Frequently Asked Questions</h1>

            <div className='container p-3 faqs-container' style={{ color: 'black' }}>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            What is Rudraksha?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className='faqs-body-text'>Rudraksha, derived from the Elaeocarpus ganitrus tree, not only possesses spiritual significance but also holds a rich historical and cultural legacy. These mystical seeds are primarily found in the serene and majestic Himalayan region, known for its breathtaking landscapes and spiritual retreats.

                                The association of Rudraksha with Hinduism dates back thousands of years, and it has played a pivotal role in various religious practices. In ancient texts, such as the Puranas and Upanishads, Rudraksha is mentioned as a divine gift bestowed upon humanity by Lord Shiva himself.

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Why Bhimdhwaja Rudraksha?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className='faqs-body-text'>At Bhimdhwaja, we take immense pride in offering you the most exquisite and authentic Rudraksha beads. We guarantee uncompromising quality, sourcing beads directly from trusted suppliers. Our sacred Rudraksha seeds carry immense spiritual and healing properties. With a wide variety to choose from, our knowledgeable experts offer personalized guidance. Experience customer satisfaction through a seamless shopping journey and prompt support. Embrace the profound energy and ancient wisdom of our authentic and enchanting Rudraksha beads.

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Who should wear Rudraksha?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className='faqs-body-text'>Wearing Rudraksha beads has been attributed to a multitude of benefits that extend beyond their spiritual significance. These mystical seeds have gained popularity for their potential positive impact on various aspects of an individual's well-being. One of the key advantages associated with Rudraksha is its ability to enhance concentration and focus. Many practitioners believe that wearing Rudraksha beads close to the skin stimulates the mind and promotes clarity of thought, making it a favored accessory during meditation and study sessions.

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>



                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            What Rudraksha should I wear?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className='faqs-body-text'>Careful selection of Rudraksha is an essential step in your Rudraksha journey. Rudraksha is commonly selected based on Birth Chart analysis with careful consideration of the goals and aspirations of the individual. Bhimdhwaja offers a range of Rudraksha combinations curated by our Rudraksha experts based on Zodiac signs, Goals, and Aspirations or your current Maha Dasha. </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Can I wear Rudraksha and Gems together?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className='faqs-body-text'>Yes, you can wear Rudraksha and gems together. In fact, many people believe that wearing a combination of Rudraksha and gems can enhance their benefits.</Card.Body>
                        </Accordion.Collapse>
                    </Card>


                    {/* <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                            How do I know what size of Rudraksha or Gem to buy?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body className='faqs-body-text'>The size of Rudraksha or gem you need depends on your personal preference and the purpose for which you are buying it. We provide detailed information about the size and properties of each of our products on our website to help you make an informed decision.</Card.Body>
                        </Accordion.Collapse>
                    </Card> */}

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                            How do I take care of my Rudraksha or Gems?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body className='faqs-body-text'>To take care of your Rudraksha or gem, avoid exposing it to harsh chemicals or extreme temperatures. You can clean it with a soft cloth and mild soap or use a specialized cleaning solution for gems. Store it in a dry and safe place when not in use.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                            How long does shipping take?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body className='faqs-body-text'>
                                We ship our products within three business days of receiving payment. Shipping times vary depending on your location, but typically take between 10-14 business days.
                                <br/>
                                    For more information, please check our <a href="/shipping-and-return" style={{color:'#f4791a'}}>Shipping and Returns Policy</a>.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                            Can I cancel my order?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                            <Card.Body className='faqs-body-text'>If you wish to cancel your order, we kindly request you to reach out to us as soon as you can.

                                If your order has not yet been shipped, we will make every effort to process your cancellation request promptly. In such cases, we will initiate the cancellation process and arrange for a refund of the payment you made for the order.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </Container>
    )
}

export default FAQsScreen