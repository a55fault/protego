import { uiElements } from "./view.js";

function MassCalculation () {
    console.log("click")
    let {InputCount, InputMass, InputNeedCount, InputPercent, ButtonDo, Output,} = uiElements
    let result = InputMass.value*InputNeedCount.value/InputCount.value
    console.log (typeof result, result)
    Output.value = String(result)
    
}

uiElements.ButtonDo.onclick = MassCalculation;