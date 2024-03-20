import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from "@/styles/accordion.module.css";

interface AccordionProps {
    title: string;
    children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div className={`${styles["accordion"]} ${active ? styles["active"] : ''}`}>
            <Image width={25} height={25} className={ classNames(styles["accordion-toggle-img"], {[styles.open]: active})} src="/images/icon_open.png" alt="v_line.svg" />
            <div className={`${styles["accordion-header"]} ${active ? styles["active"] : ''}`} onClick={toggleAccordion}>
                {title}
            </div>
            <div className={`${styles["accordion-content"]} ${active ? styles["active"] : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;