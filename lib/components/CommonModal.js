import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import get from 'lodash/object/get';
import Modal from 'react-modal';

import * as modalActions from 'actions/modalActions';

@connect(
  state => ({
    isOpen: get(state, 'modal.isOpen'),
    modaltype: get(state, 'modal.modaltype'),
  }),
  {...modalActions,},
)
export default class CommonModal extends Component {

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modaltype: PropTypes.string.isRequired,
    switchModal: PropTypes.func,
  }

  render() {
    const {isOpen, switchModal, modaltype} = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose = {() => switchModal({isOpen: false,})}
        closeTimeoutMS={150}
      >
        {modaltype === "type" && <TypeModal />}
      </Modal>
    );
  }
}

