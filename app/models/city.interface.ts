interface City {
    id: number;
    name: string;
    main: {
        temp: string
    };
    coord: {
        lat: string,
        lon: string
    };
}

export default City;