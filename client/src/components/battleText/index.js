import React from 'react'
import './battleText.css'

function battleText({ handleButtonFight, handleButtonInventory, handleButtonQuit, handleButtonRun, battleDialogue, faded, disabled }) {



    const textClass = faded ? 'fading battleDialogue' : ' battleDialogue'

    // document.getElementsById("test").disabled = true

    return (

        <div className="battleText">
            <div className="text">
                <p className={textClass}>    {battleDialogue} </p>
            </div>
            <div className="battleButtons">
                <button onClick={handleButtonFight} disabled={disabled} id="test" className="battleButton1">Fight</button>
                <button onClick={handleButtonInventory} className="battleButton2">Inventory</button>
                <button onClick={handleButtonRun} className="battleButton3">Run</button>
                <button onClick={handleButtonQuit} className="battleButton4">Quit</button>
            </div>

        </div>
    )
}

export default battleText