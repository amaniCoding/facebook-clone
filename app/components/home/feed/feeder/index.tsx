import Image from "next/image";
import Link from "next/link";
import { FaFacebookMessenger, FaUserFriends } from "react-icons/fa";
import { IoIosMore, IoMdMore } from "react-icons/io";
export default function Feeder() {
  return (
    <>
      <div className="py-2 bg-white rounded-lg mb-4 shadow-md">
        <div className="flex justify-between">
          <div className="flex space-x-3 px-6 pt-2">
            <div className="flex-col space-y-0.5 relative group">
              <Link href={"/profile"}>
                <Image
                  unoptimized
                  alt="Amanuel Ferede"
                  src={"/users/3.jpg"}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-10 h-10 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
                />
              </Link>
            </div>
            <div>
              <div className="flex-col space-y-0.5 relative group">
                <Link href={"/profile"} className="peer block">
                  <span className="font-semibold">Amanuel Ferede</span>
                </Link>
                <div
                  className={
                    "absolute group-hover:block hidden w-96 z-10  -left-32 rounded-lg  p-4  bg-white shadow-lg"
                  }
                >
                  <div className="flex space-x-3">
                    <Image
                      unoptimized
                      className="w-20 h-20 rounded-full  object-cover"
                      alt="Amanuel Ferede"
                      src={"/users/2.jpg"}
                      width={0}
                      height={0}
                      sizes="100vh"
                    />

                    <div className=" flex-col space-y-2 flex-1 mt-3">
                      <p className="text-lg font-bold">Amanuel Ferede</p>
                      <p className="">Lives in AddisAbaba Ethiopia </p>
                      <p>Studid Civil Engineering at BahirDar University</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-3">
                    <button className="px-3 grow py-1.5 bg-gray-400 text-white flex space-x-2 items-center justify-center rounded-md">
                      <FaUserFriends className="w-4 h-4" />
                      <span>Friends</span>
                    </button>
                    <button className="px-3 grow py-1.5 bg-blue-600 text-white flex space-x-2 items-center justify-center rounded-md">
                      <FaFacebookMessenger className="fill-white w-4 h-4" />
                      <span>Message</span>
                    </button>
                    <button className="p-3 bg-gray-400 text-white flex space-x-2 items-center rounded-md">
                      <IoIosMore className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-sm">2 Hours</span>
            </div>
          </div>
          <IoMdMore className="w-8 h-8" />
        </div>

        <div className="px-5 mb-3 mt-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            adipisci modi obcaecati sequi asperiores necessitatibus quidem odio
            temporibus? Et obcaecati voluptatibus, cumque incidunt expedita esse
            aliquid mollitia eius nemo dolor.
          </p>
          <Image
            unoptimized
            className="w-full"
            alt="Amanuel Ferede"
            src={"/users/2.jpg"}
            width={0}
            height={0}
            sizes="100vh"
          />
        </div>
      </div>
    </>
  );
}
