//element是一个对象，他的type可能是一个类组件函数，也可能是
function render(element, parentNode) {

  if(typeof element == 'string'||typeof element == 'number'){
    return  parentNode.appendChild(document.createTextNode(element));
  }

  let {type, props} = element;

  if (type.isReactComponent) {//类组件
    let returnedElement = new type(props).render();
    type = returnedElement.type;
    props = returnedElement.props;
  }else if(typeof type == 'function'){//函数组件
    let returnedElement = type(props);
    type = returnedElement.type;
    props = returnedElement.props;
  }

  const domElement = document.createElement(type);

  for(let propName in props){
    switch (propName) {
      case 'className':
        domElement.className = props[propName];
        break;
      case 'style':
        let styleObj = props[propName];

        // {color: 'red',fontSize: '50px'}
        const text = Object.keys(styleObj).map((key) => {
          const middle = key.replace(/[A-Z]/g, (m, $1) => `-${$1.toLowerCase()}`);
          return `${middle}:${styleObj[key]}`;
        }).join(';');

        domElement.style.cssText = text;
        break;
      case 'children':
        const children = Array.isArray(props.children) ? props.children : [props.children];
        children.forEach(child=>render(child,domElement));
        break;
      case '__source':
      case '__self': break;
      default:
        domElement.setAttribute(propName, props[propName]);
        break;
    }
  }

  parentNode.appendChild(domElement);
  //componentDidMount
}

export default render;
