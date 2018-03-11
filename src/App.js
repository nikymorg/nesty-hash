import React, { Component } from 'react'
import Snippet from './components/snippet'
import Form from './components/form'
import DataGenerator from './helpers/generators'

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
      <div className="App">
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
    );
  }
}

export default App
