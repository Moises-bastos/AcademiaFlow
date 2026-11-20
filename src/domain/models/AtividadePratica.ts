// Classe base abstrata: qualquer registro guardado dentro de um workspace.
export abstract class ItemAcademico {
  protected id: string;
  protected titulo: string;
  protected descricao: string;
  protected dataCriacao: Date;
  protected workspaceId: string;

  constructor(titulo: string, descricao: string, workspaceId: string) {
    this.titulo = this.validarTexto(titulo, "O título");
    this.descricao = this.validarTexto(descricao, "A descrição");
    this.workspaceId = this.validarTexto(workspaceId, "O workspaceId");
    this.id = "item-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    this.dataCriacao = new Date();
  }

  // Cada subclasse é obrigada a implementar estes métodos (polimorfismo)
  abstract obterCategoria(): string;
  abstract estaPendente(): boolean;
  abstract obterExibicaoFormatada(): string;

  // Por padrão um item não está atrasado; AtividadePratica sobrescreve.
  estaAtrasado(): boolean {
    return false;
  }

  // Validação reutilizável
  protected validarTexto(valor: string, nomeDoCampo: string): string {
    const textoLimpo = valor.trim();
    if (textoLimpo === "") {
      throw new Error(`${nomeDoCampo} não pode ser vazio.`);
    }
    return textoLimpo;
  }

  // Consultas
  obterId(): string { return this.id; }
  obterTitulo(): string { return this.titulo; }
  obterDescricao(): string { return this.descricao; }
  obterDataCriacao(): Date { return new Date(this.dataCriacao.getTime()); }
  obterWorkspaceId(): string { return this.workspaceId; }

  // Resumo básico
  obterResumoBasico(): string {
    return `${this.titulo} (${this.obterCategoria()})`;
  }

  // Alterações (sempre validando)
  alterarTitulo(novoTitulo: string): void {
    this.titulo = this.validarTexto(novoTitulo, "O título");
  }

  alterarDescricao(novaDescricao: string): void {
    this.descricao = this.validarTexto(novaDescricao, "A descrição");
  }
}