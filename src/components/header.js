import React from 'react'
import { Header } from 'semantic-ui-react'

const AppHeader = ({ language }) => {
  return (
    <div className={`${language}-gradient item-header header-container padding-top-l`}>
      <Header as='h1' className='title'>Nesty Hash</Header>
      <Header as='h3' className='subtitle'>Randomly generate nested hashes to practice your coding skills</Header>
    </div>
  )
}

export default AppHeader
