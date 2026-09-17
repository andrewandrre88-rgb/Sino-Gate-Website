const fs = require('fs');
let file = fs.readFileSync('src/components/InteractiveRouteCard.tsx', 'utf8');

// Container
file = file.replace(
  /className="inline-flex p-1\.5 bg-\[#F1F4F9\] rounded-full border border-slate-200\/80 self-start lg:self-center"/,
  'className="flex overflow-x-auto w-full sm:w-auto sm:inline-flex p-1.5 bg-[#F1F4F9] rounded-2xl sm:rounded-full border border-slate-200/80 self-start lg:self-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"'
);

// Buttons
file = file.replace(
  /className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all \$\{/g,
  'className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${'
);

fs.writeFileSync('src/components/InteractiveRouteCard.tsx', file);
