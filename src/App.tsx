import { clsx } from 'clsx';
import { brands } from './data/brands';
import { prescriptionTerms } from './data/prescription';

const stats = [
  { label: 'Anos de cuidado visual', value: '15+' },
  { label: 'Marcas premium', value: '6' },
  { label: 'Clientes atendidos', value: 'Milhares' },
];

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-slate-900 to-secondary text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6 lg:max-w-2xl">
            <div className="badge">Ótica Du &amp; Edu</div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Visão clara, atendimento próximo e as melhores marcas ao seu alcance.
            </h1>
            <p className="text-lg text-slate-100/90">
              Há 15 anos cuidando da saúde visual de Blumenau com tecnologia, estilo e consultoria personalizada. Estamos na rua
              Almirante Barroso, Nº 45, sala 3, Vila Nova.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href="tel:+554733444000">
                Falar com a equipe
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
                href="#prescricao"
              >
                Entender minha receita
              </a>
            </div>
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/10 p-4 shadow-sm backdrop-blur">
                  <dt className="text-sm text-white/80">{stat.label}</dt>
                  <dd className="text-2xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-4 rounded-3xl border border-white/20" aria-hidden />
            <div className="relative rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
              <div className="rounded-2xl bg-white/90 p-6 text-primary shadow-xl">
                <p className="font-semibold">Óculos sob medida</p>
                <p className="mt-2 text-sm text-slate-700">
                  Ajustamos medidas digitais, alinhamento e estilo para você sair com conforto e identidade.
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
                  <span className="h-10 w-10 rounded-full bg-secondary/10" />
                  <span>Consultoria com especialistas em lentes e armações premium.</span>
                </div>
                <div className="mt-6 rounded-xl bg-secondary/10 p-4 text-sm text-secondary">
                  Atendimento com hora marcada para uma experiência tranquila.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-16">
        <section id="historia" className="space-y-6">
          <div className="space-y-2">
            <h2 className="section-title">Nossa história</h2>
            <p className="section-subtitle">
              Somos uma ótica familiar, apaixonada por tecnologia e pela experiência de compra. Desde 2009 acolhemos cada cliente com
              consultoria individual, oferecendo opções que combinam bem-estar, estilo e precisão.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: '15 anos de confiança',
                text: 'Evoluímos junto com você, investindo em equipamentos de medição precisa e montagem digital.',
              },
              {
                title: 'Diversidade para todos os gostos',
                text: 'Armações clássicas, modernas e esportivas, sempre com lentes que potencializam o seu estilo.',
              },
              {
                title: 'Aqui em Blumenau',
                text: 'Rua Almirante Barroso, Nº 45, sala 3, Vila Nova. Venha tomar um café e experimentar novas possibilidades.',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="marcas" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title">As marcas que confiam em nós</h2>
              <p className="section-subtitle">Selecionamos lentes que entregam performance e conforto em cada detalhe.</p>
            </div>
            <span className="badge">Varilux • Kodak • Prime • Optview • Zeiss • Hoya</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {brands.map((brand) => (
              <article key={brand.name} className="card space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-primary">{brand.name}</h3>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">Premium</span>
                </div>
                <p className="text-slate-600">{brand.description}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {brand.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="prescricao" className="space-y-6">
          <div className="space-y-2">
            <h2 className="section-title">Como ler sua receita de óculos</h2>
            <p className="section-subtitle">
              Termos comuns que aparecem no seu exame e como eles influenciam o resultado final das lentes.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card space-y-4">
              <h3 className="text-xl font-semibold text-primary">Campos principais</h3>
              <div className="space-y-4">
                {prescriptionTerms.map((term) => (
                  <div key={term.term} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="font-semibold text-primary">{term.term}</p>
                    <p className="mt-1 text-sm text-slate-700">{term.description}</p>
                    <p className="mt-1 text-xs font-semibold text-secondary">Dica: {term.tip}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card space-y-4">
              <h3 className="text-xl font-semibold text-primary">Dicas rápidas para leigos</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  'Traga a receita original ou uma foto legível e dentro do prazo de validade.',
                  'Informe sua rotina: trabalho em computador, direção, esportes ou leitura ajudam a definir a lente ideal.',
                  'Considere tratamentos antirreflexo, proteção contra luz azul e lentes fotossensíveis para conforto extra.',
                  'Na entrega, ajustamos a armação ao seu rosto e revisamos o alinhamento do eixo e da pupila.',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl bg-secondary/10 px-4 py-3 text-sm text-secondary">
                Tem dúvidas? Nossa equipe explica cada campo da receita e recomenda a lente mais confortável para você.
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-10 text-white">
          <div className="absolute inset-0 opacity-10" aria-hidden>
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white blur-3xl" />
            <div className="absolute right-10 bottom-10 h-24 w-24 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="badge bg-white/10 text-sm text-white">Agende sua visita</p>
              <h3 className="mt-3 text-2xl font-bold">Pronto para enxergar melhor?</h3>
              <p className="max-w-2xl text-slate-100">
                Venha experimentar armações, comparar lentes e sair com um plano personalizado para a sua visão. Blumenau, Vila Nova,
                Almirante Barroso, 45, sala 3.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary bg-white text-primary hover:shadow-xl" href="https://wa.me/5547999999999">
                Chamar no WhatsApp
              </a>
              <a
                className={clsx(
                  'inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold transition',
                  'hover:-translate-y-0.5 hover:bg-white/10'
                )}
                href="mailto:contato@oticadu.edu"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-primary">Ótica Du &amp; Edu</p>
            <p>Rua Almirante Barroso, Nº 45, sala 3, Vila Nova, Blumenau - CEP 89035-402</p>
          </div>
          <div className="flex gap-4">
            <a className="text-primary hover:text-secondary" href="tel:+554733444000">
              (47) 3344-4000
            </a>
            <a className="text-primary hover:text-secondary" href="mailto:contato@oticadu.edu">
              contato@oticadu.edu
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
