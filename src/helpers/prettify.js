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
        formattedContent += format.opening(c, indent)
        break;
      case ']':
      case '}':
        indent -= 1
        formattedContent += format.closing(c, indent)
        break;
      case ',':
        formattedContent += format.comma(c, indent)
        break;
      case ':':
        formattedContent += format.colon(c)
        break;
      default:
        formattedContent += format.default(c)
    }
  }
  return formattedContent
}

const format = {
  default: c => c,
  indent: indent => '\t'.repeat(indent),
  newLine: indent => indent > 0 ? '\n' : '',
  opening: (c, indent) => [
      format.default(c),
      format.newLine(indent),
      format.indent(indent)
    ].join(''),
  closing: (c, indent) => [
      format.newLine(indent+1),
      format.indent(indent),
      format.default(c),
    ].join(''),
  comma: (c, indent) => [
      format.default(c),
      format.newLine(indent),
      format.indent(indent)
    ].join(''),
  colon: c => c + ' '
}

export default contentFormatter
