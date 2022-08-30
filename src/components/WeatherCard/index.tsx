import * as C from "./styles";
import ArrowUp from "../../images/icons/upload.png";
import ArrowDown from "../../images/icons/download.png";
import Raindrop from "../../images/icons/raindrop-close-up.png";
import Umbrella from "../../images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png"

export const WeatherCard = () => {
    return (
        <C.Container>
            <C.Info>
                <C.Date>01/12/2017</C.Date>
                <C.Resume>Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora</C.Resume>
            </C.Info>
            <C.Statistics>
                <C.Max>
                    <C.Icon
                        src={ArrowUp}
                        alt="Arrow up icon"
                    />
                    <C.Text textColor="#0478BD">20ºC</C.Text>
                </C.Max>
                <C.Min>
                    <C.Icon
                        src={ArrowDown}
                        alt="Arrow down icon"
                    />
                    <C.Text textColor="#C93838">10ºC</C.Text>
                </C.Min>
                <C.Probability>
                    <C.Icon
                        src={Raindrop}
                        alt="Raindrop icon"
                    />
                    <C.Text textColor="#000">7mm</C.Text>
                </C.Probability>
                <C.Precipitation>
                    <C.Icon
                        src={Umbrella}
                        alt="Umbrella icon"
                    />
                    <C.Text textColor="#000">70%</C.Text>
                </C.Precipitation>
            </C.Statistics>
        </C.Container>
    );
}