import { FeedsType } from "@/app/api/feeder/[page]/lib";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FeedResponseType = {
  feeds: FeedsType[];
};
// Define a type for the slice state
interface FeedState {
  feeds: {
    feeds: FeedsType[] | undefined;
  };
}

const initialState: FeedState = {
  feeds: {
    feeds: [],
  },
};

export const feedSlice = createSlice({
  name: "feedSlice",
  initialState,
  reducers: {
    setFeeds: (state, action: PayloadAction<FeedResponseType>) => {
      state.feeds.feeds = [...state.feeds.feeds!, ...action.payload.feeds];
    },

    addFeed: (state, action: PayloadAction<FeedsType | undefined>) => {
      state.feeds.feeds?.unshift(action.payload!);
    },
  },
});

export const { setFeeds, addFeed } = feedSlice.actions;

export default feedSlice.reducer;
