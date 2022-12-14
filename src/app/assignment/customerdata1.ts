export interface customer {
    //id: string,
    firstName: string, lastName: string,
    gender: string,
    address: string,
    city: string,
    state: { abbreviation: string, name: string },
    orders?: [{
        productName: string
        itemCost: null
    }
    ]
    ,
    id?:number,
    latitude?: null, longitude?: null
}
