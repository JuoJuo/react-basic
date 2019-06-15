import React, { Component } from 'react'
import withLocal from './withLocal';
import withAjax from './withAjax';


class Hoc extends Component {
  render() {
    return (
      <input defaultValue={this.props.value}/>
    )
  }
}
// 包太多层了，导致逻辑不是特别清晰，代码可读性不好
//高阶组件的多层嵌套也是hooks解决的问题之一
let UserNameInputWithAjax=withAjax(Hoc);
let UserNameInputWithLocal=withLocal(UserNameInputWithAjax,'username');
export default UserNameInputWithLocal;