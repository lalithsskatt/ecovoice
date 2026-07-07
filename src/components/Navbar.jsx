import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/leaf2.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/community", label: "Community" },
  { to: "/learn", label: "Learn" },
  { to: "/climate-map", label: "ClimateMap" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar({
  theme,
  toggleTheme,
  mobileMenu,
  setMobileMenu,
  onNotify,
}) {
  const { user, logout } = useAuth();

  const [profileMenu, setProfileMenu] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-200/60 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-around gap-4 px-2 py-4 lg:px-1">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenu(false)}
          className="flex items-center gap-3 rounded-3xl bg-emerald-50/80 px-3 py-2 transition hover:bg-emerald-100 dark:bg-slate-900/70 dark:hover:bg-slate-800"
        >
          <img
            src={logo}
            alt="EcoVoice Logo"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-base font-semibold text-slate-900 dark:text-white">
              EcoVoice
            </p>

            <p className="text-xs text-emerald-600 dark:text-emerald-400">
              Sustainability in action
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-4 text-sm font-medium md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive
                    ? "text-emerald-700 dark:text-emerald-300 border-b-2 border-emerald-600"
                    : "text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Notification */}
          {/* <button
            type="button"
            onClick={() =>
              onNotify("Global environment information")
            }
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200 md:flex"
          >
            🔔
          </button> */}

          {user ? (
            <>
              {/* Dashboard */}
              <Link
                to="/dashboard"
                onClick={() => setMobileMenu(false)}
                className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-100 dark:border-slate-700 dark:bg-slate-900 dark:text-emerald-300 md:flex"
              >
                <span className="h-3.5 w-3.5 rounded-full bg-emerald-600" />
                Dashboard
              </Link>

              {/* Profile Dropdown */}
              <div
                className="relative hidden md:block"
                ref={profileRef}
              >
                <button
                  onClick={() =>
                    setProfileMenu(!profileMenu)
                  }
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-900"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                      {user?.name?.charAt(0).toUpperCase() ||
                        "U"}
                    </div>
                  )}

                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      {user?.name || "User"}
                    </p>
                  </div>

                  <span className="text-xs">▼</span>
                </button>

                {profileMenu && (
                  <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">

                    <Link
                      to="/profile"
                      onClick={() => {
                        setProfileMenu(false);
                        setMobileMenu(false);
                      }}
                      className="block px-5 py-3 text-sm hover:bg-emerald-50 dark:hover:bg-slate-800"
                    >
                      Profile
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setProfileMenu(false);
                      }}
                      className="w-full px-5 py-3 text-left text-sm hover:bg-red-50 hover:text-red-600 dark:hover:bg-slate-800"
                    >
                      Sign Out
                    </button>

                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="hidden md:flex">
              <Link
                to="/auth"
                onClick={() => setMobileMenu(false)}
                className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
              >
                Sign In
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenu((open) => !open)
            }
            className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>
      </div>
          {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">

            {/* Navigation Links */}
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 dark:bg-slate-800 dark:text-emerald-300"
                      : "hover:bg-emerald-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {user ? (
              <>
                {/* Dashboard */}
                <NavLink
                  to="/dashboard"
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 transition ${
                      isActive
                        ? "bg-emerald-100 text-emerald-700 dark:bg-slate-800 dark:text-emerald-300"
                        : "hover:bg-emerald-100 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  Dashboard
                </NavLink>

                {/* User Info */}
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 p-3 dark:border-slate-700">

                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                      {user?.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold">
                      {user?.name}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {user?.email}
                    </p>
                  </div>

                </div>

                {/* Profile */}
                <Link
                  to="/profile"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-full px-4 py-2 transition hover:bg-emerald-100 dark:hover:bg-slate-800"
                >
                  👤 Profile
                </Link>

                {/* Sign Out */}
                <button
                  onClick={() => {
                    logout();
                    setMobileMenu(false);
                  }}
                  className="rounded-full border border-red-200 px-4 py-2 text-left text-red-600 transition hover:bg-red-50 dark:border-red-700 dark:hover:bg-slate-800"
                >
                  🚪 Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                onClick={() => setMobileMenu(false)}
                className="rounded-full bg-emerald-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-emerald-700"
              >
                Sign In
              </Link>
            )}

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;