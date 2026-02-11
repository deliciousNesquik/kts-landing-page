import '../assets/container/content.css'

export default function Content({children}) {
    return (
        <div className="content">
            {children}
        </div>
    );
}