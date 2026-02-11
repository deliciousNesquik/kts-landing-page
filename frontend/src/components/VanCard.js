// components/VanCard/VanCard.jsx
import '../assets/van-card.css'
import Heading from "./texts/Heading.js";
import Text from "./texts/Text.js";

interface VanCardProps
{
    id: number | string;
    image: string;
    flags?: React.ReactNode | null;
    title: React.ReactNode;
    vehicle_class: React.ReactNode;
    description: React.ReactNode;
    loading?: boolean;
}

export default function VanCard({
                                    id,
                                    image,
                                    flags,
                                    title,
                                    vehicle_class,
                                    description,
                                    loading = false,
                                }: VanCardProps) {

    if (loading) {
        return (
            <article className="van-card van-card--loading" aria-busy="true">
                <div className="van-card__image">
                    <div className="van-card__image-skeleton"></div>
                </div>
                <div className="van-card__flags">
                    <div className="van-card__flag-skeleton"></div>
                </div>
                <div className="van-card__title">
                    <div className="van-card__text-skeleton van-card__text-skeleton--title"></div>
                    <div className="van-card__text-skeleton van-card__text-skeleton--class"></div>
                </div>
                <div className="van-card__description">
                    <div className="van-card__text-skeleton van-card__text-skeleton--line"></div>
                    <div className="van-card__text-skeleton van-card__text-skeleton--line"></div>
                </div>
            </article>
        )
    }

    return (
        <article className="van-card">
            <div className="van-card--content">

                <div className="van-card--image">
                    <img src={image} alt={typeof title === 'string' ? title : 'Микроавтобус'} loading="lazy" />
                </div>

                {flags && (
                    <div className="van-card--flags">
                        {flags}
                    </div>
                )}

                <div className="van-card--title">
                    <Heading level={2} text={title}/>
                    <Text level={"2-1"} text={vehicle_class} weight={"other"}/>
                </div>

                <Text level={"4-1"} text={description} weight={"other"}/>
            </div>
        </article>
    )
}