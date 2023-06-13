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
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            What are the benefits of wearing Rudraksha?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className='faqs-body-text'>Wearing Rudraksha beads has been attributed to a multitude of benefits that extend beyond their spiritual significance. These mystical seeds have gained popularity for their potential positive impact on various aspects of an individual's well-being. One of the key advantages associated with Rudraksha is its ability to enhance concentration and focus. Many practitioners believe that wearing Rudraksha beads close to the skin stimulates the mind and promotes clarity of thought, making it a favored accessory during meditation and study sessions.

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            What are Gems?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className='faqs-body-text'>Gems, those exquisite natural minerals and stones renowned for their captivating beauty, have captivated humanity for centuries. These precious treasures, found deep within the Earth's crust, hold immense value not only for their aesthetic allure but also for their perceived healing and therapeutic properties.

                            </Card.Body>
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
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            What is a Rudraksha Mala?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className='faqs-body-text'>A Rudraksha Mala holds a significant place in spiritual practices, serving as a powerful tool for prayer and meditation. Consisting of a string of Rudraksha beads, this sacred accessory is commonly worn around the neck or wrapped around the wrist, symbolizing devotion and spiritual connection. The number of beads in a Rudraksha mala can vary, with commonly used counts being 108 or 54 beads, although other numbers are also prevalent.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                            How do I know what size of Rudraksha or Gem to buy?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body className='faqs-body-text'>The size of Rudraksha or gem you need depends on your personal preference and the purpose for which you are buying it. We provide detailed information about the size and properties of each of our products on our website to help you make an informed decision.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
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
                            <Card.Body className='faqs-body-text'>We ship our products within three business days of receiving payment. Shipping times vary depending on your location, but typically take between 10-14 business days.</Card.Body>
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