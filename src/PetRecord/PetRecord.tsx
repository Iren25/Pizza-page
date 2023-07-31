/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styles from './PetRecord.module.css'

interface Pet {
    id: number;
    petName: string;
    additionalInfo: string;
    displayInfo: boolean;
}
interface Props {
    pet: Pet;

}
export default function PetRecord(props: Props): JSX.Element {
    const { pet } = props;
    const { id, petName, additionalInfo } = pet;

const [showAdditionalInfo, setShowAdditionalInfo] = useState (false);

    return (
        <div className={styles.container}>
            <h2>Животное: {petName}</h2>
            <p>ID: {id}</p>
            <button type="button" onClick={() => setShowAdditionalInfo (!showAdditionalInfo)}>
                {showAdditionalInfo ? 'Скрыть информацию' : 'Дополнительная информация'}
            </button>
            {showAdditionalInfo && <p>{additionalInfo}</p>}
        </div>
    );
}
