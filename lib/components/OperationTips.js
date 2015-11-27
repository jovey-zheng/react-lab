import React, {Component, PropTypes} from 'react';
import isEmpty from 'lodash/lang/isEmpty';
import classNames from 'classnames';

export default class OperationTips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    }
  }

  static propTypes = {
    data: PropTypes.object,
    deleteFunc: PropTypes.func,
    editFunc: PropTypes.func,
    newFunc: PropTypes.func,
    tipsStatus: PropTypes.bool,
    editType: PropTypes.string,
    newType: PropTypes.string,
  }

  componentWillReceiveProps(nextProps) {
    const {tipsStatus} = nextProps;
    this.setState({
      isShow: tipsStatus,
    })
  }

  handleDeleteFunc() {
    const {data, deleteFunc} = this.props;
    deleteFunc({
      data: data,
      name: data.name,
    });
  }

  handleEditFunc() {
    const {data, editFunc, editType} = this.props;
    editFunc({
      isOpen: true,
      data: data,
      modaltype: editType,
    });
  }

  handleNewFunc() {
    const {data, newFunc, newType} = this.props;
    newFunc({
      isOpen: true,
      data: data,
      modaltype: newType,
    });
  }

  render() {
    const {newType} = this.props;
    const {isShow} = this.state;
    return (
      <div>
      {isShow &&
        <div className={classNames("operation-tips", {"third-tips-position": !isEmpty(newType)})}>
          <div className="tips-arrow"></div>
          <div className="tips-content">
            <div
              title="修改"
              className="tips-handle"
              onClick={() => this.handleEditFunc()}
            >
              <i className="fa fa-pencil"></i>
            </div>
            {newType &&
              <div
                title="添加"
                className="tips-handle"
                onClick={() => this.handleNewFunc()}
              >
                <i className="fa fa-plus"></i>
              </div>
            }
            <div
              title="删除"
              className="tips-handle"
              onClick={() => this.handleDeleteFunc()}
            >
              <i className="fa fa-trash"></i>
            </div>
          </div>
        </div>
      }
      </div>
    )
  }
}
