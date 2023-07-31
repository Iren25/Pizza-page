/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

interface Activity {
    activity: string,
    type: string,
    participants: number,
    price: number,
    link: string,
    key: string,
    accesability: number
}

export default function Activity(): JSX.Element {
   const initialValue: Activity = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accesability: 0
   }
   const [activity, setActivity] = useState<Activity>(initialValue);
   async function loadActivity(): Promise<void> {
    const res = await fetch('https://www.boredapi.com/api/activity');
    const obj = await res.json();
    setActivity(obj);
   }
   useEffect(() => {loadActivity()}, [])

  return (
    <>
    <h1>{activity.activity}</h1>
    <p>Вид досуга: {activity.type} Участники: {activity.participants} Цена: {activity.price}</p>
    <a href={activity.link}>Подробнее</a>
    <button type="button" onClick={loadActivity}>Другой досуг</button>
    </>
  );
}
