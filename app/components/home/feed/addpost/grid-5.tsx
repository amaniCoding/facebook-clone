import Image from "next/image";
import { UploadedMediasTypes } from "./types";

export default function Grid5({ medias }: UploadedMediasTypes) {
  return (
    <>
      <div className="flex space-x-2 w-full">
        {medias.slice(0, 2).map((media, index) => (
          <div key={index} className="w-1/2 h-64">
            <Image
              alt="Amanuel Ferede"
              src={media}
              width={0}
              height={0}
              sizes="100vh"
              className={`${
                index === 1 ? "rounded-tr-xl" : ""
              } w-full h-full object-cover`}
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-2 w-full">
        {medias.slice(2, 6).map((media, index) => (
          <div key={index} className="w-3/12 grow">
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
    </>
  );
}
