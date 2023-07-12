import React from "react";
import Link from "next/link";

function BottomNav() {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-20 bg-red-700">
      <div class="flex h-full w-full mx-auto font-medium justify-around">
        <Link
          href="/pupr"
          class="px-5 hover:bg-red-600 flex w-full items-center justify-center"
        >
          <span class="text-xl sm:text-2xl text-white">PUPR</span>
        </Link>
        <Link
          href="non-pupr"
          class="px-5 hover:bg-red-600 flex w-full items-center justify-center"
        >
          <span class="text-xl sm:text-2xl text-white">Non-PUPR</span>
        </Link>
        <Link
          href="pdf"
          class="px-5 hover:bg-red-600 flex w-full items-center justify-center"
        >
          <span class="text-xl sm:text-2xl text-white">PDF</span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNav;
