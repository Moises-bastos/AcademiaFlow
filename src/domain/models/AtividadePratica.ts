
import { ItemAcademico } from "./ItemAcademico";

export type OrigemAtividade = "PROFESSOR" | "AUTOESTUDO";

export class AtividadePratica extends ItemAcademico {
    protected dataLimite: Date;
    protected concluida: boolean;
    protected dataConclusao?: Date;
    protected origem: OrigemAtividade;
    protected checklist: { descricao: string; feita: boolean }[];
    protected linkEntrega?: string;

    constructor(
        titulo: string,
        descricao: string,
        workspaceId: string,
        dataLimite: Date,
        origem: OrigemAtividade,
        linkEntrega?: string
    ) {
        super(titulo, descricao, workspaceId);

        if (isNaN(dataLimite.getTime())) {
            throw new Error("Data limite inválida.");
        }

        if (origem !== "PROFESSOR" && origem !== "AUTOESTUDO") {
            throw new Error("Origem inválida.");
        }

        this.dataLimite = dataLimite;
        this.concluida = false;
        this.origem = origem;
        this.checklist = [];
        this.linkEntrega = linkEntrega;
    }

    public obterCategoria(): string {
        return "ATIVIDADE_PRATICA";
    }

    public estaPendente(): boolean {
        return this.concluida === false;
    }

    public marcarComoConcluida(): void {
        this.concluida = true;
        this.dataConclusao = new Date();
    }

    public verificarSeAtrasada(): boolean {
        if (this.estaPendente() && this.dataLimite.getTime() < new Date().getTime()) {
            return true;
        }

        return false;
    }

    public calcularDiasRestantes(): number {
        const diferenca = this.dataLimite.getTime() - new Date().getTime();
        const dias = diferenca / (1000 * 60 * 60 * 24);

        return dias;
    }

    public adicionarItemChecklist(descricao: string): void {
        if (descricao.trim() === "") {
            throw new Error("A descrição do item não pode ficar vazia.");
        }

        this.checklist.push({
            descricao: descricao,
            feita: false
        });
    }

    public marcarItemChecklist(descricao: string): void {
        for (const item of this.checklist) {
            if (item.descricao === descricao) {
                item.feita = true;
                return;
            }
        }

        throw new Error("Item do checklist não encontrado.");
    }

    public obterExibicaoFormatada(): string {
        let situacao = "Pendente";

        if (this.concluida) {
            situacao = "Concluída";
        } else if (this.verificarSeAtrasada()) {
            situacao = "Atrasada";
        }

        return (
            this.getTitulo() +
            "\nDescrição: " + this.getDescricao() +
            "\nPrazo: " + this.dataLimite.toLocaleDateString() +
            "\nOrigem: " + this.origem +
            "\nSituação: " + situacao
        );
    }

    public getDataLimite(): Date {
        return this.dataLimite;
    }

    public getOrigem(): OrigemAtividade {
        return this.origem;
    }

    public getDataConclusao(): Date | undefined {
        return this.dataConclusao;
    }

    public getLinkEntrega(): string | undefined {
        return this.linkEntrega;
    }
}
