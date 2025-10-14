"use client";
import Image from "next/image";
import { UploadedMediasTypes } from "./types";
import Grid2 from "./shared/grid-2";
import Grid3 from "./shared/grid-3";
import Grid4 from "./shared/grid-4";
import Grid5 from "./shared/grid-5";
import GridMore from "./shared/grid-more";

export default function UploadedMedias({
  type,
  uploadedMedias,
}: UploadedMediasTypes) {
  return (
    <div className={`w-full rounded-xl bg-amber-200`}>
      {/* {uploadedMedias!.length} */}
      {uploadedMedias!.length === 1 && (
        <Image
          alt="Amanuel Ferede"
          src={uploadedMedias![0].url}
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-full object-cover"
        />
      )}
      {uploadedMedias!.length === 2 && (
        <Grid2 type={type} uploadedMedias={uploadedMedias} />
      )}
      {uploadedMedias!.length === 3 && (
        <Grid3 type={type} uploadedMedias={uploadedMedias} />
      )}
      {uploadedMedias!.length === 4 && (
        <Grid4 type={type} uploadedMedias={uploadedMedias} />
      )}
      {uploadedMedias!.length === 5 && (
        <Grid5 type={type} uploadedMedias={uploadedMedias} />
      )}
      {uploadedMedias!.length > 5 && (
        <GridMore type={type} uploadedMedias={uploadedMedias} />
      )}
    </div>
  );
}
