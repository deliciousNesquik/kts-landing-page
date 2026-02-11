import "../../assets/text/text.css"

export default function Text({level="1", text, weight}) {
    const textClass = [
        'text',
        `text--level-${level}`,
        `text--weight-${weight}`,
    ].filter(Boolean).join(' ');

    return (
        <p className={textClass}>{text}</p>
    )
}