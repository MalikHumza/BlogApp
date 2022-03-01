import React, {useReducer} from 'react';

export default (reducer, action, initialState) => {
  const BlogContext = React.createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions= {};
    for (let key in action) {
        boundActions[key] = action[key](dispatch);
    }
    return (
      <BlogContext.Provider value={{state, ...boundActions}}>
        {children}
      </BlogContext.Provider>
    );
  };
  return{BlogContext, Provider};
};
