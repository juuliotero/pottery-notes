import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { user } = useUser();
  if (!user) return null;
  return (
    <nav className="absolute inset-x-0 top-0 bg-gray-800 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-16" src="./logo.jpeg" alt="Your Company" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium ">
                <a href="#">Inicio</a>
                <a href="#">Recetas</a>
                <a href="#">Explorar</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">User menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.imageUrl}
                      alt="User profile picture"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
