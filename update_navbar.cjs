const fs = require('fs');

let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const oldLinks = `<a href="tel:+8675588269100" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{lang === 'AR' ? 'المقر (شنتشن):' : 'Shenzhen HQ:'}</span> +86 755 8826 9100
            </a>
            <a href="tel:+85228105988" className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'AR' ? 'هونغ كونغ:' : 'HK Hub:'}</span> +852 2810 5988
            </a>`;

const newLinks = `<a href="https://wa.me/8618567413851" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{lang === 'AR' ? 'واتساب / هاتف:' : 'WhatsApp / Phone:'}</span> +86 18567413851
            </a>`;

// Replace spacing issue by using a regex just in case
navbar = navbar.replace(/<a href="tel:\+8675588269100"[\s\S]*?\+852 2810 5988\s*<\/a>/, newLinks);
fs.writeFileSync('src/components/Navbar.tsx', navbar);
