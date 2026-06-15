/**
 * Portfolio content: CV + curated GitHub metadata (via `gh repo list`).
 * Private repo URLs are omitted on the site — GitHub would 404 for visitors.
 */

export const person = {
	name: 'José Camacaro',
	title: 'Senior Frontend Developer',
	location: 'Barquisimeto, Venezuela',
	email: 'camacaroj21@gmail.com',
	phone: '+58 414-5515553',
	linkedin: 'https://www.linkedin.com/in/jose-camacaro',
	github: 'https://github.com/josera21',
	summary:
		'Full stack developer with 6+ years of experience building scalable, high-performance web applications. Specialized in React, Next.js, and modern frontend architectures, with strong JavaScript and TypeScript skills. Experienced with React Native, Node.js, NestJS, and Rails — focused on accessible UIs, performance, and shipping reliable products.',
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
			'In-app purchases, booster products, and monthly subscriptions on Android and iOS (Play Store & App Store).',
			'Claim rewards flows on React Native mobile and Next.js web.',
		],
	},
	{
		company: 'CH Robinson',
		role: 'Frontend / Full Stack Developer',
		period: 'Jun 2022 – Oct 2025',
		highlights: [
			'Responsive web UIs and unified React Native screens for cross-platform consistency.',
			'Cash Advance, Financial Settings (Load Pay, Quick Pay), and features that supported engagement and revenue.',
			'Migrated legacy native iOS/Android screens to React Native to unify the codebase.',
		],
	},
	{
		company: 'Ohana',
		role: 'Full Stack Developer',
		period: 'Dec 2019 – Jun 2022',
		highlights: [
			'Micro frontend architecture with React and NestJS.',
			'Dashboards, reusable components, CI/CD with Fastlane and CircleCI.',
			'React Native mobile development with a modular micro frontend approach.',
		],
	},
	{
		company: 'Develative',
		role: 'Full Stack Developer',
		period: 'Sep 2019 – Dec 2019',
		highlights: [
			'End-to-end web apps with React and Ruby on Rails.',
			'Performance improvements across backend–frontend integration.',
		],
	},
	{
		company: 'BellBank',
		role: 'Android Developer',
		period: 'Aug 2019 – Oct 2019',
		highlights: [
			'Cross-platform mobile banking with React Native.',
			'Collaboration with design and stakeholders for secure, user-friendly features.',
		],
	},
	{
		company: 'Najo Consultores',
		role: 'Frontend Developer',
		period: 'May 2018 – Dec 2019',
		highlights: [
			'Cryptocurrency contactless payments (NFC) deployed in a stadium context.',
			'React, Redux, Material UI, Electron.',
		],
	},
];

export type StoreApp = {
	name: string;
	tagline: string;
	role: string;
	links: { label: string; href: string }[];
};

export const storeApps: StoreApp[] = [
	{
		name: 'Play Clout',
		tagline: 'Esports fandom platform — pick\'ems, XP, and rewards (iOS, Android & web).',
		role: 'Senior Frontend at House Edge — React Native mobile, Next.js web, IAP & subscriptions.',
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
		role: 'Full stack & React Native — micro frontends, NestJS, CI/CD.',
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
		role: 'Frontend & React Native at CH Robinson — web and mobile feature work.',
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
		title: 'Data',
		items: ['PostgreSQL', 'MongoDB', 'Firestore'],
	},
	{
		title: 'Tools & practices',
		items: ['Git', 'Jira', 'Azure DevOps', 'Postman', 'Sentry', 'REST', 'GraphQL', 'TDD', 'SOLID', 'Scrum', 'Kanban'],
	},
] as const;

export const education = {
	degree: 'BSc Software Engineering',
	school: 'Universidad Centroccidental “Lisandro Alvarado”',
	period: 'Jan 2012 – Jan 2018',
} as const;

export const languages = [
	{ name: 'Spanish', level: 'Native' },
	{ name: 'English', level: 'Highly proficient (speaking & writing)' },
] as const;
