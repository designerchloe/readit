import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const endpoint = 'https://www.reddit.com/r/books.json';

// function fetchAllData() {
//  fetch(endpoint, {cache: 'no-cache'}).then(response => {
//     if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Request failed!');
//     }, networkError => {
//         console.log(networkError.message);
//     })
// };

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
        });
      console.log(allData);
      return allData;
    }
  )



const postData = {
    children: [
        {
            kind: 't1',
            name: 'Book comment here',
            data: {
                imgUrl: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                username: 'easyreader',
                postTime: '11 hours ago'
            }
        },
        {
            kind: 't1',
            name: 'Book comment here',
            data: {
                imgUrl: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                username: 'easyreader',
                postTime: '11 hours ago'
            }
        }
    ]
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postCount: 0,
        posts: postData.children,
        allData: []
    },
    reducers: {
        log: (state, action) => {
            console.log(action.payload);
        }
    },
    extraReducers: {
        [fetchPost.pending]: (state, action) => {
            console.log('pending!')
          },
          [fetchPost.fulfilled]: (state, action) => {
            state.allData.push(action.payload);
            console.log('fulfilled!')
          },
          [fetchPost.rejected]: (state, action) => {
            console.log('rejected')
          }

    }
});

// export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;
export const selectPosts = (state) => state.posts.posts;