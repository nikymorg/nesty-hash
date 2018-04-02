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

  handleDataTypes(e, { value }) {
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
    return dataTypes.map(type => <Form.Checkbox
      key={ type }
      label={ type }
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
      <Form
        className='item-form form-container'
        onSubmit={ this.handleSubmit }
        size='large'
      >
        <Form.Group
          inline={true}
          className='item-form-checkbox'
        >
          <Form.Field control='label'>Data Types:</Form.Field>
          { this.renderCheckboxes(dataMapper[language]) }
        </Form.Group>
        <Form.Field
          inline={true}
          className='item-form-number'
          label='Max Nested Depth:'
          control='input'
          type='number'
          min={1}
          max={5}
          value={ depth }
          onChange={ this.handleDepth }
        />
        <Form.Button
          basic
          className='item-form-submit'
          color='grey'
        >
          Create Data Structure
        </Form.Button>
      </Form>
    )
  }
}

export default HashForm
