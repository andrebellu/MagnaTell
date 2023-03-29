<script>
	import Fire from 'phosphor-svelte/lib/Fire';
	import Eye from 'phosphor-svelte/lib/Eye';
	import TrendUp from 'phosphor-svelte/lib/TrendUp';
</script>

<div class="filters flex gap-x-1 py-2">
	<span
		class="badge rounded-r-lg p-4 text-xl animate-pulse bg-gray-200 dark:bg-accent text-gray-200"
		><Fire />
	</span>
	<span class="badge rounded-lg p-4 text-xl animate-pulse bg-gray-200 dark:bg-accent text-gray-200"
		><Eye />
	</span>
	<span
		class="badge rounded-l-lg p-4 text-xl animate-pulse bg-gray-200 dark:bg-accent text-gray-200"
	>
		<TrendUp />
	</span>
</div>
