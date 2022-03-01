import contextHelper from './contextHelper';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [...state, {title: `Blog Post #${state.length + 1}`}];
  }
};

const addBlogPosts = (dispatch) => {
  return () => {
    dispatch({type: 'add_blogPost'});
  }
};

export const {BlogContext, Provider} = contextHelper(
  blogReducer,
  {addBlogPosts},
  [],
);
