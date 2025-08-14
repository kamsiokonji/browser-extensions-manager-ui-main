<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	interface Props {
		active: boolean;
		inactive: boolean;
		all: boolean;
		onFilterChange?: (filter: 'all' | 'active' | 'inactive') => void;
	}

	let { active, inactive, all, onFilterChange }: Props = $props();

	function handleAll() {
		active = false;
		inactive = false;
		all = true;
		onFilterChange?.('all');
	}

	function handleActive() {
		active = true;
		inactive = false;
		all = false;
		onFilterChange?.('active');
	}

	function handleInactive() {
		active = false;
		inactive = true;
		all = false;
		onFilterChange?.('inactive');
	}
</script>

<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
	<h1 class="text-2xl font-bold text-primary">Extensions List</h1>

	<div class="flex flex-row items-center gap-3">
		<Button
			class="text-card-foreground"
			variant={all ? 'destructive' : 'outline'}
			onclick={handleAll}
			size="lg">All</Button
		>
		<Button
			class="text-card-foreground"
			variant={active ? 'destructive' : 'outline'}
			onclick={handleActive}
			size="lg">Active</Button
		>
		<Button
			class="text-card-foreground"
			variant={inactive ? 'destructive' : 'outline'}
			onclick={handleInactive}
			size="lg">Inactive</Button
		>
	</div>
</div>
