import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


function LeftMenu(props) {
    return(
        <div>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} className="remove-accordion-border">
                <AccordionItem className="options-card">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Освещение
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sampletext 1
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="options-card">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Видеокамеры
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sampletext 2
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="options-card">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Отопление
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sampletext 3
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="options-card">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Отопление
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sampletext 4
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="options-card">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Пожарная сигнализация
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sampletext 5
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default LeftMenu;