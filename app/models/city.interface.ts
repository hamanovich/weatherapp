interface City {
    id?: number;
    name?: string;
    main?: {
        temp: string
    };
    coord?: {
        lat: string,
        lon: string
    };
    dt?: number;
}

export default City;