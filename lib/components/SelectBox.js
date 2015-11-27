import React, {Component, PropTypes} from 'react';
import map from 'lodash/collection/map';
import filter from 'lodash/collection/filter';
import isEmpty from 'lodash/lang/isEmpty';
import classNames from 'classnames';

export default class SelectBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      listData: null,
    }
  }

  static propTypes = {
    data: PropTypes.object,
    callback: PropTypes.func,
    placeHolder: PropTypes.string,
    defaultVal: PropTypes.string,
  }

  componentDidMount() {
    const {defaultVal} = this.props;
    if (defaultVal) {
      this.refs.selectValue.getDOMNode().value = defaultVal;
    }
  }

  handleFocus(is) {
    const {isFocus} = this.state;
    this.setState({
      isFocus: is? is : !isFocus,
    })
  }

  handleChoese(e, data) {
    const {callback} = this.props;
    const val = e.target.innerText;
    this.refs.selectValue.getDOMNode().value = val;
    this.setState({
      isFocus: false,
    });
    callback(data.id, data);
  }

  handleFliter() {
    const {data} = this.props;
    const filterValue = this.refs.selectValue.getDOMNode().value;

    const regexp = new RegExp(filterValue, 'i');
    const _res = filter(data, source => regexp.test(source.name));
    this.setState({
      listData: _res,
    })
  }

  render() {
    const {data, placeHolder, defaultVal} = this.props;
    const {isFocus, listData} = this.state;
    const List = isEmpty(listData) ? data : listData;
    return (
      <div className="selectBox">
        <div className={classNames("selectBox-mian", {'selectBox-focus': isFocus})}>
          <div className="selectBox-input">
            <input
              ref="selectValue"
              type="text"
              onFocus={() => this.handleFocus(true)}
              onChange={() => this.handleFliter()}
              placeholder={placeHolder}
            />
          </div>

          <div
            className="selectBox-list-down"
            onClick={() => this.handleFocus()}
          >
            <span>
              <i className={classNames("fa fa-caret-down", {'fa-caret-up': isFocus})}></i>
            </span>
          </div>
        </div>

        <div className={classNames("selectBox-list", {'selectBox-show': isFocus})}>
        {
          map(List, (data, index) =>
            <div
              key={index}
              className="selectBox-list-content"
              onClick={(e) => this.handleChoese(e, data)}
            >{data.name}</div>
          )
        }
        </div>
      </div>
    )
  }
}
