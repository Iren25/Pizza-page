import React, { useState } from 'react';

export default function Counter(): JSX.Element{
    const[counter, setCounter] = useState(0);

    function add(): void{
        setCounter(counter+1);
    }
    /*let counter: number = 11;

    function add(): void{
        counter++; 
        console.log(counter);
    } */
    return (
        <>
        <button type="button" onClick={add}>Click me</button>
        <h2>{counter}</h2>
        </>
    );
}