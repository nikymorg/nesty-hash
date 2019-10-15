import React, { Component } from 'react'
import Header from './components/header'
import Form from './components/form'
import Snippet from './components/snippet'
import DataGenerator from './helpers/generators'
import { languageMapper } from './helpers/constants'
import './assets/custom.css'

class App extends Component {
  state = {
    language: 'Ruby',
    dataStructure: {},
    content: '# Generate a hash or array using the form above'
  }

  setStructure = ({depth, dataTypes}) => {
    this.setState({
      content: DataGenerator(depth, dataTypes)
    })
  }

  setLanguage = (e, { value }) => this.setState({
    language: value,
    content: languageMapper[value].defaultContent
   })

  render() {
    const { language } = this.state

    return (
      <div className='main-container'>
        <Header language={ language } />
        <Form
          language={ language }
          setLanguage = { this.setLanguage }
          setStructure={ this.setStructure }
        />
        <Snippet
          { ...this.state }
        />
      </div>
    );
  }
}

export default App
