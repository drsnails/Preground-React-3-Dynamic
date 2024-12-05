import { ColorInput } from "./dynamic-inputs/ColorInput.jsx";
import { FontsizeInput } from "./dynamic-inputs/FontsizeInput.jsx";

const { useState } = React

export function AppFooter() {

    const [cmpType, setCmpType] = useState('color')

    return (
        <footer className="app-footer full main-layout">
            <section >
                <DynamicCmp cmpType={cmpType} />
                <select value={cmpType} onChange={(ev) => setCmpType(ev.target.value)}>
                    <option value="color">Color</option>
                    <option value="fontSize">Font size</option>
                </select>
            </section>
        </footer>
    )
}


function DynamicCmp(props) {
    const dynCmpsMap = {
        color: <ColorInput {...props} />,
        fontSize: <FontsizeInput {...props} />
    }

    return dynCmpsMap[props.cmpType]
    ////////////////////////////////////////////////////
    // switch (props.cmpType) {
    //     case 'color':
    //         return <ColorInput />
    //     case 'fontSize':
    //         return <FontsizeInput />
    // }
}
