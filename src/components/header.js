import React from 'react'
import { Header } from 'semantic-ui-react'

const AppHeader = ({ language }) => {
  return (
    <div className={`${language.toLowerCase()}-gradient item-header header-container padding-top-l`}>
      <Header as='h1' className='title margin-none'>Nesty Hash</Header>
      <Header as='h3' className='subtitle margin-none'>Randomly generate nested hashes to practice your coding skills</Header>
    </div>
  )
}

export default AppHeader
