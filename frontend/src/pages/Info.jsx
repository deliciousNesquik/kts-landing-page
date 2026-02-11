import Content from "../components/Content.js";
import Heading from "../components/texts/Heading.js";
import Text from "../components/texts/Text.js";
import InfoBlock from "../components/InfoBlock.js";
import Icon from "../components/Icon.js";
import Section from "../components/Section.js";

export default function Info() {
    return (
        <Content>
            <Section
                header={<Heading level={1} text={"Знаем свое дело"}/>}
                content={<Text weight={"other"} level={"2-1"} text={"Знаем, на сколько важная роль отведена автотранспорту в коммерческой деятельности наших клиентов."}/>}
            />
            <div style={{ width: "100%", height: "50px" }}/>

            <Section
                header={<Heading level={3} text={"Наши ценности"}/>}
                content={<>
                    <InfoBlock
                        icon={<Icon name="smile"/>}
                        title={<Text level={"2-1"} text={"Клиентоориентированность"} />}
                        description={<Text
                            weight={"other"}
                            level={"4-1"}
                            text={"Мы всегда ставим потребности клиента на первое место, предлагая индивидуальные решения и прозрачное общение. Мы внимательно выслушиваем ваши задачи, подробно объясняем каждый этап ремонта и согласуем стоимость, чтобы вы были уверены в результате. Ваше доверие — наш главный приоритет."}/>}>
                    </InfoBlock>
                    <InfoBlock
                        icon={<Icon name="certificates"/>}
                        title={<Text level={"2-1"} text={"Профессионализм"}/>}
                        description={<Text
                            weight={"other"}
                            level={"4-1"}
                            text={"Наш секрет успеха — постоянное обучение и повышение квалификации наших специалистов. Каждый механик в нашей команде не только имеет многолетний опыт, но и регулярно проходит курсы по работе с новыми моделями коммерческой техники и передовым технологиям ремонта. Мы гарантируем, что ваша техника в руках настоящих экспертов."}/>}>
                    </InfoBlock>
                    <InfoBlock
                        icon={<Icon name="stars"/>}
                        title={<Text level={"2-1"} text={"Инновации"}/>}
                        description={<Text
                            weight={"other"}
                            level={"4-1"}
                            text={"Мы не стоим на месте, а постоянно внедряем современные технологии для повышения эффективности и качества наших услуг. Используем новейшее диагностическое оборудование, программное обеспечение для анализа неисправностей и передовые инструменты, которые позволяют нам решать самые сложные задачи быстро и точно."}/>}>
                    </InfoBlock>
                </>}
            />

            <div style={{ width: "100%", height: "30px" }}/>

            <Section
                header={<Heading level={3} text={"Не ждите момента поломки"}/>}
                content={<Text weight={"other"} level={"3-1"} text={"Лучший ремонт — это своевременное обслуживание. Мы предлагаем не только быстрое устранение поломок, но и качественную диагностику, чтобы вы заранее знали о возможных проблемах. С нами вы всегда будете на шаг впереди."}/>}
            />

            <div style={{ width: "100%", height: "30px" }}/>

            <Section
                header={<Heading level={3} text={"Сломалось? Значит, будет лучше!"}/>}
                content={<Text weight={"other"} level={"3-1"} text={"Мы делаем ремонт так, чтобы вы не просто забыли о поломке, но и почувствовали, что ваша техника работает ещё надёжнее, чем раньше. Мы даём гарантию на нашу работу, потому что уверены в её качестве."}/>}
            />

            <div style={{ width: "100%", height: "30px" }}/>

            <Section
                header={<Heading level={3} text={"Ремонт у нас это Ваш спокойный сон"}/>}
                content={<Text weight={"other"} level={"3-1"} text={"Доверьте нам свою технику и забудьте о переживаниях. Мы берём на себя все заботы, связанные с ремонтом, чтобы вы могли полностью сосредоточиться на своём деле. Ваша техника будет в надёжных руках."}/>}
            />

        </Content>
    );
}