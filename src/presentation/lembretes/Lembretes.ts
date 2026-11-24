export function renderLembretes(): string {
  return `
        <div class="reminders-page">

            <header class="reminders-header">
                <div>
                    <h1>Meus Lembretes</h1>
                    <p>Organize seus avisos e não esqueça de nada.</p>
                </div>

                <button class="add-reminder-button">
                    + Novo lembrete
                </button>
            </header>

            <section class="reminders-summary">

                <div class="reminder-card">
                    <h3>Total de lembretes</h3>
                    <p>08</p>
                </div>

                <div class="reminder-card">
                    <h3>Fixados</h3>
                    <p>03</p>
                </div>

                <div class="reminder-card">
                    <h3>Com aviso agendado</h3>
                    <p>05</p>
                </div>

            </section>

            <section class="reminders-list">
                <h2>Todos os lembretes</h2>

                <div class="reminder-list-item">
                    <div>
                        <h3>Estudar para a prova de POO</h3>
                        <p>Revisar classes, herança e interfaces.</p>
                        <span>Categoria: Estudos</span>
                    </div>

                    <span class="pinned-label">Fixado</span>
                </div>

                <div class="reminder-list-item">
                    <div>
                        <h3>Entregar atividade de Banco de Dados</h3>
                        <p>Finalizar os exercícios de SQL.</p>
                        <span>Categoria: Atividades</span>
                    </div>

                    <span class="reminder-date">24/11/2026</span>
                </div>

                <div class="reminder-list-item">
                    <div>
                        <h3>Revisar conteúdo de TypeScript</h3>
                        <p>Praticar interfaces e classes.</p>
                        <span>Categoria: Estudos</span>
                    </div>

                    <span class="pinned-label">Fixado</span>
                </div>

            </section>

        </div>
    `;
}
