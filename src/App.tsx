import { clsx } from 'clsx';

const brandHighlights = [
  {
    name: 'Varilux',
    description:
      'Referência mundial em lentes progressivas, trazendo adaptação rápida e conforto para quem precisa de visão nítida em todas as distâncias.',
    points: [
      'Tecnologia de desenho exclusivo que reduz distorções laterais',
      'Personalização para diferentes estilos de uso e armações',
      'Transições suaves entre longe, intermediário e perto'
    ]
  },
  {
    name: 'Kodak',
    description:
      'Qualidade óptica reconhecida e ótima relação custo-benefício para quem busca lentes confiáveis com proteção completa.',
    points: [
      'Tratamentos antirreflexo e filtro para luz azul disponíveis',
      'Lentes leves com nitidez consistente',
      'Opções versáteis para óculos de uso diário'
    ]
  },
  {
    name: 'Prime',
    description:
      'Soluções modernas com foco em resistência e transparência para uso intenso no dia a dia.',
    points: [
      'Material durável com alta resistência a impactos',
      'Boa performance em armações finas ou esportivas',
      'Opção inteligente para quem busca praticidade'
    ]
  },
  {
    name: 'Optview',
    description:
      'Tecnologia de fabricação digital que garante precisão e conforto visual, ideal para quem quer personalização.',
    points: [
      'Mapeamento preciso para encaixar na posição real dos seus olhos',
      'Controle de aberrações que amplia a zona útil de visão',
      'Excelente adaptação para lentes progressivas e ocupacionais'
    ]
  },
  {
    name: 'Zeiss',
    description:
      'Lentes premium com tradição alemã, entregando contraste elevado e definição impecável.',
    points: [
      'Tratamentos de ponta que resistem a arranhões e repelam água e poeira',
      'Precisão óptica reconhecida mundialmente',
      'Opções específicas para motoristas, gamers e uso profissional'
    ]
  },
  {
    name: 'Hoya',
    description:
      'Inovação japonesa com foco em leveza e adaptação rápida, perfeita para rotinas dinâmicas.',
    points: [
      'Design que minimiza distorções em lentes progressivas',
      'Materiais super leves para armações discretas',
      'Tratamentos que reduzem reflexos e fadiga ocular'
    ]
  }
];

const prescriptionTerms = [
  {
    label: 'Esférico (ESF)',
    description:
      'Indica o grau de miopia ou hipermetropia. Valores negativos corrigem miopia (dificuldade para longe) e positivos corrigem hipermetropia (dificuldade para perto).'
  },
  {
    label: 'Cilíndrico (CIL)',
    description:
      'Mostra o grau do astigmatismo, corrigindo distorções provocadas por curvaturas irregulares na córnea.'
  },
  {
    label: 'Eixo (AX)',
    description:
      'A direção do astigmatismo, expressa de 0º a 180º. Indica onde o cilindro deve ser posicionado para alinhar sua visão.'
  },
  {
    label: 'Adição (ADD)',
    description:
      'Valor usado em lentes multifocais/progressivas para leitura e perto. Ele é somado ao grau de longe para criar a área de perto com conforto.'
  }
];

