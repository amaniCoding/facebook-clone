import Image from "next/image";
import { UploadedMediasTypes } from "./types";

export default function Grid2({ medias }: UploadedMediasTypes) {
  return (
    <div className="flex space-x-2 w-full">
      {medias.map((media, index) => (
        <div key={index} className="w-1/2 h-64">
          <Image
            alt="Amanuel Ferede"
            src={media}
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
