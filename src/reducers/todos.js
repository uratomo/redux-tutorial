// reducersの絶対的な形式  (state, action) => {}  <= この形式について理解したい場合はfluxとElm を理解すると良い
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        // spred演算子 https://redux.js.org/recipes/using-object-spread-operator, https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
