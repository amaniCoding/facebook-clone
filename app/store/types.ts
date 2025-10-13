export type postOption = "textonly" | "textwithphoto" | "showphoto";

export type SetUploadedMediasToAdd = {
  type: "add" | "delete" | "empty";
  mediaUrl?: string;
  mediaToFilter?: string;
};
