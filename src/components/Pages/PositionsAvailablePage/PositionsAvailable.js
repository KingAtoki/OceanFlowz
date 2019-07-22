import React from 'react'
import { Card } from '../../Card/Card'
import { POS_AVA_NOTE, POS_AVA_HEADER } from '../../../messages'

export const PositionsAvailable = ({ positions }) => {
    return (
        <div>
            <h1>{POS_AVA_HEADER}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {positions.map(position => (
                    <Card key={position} title={position} />
                ))}
                <p>{POS_AVA_NOTE}</p>
            </div>
        </div>
    )
}
