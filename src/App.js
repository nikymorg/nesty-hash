import React, { Component } from 'react'
import Header from './components/header'
import Form from './components/form'
import Snippet from './components/snippet'
import DataGenerator from './helpers/generators'
import './assets/custom.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'ruby',
      showSnippet: false,
      dataStructure: {}
    }
    this.setStructure = this.setStructure.bind(this)
  }

  setStructure(dataStructure) {
    this.setState({ dataStructure, showSnippet: true })
  }

  render() {
    const { language, showSnippet, dataStructure } = this.state

    return (
      <div className='main-container flex flex-column flex-even'>
        <Header language={ language } />
        <div className='flex flex-column flex-items-center flex-even'>
          <Form
            language={ language }
            setStructure={ this.setStructure }
          />
          { showSnippet &&
            <Snippet
              language={ language }
              content={ DataGenerator(dataStructure.depth, dataStructure.dataTypes) }
            />
          }
        </div>
      </div>
    );
  }
}

export default App
