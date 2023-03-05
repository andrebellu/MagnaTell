<script>
    import { realDB } from '$lib/firebase/firebase.client';
    import { ref as refReal, onValue, set, remove } from "firebase/database";
    import { page } from '$app/stores';
    let gradeWrite = 0;
    let gradeRead = 0;
    let recipeId = ''
    const uid = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT')).uid;

    page.subscribe(() => {
        recipeId = $page.url.pathname.replace('/recipes/', '');
    });

    onValue(refReal(realDB, 'recipes-grade/' + recipeId + '/stars/' + uid), (snapshot) => {
        if (snapshot.val()) {
            gradeRead = snapshot.val();
        }
    })

    function rating() {
        if(gradeWrite==0){
            remove(refReal(realDB, 'recipes-grade/' + recipeId + '/stars/' + uid));
        }else{
            set(refReal(realDB, 'recipes-grade/' + recipeId + '/stars/' + uid), gradeWrite);
        }
    }
</script>

<div class="rating rating-md">
    <input type="radio" on:change={rating} on:input={() => gradeWrite=0} name="rating-1" class="rating-hidden" checked={gradeRead == 0}/>
    <input type="radio" on:change={rating} on:input={() => gradeWrite=1} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 1}/>
    <input type="radio" on:change={rating} on:input={() => gradeWrite=2} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 2}/>
    <input type="radio" on:change={rating} on:input={() => gradeWrite=3} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 3}/>
    <input type="radio" on:change={rating} on:input={() => gradeWrite=4} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 4}/>
    <input type="radio" on:change={rating} on:input={() => gradeWrite=5} name="rating-1" class="mask mask-star-2 bg-primary" checked={gradeRead == 5}/>
</div>