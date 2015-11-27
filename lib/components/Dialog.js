import React, {Component, PropTypes} from 'react';
import DialogModal from 'boron/WaveModal';

export default class Dialog extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    yesCallback: PropTypes.func.isRequired,
    canselCallback: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    const {data} = nextProps;
    if (data.dialogStatus) {
      this.handleDialogShow();
    } else {
      this.handleDialogHide();
    }
  }

  handleDialogShow() {
    this.refs.dialog.show();
  }

  handleDialogHide() {
    this.refs.dialog.hide();
  }

  render() {
    const {data, text, yesCallback, canselCallback} = this.props;
    return (
      <DialogModal ref="dialog">
        <div className="dialog-content">
          <h2>{text}<b>{data.deleteName}</b></h2>
          <button
            className="dialog-btn"
            onClick={() => yesCallback(data)}
          >
            确认
          </button>
          <button
            className="dialog-btn"
            onClick={() => canselCallback()}
          >
            取消
          </button>
        </div>
      </DialogModal>
    )
  }
}