const timeline = [
  {
    year: '2009',
    title: 'Início com propósito',
    text: 'Fundamos a Ótica Du & Edu com a missão de entregar cuidado visual humano e próximo.'
  },
  {
    year: '2015',
    title: 'Tecnologia e variedade',
    text: 'Ampliamos o portfólio com as marcas líderes do mundo e equipamentos de precisão.'
  },
  {
    year: '2024',
    title: 'Experiência completa',
    text: 'Consultoria personalizada, atendimento diverso e lentes para todos os estilos de vida.'
  }
];

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200',
        'transition-transform duration-200 hover:-translate-y-1 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      <header className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:py-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              15 anos cuidando da sua visão
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Ótica Du &amp; Edu
              <span className="block text-lg font-semibold text-emerald-200 md:text-xl">
                Variedade, tecnologia e atendimento humano em Blumenau
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-100">
              Conheça uma ótica que combina precisão técnica e acolhimento. Enxergue com mais
              nitidez, conforto e estilo com lentes das melhores marcas do mundo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5547999999999"
                className="rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-primary shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Fale pelo WhatsApp
              </a>
              <a
                href="tel:+554733331111"
                className="rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Ligue para a loja
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-100/90">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Rua Almirante Barroso, 45, sala 3 — Vila Nova, Blumenau/SC
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                CEP 89035-402
              </div>
            </div>
          </div>
          <div className="flex-1 md:pl-8">
            <Card className="bg-white/10 text-white backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Destaques</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <div>
                    <p className="font-semibold">Atendimento diverso e inclusivo</p>
                    <p className="text-sm text-slate-100/80">Modelos e consultoria para todos os estilos e formatos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <div>
                    <p className="font-semibold">Equipamentos de precisão</p>
                    <p className="text-sm text-slate-100/80">Medições confiáveis para lentes personalizadas e maior conforto.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <div>
                    <p className="font-semibold">Curadoria de marcas premiadas</p>
                    <p className="text-sm text-slate-100/80">Varilux, Kodak, Prime, Optview, Zeiss e Hoya sempre atualizadas.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 md:py-20">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <SectionTitle
              title="Nossa história"
              subtitle="Somos especialistas em conectar tecnologia de ponta com atendimento próximo e acolhedor, garantindo que cada cliente encontre a lente ideal."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {timeline.map((item) => (
                <Card key={item.year}>
                  <p className="text-sm font-semibold text-accent">{item.year}</p>
                  <p className="text-lg font-semibold text-primary">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Card className="h-full">
              <p className="text-sm font-semibold text-accent">Diversidade que acolhe</p>
              <p className="mt-2 text-lg font-semibold text-primary">
                Armações para todos os rostos, estilos e idades.
              </p>
              <p className="mt-3 text-slate-600">
                Prove e combine modelos com apoio de consultores especializados. Montamos o óculos perfeito para
                trabalho, lazer ou esportes com lentes que respeitam sua rotina.
              </p>
              <div className="mt-4 grid gap-3 text-sm text-primary">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Ajustes e regulagens gratuitas
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Orientação completa sobre materiais e tratamentos
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Laboratório parceiro para entregas ágeis e precisas
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title="Marcas que entregam mais conforto visual"
            subtitle="Selecionamos líderes mundiais para garantir nitidez, durabilidade e proteção em qualquer estilo de óculos."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandHighlights.map((brand) => (
              <Card key={brand.name}>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {brand.name}
                </div>
                <p className="text-slate-700">{brand.description}</p>
                <ul className="mt-3 space-y-2 text-sm text-primary">
                  {brand.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title="Como ler sua receita de óculos"
            subtitle="Entenda os termos básicos e converse com nossos consultores para tirar todas as dúvidas antes de escolher suas lentes."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {prescriptionTerms.map((term) => (
              <Card key={term.label}>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">{term.label}</p>
                <p className="mt-2 text-slate-700">{term.description}</p>
              </Card>
            ))}
          </div>
          <Card className="border border-emerald-100 bg-emerald-50">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-primary">Precisa de ajuda para interpretar sua receita?</p>
                <p className="text-slate-700">
                  Envie uma foto da receita no WhatsApp ou passe na loja: nossa equipe explica cada detalhe.
                </p>
              </div>
              <a
                href="https://wa.me/5547999999999"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Tirar dúvidas agora
              </a>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 rounded-3xl bg-primary px-6 py-10 text-white shadow-lg md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Visite-nos</p>
            <p className="text-3xl font-bold">Blumenau, Vila Nova</p>
            <p className="text-slate-100">
              Rua Almirante Barroso, 45, sala 3 — CEP 89035-402. Estamos prontos para ajustar, orientar e cuidar do seu
              olhar com todo o carinho.
            </p>
            <div className="flex flex-col gap-2 text-sm text-emerald-100">
              <span>Segunda à sexta: 9h às 18h</span>
              <span>Sábado: 9h às 13h</span>
            </div>
          </div>
          <div className="grid gap-4">
            <Card className="bg-white/10 text-white backdrop-blur">
              <p className="text-lg font-semibold">Agende uma visita</p>
              <p className="text-sm text-emerald-100">Envie uma mensagem e organizamos sua consultoria personalizada.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:contato@oticaduedu.com"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5"
                >
                  contato@oticaduedu.com
                </a>
                <a
                  href="https://wa.me/5547999999999"
                  className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </Card>
            <Card className="bg-white/10 text-white backdrop-blur">
              <p className="text-lg font-semibold">Formas de pagamento</p>
              <p className="text-sm text-emerald-100">
                Parcelamento facilitado e opções que se encaixam no seu orçamento sem abrir mão da qualidade.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-emerald-100">
                <span>Cartão de crédito</span>
                <span>Cartão de débito</span>
                <span>Pix</span>
                <span>Boleto programado</span>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8 text-center text-sm text-slate-600">
        <p className="font-semibold text-primary">Ótica Du &amp; Edu</p>
        <p>Rua Almirante Barroso, 45, sala 3 — Vila Nova, Blumenau • CEP 89035-402</p>
        <p className="text-xs text-slate-400">Há 15 anos trazendo mais conforto e estilo para sua visão.</p>
      </footer>
    </div>
  );
}

export default App;
