import React, {useContext, useEffect, useId, useState} from 'react';
import { Icon } from '@iconify/react';

const AccordionContext = React.createContext({
    group: false,
    openedId: null,
    setOpenedId(id) {}
});

export function Accordion(props) {
    const [openedId, setOpenedId] = useState(null);

    const context = { group: props.grouped ?? false, openedId, setOpenedId };
    return <AccordionContext.Provider value={context}>
        <p>
            {props.children ?? null}
        </p>
    </AccordionContext.Provider>
}

export function AccordionItem(props) {
    const context = useContext(AccordionContext);
    const id = useId();

    const [openedState, setOpenedState] = useState(props.opened ?? false);
    const opened = context.group ? context.openedId === id : openedState;
    const setOpened = context.group ? (state) => {
        if (state) context.setOpenedId(id);
        else if (context.openedId === id) context.setOpenedId(null);
    } : setOpenedState;

    useEffect(() => {
        if (context.group && props.opened)
            context.setOpenedId(id);
    }, []);

    return <div className="accordionItem">
        <h3 className="heading" onClick={() => setOpened(!opened)}>
            {props.header}
            <Icon icon="akar-icons:triangle-up-fill" vFlip={!opened} />
        </h3>
        {opened && <div className="content">
            {props.children ?? null}
        </div>}
    </div>
}
