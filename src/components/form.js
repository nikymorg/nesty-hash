import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import validate from '../helpers/validators'

const dataMapper = {
  ruby: ['string', 'number', 'array', 'hash'],
  javascript: ['string', 'number', 'array', 'object'],
  python: ['string', 'number', 'collection', 'dictionary']
}

class HashForm extends Component {
  constructor() {
    super()
    this.state = {
      dataTypes: [],
      depth: 1
    }
    this.handleDataTypes = this.handleDataTypes.bind(this)
    this.handleDepth = this.handleDepth.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderCheckboxes = this.renderCheckboxes.bind(this)
    this.isChecked = this.isChecked.bind(this)
  }

  handleDataTypes({ target: { value } }) {
    if (this.isChecked(value)) {
      this.setState((prevState) => ({
        dataTypes: prevState.dataTypes.filter(type => type !== value)
      }))
    } else {
      this.setState((prevState) => ({
        dataTypes: [...prevState.dataTypes, value]
      }))
    }
  }

  handleDepth({ target: { value } }) {
    const depth = parseInt(value, 10)
    this.setState({ depth })
  }

  handleSubmit() {
    if (!validate.form(this.state.dataTypes)) {
      return alert('Please include both nested and unnested data types for the generator')
    }
    this.props.setStructure(this.state)
    this.setState({
      dataTypes: [],
      depth: 1
    })
  }

  renderCheckboxes(dataTypes) {
    return dataTypes.map(type =>  <Form.Field
      key={type}
      label={type}
      control='input'
      type='checkbox'
      value={ type }
      onChange={ this.handleDataTypes }
      checked={ this.isChecked(type) }
    />)
  }

  isChecked(dataType) {
    return this.state.dataTypes.includes(dataType)
  }

  render() {
    const { language } = this.props
    const { depth } = this.state

    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Group grouped>
          <label>Data Types</label>
          { this.renderCheckboxes(dataMapper[language]) }
        </Form.Group>
        <Form.Field
          label='Max Nested Depth'
          control='input'
          type='number'
          min={1}
          max={10}
          value={ depth }
          onChange={ this.handleDepth }
        />
        <Form.Field control='button'>
        Create Data Structure
        </Form.Field>
      </Form>
    )
  }
}

export default HashForm
