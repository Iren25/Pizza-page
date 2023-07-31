import React, { useEffect, useState } from 'react'

export default function Consultation(): JSX.Element {
    const [numberOfTeeth, setNumberOfTeeth] = useState(0);
    const [url, setUrl] =useState<string>('');


    function handleToothGrow(): void {
        setNumberOfTeeth (numberOfTeeth + 1);
    }

    const [weight, setWeight] = useState(60);
    function handleTakeWeight(): void {
        setWeight(weight + 5);
    }
    useEffect(() => {
        console.log('UseEffect 1 - ');
    }, []);

    useEffect(() => {
        console.log('UseEffect 2 - '); 
    });

    useEffect(() => {
        console.log('UseEffect 3 - '); 
    }, [numberOfTeeth]);

    useEffect(() => {
        console.log('UseEffect 4 - ');
    }, [weight]);

    async function loadDogImage(): Promise<void> {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const obj = await res.json();
        const { message } = obj;
        setUrl(message);
    }
    useEffect(() => {
        loadDogImage();
    }, []);

  return (
    <div>
        <h1>Повторим useEffect</h1>
        <p>Число зубов: {numberOfTeeth}</p>
        <p>Кол-во кг: {weight}</p>
        <button type="button" onClick={handleToothGrow}>Вырастить зуб</button>
        <button type="button" onClick={handleTakeWeight}>Набрать вес</button>
        <div>
         <img src={url} alt="dog" />
        </div>
        </div>
  )
}
