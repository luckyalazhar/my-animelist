"use client";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <FileSearch size={32} className="text-accent gap-4" />
        <h3 className="text-accent text-4 xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className="text-primary hover:text-accent transition-all underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
