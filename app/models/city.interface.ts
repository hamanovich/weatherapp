interface City {
    id?: number;
    name?: string;
    main?: {
        temp: number
    };
    coord?: {
        lat: string,
        lon: string
    };
    dt?: number;
}

export default City;