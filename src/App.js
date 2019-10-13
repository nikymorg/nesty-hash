import React, { Component } from 'react'
import Header from './components/header'
import Form from './components/form'
import Snippet from './components/snippet'
import DataGenerator from './helpers/generators'
import './assets/custom.css'

class App extends Component {
  state = {
    language: 'ruby',
    dataStructure: {},
    content: 'Generate a hash or array using the form above'
  }

  setStructure = ({depth, dataTypes}) => {
    this.setState({
      content: DataGenerator(depth, dataTypes)
    })
  }

  render() {
    const { language, content } = this.state

    return (
      <div className='main-container'>
        <Header language={ language } />
        <Form
          language={ language }
          setStructure={ this.setStructure }
        />
        <Snippet
          language={ language }
          content={ content }
        />
      </div>
    );
  }
}

export default App
