export default (
  state = {
    loading: false,
  },
  action,
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
