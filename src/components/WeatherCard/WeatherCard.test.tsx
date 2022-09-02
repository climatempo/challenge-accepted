import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WeatherCard } from ".";

const weatherTest = {
    "date": "2017-02-01",
    "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
    "temperature": {
        "min": 20,
        "max": 28
    },
    "rain": {
        "probability": 60,
        "precipitation": 20
    }
};

describe("WeatherCard render elements", () => {
    it("Should render text elements", () => {
        const { getByText } = render(<WeatherCard item={weatherTest} />);

        expect(getByText("01/02/2017")).toBeTruthy();
        expect(getByText("Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.")).toBeTruthy();
        expect(getByText("20°C")).toBeTruthy();
        expect(getByText("28°C")).toBeTruthy();
        expect(getByText("60mm")).toBeTruthy(); expect(getByText("20%")).toBeTruthy();

    });

    it("Should render icon elements", () => {
        const { getByAltText } = render(<WeatherCard item={weatherTest} />);

        expect(getByAltText("Arrow up icon")).toBeTruthy();
        expect(getByAltText("Arrow down icon")).toBeTruthy();
        expect(getByAltText("Raindrop icon")).toBeTruthy();
        expect(getByAltText("Umbrella icon")).toBeTruthy();
    });
});

describe("Toggle Celsius and Fahrenheit, mm and inch", () => {

    it("Should toggle between Celsius to Fahrenheit", async () => {
        const { getByText, findByText } = render(<WeatherCard item={weatherTest} />);

        let min = getByText("20°C");
        let max = getByText("28°C");

        userEvent.click(min);
        userEvent.click(max);

        expect(await findByText("68°F")).toBeTruthy();
        expect(await findByText("82°F")).toBeTruthy();



        min = getByText("68°F");
        max = getByText("82°F");

        userEvent.click(min);
        userEvent.click(max);

        expect(await findByText("20°C")).toBeTruthy();
        expect(await findByText("28°C")).toBeTruthy();
    });

    it("Should toggle between mm to inch", async () => {
        const { getByText, findByText } = render(<WeatherCard item={weatherTest} />);

        let value = getByText("60mm");

        userEvent.click(value);

        expect(await findByText("2.36inch")).toBeTruthy();



        value = getByText("2.36inch");

        userEvent.click(value);

        expect(await findByText("60mm")).toBeTruthy();
    });
});