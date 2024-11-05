import { api } from './axios';

export const login = async (cpf: string, password: string) => {
    try {
        console.log("Tentando fazer login...");
        const response = await api.post('/auth/login', { cpf, password });
        return response.data; 
    } catch (error: any) {
        if (error.response) {
            console.error('Erro de resposta:', error.response.data);
            throw new Error(error.response.data.message || 'Erro ao fazer login.');
        } else if (error.request) {
            console.error('Erro na requisição:', error.request);
            throw new Error('Erro de conexão com o servidor. Tente novamente.');
        } else {
            console.error('Erro desconhecido:', error.message);
            throw new Error('Ocorreu um erro inesperado. Tente novamente.');
        }
    }
};

export const registerUser = async (name: string, cpf: string, phoneNumber: string, email: string, password: string, confirmPassword: string): Promise<{ message: string }> => {
    try {
        const response = await api.post('/auth/register', { name, cpf, phoneNumber, email, password, confirmPassword });
        return response.data;
    } catch (error: any) {
        console.error('Erro no registro:', error.message);
        throw error;
    }
};
