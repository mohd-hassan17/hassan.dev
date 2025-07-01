// lib/fontawesome.ts
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Prevent auto-adding CSS (Next.js handles this separately)
config.autoAddCss = false;

// Add icons to the library
library.add(fas, faGithub, faLinkedin, faTwitter );
