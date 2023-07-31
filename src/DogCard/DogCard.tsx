/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

export default function DogCard() {
    const[url, setUrl] = useState('');
    const serviceUrl: string = 'https://dog.ceo/api/breeds/image/random';

    function setImageUrl(): void{
        fetch(serviceUrl)
        .then((res:Response) => res.json())
        .then((result) => {
            const message = result.message;
            setUrl(message);

        });
    }

    useEffect(()=>{setImageUrl()}, []);

  return (
    <>
    <img src={url} alt="dog"></img>
    </>);
}
