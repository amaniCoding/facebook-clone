import { Medias_USER } from "@/generated/prisma";

export type postOption = "textonly" | "textwithphoto" | "showphoto";
export type LoggedInUser = {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
};

export type UploadedMediasTypes = {
  medias?: Medias_USER[];
  uploadedMedias?: {
    type: string;
    url: string;
  }[];
  type: "upload" | "media";
};
