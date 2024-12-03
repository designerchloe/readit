import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const endpoint = 'https://www.reddit.com/r/books.json';

export const fetchPost = createAsyncThunk(
    'posts/fetchPost',
    async () => {
      const allData = await fetch(endpoint, {cache: 'no-cache'}).then(response => {
        if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            const allPosts = jsonResponse.data.children;
            return allPosts;
        });
        //console.log(allData);
        return allData;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        log: (state, action) => {
            console.log(action.payload);
        }
    },
    extraReducers: {
        [fetchPost.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          },
          [fetchPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            action.payload.map(post => {
                state.posts.push(post);
            })
          },
          [fetchPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
          }

    }
});

export default postsSlice.reducer;
export const selectPosts = (state) => state.posts.posts;