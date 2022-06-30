import React, { useState, useEffect } from 'react'

export default function ClearBurger(props) {
    render() {
        return (
            <>
                <p onClick={() => { props.clearBurger() }}>clear</p>
            </>
        )
    }
}