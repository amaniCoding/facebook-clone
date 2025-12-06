import { MediaType } from "@/generated/prisma/client";

export type MediaPropType = {
  medias:
    | {
        id: string;
        createdAt: Date;
        url: string;
        type: MediaType;
      }[]
    | undefined;
};
