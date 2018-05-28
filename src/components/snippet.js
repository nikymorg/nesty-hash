import React from 'react'
import AceEditor from 'react-ace'
import contentFormatter from '../helpers/prettify'

import 'brace/theme/solarized_dark';
import 'brace/ext/modelist'
import 'brace/ext/language_tools'
import 'brace/mode/html_ruby'
import 'brace/mode/javascript'
import 'brace/mode/json'
import 'brace/mode/python'
import 'brace/mode/markdown'

const Snippet = ({ content }) => (
  <AceEditor
    wrapEnabled
    width='100%'
    mode='html_ruby'
    className='item-snippet'
    theme='solarized_dark'
    fontSize={16}
    name='snippet'
    editorProps={{
      $blockScrolling: true
    }}
    value={contentFormatter(content)}
  />
)

export default Snippet
