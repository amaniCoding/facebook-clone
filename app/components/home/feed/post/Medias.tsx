"use client";
import Image from "next/image";
import Grid2 from "../addpost/shared/grid-2";
import Grid3 from "../addpost/shared/grid-3";
import Grid4 from "../addpost/shared/grid-4";
import Grid5 from "../addpost/shared/grid-5";
import GridMore from "../addpost/shared/grid-more";
import { UploadedMediasTypes } from "../addpost/types";

export default function Medias({ medias, type }: UploadedMediasTypes) {
  return (
    <div className={`w-full rounded-xl bg-amber-200`}>
      {/* {medias.length} */}
      {medias!.length === 1 && (
        <Image
          alt="Amanuel Ferede"
          src={medias![0].url}
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-full object-cover"
        />
      )}
      {medias!.length === 2 && <Grid2 medias={medias} type={type} />}
      {medias!.length === 3 && <Grid3 medias={medias} type={type} />}
      {medias!.length === 4 && <Grid4 medias={medias} type={type} />}
      {medias!.length === 5 && <Grid5 medias={medias} type={type} />}
      {medias!.length > 5 && <GridMore medias={medias} type={type} />}
    </div>
  );
}
