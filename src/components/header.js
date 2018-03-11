import React from 'react'
import { Header } from 'semantic-ui-react'

// const headerMapper = {
//   ruby: {},
//   javascript: {},
//   python: {}
// }

const AppHeader = ({ language }) => {
  return (
    <div className={`${language}-gradient flex flex-column flex-even flex-items-center`}>
      <Header as='h1'>Nasty Hash</Header>
      <Header as='h3'>Randomly generate nested hashes to practice your coding skills</Header>
    </div>
  )
}

export default AppHeader
