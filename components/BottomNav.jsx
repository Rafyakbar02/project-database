import React from "react";

function BottomNav() {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-20 bg-red-700">
      <div class="flex h-full w-full mx-auto font-medium justify-around">
        <button type="button" class="px-5 hover:bg-red-600 group h-full w-full">
          <span class="text-xl sm:text-2xl text-white">PUPR</span>
        </button>
        <button type="button" class="px-5 hover:bg-red-600 group h-full w-full">
          <span class="text-xl sm:text-2xl text-white">Non-PUPR</span>
        </button>
        <button type="button" class="px-5 hover:bg-red-600 group h-full w-full">
          <span class="text-xl sm:text-2xl text-white">PDF</span>
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
