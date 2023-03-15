import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <nav className="bg-gray-800 mb-5">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between">
          <div className="relative flex h-16 items-center justify-evenly">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/*
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
            */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://media.istockphoto.com/id/922745190/tr/foto%C4%9Fraf/blogging-blog-kavramlar%C4%B1-fikirleri-ile-worktable.jpg?s=612x612&w=0&k=20&c=KLW2rxPe96Pahhtqr2blHab7q06Zqz9Pqcrq11gOe-o="
                    alt="home icon"
                  />
                </Link>
                <Link href="/">
                  <img
                    className="hidden h-8 w-auto lg:block rounded"
                    src="https://media.istockphoto.com/id/922745190/tr/foto%C4%9Fraf/blogging-blog-kavramlar%C4%B1-fikirleri-ile-worktable.jpg?s=612x612&w=0&k=20&c=KLW2rxPe96Pahhtqr2blHab7q06Zqz9Pqcrq11gOe-o="
                    alt="home icon"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link
                    href="/"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() => signOut()}
                    href="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    SignOut
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={
                        session.user.image ||
                        "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                      }
                      alt="user img"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link
              href="/"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              onClick={() => signOut()}
              href="/register"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              SignOut
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="bg-gray-800 mb-5">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between">
          <div className="relative flex h-16 items-center justify-evenly">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/*
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://media.istockphoto.com/id/922745190/tr/foto%C4%9Fraf/blogging-blog-kavramlar%C4%B1-fikirleri-ile-worktable.jpg?s=612x612&w=0&k=20&c=KLW2rxPe96Pahhtqr2blHab7q06Zqz9Pqcrq11gOe-o="
                    alt="home icon"
                  />
                </Link>
                <Link href="/">
                  <img
                    className="hidden h-8 w-auto lg:block rounded"
                    src="https://media.istockphoto.com/id/922745190/tr/foto%C4%9Fraf/blogging-blog-kavramlar%C4%B1-fikirleri-ile-worktable.jpg?s=612x612&w=0&k=20&c=KLW2rxPe96Pahhtqr2blHab7q06Zqz9Pqcrq11gOe-o="
                    alt="home icon"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link
                    href="/"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    href="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    SignIn
                  </Link>
                  <Link
                    href="register2"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                      alt="user img"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link
              href="/"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/register"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              SignIn
            </Link>
            <Link
              href="register2"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
