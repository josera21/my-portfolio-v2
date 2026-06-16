/**
 * Portfolio content: CV + curated GitHub metadata (via `gh repo list`).
 * Private repo URLs are omitted on the site — GitHub would 404 for visitors.
 */

export const person = {
	name: 'José Camacaro',
	title: 'Senior Software Developer',
	location: 'Barquisimeto, Venezuela',
	email: 'camacaroj21@gmail.com',
	phone: '+58 414-5515553',
	linkedin: 'https://www.linkedin.com/in/jose-camacaro',
	github: 'https://github.com/josera21',
	summary:
		'Full Stack Developer with 7+ years of experience specializing in React, React Native, Next.js, and modern frontend architectures. Expert in AI-driven development using Cursor, Claude Code, and Codex to optimize and accelerate delivery. Skilled in backend integration (Node.js, NestJS, Rails), API optimization, and testing — a robust end-to-end perspective for high-performance products.',
} as const;

export type ExperienceItem = {
	company: string;
	role: string;
	period: string;
	highlights: string[];
};

export const experience: ExperienceItem[] = [
	{
		company: 'House Edge',
		role: 'Senior Frontend Developer',
		period: 'Oct 2025 – Present',
		highlights: [
			'In-app purchases with booster products and monthly subscriptions on Android and iOS (Play Store & App Store).',
			'Claim rewards flows on React Native mobile and Next.js web.',
			'Cross-platform Marketplace for redeeming rewards and buying products with coins — Vite + React, deployed on Firebase.',
		],
	},
	{
		company: 'CH Robinson',
		role: 'Mobile Developer',
		period: 'Jun 2022 – Oct 2025',
		highlights: [
			'Cash Advance and Financial Settings (Load Pay, Quick Pay) — features that drove user engagement and revenue.',
			'Ported legacy native iOS/Android screens to React Native, unifying the codebase and reducing maintenance overhead.',
			'Responsive web interfaces and unified React Native screens for cross-platform consistency.',
		],
	},
	{
		company: 'Ohana',
		role: 'Full Stack Developer',
		period: 'Dec 2019 – Jun 2022',
		highlights: [
			'Micro frontend architecture with React and NestJS for modular development.',
			'Interactive dashboards and reusable components that enhanced UX and developer velocity.',
			'Deployments and CI/CD pipelines with Fastlane and CircleCI.',
			'React Native mobile development with a modular micro frontend approach.',
		],
	},
	{
		company: 'Develative',
		role: 'Full Stack Developer',
		period: 'Sep 2019 – Dec 2019',
		highlights: [
			'End-to-end web apps with React and Ruby on Rails.',
			'Integrated backend services and frontend UIs for seamless user experiences.',
			'Performance improvements by optimizing backend–frontend communication.',
		],
	},
	{
		company: 'BellBank',
		role: 'Android Developer',
		period: 'Aug 2019 – Oct 2019',
		highlights: [
			'Cross-platform mobile banking app with React Native.',
			'Performance optimization and consistency across devices.',
			'Collaboration with designers and stakeholders to ship secure, user-friendly features.',
		],
	},
	{
		company: 'Najo Consultores',
		role: 'Frontend Developer',
		period: 'May 2018 – Dec 2019',
		highlights: [
			'Cryptocurrency contactless payment system (NFC) deployed live in a baseball stadium.',
			'React, Redux, Material UI, and ElectronJS.',
		],
	},
];

export type StoreAppImage = {
	src: string;
	alt: string;
	variant?: 'mobile' | 'desktop';
};

export type StoreApp = {
	name: string;
	tagline: string;
	context: string;
	role: string;
	images?: StoreAppImage[];
	links: { label: string; href: string }[];
};

