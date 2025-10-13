import Image from "next/image";
import { UploadedMediasTypes } from "./types";

export default function Grid3({ medias }: UploadedMediasTypes) {
  return (
    <div className="flex space-x-2 w-full h-full">
      <div className="w-[70%]">
        <Image
          alt="Amanuel Ferede"
          src={medias[0]}
          width={0}
          height={0}
          sizes="100vh"
          className="w-full object-cover"
        />
      </div>
      <div className="w-[30%] flex flex-col space-y-2">
        {medias.slice(1, 3).map((media, index) => (
          <div key={index} className="w-full grow bg-amber-50">
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
    </div>
  );
}
