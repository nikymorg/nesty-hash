const languages = ['Ruby', 'JavaScript', 'Python']

const languageMapper = {
  Ruby: {
    dataTypes: ['string', 'number', 'array', 'hash'],
    defaultContent: '# Generate an array or hash using the form above'
  },
  JavaScript: {
    dataTypes: ['string', 'number', 'array', 'object'],
    defaultContent: '// Generate an array or object using the form above'
  },
  Python: {
    dataTypes: ['string', 'number', 'collection', 'dictionary'],
    defaultContent: '# Generate a collection or dictionary using the form above'
  }
}

export { languages, languageMapper }
