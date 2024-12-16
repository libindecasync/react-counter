import { useCount } from "../CountContext";

export function useCounter() {
  const { state, dispatch } = useCount();

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return {
    count: state.count,
    increment,
    decrement,
  };
}
