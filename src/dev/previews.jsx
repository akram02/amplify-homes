import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import ActionCard from "../ui-components/ActionCard";
import TallCard from "../ui-components/TallCard";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ActionCard">
                <ActionCard/>
            </ComponentPreview>
            <ComponentPreview path="/TallCard">
                <TallCard/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
