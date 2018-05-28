const contentFormatter = (content) => {
  if (typeof content === 'string')
    return content
  return prettify(JSON.stringify(content))
}

const prettify = (content) => {
  let formattedContent = ''
  let indent = 0
  for (let i = 0; i < content.length; i++) {
    let c = content.charAt(i)
    switch(c) {
      case '[':
      case '{':
        indent += 1
        formattedContent += c
        formattedContent += format.newLine(indent)
        formattedContent += format.indent(indent)
        break;
      case ']':
      case '}':
        formattedContent += format.newLine(indent)
        indent -= 1
        formattedContent += format.indent(indent)
        formattedContent += c
        break;
      case ',':
        formattedContent += c
        formattedContent += format.newLine(indent)
        formattedContent += format.indent(indent)
        break;
      case ':':
        formattedContent += c + ' '
        break;
      default:
        formattedContent += c
    }
  }
  return formattedContent
}


const format = {
  indent: (indent) => {
    return '\t'.repeat(indent)
  },
  newLine: (indent) => {
    return indent > 0 ? '\n' : ''
  }
}

export default contentFormatter
