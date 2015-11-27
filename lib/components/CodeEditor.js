import React, {Component, PropTypes} from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/wrap/hardwrap';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/seti.css';

export default class CodeEditor extends Component {

  static propTypes = {
    callback: PropTypes.func,
    defaultVal: PropTypes.string,
  }

  componentDidMount() {
    const {callback, defaultVal} = this.props;
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      lineWrapping: true,
      mode: {name: 'javascript', json: true},
      theme: 'seti',
      tabSize: 2,
    })
    editor.on('change', (body, data) => {
      const val = body.doc.getValue();
      callback(val);
    })
  }

  render() {
    const {defaultVal} = this.props;
    return (
      <div className="codeEditor-main">
        <textarea id="code" name="code" value={defaultVal} />
      </div>
    )
  }
}
