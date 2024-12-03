import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCommentstByPostId = createAsyncThunk(
    'comments/fetchCommentsByPostId',
    async (postPermalink) => {
        
        const getEndpoint = () => {
            let permalink = postPermalink;
            permalink = permalink.slice(0, -1);
            return `https://www.reddit.com${permalink}.json`;
        };

        const endpoint = getEndpoint();

        const comments = await fetch(endpoint, {cache: 'no-cache'}).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
            }, networkError => {
                console.log(networkError.message);
            }).then(jsonResponse => {
                const postObject = jsonResponse[1];
                const postComments = postObject.data.children;
                let commentData = postComments.map(com => ({ text: com.data.body, author: com.data.author, created: com.data.created_utc }));
                return commentData;
            });
            return comments;
        }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        log: (state, action) => {
            console.log(action.payload);
        }
    },
    extraReducers: {
        [fetchCommentstByPostId.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
            console.log('pending!');
          },
          [fetchCommentstByPostId.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            console.log('fulfilled!');
          },
          [fetchCommentstByPostId.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            console.log('rejected!');
          }

    }
});

export default commentsSlice.reducer;