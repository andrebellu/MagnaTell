<script>
	import { recipes } from '../../../../routes/stores/store';
</script>

<div class="carousel carousel-center px-4 py-2 space-x-4">
	{#each $recipes as recipe}
		<div
			class="carousel-home"
			style="background:url({recipe.data.cover});background-size:cover;background-position:center;"
		>
			<a href="/recipes/{recipe.id}">
				<div class="carousel-home bg-gradient-to-t from-secondary to-transparent">
					<div class="px-4 pb-4 text-white flex flex-col-reverse w-full">
						<div class="flex justify-between items-center">
							<div class="text-sm font-poppins">{recipe.data.category.join(', ')}</div>
							<div class="flex flex-row text-sm text-white font-poppins">
								4,8
								<div class="material-icons text-sm text-yellow-500">grade</div>
							</div>
						</div>
						<div class="text-2xl font-bold font-cormorant leading-6">{recipe.data.title}</div>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
