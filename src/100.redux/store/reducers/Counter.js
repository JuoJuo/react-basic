
export default function counterReducer(state={number: 0}, action) {
  switch (action.type) {
    case 'add':
      return { number: state.number + 1 };
    case 'minus':
      return { number: state.number - 1 };
    default:
      return state;
  }
}
