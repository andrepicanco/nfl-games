import React, { useState } from "react";
import styled from "styled-components";

/*
.Primer_Brand__Accordion-module__Accordion--default___wLsHR::after {
  content: '';
  border: 3px solid var(--brand-Accordion-border-color-default);
  height: 0;
  transition: var(--brand-animation-duration-fast) transform;
  transform: scaleY(0);
  transform-origin: 50% 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
*/

const AccordionButton = styled.button`
    display: flex;
    flex-direction: column;
    padding: 10px 2px;
    cursor: pointer;
    border-radius: 8px;
    margin: 5px 30%;
    color: black;
    background-color: #e2e2e2ff;
    font-family: 'Carter One';
    font-size: calc(6px + 2vmin);
    font-style: bold;
    width: 40%;
    transition: 0.4s;
    // border: none;
`

const Painel = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "500px": "0")};
  overflow: hidden;
  transition: max-height: 0.3 ease;
  background: #e2e2e2ff;
  color: #000000ff;
  margin: auto;
  font-family: 'Roboto';
  font-style: bold;
  font-size: calc(3px + 2vmin);
  width: 40%;
  padding: ${ ({ isOpen }) => (isOpen ? "10px": "0 10px")};
  box-sizing: border-box;
`

const Accordion = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((open) => !open);

  return (
    <div>
      <AccordionButton
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls="accordion-panel"
      >
        {title}
      </AccordionButton>
      <Painel
        id='accordion-panel'
        isOpen={isOpen}
        aria-hidden={!isOpen}
      >
        {children}
      </Painel>
    </div>
  );

};

export default Accordion;