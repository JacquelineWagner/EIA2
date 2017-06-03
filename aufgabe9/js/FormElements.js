var Form;
(function (Form) {
    window.addEventListener("load", init);
    let eissorten = ["Vanille", "Schokolade", "Himbeere", "Erdbeere", "Nuss",
        "Zitrone"];
    let toppings = ["Sahne", "Schokosauce", "Karamelsauce", "Streusel",
        "Fruechte-Mix"];
    let bestellung = [];
    //    let step: HTMLInputElement = document.createElement("input");            
    //    let div: HTMLDivElement = document.createElement("div");    
    //      
    let inputs = [];
    let fieldsetTopping;
    let fieldsetEissorte;
    function init(_event) {
        fieldsetEissorte = document.getElementById("Eissorten");
        fieldsetTopping = document.getElementById("toppings");
        for (let i = 0; i < eissorten.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            label.innerText = eissorten[i];
            label.appendChild(input);
            inputs.push(input);
            fieldsetEissorte.appendChild(label);
            input.className = "checkbox";
            console.log(eissorten[i]);
        }
        for (let i = 0; i < toppings.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "checkbox");
            label.innerText = toppings[i];
            label.appendChild(input);
            inputs.push(input);
            fieldsetTopping.appendChild(label);
            input.className = "checkbox";
            console.log(toppings[i]);
        }
        //        step.addEventListener("click", clickEvent);
    }
    function clickEvent(_event) {
        console.log("hallo");
    }
})(Form || (Form = {}));
//namespace Form {
//    window.addEventListener("load", init);
//
//    function init(_event: Event): void {
//        console.log("Init");
//        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
//
//        for (let i: number = 0; i < fieldsets.length; i++) {
//            let fieldset: HTMLFieldSetElement = fieldsets[i];
//            fieldset.addEventListener("change", handleChange);
//        }
//    }
//
//    function handleChange(_event: Event): void {
//        //console.log(_event);
//        //*/
//        let target: HTMLInputElement = <HTMLInputElement>_event.target;
//        console.log("Changed " + target.name + " to " + target.value);
//        //*/
//        //*/ note: this == _event.currentTarget in an event-handler
//        if (this.id == "checkbox")
//            console.log("Changed " + target.name + " to " + target.checked);
//        //*/
//        //*/
//        if (target.name == "Slider") {
//            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
//            progress.value = parseFloat(target.value);
//        }
//        //*/
//        //*/
//        if (target.name == "Stepper") {
//            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
//            progress.value = parseFloat(target.value);
//        }
//        //*/
//    }
//} 
//# sourceMappingURL=FormElements.js.map