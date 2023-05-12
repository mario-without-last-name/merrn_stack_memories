export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      /*return posts;*/ return action.payload;
    case 'CREATE':
      /*return posts;*/ return [...posts, action.payload];
    default:
      return posts;
  }
};