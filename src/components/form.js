import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import validate from '../helpers/validators'
import { languages, languageMapper } from '../helpers/constants'

class HashForm extends Component {
  state = {
     dataTypes: [],
     depth: 1
  }

  handleDataTypes = (e, { value }) => {
    if (this.isCheckedDataType(value)) {
      this.setState(prevState => ({
        dataTypes: prevState.dataTypes.filter(type => type !== value)
      }))
    } else {
      this.setState(prevState => ({
        dataTypes: [...prevState.dataTypes, value]
      }))
    }
  }

  handleDepth = ({ target: { value } }) => {
    this.setState({ depth: parseInt(value, 10) })
  }

  handleSubmit = () => {
    if (!validate.form(this.state.dataTypes)) return
    this.props.setStructure(this.state)
    this.setState({
      dataTypes: [],
      depth: 1
    })
  }

  renderFields = (list, isChecked, onChange, field) => {
    const Field = field.match('radio') ? Form.Radio : Form.Checkbox
    return list.map(item => <Field
      key={ item }
      label={ item }
      value={ item }
      onChange={ onChange }
      checked={ isChecked(item) }
      className={ field.match('checkbox') && 'data-fields' }
    />)
  }

  isCheckedDataType = item => this.state.dataTypes.includes(item)

  isCheckedLanguage = item => !!this.props.language.match(item)

  render() {
    const { language } = this.props
    const { depth } = this.state
    const invalidForm = !validate.form(this.state.dataTypes)

    return (
      <Form
        className='item-form form-container'
        onSubmit={ this.handleSubmit }
        size='small'
      >

        <Form.Group
          inline={true}
          className='item-form-language'
        >
          <Form.Field control='label'>Language:</Form.Field>
          { this.renderFields(
            languages,
            this.isCheckedLanguage,
            this.props.setLanguage,
            'radio'
          ) }
        </Form.Group>

        <Form.Group
          inline={true}
          className='item-form-data'
        >
          <Form.Field control='label' className='data-fields'>Data Types:</Form.Field>
          { this.renderFields(
            languageMapper[language].dataTypes,
            this.isCheckedDataType,
            this.handleDataTypes,
            'checkbox'
          ) }
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
          color='black'
          disabled={ invalidForm }
        >
          Create Data Structure
        </Form.Button>

        { invalidForm &&
          <div className='error-message'>
            Please include both nested and unnested data types
          </div>
        }

      </Form>
    )
  }
}

export default HashForm
