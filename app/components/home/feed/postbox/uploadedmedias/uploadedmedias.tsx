"use client";

export type UploadedMediasTypes = {
  medias: string[];
};

export default function UploadedMedias({ medias }: UploadedMediasTypes) {
  return (
    <div className="w-full h-auto">
      {medias.length}

      <div className="flex flex-wrap space-x-2">
        {medias.length > 5 && (
          <div className="flex h-full space-x-2">
            <div className="flex flex-col space-y-2">
              {medias.slice(0, 3).map((media, index) => {
                return (
                  <div
                    className="w-[230px] h-[10.5rem]"
                    key={index}
                    style={{
                      backgroundImage: "url(" + `${media}` + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                );
              })}
            </div>

            <div className="flex flex-col space-y-2">
              {medias.slice(3, 4).map((media, index) => {
                return (
                  <div
                    className="w-[230px] h-[15.5rem] grow"
                    key={index}
                    style={{
                      backgroundImage: "url(" + `${media}` + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                );
              })}
              <div
                className="w-[230px] h-[15.5rem] relative"
                style={{
                  backgroundImage: "url(" + `${medias[5]}` + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/65 flex items-center justify-center">
                  <p className="text-white">{medias.length - 5} +</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {medias.length === 5 && (
          <div className="flex h-full space-x-2">
            <div className="flex flex-col space-y-2">
              {medias.slice(0, 3).map((media, index) => {
                return (
                  <div
                    className="w-[230px] h-[10.5rem]"
                    key={index}
                    style={{
                      backgroundImage: "url(" + `${media}` + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                );
              })}
            </div>

            <div className="flex flex-col space-y-2">
              {medias.slice(3, 6).map((media, index) => {
                return (
                  <div
                    className="w-[230px] h-[15.5rem] grow"
                    key={index}
                    style={{
                      backgroundImage: "url(" + `${media}` + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        )}
        {medias.length === 4 && (
          <div className="flex h-full space-x-2">
            <div className="flex flex-col space-y-2">
              {medias.slice(0, 2).map((media, index) => {
                return (
                  <div
                    className="w-[230px] h-[15.5rem]"
                    key={index}
                    style={{
                      backgroundImage: "url(" + `${media}` + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                );
              })}
            </div>

            <div className="flex flex-col space-y-2">
              {medias.slice(2, 4).map((media, index) => {
                return (
                  <div
                    className="w-[230px] h-[15.5rem]"
                    key={index}
                    style={{
                      backgroundImage: "url(" + `${media}` + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        )}
        {medias.length === 3 && (
          <div className="flex h-full space-x-2">
            <div className="flex flex-col space-y-2">
              {medias.slice(0, 2).map((media, index) => {
                return (
                  <div
                    className="w-[230px] h-[15.5rem]"
                    key={index}
                    style={{
                      backgroundImage: "url(" + `${media}` + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                );
              })}
            </div>

            <div
              className="w-[230px] h-[31.5rem]"
              style={{
                backgroundImage: "url(" + `${medias[2]}` + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        )}

        {medias.length === 2 &&
          medias.map((media, index) => {
            return (
              <div
                className="w-[230px] h-[15.5rem]"
                key={index}
                style={{
                  backgroundImage: "url(" + `${media}` + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            );
          })}

        {medias.length === 1 &&
          medias.map((media, index) => {
            return (
              <div
                className="w-[230px] h-[15.5rem]"
                key={index}
                style={{
                  backgroundImage: "url(" + `${media}` + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            );
          })}
      </div>
    </div>
  );
}
