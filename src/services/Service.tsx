import axios from "axios";

const api = axios.create({
    baseURL: 'https://opportune-dthx.onrender.com',
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
};


export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
};


export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
};


export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
};


export const atualizarStatusPlano = async (
    idPlano: number,
    status: string,
    setDados: Function,
    header: Object
) => {
    try {
        const url = `/plano/${idPlano}/status`;
        const resposta = await api.put(url, { status }, header);

        if (setDados) {
            setDados(resposta.data);
        }

        return resposta.data;
    } catch (error) {
        console.error("Erro ao atualizar o status do plano:", error);
        throw error;
    }
};