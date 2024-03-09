import { IconSwitch } from "../IconSwitch/IconSwitch";
import { useState } from "react";

import { CardsView } from "../CardsView/CardsView";
import { ListView } from "../ListView/ListView";

export const Store = (props) => {
    const { products } = props;

    const [viewType, setViewType] = useState('view_list');    

    const handleSwitch = (e) => {
        viewType === 'view_list' ? setViewType('dashboard') : setViewType('view_list');
    }

    return (
        <>
            <IconSwitch 
                icon = { viewType } 
                onSwitch = { handleSwitch }
            />
            { 
                viewType === 'view_list' ? 
                    <ListView items = {products}/> : 
                    <CardsView cards = {products}/> 
            }           
        </>
    )
}
