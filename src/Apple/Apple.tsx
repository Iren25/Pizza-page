import { useState } from "react"

export default function Apple(): JSX.Element {
    const [apple, setApple] = useState<string>("Apple");

    function eat(): void {
        if(apple === 'Apple') {
        setApple('');
    } else { 
        setApple('Apple');
        }
    }


    return (
        <>
        <button type="button" onClick={eat}>eat apple</button>
        <p>{apple}</p>
        </>
    );
}