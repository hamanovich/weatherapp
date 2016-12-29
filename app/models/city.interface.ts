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
    isHighlight?: boolean;
    weather? : {
        description: string;
        main: string;
    }
    length?: number;
}

export default City;