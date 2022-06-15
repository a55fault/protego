import { uiElements } from "./view.js";

function MassCalculation() {
    //console.log("click")
    let { InputCount, InputMass, InputNeedCount, InputPercent, ButtonDo, Output, UsePercent, } = uiElements
    let result = InputMass.value * InputNeedCount.value / InputCount.value
    //console.log(typeof result, result)
    if (UsePercent.checked) {
        let resultPlus = result + result * InputPercent.value * 0.01;
        Output.value = resultPlus.toFixed(2)+" g";
    }
    else {
        Output.value = result.toFixed(2)+" g"
    }
}

uiElements.ButtonDo.onclick = MassCalculation;