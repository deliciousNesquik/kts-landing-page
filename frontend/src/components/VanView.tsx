import type { ReactNode } from 'react';
import '../assets/van-view.css';
import VanCard from '../components/VanCard';
import VanListItem from '../components/VanListItem';

interface VanItem {
  id?: number | string;
  image: string;
  flags?: ReactNode | null;
  title: ReactNode;
  vehicle_class?: ReactNode;
  description: ReactNode;
  serviceTags?: string[];
  maintenanceLevel?: string;
}

interface VanViewProps {
  vans: VanItem[];
  view: 'card' | 'list';
  loading?: boolean;
}

export default function VanView({ vans, view, loading = false }: VanViewProps) {
  if (loading) {
    const skeletonItems = [...Array(6)].map((_, index) =>
      view === 'card' ? (
        <VanCard key={index} loading id="" image="" title="" vehicle_class="" description="" />
      ) : (
        <VanListItem key={index} loading id="" image="" title="" vehicle_class="" description="" />
      ),
    );

    return <div className={`van-view van-view--${view}`}>{skeletonItems}</div>;
  }

  return (
    <div className={`van-view van-view--${view}`}>
      {vans.map((van, index) =>
        view === 'card' ? <VanCard key={van.id || index} {...van} /> : <VanListItem key={van.id || index} {...van} />,
      )}
    </div>
  );
}
