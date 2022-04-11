export interface IRegister {
    nis : string;
    lastname : string,
    firstname : string,
    birthdate : Date,
    gender : string,
    accountType : string,
    phone? : string,
    mail : string,
    password : string,
    address? : IAddress
}

export interface IAddress {
    street : string,
    number : string,
    box? : string,
    zipCode : string,
    city : string,
    country :  string
}