import '../assets/van-list-item.css'
import Heading from "./texts/Heading.js";
import Text from "./texts/Text.js";

interface VanListItemProps {
    id: number | string;
    image: string;
    flags?: React.ReactNode | null;
    title: React.ReactNode;
    vehicle_class: React.ReactNode;
    description: React.ReactNode;
    loading?: boolean;
}

export default function VanListItem({
                                        id,
                                        image,
                                        flags,
                                        title,
                                        vehicle_class,
                                        description,
                                        loading = false,
                                    }: VanListItemProps) {

    if (loading) {
        return (
            <article className="van-list-item van-list-item--loading" aria-busy="true">
                <div className="van-list-item__image">
                    <div className="van-list-item__image-skeleton"></div>
                </div>
                <div className="van-list-item__content">
                    <div className="van-list-item__header">
                        <div className="van-list-item__text-skeleton van-list-item__text-skeleton--title"></div>
                        <div className="van-list-item__text-skeleton van-list-item__text-skeleton--class"></div>
                    </div>
                    <div className="van-list-item__description">
                        <div className="van-list-item__text-skeleton van-list-item__text-skeleton--line"></div>
                        <div className="van-list-item__text-skeleton van-list-item__text-skeleton--line"></div>
                    </div>
                </div>
            </article>
        )
    }

    return (
        <article className="van-list-item" style={{cursor: 'pointer'}}>
            <div className="van-list-item--content">
                <div className="van-list-item--header">

                    <Heading level={2} text={title}/>
                    <Text level={"2-1"} text={vehicle_class} weight={"other"}/>

                </div>

                <div className="van-list-item--image">
                    <img src={image} alt={typeof title === 'string' ? title : 'Микроавтобус'} />
                </div>
            </div>
        </article>
    )
}