class Updater {
  constructor(component) {
    this.component = component;
    this.pendingStates = [];
  }

  addState(partcialState) {
    this.pendingStates.push(partcialState);
    batchingStrategy.isBatchingUpdates
      ? batchingStrategy.dirtyComponents.push(this.component)
      : this.component.updateComponent()
  }
}