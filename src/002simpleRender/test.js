import React from './react';
import render from './react-dom';

class Test extends React.Component{
  render() {
    const div = <div a="123" style={{color: 'red'}} className='fuck'>
      <span>hello world</span>
    </div>;
    return div;
  }
}

render(<Test a="123"></Test>, document.getElementById('root'));

