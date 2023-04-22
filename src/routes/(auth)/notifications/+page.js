/** @type {import('./$types').PageLoad} */

import { query, collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebase/firebase.client';
import { usersNotifications } from '../../stores/store';

export async function load({ }) {
    usersNotifications.set([]);
    
    const q2 = query(collection(db, 'users'));
    let querySnapshot2 = await getDocs(q2);
    for (let i = 0; i < querySnapshot2.docs.length; i++) {
        usersNotifications.update((users) => [
            ...users,
            {
                id: querySnapshot2.docs[i].id,
                username: querySnapshot2.docs[i].data().username,
            }
        ]);
    }
}