export const storeApps: StoreApp[] = [
	{
		name: 'Play Clout',
		tagline: 'Esports fandom platform — pick\'ems, XP, and rewards (iOS, Android & web).',
		context:
			'Led multiple redesigns across mobile and web to keep the player experience fresh and intuitive. Optimized pick\'em gameplay and introduced in-app purchases — season passes and XP/coin boosters — giving users more ways to earn rewards while driving platform revenue.',
		role: 'Senior Frontend at House Edge — React Native, Next.js, IAP, Marketplace (Vite + Firebase).',
		images: [
			{
				src: '/projects/play-clout-mobile.png',
				alt: 'Play Clout mobile home screen with pick\'em cards and season pass banner',
				variant: 'mobile',
			},
			{
				src: '/projects/play-clout-web-lobby.png',
				alt: 'Play Clout web lobby with live pick\'ems and promotional banners',
				variant: 'desktop',
			},
			{
				src: '/projects/play-clout-marketplace.png',
				alt: 'Play Clout marketplace with season passes and booster products',
				variant: 'desktop',
			},
		],
		links: [
			{
				label: 'App Store',
				href: 'https://apps.apple.com/us/app/play-clout/id1485722011',
			},
			{
				label: 'Google Play',
				href: 'https://play.google.com/store/apps/details?id=com.threecurveesports.clout&hl=en-US',
			},
			{
				label: 'Web',
				href: 'https://playclout.gg/',
			},
		],
	},
	{
		name: 'Ohana Inversiones',
		tagline: 'Investment product (iOS & Android).',
		context:
			'Built the app from the ground up and maintained it for 6+ years through constant updates — adapting to new technologies and evolving market needs. Iterated on onboarding many times, improving facial recognition and national ID (DNI) verification to reduce friction and increase conversion.',
		role: 'Full stack & React Native — micro frontends, NestJS, CI/CD.',
		images: [
			{
				src: '/projects/ohana-home.png',
				alt: 'Ohana Inversiones home screen with balance, quick actions, and investment funds',
				variant: 'mobile',
			},
		],
		links: [
			{
				label: 'App Store',
				href: 'https://apps.apple.com/app/ohana-inversiones/id1586020326',
			},
			{
				label: 'Google Play',
				href: 'https://play.google.com/store/apps/details?id=com.ohana.app',
			},
		],
	},
	{
		name: 'Navisphere Carrier',
		tagline: 'Logistics / carrier workflows (iOS & Android).',
		context:
			'Migrated legacy native iOS and Android screens to React Native within the same app — an invisible transition for users with zero business disruption. New features shipped in parallel as the codebase unified under modern cross-platform technology.',
		role: 'Mobile Developer at CH Robinson — React Native migration, web & mobile features.',
		images: [
			{
				src: '/projects/ch-robinson-login.png',
				alt: 'Navisphere Carrier web login with payments value proposition',
				variant: 'desktop',
			},
		],
		links: [
			{
				label: 'App Store',
				href: 'https://apps.apple.com/us/app/navisphere-carrier/id1089613477',
			},
			{
				label: 'Google Play',
				href: 'https://play.google.com/store/search?q=Navisphere+Carrier&c=apps',
			},
		],
	},
];

export type RepoProject = {
	name: string;
	description: string;
	language: string | null;
	isPrivate: boolean;
	/** Public clone/view URL; null when private (no public link). */
	url: string | null;
	tags: string[];
};

