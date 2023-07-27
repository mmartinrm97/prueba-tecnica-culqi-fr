export interface APIError {
    status:  string;
    message: string;
}
export interface APISuccess {
    status: string;
    data:   Data;
}

export interface Data {
    token: string;
    user:  User;
}

export interface User {
    id:           number;
    nombre:       string;
    correo:       string;
    cargo:        string;
    departamento: string;
    oficina:      string;
    estadoCuenta: string;
}
