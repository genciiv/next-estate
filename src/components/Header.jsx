import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-600">GV-</span>
            <span className="text-black">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Kerko..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden md:inline text-slate-700 hover:underline">
              Kryefaqe
            </li>
          </Link>
          <Link href="/about">
            <li className="hidden md:inline text-slate-700 hover:underline">
              Rreth Nesh
            </li>
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in">
              <li className="hidden md:inline text-slate-700 hover:underline">
                Logohu
              </li>
            </Link>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
}
