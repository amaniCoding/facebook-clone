import { FeedsType } from "@/app/api/feeder/[page]/lib";
import { ReactionType } from "@/generated/prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type updateFeedWithReactPayLoadType = {
  gReactions:
    | {
        reactionType: ReactionType;
        count: number;
      }[]
    | undefined;
  reactionType: ReactionType | undefined;
};
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

    updateFeedWithReact: (
      state,
      action: PayloadAction<updateFeedWithReactPayLoadType | undefined>
    ) => {},
  },
});

export const { setFeeds, addFeed, updateFeedWithReact } = feedSlice.actions;

export default feedSlice.reducer;
