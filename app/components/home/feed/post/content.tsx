"use client";
import Image from "next/image";
export default function Content() {
  return (
    <div>
      <p className=" px-3.5 my-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui
        neque quas, harum ullam iste! Eligendi hic aliquam quod tenetur? Eaque
        quae velit suscipit autem iure fugiat, iusto adipisci beatae!
      </p>
      {/** image */}
      <Image
        unoptimized
        className="w-full"
        alt="Amanuel Ferede"
        src={"/users/3.jpg"}
        width={0}
        height={0}
        sizes="100vh"
      />
    </div>
  );
}
