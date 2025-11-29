"use client"

import React from 'react'
import CurvedLoop from '../ui/CurvedLoop'

// Displays a looping curved marquee of action words
export default function AdjectiveLoop() {
    return (
        <div className="hidden md:block md:mt-16">
            <CurvedLoop
                marqueeText="Learn • Build • Lead • Code •"
                speed={3}
                curveAmount={300}
                direction="right"
                interactive={true}
                className="custom-text-style"
            />
        </div>
    )
}
