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
									? 'rounded-lg border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-medium text-accent-light shadow-sm'
									: 'rounded-lg border border-white/8 bg-surface/60 px-4 py-1.5 text-xs font-medium text-zinc-500 transition hover:border-accent/25 hover:text-zinc-300'
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
						className="card flex flex-col p-5"
					>
						<div className="flex flex-wrap items-center gap-2">
							<h3 className="font-display text-base font-semibold text-zinc-100">{p.name}</h3>
							{p.isPrivate ? (
								<span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-300">
									Private
								</span>
							) : null}
							{p.language ? (
								<span className="rounded-md border border-white/8 bg-bg/80 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
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
									className="text-sm font-medium text-accent-light transition hover:text-highlight"
								>
									View on GitHub →
								</a>
							) : (
								<span className="text-xs text-zinc-600">Repository is private on GitHub</span>
							)}
						</div>
					</li>
				))}
			</ul>
			{filtered.length === 0 ? (
				<p className="text-xs text-zinc-600">No projects in this filter.</p>
			) : null}
		</div>
	);
}
