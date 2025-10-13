"use client";

import { UploadedMediasTypes } from "./types";
import Grid2 from "./grid-2";
import Grid3 from "./grid-3";
import Grid4 from "./grid-4";
import Grid5 from "./grid-5";
import GridMore from "./grid-more";

export default function UploadedMedias({ medias }: UploadedMediasTypes) {
  return (
    <div className={`w-full rounded-xl bg-amber-200`}>
      {/* {medias.length} */}

      {medias.length === 2 && <Grid2 medias={medias} />}
      {medias.length === 3 && <Grid3 medias={medias} />}
      {medias.length === 4 && <Grid4 medias={medias} />}
      {medias.length === 5 && <Grid5 medias={medias} />}
      {medias.length > 5 && <GridMore medias={medias} />}
    </div>
  );
}
