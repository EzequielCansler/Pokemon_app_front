import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-color1">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
          Sign up for a new account
        </h2>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="user_handle"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              id="user_handle"
              name="user_name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-color3 focus:border-color3 placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email_address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email_address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-color3 focus:border-color3 placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-color3 hover:text-color4"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-color3 focus:border-color3 placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="birthdate"
              className="block text-sm font-medium text-gray-700"
            >
              Birthdate
            </label>
            <input
              id="birthdate"
              name="date"
              type="date"
              autoComplete=""
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-color3 focus:border-color3 placeholder-gray-400 sm:text-sm"
            />
          </div>

          <div>
            <Link href={"/"}>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-color3 hover:bg-color4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color3"
              >
                Sign up
              </button>
            </Link>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already a member?{" "}
          <a href="#" className="font-semibold text-color3 hover:text-color4">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
