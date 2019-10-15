import React from 'react'
import AceEditor from 'react-ace'
import contentFormatter from '../helpers/prettify'

import 'brace/theme/solarized_dark';
import 'brace/ext/modelist'
import 'brace/ext/language_tools'
import 'brace/mode/ruby'
import 'brace/mode/javascript'
import 'brace/mode/python'
import 'brace/mode/json'
import 'brace/mode/markdown'

const Snippet = ({ content, language }) => (
  <AceEditor
    wrapEnabled
    width='100%'
    mode={ language.toLowerCase() }
    className='item-snippet'
    theme='solarized_dark'
    fontSize={ 14 }
    name='snippet'
    editorProps={ {$blockScrolling: true} }
    showPrintMargin={ false }
    value={ contentFormatter(content, language) }
  />
)

export default Snippet
