// components/VanView/VanView.jsx
import '../assets/van-view.css'
import VanCard from '../components/VanCard.js'
import VanListItem from '../components/VanListItem.js'

interface VanViewProps {
    vans: Array<{
        id: number | string;
        image: string;
        flags?: React.ReactNode | null;
        title: React.ReactNode;
        vehicle_class: React.ReactNode;
        description: React.ReactNode;
    }>;
    view: 'card' | 'list';
    loading?: boolean;
}

export default function VanView({ vans, view, loading = false }: VanViewProps) {
    if (loading) {
        const skeletonItems = [...Array(6)].map((_, index) => (
            view === 'card' ? (
                <VanCard key={index} loading={true} id="" image="" title="" vehicle_class="" description="" />
            ) : (
                <VanListItem key={index} loading={true} id="" image="" title="" vehicle_class="" description="" />
            )
        ));

        return (
            <div className={`van-view van-view--${view}`}>
                {skeletonItems}
            </div>
        );
    }

    return (
        <div className={`van-view van-view--${view}`}>
            {vans.map((van, index) => (
                view === 'card' ? (
                    <VanCard
                        key={van.id || index}
                        {...van}
                    />
                ) : (
                    <VanListItem
                        key={van.id || index}
                        {...van}
                    />
                )
            ))}
        </div>
    );
}