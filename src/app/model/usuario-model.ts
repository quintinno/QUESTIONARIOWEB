export class UsuarioModel {
    codigo: number;
    identificador: string;
    username: string;
    chave: string;
    dataCricaoAtualizacao: Date;
    usuarioCriacaoAtualizacao: string;
    isAtivo: boolean;
    perfilModelList: any[];
}
