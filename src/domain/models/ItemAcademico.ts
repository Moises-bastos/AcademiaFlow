// Classe abstrata base dos itens acadêmicos.
export abstract class ItemAcademico {
    protected id: string;
    protected titulo: string;
    protected descricao: string;
    protected dataCriacao: Date;
    protected workspaceId: string;

    constructor(titulo: string, descricao: string, workspaceId: string) {
        this.validarTitulo(titulo);
        this.validarDescricao(descricao);

        this.id = Date.now().toString();
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.workspaceId = workspaceId;
    }

    protected validarTitulo(titulo: string): void {
        if (titulo.trim() === "") {
            throw new Error("O título não pode ficar vazio.");
        }
    }

    protected validarDescricao(descricao: string): void {
        if (descricao.trim() === "") {
            throw new Error("A descrição não pode ficar vazia.");
        }
    }

    public getId(): string {
        return this.id;
    }

    public getWorkspaceId(): string {
        return this.workspaceId;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getDataCriacao(): Date {
        return this.dataCriacao;
    }

    public resumoBasico(): string {
        return this.titulo + " - " + this.descricao;
    }

    public verificarSeAtrasada(): boolean {
        return false;
    }

    public abstract obterCategoria(): string;
    public abstract estaPendente(): boolean;
    public abstract obterExibicaoFormatada(): string;
}