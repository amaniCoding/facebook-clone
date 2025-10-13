import Image from "next/image";
import { UploadedMediasTypes } from "./types";

export default function GridMore({ medias }: UploadedMediasTypes) {
  const overFlow = medias.length - 5;
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-2 w-full">
        {medias.slice(2, 5).map((media, index) => (
          <div key={index} className="w-3/12 h-40 grow relative">
            {index === 2 && (
              <div className=" absolute top-0 left-0 bottom-0 right-0 z-10 bg-black/20 flex items-center justify-center">
                <p className="text-white  text-5xl">{`+${overFlow}`}</p>
              </div>
            )}
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
