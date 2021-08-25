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

export interface BiasCreateInput {
    name: string
    description?: string
}

export interface Bias extends BiasCreateInput,BaseModel{ }