const fs = require('fs');

let file = fs.readFileSync('src/components/InteractiveRouteCard.tsx', 'utf8');
file = file.replace(
  /className="hidden md:flex absolute left-1\/2 top-1\/2 -translate-x-1\/2 -translate-y-1\/2 z-10 w-9 h-9/g,
  'className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9'
);

file = file.replace(
  /<ArrowRightLeft className="w-4 h-4" \/>/g,
  '<ArrowRightLeft className="w-4 h-4 rotate-90 md:rotate-0" />'
);

fs.writeFileSync('src/components/InteractiveRouteCard.tsx', file);

