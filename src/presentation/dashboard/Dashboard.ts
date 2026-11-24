export function renderDashboard(): string {
  return `
        <div class="dashboard">

            <aside class="sidebar">
                <h2>AcademiaFlow</h2>

                <nav>
                    <a href="#" class="active">Dashboard</a>
                    <a href="#">Disciplinas</a>
                    <a href="#">Atividades</a>
                    <a href="#">Lembretes</a>
                </nav>
            </aside>

            <main class="main-content">

                <header class="dashboard-header">
                    <h1>Dashboard</h1>
                    <p>Organize sua vida acadêmica.</p>
                </header>

                <section class="stats">
                    <div class="stat-card">
                        <h3>Total de atividades</h3>
                        <p>12</p>
                    </div>

                    <div class="stat-card">
                        <h3>Pendentes</h3>
                        <p>05</p>
                    </div>

                    <div class="stat-card">
                        <h3>Concluídas</h3>
                        <p>07</p>
                    </div>

                    <div class="stat-card">
                        <h3>Atrasadas</h3>
                        <p>02</p>
                    </div>
                </section>

              
<div class="dashboard-bottom">

    <section class="activities">
        <h2>Próximas atividades</h2>

        <div class="activity-item">
            <div>
                <h3>Trabalho de classes</h3>
                <p>Programação Orientada a Objetos</p>
                <span>Prazo: 22/11/2026</span>
            </div>

            <span class="status pending">Pendente</span>
        </div>

        <div class="activity-item">
            <div>
                <h3>Exercícios SQL</h3>
                <p>Banco de Dados</p>
                <span>Prazo: 24/11/2026</span>
            </div>

            <span class="status completed">Concluída</span>
        </div>
    </section>

    <section class="reminders">
        <h2>Lembretes fixados</h2>

        <div class="reminder-item">
            <h3>Estudar para recuperação</h3>
            <p>Revisar o conteúdo da disciplina.</p>
        </div>

        <div class="reminder-item">
            <h3>Entregar atividade</h3>
            <p>Conferir o prazo de entrega.</p>
        </div>
    </section>

</div>


            </main>

        </div>
    `;
}
