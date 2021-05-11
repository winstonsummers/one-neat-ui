import { Modal } from 'antd'
import React from 'react'

interface IAgeGate {
    isTwentyOne: boolean
}

/**
 * this component asks the user to verify their age, then sets a boolean in global state which should update local storage.
 */
const AgeGate: React.FC<IAgeGate> = (props) => {
    return <Modal />
}

export default AgeGate
