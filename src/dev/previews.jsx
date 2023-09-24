import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import ActionCard from "../ui-components/ActionCard";
import TallCard from "../ui-components/TallCard";
import TallCardCollection from "../ui-components/TallCardCollection";
import MarketingFooter from "../ui-components/MarketingFooter";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ActionCard">
                <ActionCard/>
            </ComponentPreview>
            <ComponentPreview path="/TallCard">
                <TallCard/>
            </ComponentPreview>
            <ComponentPreview path="/TallCardCollection">
                <TallCardCollection/>
            </ComponentPreview>
            <ComponentPreview path="/MarketingFooter">
                <MarketingFooter/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
