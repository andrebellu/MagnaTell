<script>
	import { realDB, db } from '$lib/firebase/firebase.client';
	import { onValue, ref as refReal } from 'firebase/database';
	import { myRecipesNotifications, usersNotifications } from '../../stores/store';
	import { onMount } from 'svelte';
	import { query, collection, where, getDocs } from 'firebase/firestore';

	let user;
	let notifications = [{ author: '', recipeTitle: '', rating: 0, time: 0 }];
	let author, recipeTitle, rating, time;

	onMount(async () => {
		myRecipesNotifications.set([]);

		user = JSON.parse(
			sessionStorage.getItem('firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT')
		);

		const q = query(collection(db, 'recipes'), where('uid', '==', user.uid)); // to fixed: if refresh profile or home page and then go to notifications there aren't notifications
		let querySnapshot = await getDocs(q);
		for (let i = 0; i < querySnapshot.docs.length; i++) {
			myRecipesNotifications.update((myRecipes) => [
				...myRecipes,
				{
					id: querySnapshot.docs[i].id,
					title: querySnapshot.docs[i].data().title
				}
			]);
		}
	});

	onValue(refReal(realDB, 'recipes-grade'), (snapshot) => {
		if (snapshot.val()) {
			notifications = [];
			for (let i = 0; i < $myRecipesNotifications.length; i++) {
				if (Object.keys(snapshot.val()).includes($myRecipesNotifications[i].id)) {
					let snapVal = Object.values(snapshot.val()[$myRecipesNotifications[i].id]);
					let keys = Object.keys(snapVal[1]);
					recipeTitle = $myRecipesNotifications[i].title;
					for (let j = 0; j < keys.length; j++) {
						for (let k = 0; k < $usersNotifications.length; k++) {
							if ($usersNotifications[k].id == keys[j]) {
								author = $usersNotifications[k].username;
							}
						}
						rating = snapVal[1][keys[j]].grade;
						time = new Date(snapVal[1][keys[j]].time).toLocaleString();

						notifications.push({
							author,
							recipeTitle,
							rating,
							time
						});
					}
				}
			}
		}
	});
</script>

{#each notifications as notification}
	<div class="card bg-primary m-4">
		<div class="card-body">
			<p class="card-text font-semibold">
				{notification.author} has put {notification.rating} stars to {notification.recipeTitle} at {notification.time}
			</p>
		</div>
	</div>
{/each}
