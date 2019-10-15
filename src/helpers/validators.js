const nestedTypes = ['array', 'hash', 'dictionary', 'object', 'collection']

const validate = {
  form: dataTypes => validate.areNested(dataTypes) && validate.areUnnested(dataTypes),
  areNested: dataTypes => dataTypes.some(dataType => validate.isNested(dataType)),
  areUnnested: dataTypes => dataTypes.some(dataType => !validate.isNested(dataType)),
  isNested: dataType => nestedTypes.includes(dataType)
}

export default validate
