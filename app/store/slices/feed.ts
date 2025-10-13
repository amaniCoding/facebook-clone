import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetUploadedMediasToAdd } from "../types";

// Define a type for the slice state
interface FeedState {
  currentPostAction: {
    toShowCommentModal: boolean;
  };
  addPost: {
    toShowAddPostModal: boolean;
    post: string;
    hasChoosenPhoto: boolean;
    upLoadedMedias: string[];
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
    hasChoosenPhoto: false,
    upLoadedMedias: [],
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

    setPostToAdd: (state, action: PayloadAction<string>) => {
      state.addPost.post = action.payload;
    },

    setUploadedMediasToAdd: (
      state,
      action: PayloadAction<SetUploadedMediasToAdd>
    ) => {
      switch (action.payload.type) {
        case "add":
          state.addPost.upLoadedMedias.push(action.payload.mediaUrl!);
          break;
        case "delete":
          const media = state.addPost.upLoadedMedias.find(
            (media) => media === action.payload.mediaToFilter
          );
          if (media) {
            state.addPost.upLoadedMedias = state.addPost.upLoadedMedias.filter(
              (media) => media !== media
            );
          }
          break;

        case "empty":
          state.addPost.upLoadedMedias = [];

        default:
          break;
      }
    },
  },
});

export const {
  showCommentModal,
  showAddPostModal,
  setPostToAdd,
  setUploadedMediasToAdd,
} = feedSlice.actions;

export default feedSlice.reducer;
