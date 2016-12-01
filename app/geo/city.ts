export default class City {
    constructor(public id: number,
                public name: string,
                public main: {
                    temp: string
                },
                public coord: {
                    lat: string,
                    lon: string
                }) {
    }
} 