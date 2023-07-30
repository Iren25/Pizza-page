import React, { useState } from 'react';
import Message from '../Message/Message';

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
        <Message title={"Counter value"} msg={String(counter)} />
        </>
    );
}