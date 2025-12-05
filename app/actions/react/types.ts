import { ReactionType } from "@/generated/prisma/client";

export type State = {
  success: boolean;
  _gReactions:
    | {
        reactionType: ReactionType;
        count: number;
      }[]
    | undefined;
  reactionType: ReactionType | undefined;
  message: string | undefined;
};