/** Curated from `gh repo list josera21` — most relevant / recent first. */
export const repoProjects: RepoProject[] = [
	{
		name: 'GDrink',
		description: 'Drinking games to play with friends.',
		language: 'TypeScript',
		isPrivate: true,
		url: null,
		tags: ['typescript', 'web', 'private'],
	},
	{
		name: 'ves-to-usd',
		description: 'Convert VES ↔ USD using BCV and parallel rates.',
		language: 'TypeScript',
		isPrivate: true,
		url: null,
		tags: ['typescript', 'web', 'private', 'tool'],
	},
	{
		name: 'happy-cleaning',
		description: 'Happy House cleaning company site.',
		language: 'Astro',
		isPrivate: true,
		url: null,
		tags: ['astro', 'web', 'private'],
	},
	{
		name: 'raffle-web',
		description: 'Web app for creating and managing raffles.',
		language: 'HTML',
		isPrivate: true,
		url: null,
		tags: ['web', 'private'],
	},
	{
		name: 'futbol-demo',
		description: 'React Native / Expo app for football player management.',
		language: 'TypeScript',
		isPrivate: true,
		url: null,
		tags: ['typescript', 'react-native', 'mobile', 'private'],
	},
	{
		name: 'beer-ecommerce-demo',
		description: 'Beer ecommerce demo challenge.',
		language: 'JavaScript',
		isPrivate: false,
		url: 'https://github.com/josera21/beer-ecommerce-demo',
		tags: ['javascript', 'web', 'open-source'],
	},
	{
		name: 'cashela-challenge',
		description: 'Demo app (TypeScript).',
		language: 'TypeScript',
		isPrivate: false,
		url: 'https://github.com/josera21/cashela-challenge',
		tags: ['typescript', 'web', 'open-source'],
	},
	{
		name: 'GoMarketAPP',
		description: 'Hybrid mobile app consuming a REST API (Django).',
		language: 'JavaScript',
		isPrivate: false,
		url: 'https://github.com/josera21/GoMarketAPP',
		tags: ['javascript', 'mobile', 'open-source'],
	},
];

export const skillGroups = [
	{
		title: 'Languages',
		items: ['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Dart', 'Ruby', 'HTML/CSS'],
	},
	{
		title: 'Mobile',
		items: ['React Native', 'Android SDK', 'Flutter'],
	},
	{
		title: 'Frontend',
		items: ['React', 'Next.js', 'AngularJS'],
	},
	{
		title: 'Backend',
		items: ['Node.js', 'Ruby on Rails', 'NestJS'],
	},
	{
		title: 'Testing & DevOps',
		items: ['Jest', 'GitHub Actions', 'CircleCI', 'Docker', 'Fastlane'],
	},
	{
		title: 'Databases',
		items: ['PostgreSQL', 'MongoDB', 'Firestore'],
	},
	{
		title: 'AI Tools',
		items: ['Claude Code', 'Codex', 'Cursor'],
	},
	{
		title: 'Tools',
		items: ['Git', 'Jira', 'Azure DevOps', 'Postman', 'Sentry'],
	},
	{
		title: 'Other',
		items: ['RESTful APIs', 'GraphQL', 'TDD', 'SOLID', 'Scrum', 'Kanban'],
	},
] as const;

export type Certification = {
	name: string;
	provider: string;
	period: string;
};

export const certifications: Certification[] = [
	{ provider: 'Anthropic', name: 'Claude with the Anthropic API', period: 'May 2026' },
	{ provider: 'Anthropic', name: 'Introduction to Model Context Protocol', period: 'Apr 2026' },
	{ provider: 'Anthropic', name: 'Introduction to agent skills', period: 'Apr 2026' },
	{ provider: 'Platzi', name: 'N8N Technical Fundamentals', period: 'May – Jun 2025' },
	{
		provider: 'Security Journey',
		name: 'Intermediate & Foundational — Software Developer',
		period: 'Apr 2025',
	},
	{ provider: 'Platzi', name: 'Prompt Engineering with ChatGPT', period: 'Feb 2025' },
	{ provider: 'Platzi', name: 'Android Technical Fundamentals', period: 'Apr 2023' },
	{ provider: 'Platzi', name: 'React.js Render Patterns', period: 'Jan 2022' },
	{ provider: 'HackerRank', name: 'React Basic Certificate', period: 'Feb 2022' },
	{ provider: 'freeCodeCamp', name: 'Front-end Developer', period: 'Sep 2017' },
];

export const education = {
	degree: 'BSc Software Engineering',
	school: 'Universidad Centroccidental “Lisandro Alvarado”',
	period: 'Jan 2012 – Jan 2018',
} as const;

export const languages = [
	{ name: 'Spanish', level: 'Native speaker' },
	{ name: 'English', level: 'Highly proficient in speaking and writing' },
] as const;
