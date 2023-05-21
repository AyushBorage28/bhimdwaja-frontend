import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bhimdwaja | Bhimashankar- Gems and Rudraksha',
  description: 'One stop solution for Rudrakshas, Gems and Malas',
  keywords: 'Rudrakshas, Gems, Malas',
}

export default Meta
