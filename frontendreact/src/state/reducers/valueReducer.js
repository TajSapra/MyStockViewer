const valueReducer = (state = '', action) => {
  if(action.type==='Change'){
      return {
        ...state,
        value : action.payload || 'AAPL',
        lastRefreshTime: state.lastRefreshTime ? state.lastRefreshTime : 0
      }
  }
  else if (action.type === 'Data'){
    return {
      ...state, 
      value : state.value || 'AAPL',
      data: action.payload,
      lastRefreshTime: state.lastRefreshTime ? state.lastRefreshTime : 0
    }
  }
  else if (action.type === 'Interval'){
    return {...state, intervalId:action.payload}
  }
  else if(action.type === 'Time'){
    return {
      ...state, 
      value : state.value || 'AAPL',
      lastRefreshTime: action.payload
    }
  }
  return {};
};
export default valueReducer;