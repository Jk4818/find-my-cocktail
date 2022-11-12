import React from 'react'
import NoResults from '../components/NoResults'

type Props = {}

export default function NotFound({ }: Props) {
    return (
        <div>
            404
            <NoResults />
        </div>
    )
}