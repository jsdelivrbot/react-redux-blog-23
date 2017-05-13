# React Redux Blog App

An intermediate tutorial app aimed at furthering React and Redux concepts and knowledge. This tutorial is aimed at:
- Implementing CRUD routes
- Utilizing [react-router V4](https://reacttraining.com/react-router/)
- Utilizing [redux-form v6](http://redux-form.com/6.7.0/)

The following `README.md` is to consolidate the key learning points for future reference.

The tutorial can be found [here](https://www.udemy.com/react-redux/)

## Key Learning Points
#### State Structure
- Use objects over arrays to store data.
- Allows ease of access to specific data set.
- Ex. using the lodash library:
```js
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
```

#### Injection action creator shortcut
- If an object is passed, each function inside it is assumed to be a Redux action creator.
```js
connect(mapStateToProps, { fetchPosts })(PostsIndex);
```
