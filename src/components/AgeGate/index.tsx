import React from 'react'
import { Modal } from 'antd'

interface IAgeGate {

}

/**
 * this component asks the user to verify there age, then sets a boolean in global state which should update local storage.
 */
const AgeGate: React.FC<IAgeGate> = () => {
    return <Modal />
}

export default AgeGate
