"use client";
import Image from "next/image";
import { UploadedMediasTypes } from "../../addpost/types";

export default function Grid2({
  medias,
  type,
  uploadedMedias,
}: UploadedMediasTypes) {
  return (
    <div className="flex space-x-2 w-full">
      {type === "media" &&
        medias!.map((media, index) => (
          <div key={index} className="w-1/2 h-64">
            {media.type === "image" && (
              <Image
                alt="Amanuel Ferede"
                src={media.url}
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

      {type === "upload" &&
        uploadedMedias!.map((media, index) => (
          <div key={index} className="w-1/2 h-64">
            {media.type === "image" && (
              <Image
                alt="Amanuel Ferede"
                src={media.url}
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
    </div>
  );
}
