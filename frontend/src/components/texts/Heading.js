import React from 'react';
import '../../assets/text/heading.css';

export default function Heading({text, level = 1, color}) {

    const headingClass = [
        'heading',
        color ? `heading--color-${color}` : null,
        `heading--level-${level}`,
    ].filter(Boolean).join(' ');

    return (
        <h1 className={headingClass}> {text} </h1>
    );
};