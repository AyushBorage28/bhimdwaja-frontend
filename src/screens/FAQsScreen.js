import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom'

const FAQsScreen = () => {
    return (
        <>
            <Link to='/' className='btn btn-light my-3'>
            Go Back
            </Link>
            <h1 className='text-center pt-4'>Frequently Asked Questions</h1>

            <div className='container w-50 p-3' style={{color: 'black'}}>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    What is rudraksha?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Rudraksha is a seed that comes from the Elaeocarpus ganitrus tree, which is found in the Himalayan region. It is considered sacred in Hinduism and is often used in prayer and meditation.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    What are the benefits of wearing rudraksha? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Wearing rudraksha is believed to have many benefits, including increasing concentration, reducing stress and anxiety, improving blood circulation, and providing overall physical and mental well-being.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    What are gems?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Gems are natural minerals or stones that are prized for their beauty and rarity. They are often used in jewellery and are believed to have healing and therapeutic properties.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    Can I wear rudraksha and gems together? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Yes, you can wear rudraksha and gems together. In fact, many people believe that wearing a combination of rudraksha and gems can enhance their benefits.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    What is a rudraksha mala? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>A rudraksha mala is a string of rudraksha beads that is used for prayer and meditation. It is often worn around the neck or wrist.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    How do I know what size of rudraksha or gem to buy? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>The size of rudraksha or gem you need depends on your personal preference and the purpose for which you are buying it. We provide detailed information about the size and properties of each of our products on our website to help you make an informed decision.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                    How do I take care of my rudraksha or gem? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>To take care of your rudraksha or gem, avoid exposing it to harsh chemicals or extreme temperatures. You can clean it with a soft cloth and mild soap or use a specialized cleaning solution for gems. Store it in a dry and safe place when not in use.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                    How long does shipping take? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>We ship our products within three business days of receiving payment. Shipping times vary depending on your location, but typically take between 10-14 business days.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                    Can I cancel my order? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>If you need to cancel your order, please contact us as soon as possible. If your order has not yet shipped, we will process a cancellation and refund. However, if your order has already shipped, we are unable to cancel it.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        </>
    )
}

export default FAQsScreen