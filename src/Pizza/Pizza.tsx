import React, { useState } from 'react';

export default function Pizza(): JSX.Element {
    const [pizza, setPizza] = useState ('Pizza');

    function handleAddTomato(): void {
        setPizza(`${pizza} помидоры`);
    }
    function handleAddCheese(): void {
        setPizza(`${pizza} моцарелла`);
    }
    function handleAddPepperoni(): void {
        setPizza(`${pizza} пепперони`);
    }
    function handleAddMushrooms(): void {
        setPizza(`${pizza} грибы`);
    }
    function handleAddOliven(): void {
        setPizza(`${pizza} оливки`);
    }
    function handleCleanIngredient(): void {
        setPizza('Pizza')
    }

    return (
        <div>
            <h1>Make your pizza</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1N-p4lDxyQpl9OwBMft5AdJ3adW6uiJyMw&usqp=CAU" alt="pizza" />
            <p>{pizza}</p>
            <button type="button" onClick={handleAddTomato}>Добавить помидоры</button>
            <button type="button" onClick={handleAddCheese}>Добавить моцареллу</button>
            <button type="button" onClick={handleAddPepperoni}>Добавить пепперони</button>
            <button type="button" onClick={handleAddMushrooms}>Добавить грибы</button>
            <button type="button" onClick={handleAddOliven}>Добавить оливки</button>
            <button type="button" onClick={handleCleanIngredient}>Очистить</button>
        </div>
    )
}