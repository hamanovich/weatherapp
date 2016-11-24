import Templates from './templates';

export default class XHR {

    constructor(private type: string = 'GET',
                private async: boolean = true) {
    }

    GET(url: string) {
        const XHR = new XMLHttpRequest(),
            template = new Templates(),
            elError = document.querySelector('.response-error'),
            elTable = document.getElementById('table-cities');

        XHR.open(this.type, url, this.async);
        XHR.send();

        XHR.onload = () => {
            if (XHR.readyState !== 4 || XHR.status !== 200) {
                elError.classList.remove('hidden');
                elError.textContent = `${XHR.status}: ${XHR.statusText}`;
            }
            else {
                const cities = JSON.parse(XHR.responseText).list;

                for (let city in cities) {
                    if (!cities.hasOwnProperty(city)) {
                        return;
                    }

                    template.tableLayout(cities[city]);
                }
            }
        };

        XHR.onloadend = () => {
            elTable.classList.add('done');
        };

        XHR.onerror = (e) => {
            console.error('Error text ', e);
        };
    }
}