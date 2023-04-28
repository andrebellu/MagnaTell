<script>
    import { realDB } from '$lib/firebase/firebase.client';
    import { ref as refReal, onValue, set, remove, get, child } from "firebase/database";
    import { page } from '$app/stores';
    let gradeRead = 0;
    let average = 0;
    let recipeId = ''
    const uid = JSON.parse(sessionStorage.getItem('user')).uid;
    let gradeWithTime = {grade: 0, time: 0}

    page.subscribe(() => {
        recipeId = $page.url.pathname.replace('/recipes/', '');
    });

    onValue(refReal(realDB, 'recipes-grade/' + recipeId + '/stars/' + uid), (snapshot) => {
        if (snapshot.val()) {
            gradeRead = snapshot.val().grade;
        }
    })

    onValue(refReal(realDB, 'recipes-grade/' + recipeId + '/stars'), (snapshot) => {
        if (snapshot.val()) {
            average = 0;
            const stars = Object.values(snapshot.val())
            stars.forEach((star) => {
                average += star.grade;
            });
            average = Number((average / stars.length).toFixed(1));
            set(refReal(realDB, 'recipes-grade/' + recipeId + '/average'), average);
        }
    })

    function rating() {
        if(gradeWithTime.grade == 0){
            /* const tasksRef = refReal(realDB, "reciepes-grade/" + recipeId);
            get(tasksRef).then((snapshot) => {
                const data = snapshot.val();
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            }); */

            remove(refReal(realDB, 'recipes-grade/' + recipeId + '/stars/' + uid));
        }else{
            set(refReal(realDB, 'recipes-grade/' + recipeId + '/stars/' + uid), gradeWithTime);
        }
    }
</script>

<div class="rating rating-md">
    <input type="radio" on:change={rating} on:input={() => gradeWithTime={grade: 0, time: Date.now()}} name="rating-1" class="rating-hidden" checked={gradeRead == 0}/>
    <input type="radio" on:change={rating} on:input={() => gradeWithTime={grade: 1, time: Date.now()}} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 1}/>
    <input type="radio" on:change={rating} on:input={() => gradeWithTime={grade: 2, time: Date.now()}} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 2}/>
    <input type="radio" on:change={rating} on:input={() => gradeWithTime={grade: 3, time: Date.now()}} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 3}/>
    <input type="radio" on:change={rating} on:input={() => gradeWithTime={grade: 4, time: Date.now()}} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 4}/>
    <input type="radio" on:change={rating} on:input={() => gradeWithTime={grade: 5, time: Date.now()}} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 5}/>
</div>