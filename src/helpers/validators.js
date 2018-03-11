const validate = {
  form: (dataTypes) => {
    return validate.areNested(dataTypes) && validate.areUnnested(dataTypes)
  },
  areNested: (dataTypes) => {
    return dataTypes.some(dataType => validate.isNested(dataType))
  },
  areUnnested: (dataTypes) => {
    return dataTypes.some(dataType => !validate.isNested(dataType))
  },
  isNested: (dataType) => {
    const nestedTypes = ['array', 'hash']
    if (nestedTypes.includes(dataType))
      return true
    return false
  }
}

export default validate
