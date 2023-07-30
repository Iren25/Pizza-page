/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable no-unreachable */
import React from 'react';
import PetRecord from '../PetRecord/PetRecord';

interface Pet {
    id: number;
    petName: string;
    additionalInfo: string;
    displayInfo: boolean;
  }


export default function Pet(): JSX.Element {
    const dog: Pet = {
      id: 1,
      petName: 'Собака',
      additionalInfo: 'Собаки не любят выходить на улицу в дождь не потому, что бояться промокнуть, а потому, что шум дождя может повредить их чувствительные уши.',
      displayInfo: true
    };
    const cat: Pet = {
      id: 2,
      petName: 'Кошка',
      additionalInfo: 'Если кошка стоит около вас с поднятым трубой и чуть подрагивающим хвостом – это выражение ее любви к вам.',
      displayInfo: true
    };
    const raccoon: Pet = {
      id: 3,
      petName: 'Енот',
      additionalInfo: 'Еноты очень любят свои хвосты, стараются их не мочить, постоянно вычесывают и ухаживают как за своими, так и за хвостами сородичей.',
      displayInfo: true
    };
  
    return (
      <div>
        <PetRecord pet={dog} />
        <PetRecord pet={cat} />
        <PetRecord pet={raccoon} />
      </div>
    );
  }

