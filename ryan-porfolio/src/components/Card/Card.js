import React from 'react';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody'

function Card(title) {
    return (
        <div className='flex flex-col p-4 rounded-lg bg-zinc-800'>
            <CardHeader title={title} />
            <CardBody>{text}</CardBody>
        </div>
    )
}

export { Card }