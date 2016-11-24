interface ICity {
    readonly id: number;
    readonly name: string;
    readonly main: {
        temp: string
    };
    readonly coord: {
        lat: string,
        lon: string
    }
}

export default ICity;