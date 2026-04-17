export default function Privacidade() {
  return (
    <div className="pt-20 pb-32 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl mb-4 mt-16">Política de Privacidade</h1>
        <p className="text-muted-foreground text-sm mb-12">Última atualização: Abril de 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">1. Quem somos</h2>
            <p>Cartas do Litoral é um projeto de ficção imersiva por correspondência física, operado por Estúdio 433, com sede em Florianópolis, SC, Brasil. Site: cartasdolitoral.com.br</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">2. Quais dados coletamos</h2>
            <p>Coletamos apenas os dados que você nos fornece voluntariamente ao se inscrever na lista de espera ou assinar as cartas:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Nome</li>
              <li>Endereço de email</li>
              <li>Endereço de entrega (apenas para assinantes da carta física)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">3. Como usamos seus dados</h2>
            <p>Seus dados são usados exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Enviar emails relacionados ao projeto Cartas do Litoral</li>
              <li>Enviar a carta física mensal para assinantes</li>
              <li>Comunicar novidades e o lançamento das assinaturas</li>
            </ul>
            <p className="mt-3">Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">4. Plataformas terceiras</h2>
            <p>Utilizamos a plataforma Beehiiv (beehiiv.com) para gerenciar nossa lista de emails e enviar comunicações. Ao se inscrever, seus dados são armazenados nos servidores da Beehiiv, sujeitos à <a href="https://beehiiv.com/privacy" target="_blank" className="underline hover:text-accent-warm transition-colors">política de privacidade</a> e aos <a href="https://beehiiv.com/tou" target="_blank" className="underline hover:text-accent-warm transition-colors">termos de uso</a> da Beehiiv.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">5. Seus direitos (LGPD)</h2>
            <p>Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Acessar os dados que temos sobre você</li>
              <li>Corrigir dados incorretos</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">Para exercer esses direitos, entre em contato: <a href="mailto:oi@cartasdolitoral.com.br" className="underline hover:text-accent-warm transition-colors">oi@cartasdolitoral.com.br</a></p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">6. Cancelamento</h2>
            <p>Você pode cancelar sua inscrição a qualquer momento clicando em "cancelar inscrição" no rodapé de qualquer email nosso, ou enviando um email para oi@cartasdolitoral.com.br.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">7. Contato</h2>
            <p>Dúvidas sobre esta política? Entre em contato: <a href="mailto:oi@cartasdolitoral.com.br" className="underline hover:text-accent-warm transition-colors">oi@cartasdolitoral.com.br</a></p>
          </section>

        </div>
      </div>
    </div>
  )
}
