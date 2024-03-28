import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    
    return (
        <section className='App'>
            <TwitterFollowCard userName="melridente"> 
                MelRidente
            </TwitterFollowCard>
            <TwitterFollowCard userName="joxsuex">
                Josue Morales
            </TwitterFollowCard>
        </section>
    )
}