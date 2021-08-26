export interface APIError {
    type: string
    message: string
    fields?: {[name: string]: string}
}

export interface APIResponse<T> {
    data?: T
    error?: APIError
}

export interface BaseModel {
    id: string
    createdAt: string
    updatedAt: string
    deletedAt?: string
}

export enum Gender {
    Male = "MALE",
    Female = "FEMALE"
}

export enum Domain {
    Eshop = 'eshop',
    Eedu = 'eedu'
}

export interface BiasCreateInput {
    name: string
    description?: string
}

export interface Bias extends BiasCreateInput,BaseModel{ }

export interface PersonaCreateInput {
    name: string,
    age: number,
    gender: Gender,
    domain: Domain,
    goals: string[],
    toDoList: string[],
    bias: Bias,
    detail: string
}

export interface Persona extends PersonaCreateInput, BaseModel { }

export interface PersonaUpdateInput extends Partial<PersonaCreateInput> { }