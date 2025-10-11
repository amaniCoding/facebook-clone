import Image from "next/image";
import { IoIosMore } from "react-icons/io";
import { CgClose } from "react-icons/cg";
export default function Feeder() {
  return (
    <>
      <div className="rounded-xl bg-white">
        {/** header */}
        <div className="flex items-center justify-between px-3 pt-3">
          <div className="flex items-center space-x-3">
            <Image
              unoptimized
              alt="Amanuel Ferede"
              src={"/users/3.jpg"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-8 h-8 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Amanuel Ferede</p>
              <p className="text-sm">2hrs</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <IoIosMore className="w-7 h-7" />
            <CgClose />
          </div>
        </div>
        {/** post content */}
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
    </>
  );
}
