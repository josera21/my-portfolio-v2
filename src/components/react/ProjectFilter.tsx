import { useMemo, useState } from 'react';

export type FilterProject = {
	name: string;
	description: string;
	language: string | null;
	isPrivate: boolean;
	url: string | null;
	tags: string[];
};

const FILTERS = [
	{ id: 'all', label: 'All' },
	{ id: 'open-source', label: 'Open source' },
	{ id: 'private', label: 'Private' },
	{ id: 'mobile', label: 'Mobile' },
	{ id: 'web', label: 'Web' },
] as const;

type FilterId = (typeof FILTERS)[number]['id'];

export default function ProjectFilter({ projects }: { projects: FilterProject[] }) {
	const [active, setActive] = useState<FilterId>('all');

	const filtered = useMemo(() => {
		if (active === 'all') return projects;
		if (active === 'open-source') return projects.filter((p) => p.tags.includes('open-source'));
		if (active === 'private') return projects.filter((p) => p.isPrivate);
		if (active === 'mobile') return projects.filter((p) => p.tags.includes('mobile') || p.tags.includes('react-native'));
		if (active === 'web') return projects.filter((p) => p.tags.includes('web'));
		return projects;
	}, [projects, active]);

	return (
		<div className="space-y-6">
			<div
				className="flex flex-wrap gap-2"
				role="tablist"
				aria-label="Filter projects"
			>
				{FILTERS.map((f) => {
					const selected = active === f.id;
					return (
						<button
							key={f.id}
							type="button"
							role="tab"
							aria-selected={selected}
							onClick={() => setActive(f.id)}
							className={
								selected
									? 'rounded-sm border border-cyber-green/50 bg-cyber-green/15 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-cyber-green shadow-[0_0_14px_rgba(0,255,157,0.2)]'
									: 'rounded-sm border border-zinc-700/80 bg-cyber-surface/60 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-zinc-500 transition hover:border-cyber-cyan/30 hover:text-cyber-cyan'
							}
						>
							{f.label}
						</button>
					);
				})}
			</div>
			<ul className="grid gap-4 sm:grid-cols-2">
				{filtered.map((p) => (
					<li
						key={p.name}
						className="flex flex-col rounded-sm border border-cyber-green/15 bg-cyber-surface/45 p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.3)] backdrop-blur-sm transition hover:border-cyber-cyan/25 hover:shadow-[0_0_20px_rgba(0,240,255,0.08)]"
					>
						<div className="flex flex-wrap items-center gap-2">
							<h3 className="font-mono text-base font-medium tracking-wide text-zinc-100">{p.name}</h3>
							{p.isPrivate ? (
								<span className="rounded-sm border border-cyber-amber/35 bg-cyber-amber/10 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-cyber-amber">
									Private
								</span>
							) : null}
							{p.language ? (
								<span className="rounded-sm border border-zinc-700 bg-cyber-bg/80 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
									{p.language}
								</span>
							) : null}
						</div>
						<p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
						<div className="mt-4">
							{p.url ? (
								<a
									href={p.url}
									target="_blank"
									rel="noopener noreferrer"
									className="font-mono text-sm font-medium text-cyber-cyan transition hover:text-cyber-green"
								>
									<span className="text-cyber-magenta">→</span> View on GitHub
								</a>
							) : (
								<span className="font-mono text-xs text-zinc-600">Repository is private on GitHub</span>
							)}
						</div>
					</li>
				))}
			</ul>
			{filtered.length === 0 ? (
				<p className="font-mono text-xs text-zinc-600">No projects in this filter.</p>
			) : null}
		</div>
	);
}
