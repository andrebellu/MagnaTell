<script>
	import { realDB, db } from '$lib/firebase/firebase.client';
	import { onValue, ref as refReal } from 'firebase/database';
	import { query, collection, where, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
	let user;
	let notifications = [{ author: '', recipeTitle: '', rating: 0, time: 0 }];
	let prova = [{ userId: '', recipeId: '', time: 0, rating: 0 }];
	let querySnapshot;

	onMount(async () => {
		user = JSON.parse(
			sessionStorage.getItem('firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT')
		);
		const q = query(collection(db, 'recipes'), where('uid', '==', user.uid));
		querySnapshot = await getDocs(q);
	});

	onValue(refReal(realDB, 'recipes-grade'), (snapshot) => {
		if (snapshot.val()) {
			prova = [];
			for (let i = 0; i < querySnapshot.docs.length; i++) {
				if (Object.keys(snapshot.val()).includes(querySnapshot.docs[i].id)) {
					let snapVal = Object.values(snapshot.val()[querySnapshot.docs[i].id]);
					//querySnapshot.docs[i].id -> recipeId
					let keys = Object.keys(snapVal[1]);
					for (let j = 0; j < keys.length; j++) {
						// b[j] -> userId
						// a[1][b[j]].grade -> rating
						// a[1][b[j]].time -> time
						prova.push({
							userId: keys[j],
							recipeId: querySnapshot.docs[i].id,
							time: snapVal[1][keys[j]].time,
							rating: snapVal[1][keys[j]].grade
						});
					}
				}
			}
		}
	});
</script>

<h1>Qui arrivano i like delle mamme che apprezzano le ricette</h1>

{#each prova as notification}
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{notification.userId}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{notification.recipeId}</h6>
            <p class="card-text">{notification.time}</p>
            <p class="card-text">{notification.rating}</p>
        </div>
    </div>
{/each}
