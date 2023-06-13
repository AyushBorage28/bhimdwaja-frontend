import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EnergizationScreen = () => {
  return (
    <Container className="py-3 content-container" fluid>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <div className=" container w-75 p-3" >
        <h1>Our Energization</h1>
        <p style={{ color: '#000000' }}><strong>Rudraksha beads are considered sacred and are believed to possess divine energy. To fully unlock their potential, it is important to bless, purify, and energize them before wearing. At Bhimdhwaja, we hold this process in high regard and ensure that each order undergoes a special energization ritual at the revered Lord Bhimashankar Temple before being shipped to our customers.</strong></p><br />

        <p style={{ color: '#000000' }}><strong><span style={{ fontWeight: 'bold' }}> The Lord Bhimashankar Temple </span> holds a significant position as the 6th Jyotirlinga among the 12 Jyotirlingas. We are honored to have the opportunity to energize our Rudraksha beads at this revered place. Through this ritual, we invoke the blessings of Lord Shiva and infuse the beads with positive vibrations and spiritual potency.</strong></p><br />

        <p style={{ color: '#000000' }}><strong>As part of our commitment to providing the best to our customers, we offer free touch energization for all Rudraksha beads purchased from us. Our dedicated team performs a special energization ceremony, ensuring that each bead is infused with divine blessings and positive energy before it is dispatched.</strong></p><br />

        <p style={{ color: '#000000' }}><strong>While Rudraksha beads can be energized on any day due to the constant presence of divine energy, certain days hold special significance for their energization. Mondays, which are associated with Lord Shiva, are believed to enhance the spiritual power of Rudraksha. Additionally, occasions like Mahashivratri, Shivratri (monthly), Pradosh, and the holy month of Shravan are considered highly auspicious for energizing Rudraksha beads.</strong></p><br />

        <p style={{ color: '#000000' }}><strong>By ensuring the proper blessing, purification, and energization of our Rudraksha beads, we aim to provide our customers with not just beautiful jewelry, but also spiritual tools that can bring peace, well-being, and spiritual growth. When you choose our energized Rudraksha creations, you embrace the divine blessings and the transformative power they hold.</strong></p><br />

        <p style={{ color: '#000000' }}><strong>At Bhimdhwaja, we are dedicated to offering the highest quality and authenticity in our Rudraksha beads. We believe in their ability to enhance your spiritual journey and bring positive energy into your life.</strong></p><br />
      </div>
    </Container>
  )
}

export default EnergizationScreen
