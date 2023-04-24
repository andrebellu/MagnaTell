<script>
	import { realDB } from '$lib/firebase/firebase.client';
	import { onValue, ref as refReal } from 'firebase/database';
	import { onMount } from 'svelte';
	export let data;

	let notifications = [{ author: '', recipeTitle: '', rating: 0, date: 0, timestamp: 0 }];
	let author, recipeTitle, rating, date;

	onValue(refReal(realDB, 'recipes-grade'), (snapshot) => {
		if (snapshot.val()) {
			notifications = [];
			for (let i = 0; i < data.myRecipes.length; i++) {
				if (Object.keys(snapshot.val()).includes(data.myRecipes[i].id)) {
					let snapVal = Object.values(snapshot.val()[data.myRecipes[i].id]);
					let keys = Object.keys(snapVal[1]);
					recipeTitle = data.myRecipes[i].title;
					for (let j = 0; j < keys.length; j++) {
						let usersKeys = [];
						for (let k = 0; k < data.users.length; k++) {
							usersKeys.push(data.users[k].id);
						}
						if (usersKeys.includes(keys[j])) {
							for (let k = 0; k < data.users.length; k++) {
								if (data.users[k].id == keys[j]) {
									author = data.users[k].username;
								}
							}
						} else {
							author = 'Unknown';
						}

						rating = snapVal[1][keys[j]].grade;
						date = new Date(snapVal[1][keys[j]].time).toLocaleString();

						notifications.push({
							author,
							recipeTitle,
							rating,
							date,
							timestamp: snapVal[1][keys[j]].time
						});
					}
				}
			}
		}
		notifications.sort((a,b) => b.timestamp - a.timestamp);
	});
</script>

{#each notifications as notification}
	<div class="card bg-accent m-4">
		<div class="card-body">
			<p class="card-text font-semibold">
				{notification.author} has put {notification.rating} stars to {notification.recipeTitle} at {notification.date}
			</p>
		</div>
	</div>
{/each}
