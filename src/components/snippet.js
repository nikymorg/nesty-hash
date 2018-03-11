import React from 'react'
import AceEditor from 'react-ace'

import 'brace/theme/solarized_dark';
import 'brace/ext/modelist'
import 'brace/ext/language_tools'
import 'brace/mode/html_ruby'
import 'brace/mode/javascript'
import 'brace/mode/json'
import 'brace/mode/python'
import 'brace/mode/markdown'

const Snippet = ({ content }) => {
  return (
    <AceEditor
      wrapEnabled
      width='80%'
      mode='html_ruby'
      theme='solarized_dark'
      fontSize={16}
      name='snippet'
      readOnly={true}
      editorProps={{
        $blockScrolling: true
      }}
      value={JSON.stringify(content)}
    />
  )
}

export default Snippet


// <AceEditor
// wrapEnabled
// height='100%'
// width='100%'
// theme='github'
// mode='html_ruby'
// fontSize={14}
// value={'me is stuff'}
// readOnly={true}
// setOptions={{
//   tabSize: 2
// }}
// />
