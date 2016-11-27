import Templates from './templates';
import City from '../models/city.interface';

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

                cities.forEach((item: City): void => {
                    template.tableRowLayout(item);
                });

                template.appendToTable();
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