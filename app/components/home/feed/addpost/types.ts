export type postOption = "textonly" | "textwithphoto" | "showphoto";
export type LoggedInUser = {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
};

export type UploadedMediasTypes = {
  medias: string[];
};
