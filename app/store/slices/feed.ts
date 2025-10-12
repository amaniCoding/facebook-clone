import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface FeedState {
  currentPostAction: {
    toShowCommentModal: boolean;
  };
  addPost: {
    toShowAddPostModal: boolean;
    post: string;
  };
}

// Define the initial state using that type
const initialState: FeedState = {
  currentPostAction: {
    toShowCommentModal: false,
  },
  addPost: {
    toShowAddPostModal: false,
    post: "",
  },
};

export const feedSlice = createSlice({
  name: "feedSlice",
  initialState,
  reducers: {
    showCommentModal: (state, action: PayloadAction<boolean>) => {
      state.currentPostAction.toShowCommentModal = action.payload;
    },
    showAddPostModal: (state, action: PayloadAction<boolean>) => {
      state.addPost.toShowAddPostModal = action.payload;
    },

    setPost: (state, action: PayloadAction<string>) => {
      state.addPost.post = action.payload;
    },
  },
});

export const { showCommentModal, showAddPostModal, setPost } =
  feedSlice.actions;

export default feedSlice.reducer;
