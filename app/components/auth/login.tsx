import Link from "next/link";

export default function Login() {
  return (
    <div className="mt-36 max-w-5xl mx-auto">
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-6xl font-bold text-blue-600">Facebook</p>
          <p className="text-3xl">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white shadow-lg p-5 w-5/6 rounded-lg">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Email or phone number"
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-0 focus:border focus:border-blue-500"
              ></input>

              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-0 focus:border focus:border-blue-500"
              ></input>

              <button className="w-full p-3 bg-blue-600 text-white rounded-lg">
                Login
              </button>
              <p className=" text-center">Forgot password?</p>
              <p className="text-center w-full border-b border-b-gray-100"></p>
              <div className="flex justify-center">
                <Link
                  href={"/register"}
                  className="hover:bg-green-500 text-center block w-1/2 p-3 bg-green-600 text-white rounded-lg"
                >
                  Create new account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
