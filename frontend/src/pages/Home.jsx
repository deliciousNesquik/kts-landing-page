import Content from "../components/Content.js";
import Icon from "../components/Icon.js";
import VanCard from "../components/VanCard.js";
import Carousel from "../components/VanCarousel.js";
import Text from '../components/texts/Text.js'
import Banner from "../components/Banner.js";
import getVansData from '../data/vansData.js'

export default function Home() {
    const Vans = getVansData();

    return (
        <Content>
            <Banner />

            <Carousel
                title={<Text text={"Мы обслуживаем"} level={1}/>}
                icon={<Icon name={"spanner"}/>}
                cards={Vans.map((van, index) => (
                    <VanCard key={index} {...van} />
                ))}
                catalogLink="/vans"
                catalogButtonText="Смотреть всё"
            />
        </Content>
    )
}

