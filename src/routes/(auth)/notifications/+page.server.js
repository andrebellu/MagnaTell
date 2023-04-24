/** @type {import('./$types').PageServerLoad} */

import { query, collection, getDocs, where } from 'firebase/firestore';
import { db } from '$lib/firebase/firebase.client';

export async function load({ cookies }) {
    let users = []
    let myRecipes = []

    const uid = cookies.get('uid');

    const q = query(collection(db, 'recipes'), where('uid', '==', uid));
    let querySnapshot = await getDocs(q);
    for (let i = 0; i < querySnapshot.docs.length; i++) {
        myRecipes.push({
            id: querySnapshot.docs[i].id,
            title: querySnapshot.docs[i].data().title
        })
    }

    const q2 = query(collection(db, 'users'));
    let querySnapshot2 = await getDocs(q2);
    for (let i=0; i < querySnapshot2.docs.length; i++) {
        users.push({
            id: querySnapshot2.docs[i].id,
            username: querySnapshot2.docs[i].data().username
        })
    }
    
    return { users, myRecipes }
}