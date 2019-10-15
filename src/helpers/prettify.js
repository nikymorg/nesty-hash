const contentFormatter = (content, language) => {
  return isString(content) ? content : prettify(JSON.stringify(content), language)
}

const prettify = (content, language) => {
  let formattedContent = ''
  let indent = 0
  let i
  for (i = 0; i < content.length; i++) {
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
        formattedContent += language.match('Ruby') ? format.rocket(c) : format.colon(c)
        break;
      case '"':
        i++
        let newContent = ''
        while (content.charAt(i) !== '"') {
          newContent += content.charAt(i)
          i++
        }
        formattedContent += quotedContent(newContent, language)
        break;
      default:
        formattedContent += format.default(c)
    }
  }
  return formattedContent
}

const quotedContent = (content, language) => {
  if (language.match('JavaScript') || !isNumber(content)) {
    return format.string(content)
  } else {
    return format.number(content)
  }
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
      format.newLine(indent + 1),
      format.indent(indent),
      format.default(c),
    ].join(''),
  comma: (c, indent) => [
      format.default(c),
      format.newLine(indent),
      format.indent(indent)
    ].join(''),
  colon: c => `${c} `,
  rocket: c => ` => `,
  string: c => `"${c}"`,
  number: c => parseInt(c, 10)
}

const isNumber = c => !isNaN(parseInt(c, 10))

const isString = c => typeof c === 'string'

export default contentFormatter
