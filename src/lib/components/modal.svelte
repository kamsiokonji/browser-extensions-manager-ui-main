<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';

	interface Props {
		open: boolean;
		onClose: () => void;
		name: string;
		onDelete: (name: string) => void;
	}

	let { open, onClose, name, onDelete }: Props = $props();
</script>

<Dialog {open} onOpenChange={onClose}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Delete {name}?</DialogTitle>
		</DialogHeader>
		<DialogFooter>
			<Button variant="outline" class="rounded-full" onclick={onClose}>Cancel</Button>
			<Button variant="destructive" class="rounded-full" onclick={() => onDelete(name)}
				>Delete</Button
			>
		</DialogFooter>
	</DialogContent>
</Dialog>
