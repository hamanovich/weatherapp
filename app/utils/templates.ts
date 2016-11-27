import City from '../models/city.interface';

export default class Templates {
    constructor(private fragment: DocumentFragment = document.createDocumentFragment(),
                private tableCities: Element = document.querySelector('.cities')) {
    }

    public tableRowLayout(city: City): void {
        const tableContent = document.getElementById('city-tmpl')['content'];
        const cityId = tableContent.getElementById('city-id');
        const cityName = tableContent.getElementById('city-name');
        const cityCoordinates = tableContent.getElementById('city-coordinates');
        const cityTemperature = tableContent.getElementById('city-temperature');

        cityId.textContent = city.id;
        cityName.textContent = city.name;
        cityTemperature.textContent = (+city.main.temp - 273).toFixed(2);
        cityCoordinates.textContent = `${city.coord.lat}, ${city.coord.lon}`;

        this.fragment.appendChild(document.importNode(tableContent, true));
    }

    public appendToTable(): void {
        this.tableCities.appendChild(this.fragment);
    }
}