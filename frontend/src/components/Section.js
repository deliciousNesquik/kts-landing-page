import '../assets/container/section.css';

export default function Section({header, content}) {
    return (
        <div className="title-block">
            {header}
            {content}
        </div>
    )
}