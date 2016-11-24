import ICity from './icity.interface';

export default class Templates {
    public tableLayout(city: ICity): void {
		const tableContent  = document.getElementById('city-tmpl')['content'],
			tableCities     = document.querySelector('.cities'),
			cityId          = tableContent.getElementById('city-id'),
			cityName        = tableContent.getElementById('city-name'),
			cityCoordinates = tableContent.getElementById('city-coordinates'),
			cityTemperature = tableContent.getElementById('city-temperature');

        cityId.textContent          = city.id;
        cityName.textContent        = city.name;
        cityTemperature.textContent = city.main.temp;
        cityCoordinates.textContent = `${city.coord.lat}, ${city.coord.lon}`;

		tableCities.appendChild(document.importNode(tableContent, true));
	}
}