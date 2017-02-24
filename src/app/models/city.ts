interface City {
    id?: number;
    name?: string;
    main?: {
        temp: number;
        pressure?: number;
        humidity?: number;
    };
    coord?: {
        lat: string;
        lon: string;
    };
    dt?: number;
    isHighlight?: boolean;
    hidden?: boolean;
    weather?: {
        description: string;
        main: string;
    };
    wind?: {
        speed: number;
        deg: number;
    };
    length?: number;
}

export default City;