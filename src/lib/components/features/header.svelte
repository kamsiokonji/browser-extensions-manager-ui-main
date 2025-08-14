<script lang="ts">
	import { Card, CardHeader, CardTitle } from '$lib/components/ui/card';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
</script>

<header>
	<Card class="p-3">
		<CardHeader class="flex flex-row items-center justify-between p-0">
			<CardTitle>
				<img src="/images/logo.svg" alt="logo" />
			</CardTitle>

			<ThemeToggle />
		</CardHeader>
	</Card>
</header>
