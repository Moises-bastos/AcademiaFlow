export abstract class ItemAcademico {
  private static contador: number = 0;

  protected id: string;
  protected titulo: string;
  protected descricao: string;
  protected dataCriacao: Date;
  protected workspaceId: string;

  constructor(titulo: string, descricao: string, workspaceId: string) {
    this.titulo = this.validarTexto(titulo, "O título");
    this.descricao = this.validarTexto(descricao, "A descrição");
    this.workspaceId = this.validarTexto(workspaceId, "O workspaceId");
    ItemAcademico.contador++;
    this.id = "item-" + ItemAcademico.contador;
    this.dataCriacao = new Date();
  }

  abstract obterCategoria(): string;
  abstract estaPendente(): boolean;
  abstract obterExibicaoFormatada(): string;

  protected validarTexto(valor: string, nomeDoCampo: string): string {
    const textoLimpo = valor.trim();
    if (textoLimpo === "") {
      throw new Error(`${nomeDoCampo} não pode ser vazio.`);
    }
    return textoLimpo;
  }

  obterId(): string { return this.id; }
  obterTitulo(): string { return this.titulo; }
  obterDescricao(): string { return this.descricao; }
  obterDataCriacao(): Date { return new Date(this.dataCriacao.getTime()); }
  obterWorkspaceId(): string { return this.workspaceId; }

  obterResumoBasico(): string {
    return `${this.titulo} (${this.obterCategoria()})`;
  }

  alterarTitulo(novoTitulo: string): void {
    this.titulo = this.validarTexto(novoTitulo, "O título");
  }

  alterarDescricao(novaDescricao: string): void {
    this.descricao = this.validarTexto(novaDescricao, "A descrição");
  }
}
