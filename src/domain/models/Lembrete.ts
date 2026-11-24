import { ItemAcademico } from "./ItemAcademico";

export class Lembrete extends ItemAcademico {
  private dataAviso?: Date;
  private fixado: boolean;
  private etiqueta: string;

  constructor(
    titulo: string,
    descricao: string,
    workspaceId: string,
    etiqueta: string,
    dataAviso?: Date,
  ) {
    super(titulo, descricao, workspaceId);
    this.dataAviso = dataAviso;
    this.etiqueta = etiqueta;
    this.fixado = false;
  }

  public obterCategoria(): string {
    return "LEMBRETE";
  }

  public estaPendente(): boolean {
    return this.dataAviso !== undefined && this.dataAviso > new Date();
  }

  public alternarFixacao(): void {
    if (this.fixado === true) {
      this.fixado = false;
    } else {
      this.fixado = true;
    }
  }

  public obterExibicaoFormatada(): string {
    return (
      this.getTitulo() +
      " - " +
      this.getDescricao() +
      "\n" +
      "Etiqueta: " +
      this.etiqueta +
      "\n" +
      "Fixado: " +
      (this.fixado ? "Sim" : "Não")
    );
  }

  public getDataAviso(): Date | undefined {
    return this.dataAviso;
  }

  public isFixado(): boolean {
    return this.fixado;
  }

  public getEtiqueta(): string {
    return this.etiqueta;
  }
}
