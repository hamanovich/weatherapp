interface City {
    id?: number;
    name?: string;
    main?: {
        temp: number;
        pressure?: number;
        humidity?: number;
        temp_min?: number;
        temp_max?: number;
    };
    coord?: {
        lat: number;
        lon: number;
    };
    dt?: number;
    isHighlight?: boolean;
    hidden?: boolean;
    weather?: [{
        id?: number;
        description: string;
        main: string;
        icon?: string;
    }];
    sys?: {
        country?: string;
    };
    clouds?: {
        all?: number;
    };
    wind?: {
        speed: number;
        deg: number;
    };
    length?: number;
}

export default City;