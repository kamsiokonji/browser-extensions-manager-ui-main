<script lang="ts">
	import Modal from '$lib/components/modal.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Switch } from '$lib/components/ui/switch';

	interface Props {
		name: string;
		description: string;
		logo?: string;
		isActive?: boolean;
		onDelete: (name: string) => void;
	}

	let { name, description, logo, isActive, onDelete }: Props = $props();

	let open = $state(false);

	function handleOpenChange() {
		open = !open;
	}
</script>

<Card>
	<div class="flex flex-row items-start gap-4">
		{#if logo}
			<img class="size-15" src={logo} alt={name} />
		{/if}
		<div class="flex flex-col gap-2">
			<h1 class="text-xl font-bold text-primary">{name}</h1>
			<p class="text-sm text-muted-foreground">{description}</p>
		</div>
	</div>

	<div class="flex flex-row items-center justify-between">
		<Button variant="outline" class="rounded-full" onclick={handleOpenChange}>Remove</Button>
		<Switch
			onCheckedChange={() => {
				isActive = $state.snapshot(isActive) ? false : true;
			}}
			checked={isActive ?? false}
		/>
	</div>
</Card>

<Modal onClose={handleOpenChange} {open} {name} {onDelete} />
