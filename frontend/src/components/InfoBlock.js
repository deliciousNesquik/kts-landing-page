import '../assets/container/info-block.css'
export default function InfoBlock({icon, title, description}) {
    return (
        <div className="info-block">
            <div className="info-block__title">
                {icon}
                {title}
            </div>
            {description}
        </div>
    )
}