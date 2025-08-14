<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function toggleTheme() {
		theme.toggle();
	}

	$: isDark = mounted && $theme === 'dark';
</script>

<Button size="icon" variant="secondary" onclick={toggleTheme} aria-label="Toggle theme">
	{#if mounted}
		{#if isDark}
			<img src="/images/icon-sun.svg" alt="Light mode" />
		{:else}
			<img src="/images/icon-moon.svg" alt="Dark mode" />
		{/if}
	{:else}
		<!-- Fallback while mounting -->
		<img src="/images/icon-moon.svg" alt="Theme" />
	{/if}
</Button>
