<script>
	import { title_store, difficulty_store } from '../../../../routes/stores/store';
	export let cover;
	import BookmarkSimple from 'phosphor-svelte/lib/BookmarkSimple';
	import Star from 'phosphor-svelte/lib/Star';

	let user = JSON.parse(
		localStorage.getItem('firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT')
	);
</script>

<!-- change text font after implementation of the new font-->

<div class="rounded-3xl flex flex-col items-center -mb-16">
	<img
		src={cover}
		alt="img"
		class="rounded-3xl h-32 w-32 object-cover z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
	/>
	<div class="card bg-accent z-0 w-40 h-40 flex justify-end -translate-y-16">
		<div class="body px-4 pb-1 text-accent-content flex flex-col gap-y-2 -translate-y-1">
			<div class="title flex justify-between gap-x-1">
				<div class="flex flex-col overflow-hidden text-ellipsis">
					<h1 class="font-bold text-lg truncate">
						{$title_store}
					</h1>
					<div class="flex flex-row gap-x-1">
						<h1 class="font-semibold text-xs">Chef</h1>
						<h1 class="font-medium text-xs truncate">{user.displayName}</h1>
					</div>
				</div>
				<div class="text-lg"><BookmarkSimple /></div>
			</div>
			<div class="valutation flex justify-between items-center">
				<p class="text-2xl font-semibold leading-none">
					{#if $difficulty_store == 'easy'}
						<div class="text-green-800">•</div>
					{:else if $difficulty_store == 'medium'}
						<div class="text-amber-500">••</div>
					{:else}
						<div class="text-red-600">•••</div>
					{/if}
				</p>
				<div class="flex flex-row text-xs font-poppins font-normal items-center">
					4,8
					<div class=" text-xs text-yellow-500"><Star weight="fill" /></div>
				</div>
			</div>
		</div>
	</div>
</div>
