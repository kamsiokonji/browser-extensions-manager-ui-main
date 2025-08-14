<script lang="ts">
	import ExtensionFilter from '$lib/components/features/extension-filter.svelte';
	import ExtensionCard from '$lib/components/features/extension-card.svelte';
	import Header from '$lib/components/features/header.svelte';
	import data from '../data.json';

	type FilterType = 'all' | 'active' | 'inactive';

	interface Extension {
		logo: string;
		name: string;
		description: string;
		isActive: boolean;
	}

	let currentFilter: FilterType = $state('all');
	let filteredData = $derived.by(() => {
		switch (currentFilter) {
			case 'active':
				return (data as Extension[]).filter((extension) => extension.isActive);
			case 'inactive':
				return (data as Extension[]).filter((extension) => !extension.isActive);
			default:
				return data as Extension[];
		}
	});

	function handleFilterChange(filter: FilterType) {
		currentFilter = filter;
	}

	function handleDelete(name: string) {
		filteredData = filteredData.filter((extension) => extension.name !== name);
	}
</script>

<div class="flex flex-col gap-16">
	<Header />

	<div class="flex flex-col gap-4">
		<ExtensionFilter
			active={currentFilter === 'active'}
			inactive={currentFilter === 'inactive'}
			all={currentFilter === 'all'}
			onFilterChange={handleFilterChange}
		/>

		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredData as extension (extension.name)}
				<ExtensionCard
					name={extension.name}
					description={extension.description}
					logo={extension.logo}
					isActive={extension.isActive}
					onDelete={handleDelete}
				/>
			{/each}
		</div>
	</div>
</div>
