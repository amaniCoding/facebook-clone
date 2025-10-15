"use client";
import Image from "next/image";
import { UploadedMediasTypes } from "../../addpost/types";

export default function GridMore({
  medias,
  type,
  uploadedMedias,
}: UploadedMediasTypes) {
  const overFlow_medias = type === "media" && medias!.length - 5;

  const overFlow_uploads = type === "upload" && uploadedMedias!.length - 5;
  return (
    <div className="w-full h-[28rem]">
      <div className="flex space-x-2 w-full h-1/2">
        {type === "media" &&
          medias!.slice(0, 2).map((media, index) => (
            <div
              key={index}
              className="w-1/2 h-full"
              style={{
                backgroundImage: "url(" + `${media.url}` + ")",
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
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
      <div className="flex space-x-2 mt-2 w-full h-1/2">
        {type === "media" &&
          medias!.slice(2, 5).map((media, index) => (
            <div
              key={index}
              className="w-1/3 h-full grow relative"
              style={{
                backgroundImage: "url(" + `${media.url}` + ")",
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {index === 2 && (
                <div className=" absolute top-0 left-0 bottom-0 right-0 z-10 bg-black/20 flex items-center justify-center">
                  <p className="text-white  text-5xl">{`+${overFlow_medias}`}</p>
                </div>
              )}
            </div>
          ))}

        {type === "upload" &&
          uploadedMedias!.slice(2, 5).map((media, index) => (
            <div key={index} className=" h-1/2 grow relative">
              {index === 2 && (
                <div className=" absolute top-0 left-0 bottom-0 right-0 z-10 bg-black/20 flex items-center justify-center">
                  <p className="text-white  text-5xl">{`+${overFlow_uploads}`}</p>
                </div>
              )}
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
    </div>
  );
}
