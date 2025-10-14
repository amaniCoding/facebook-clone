import { UploadedMediasTypes } from "../types";
import Image from "next/image";

export default function Grid2({
  medias,
  type,
  uploadedMedias,
}: UploadedMediasTypes) {
  return (
    <>
      <div className="flex space-x-2 w-full">
        {type === "media" &&
          medias!.slice(0, 2).map((media, index) => (
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
          uploadedMedias!.slice(0, 2).map((media, index) => (
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
      <div className="flex space-x-2 mt-2 w-full">
        {type === "media" &&
          medias!.slice(2, 5).map((media, index) => (
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
          uploadedMedias!.slice(2, 5).map((media, index) => (
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
    </>
  );
}
