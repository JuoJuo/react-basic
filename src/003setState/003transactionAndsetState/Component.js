class Component {
  constructor(props) {
    this.props = props;
    // 注意此处：这个地方的this也是，counter实例
    this.$updater = new Updater(this);
  }

  setState(partcialState) {
    this.$updater.addState(partcialState);
  }

  updateComponent() {
    this.$updater.pendingStates.forEach(partcialState => Object.assign(this.state, partcialState));
    this.$updater.pendingStates.length = 0;
    let oldElement = this.domElement;
    let newElement = this.createElement();
    oldElement.parentElement.replaceChild(newElement, oldElement);
  }

  //把一个DOM模板字符串转成真实的DOM元素
  createElement() {
    //this;----此处有点叼~----因为是new的Counter，调用的mount，而Counter没有mount
    //就根据原型链找到父亲这里来了，调createElement的时候，这个this是Counter实例，所以this.render是有值的
    let htmlString = this.render();
    let div = document.createElement('div');
    div.innerHTML = htmlString;
    this.domElement = div.children[0];
    //让这个BUTTONDOM节点的component属性等于当前Counter组建的实例
    // 当这个事件触发的时候，拿到e.target就是这个domElement元素！！！
    this.domElement.component = this;

    //最好的是解析domElement的属性，找出onClick，然后添加监听，包裹trigger函数
    //this.domElement.addEventListener('click',this.add.bind(this));
    return this.domElement;
  }

  mount(container) {
    container.appendChild(this.createElement());
  }
}