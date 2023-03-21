import {addPostAC, deletePostAC, PostsType, ProfilePageType, profileReducer} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'Hey la lay', likesCount: 15},
        {id: 2, message: 'Bla bla', likesCount: 11}
    ] as Array<PostsType>,
    profile: {},
    status: ''
} as ProfilePageType

test('length of posts should be incremented', () => {

    const action = addPostAC('newPostText')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3);
});

test('message of new message should be correct', () => {

    const action = addPostAC('newPostText')

    const newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('newPostText');
});

test('after deleting length of messages should be decrement', () => {

    const action = deletePostAC(2)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1);
});

test('after deleting length should be decrement if id is incorrect', () => {

    const action = deletePostAC(100)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2);
});
