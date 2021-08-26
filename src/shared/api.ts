import {
    APIResponse,
    Bias,
    BiasCreateInput,
    PersonaCreateInput,
    PersonaUpdateInput,
    Persona
} from './models'

const host = "http://localhost:5000"

function url(path: string): string {
    return host + path
}

async function _request<T>(method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
                           path: string,
                           headers?: {[key: string]: string},
                           body?: any): Promise<APIResponse<T>> {
    const response = await fetch(url(path), {method, headers, body})
    if (method == 'DELETE') {
        return {}
    } else {
        const json = await response.json()
        return json
    }
}

async function _get<T>(path: string): Promise<APIResponse<T>> {
    return await _request('GET', path, {
        'Accept': 'application/json'
    })
}

async function _data<T>(method: 'POST' | 'PATCH',
                        path: string,
                        data: any): Promise<APIResponse<T>> {
    return await _request(method, path, {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }, JSON.stringify(data))
}

async function _formData<T>(method: 'POST' | 'PATCH',
                        path: string,
                        data: any): Promise<APIResponse<T>> {
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
        if (data[key] instanceof FileList) {
            if (data[key][0]) {
                formData.append(key, data[key][0])
            }
        } else {
            formData.append(key, data[key])
        }
    })
    return await _request(method, path, {
        'Accept': 'application/json'
    }, formData)
}

async function _delete(path: string): Promise<void> {
    await _request('DELETE', path, {
        'Accept': 'application/json'
    })
}

async function _post<T>(path: string, data: any): Promise<APIResponse<T>> {
    return await _data<T>('POST', path, data)
}

async function _patch<T>(path: string, data: any): Promise<APIResponse<T>> {
    return await _data<T>('PATCH', path, data)
}

export async function biases(): Promise<Bias[]> {
    return (await _get<Bias[]>('/biases')).data!
}

export async function bias(id: string): Promise<Bias> {
    return (await _get<Bias>(`/biases/${id}`)).data!
}

export async function personas(): Promise<Persona[]> {
    return (await _get<Persona[]>('/personas')).data!
}

export async function persona(id: string): Promise<Persona> {
    return (await _get<Persona>(`/personas/${id}`)).data!
}

export async function createPersona(input: PersonaCreateInput): Promise<Persona> {
    return (await _post<Persona>('/personas', input)).data!
}

export async function updatePersona(id: string, input: PersonaUpdateInput): Promise<Persona> {
    return (await _patch<Persona>(`/personas/${id}`, input)).data!
}

export async function deletePersona(id: string): Promise<void> {
    await _delete(`/personas/${id}`)
}