
import { ItemAcademico } from "./ItemAcademico";

export class Workspace {
    private codigo: string;
    private nome: string;
    private professor: string;
    private salaOuLink?: string;
    private horario?: string;
    private itens: ItemAcademico[];

    constructor(
        codigo: string,
        nome: string,
        professor: string,
        salaOuLink?: string,
        horario?: string
    ) {
        if (codigo.trim() === "") {
            throw new Error("O código não pode ficar vazio.");
        }

        if (nome.trim() === "") {
            throw new Error("O nome da disciplina não pode ficar vazio.");
        }

        if (professor.trim() === "") {
            throw new Error("O professor não pode ficar vazio.");
        }

        this.codigo = codigo;
        this.nome = nome;
        this.professor = professor;
        this.salaOuLink = salaOuLink;
        this.horario = horario;
        this.itens = [];
    }

    public adicionarItem(item: ItemAcademico): void {
        if (item.getWorkspaceId() !== this.codigo) {
            throw new Error("O item pertence a outro Workspace.");
        }

        for (const itemCadastrado of this.itens) {
            if (itemCadastrado.getId() === item.getId()) {
                throw new Error("Este item já foi cadastrado.");
            }
        }

        this.itens.push(item);
    }

    public buscarItem(id: string): ItemAcademico | undefined {
        for (const item of this.itens) {
            if (item.getId() === id) {
                return item;
            }
        }

        return undefined;
    }

    public removerItem(id: string): boolean {
        const novaLista: ItemAcademico[] = [];
        let encontrou = false;

        for (const item of this.itens) {
            if (item.getId() === id) {
                encontrou = true;
            } else {
                novaLista.push(item);
            }
        }

        this.itens = novaLista;
        return encontrou;
    }

    public listarItens(): ItemAcademico[] {
        const lista: ItemAcademico[] = [];

        for (const item of this.itens) {
            lista.push(item);
        }

        return lista;
    }

    public listarItensPendentes(): ItemAcademico[] {
        const lista: ItemAcademico[] = [];

        for (const item of this.itens) {
            if (item.estaPendente()) {
                lista.push(item);
            }
        }

        return lista;
    }

    public listarItensConcluidos(): ItemAcademico[] {
        const lista: ItemAcademico[] = [];

        for (const item of this.itens) {
            if (
                item.obterCategoria() !== "LEMBRETE" &&
                item.estaPendente() === false
            ) {
                lista.push(item);
            }
        }

        return lista;
    }

    public listarItensAtrasados(): ItemAcademico[] {
        const lista: ItemAcademico[] = [];

        for (const item of this.itens) {
            if (item.verificarSeAtrasada()) {
                lista.push(item);
            }
        }

        return lista;
    }

    public getTotalItens(): number {
        return this.itens.length;
    }

    public calcularTaxaConclusao(): number {
        let totalAtividades = 0;
        let atividadesConcluidas = 0;

        for (const item of this.itens) {
            if (item.obterCategoria() !== "LEMBRETE") {
                totalAtividades++;

                if (item.estaPendente() === false) {
                    atividadesConcluidas++;
                }
            }
        }

        if (totalAtividades === 0) {
            return 0;
        }

        return (atividadesConcluidas / totalAtividades) * 100;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getNome(): string {
        return this.nome;
    }

    public getProfessor(): string {
        return this.professor;
    }

    public getSalaOuLink(): string | undefined {
        return this.salaOuLink;
    }

    public getHorario(): string | undefined {
        return this.horario;
    }
}
