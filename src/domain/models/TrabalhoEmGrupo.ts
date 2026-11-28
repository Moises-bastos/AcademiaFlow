
import { AtividadePratica, OrigemAtividade } from "./AtividadePratica";

export class TrabalhoEmGrupo extends AtividadePratica {
    private colegasDeEquipe: string[];
    private papelDoAluno: string;
    private etapas: {
        titulo: string;
        responsavel: string;
        entregue: boolean;
    }[];

    constructor(
        titulo: string,
        descricao: string,
        workspaceId: string,
        dataLimite: Date,
        origem: OrigemAtividade,
        papelDoAluno: string,
        linkEntrega?: string
    ) {
        super(titulo, descricao, workspaceId, dataLimite, origem, linkEntrega);

        if (papelDoAluno.trim() === "") {
            throw new Error("O papel do aluno não pode ficar vazio.");
        }

        this.papelDoAluno = papelDoAluno;
        this.colegasDeEquipe = [];
        this.etapas = [];
    }

    public obterCategoria(): string {
        return "TRABALHO_EM_GRUPO";
    }

    public adicionarColega(nome: string): void {
        if (nome.trim() === "") {
            throw new Error("O nome do colega não pode ficar vazio.");
        }

        this.colegasDeEquipe.push(nome);
    }

    public adicionarEtapa(titulo: string, responsavel: string): void {
        if (titulo.trim() === "" || responsavel.trim() === "") {
            throw new Error("Título e responsável são obrigatórios.");
        }

        this.etapas.push({
            titulo: titulo,
            responsavel: responsavel,
            entregue: false
        });
    }

    public marcarEtapaEntregue(titulo: string): void {
        for (const etapa of this.etapas) {
            if (etapa.titulo === titulo) {
                etapa.entregue = true;

                if (this.calcularProgresso() === 100) {
                    this.marcarComoConcluida();
                }

                return;
            }
        }

        throw new Error("Etapa não encontrada.");
    }

    public calcularProgresso(): number {
        if (this.etapas.length === 0) {
            return 0;
        }

        let quantidadeEntregue = 0;

        for (const etapa of this.etapas) {
            if (etapa.entregue) {
                quantidadeEntregue++;
            }
        }

        return (quantidadeEntregue / this.etapas.length) * 100;
    }

    public estaPendente(): boolean {
        if (this.etapas.length === 0) {
            return this.concluida === false;
        }

        if (this.calcularProgresso() === 100) {
            return false;
        }

        return true;
    }

    public obterExibicaoFormatada(): string {
        return (
            this.getTitulo() +
            "\nDescrição: " + this.getDescricao() +
            "\nPrazo: " + this.dataLimite.toLocaleDateString() +
            "\nPapel do aluno: " + this.papelDoAluno +
            "\nProgresso: " + this.calcularProgresso() + "%"
        );
    }

    public getColegasDeEquipe(): string[] {
        return this.colegasDeEquipe;
    }

    public getPapelDoAluno(): string {
        return this.papelDoAluno;
    }
}
