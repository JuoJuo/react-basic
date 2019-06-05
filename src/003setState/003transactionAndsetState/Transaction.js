class Transaction {
  constructor(wrappers) {
    this.wrappers = wrappers;//{initialize,close}
  }

  perform(anyMethod) {
    this.wrappers.forEach(wrapper => wrapper.initialize());
    anyMethod.call();
    this.wrappers.forEach(wrapper => wrapper.close());
  }
}