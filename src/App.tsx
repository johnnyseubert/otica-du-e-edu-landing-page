import clsx from 'clsx';

const brands = [
   {
      name: 'Varilux',
      tagline: 'Referência mundial em lentes progressivas',
      points: [
         'Transições suaves entre campos de visão para conforto em qualquer distância.',
         'Tecnologia exclusiva que reduz distorções laterais.',
         'Projetos personalizados que consideram postura e hábitos de leitura.',
      ],
   },
   {
      name: 'Kodak',
      tagline: 'Precisão ótica com a confiança de uma marca icônica',
      points: [
         'Tratamentos antirreflexo resistentes e fáceis de limpar.',
         'Opções fotossensíveis que equilibram proteção e nitidez.',
         'Excelente custo-benefício sem abrir mão da tecnologia.',
      ],
   },
   {
      name: 'Prime',
      tagline: 'Design leve com alto desempenho',
      points: [
         'Lentes finas para maior conforto estético e visual.',
         'Revestimentos que protegem contra riscos e respingos.',
         'Ideal para graus elevados sem aumentar o peso dos óculos.',
      ],
   },
   {
      name: 'Optview',
      tagline: 'Precisão digital para cada curva do seu olhar',
      points: [
         'Mapeamento completo do campo de visão para visão ampla.',
         'Personalização que considera distância interpupilar e altura de montagem.',
         'Boa adaptação para usuários de multifocais em primeira experiência.',
      ],
   },
   {
      name: 'Zeiss',
      tagline: 'Engenharia alemã a serviço da nitidez',
      points: [
         'Tratamentos antirreflexo premium que reduzem halos e ofuscamento.',
         'Lentes digitais otimizadas para quem usa telas o dia todo.',
         'Controle rigoroso de qualidade para cores e contrastes fiéis.',
      ],
   },
   {
      name: 'Hoya',
      tagline: 'Ergonomia visual com tecnologia japonesa',
      points: [
         'Lentes leves com geometrias confortáveis para leitura e uso geral.',
         'Opções BlueControl que filtram a luz azul de dispositivos.',
         'Excelente adaptação para montagens esportivas e de aro fino.',
      ],
   },
];

const prescriptionBasics = [
   {
      title: 'Esférico (ESF)',
      description:
         'Define a correção principal para miopia (número negativo, para longe) ou hipermetropia (número positivo, para perto).',
   },
   {
      title: 'Cilíndrico (CIL)',
      description:
         'Relaciona-se ao astigmatismo. Indica quanto a córnea precisa ser compensada para eliminar distorções e deixar as linhas nítidas.',
   },
   {
      title: 'Eixo (AX)',
      description:
         'Em graus de 0° a 180°, mostra a direção do astigmatismo. O eixo orienta onde o cilindro deve atuar na lente.',
   },
   {
      title: 'Adição (ADD)',
      description:
         'Número positivo usado em lentes multifocais ou ocupacionais para leitura. Acrescenta potência no campo de perto para conforto.',
   },
];

const highlights = [
   {
      title: '15 anos cuidando de cada olhar',
      description:
         'Começamos como uma loja de bairro e crescemos com a confiança da comunidade, levando atendimento humano e tecnologia de ponta a cada cliente.',
   },
   {
      title: 'Diversidade de estilos',
      description:
         'Do clássico ao despojado, das armações minimalistas às cores ousadas, montamos um acervo para combinar com todos os rostos e personalidades.',
   },
   {
      title: 'Marcas que fazem a diferença',
      description:
         'Trabalhamos com as fabricantes mais respeitadas do mundo para entregar lentes duráveis, confortáveis e com a proteção que seus olhos merecem.',
   },
];

const services = [
   {
      title: 'Consultoria especializada',
      description:
         'Entendemos seu estilo de vida, uso de telas e rotina para indicar a lente e armação ideais.',
      badge: 'Atendimento humano',
   },
   {
      title: 'Central própria de montagem',
      description:
         'Ajustes precisos, checagem de medidas e entrega rápida para você sair enxergando melhor.',
      badge: 'Precisão milimétrica',
   },
   {
      title: 'Garantia e manutenção',
      description:
         'Orientamos sobre limpeza, ajuste de hastes e substituição de plaquetas para manter o conforto no dia a dia.',
      badge: 'Cuidado contínuo',
   },
];

const address = {
   street: 'Rua Almirante Barroso, 45, sala 3',
   district: 'Vila Nova',
   city: 'Blumenau/SC',
   zip: '89035-402',
};

function SectionCard({
   id,
   title,
   children,
   className,
}: {
   id?: string;
   title: string;
   children: React.ReactNode;
   className?: string;
}) {
   return (
      <section
         id={id}
         className={clsx(
            'relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl backdrop-blur',
            className
         )}
      >
         <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-brand-400/5 to-transparent" />
         <div className="relative space-y-4">
            <div className="flex items-center gap-2 text-brand-200">
               <span className="h-3 w-3 rounded-full bg-brand-400" />
               <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {title}
               </h2>
            </div>
            {children}
         </div>
      </section>
   );
}

function Badge({ label }: { label: string }) {
   return (
      <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-tight text-brand-100 ring-1 ring-inset ring-brand-400/30">
         {label}
      </span>
   );
}

function App() {
   return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
         <header className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(71,110,255,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(18,217,255,0.18),transparent_35%)]" />
            <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-center lg:py-24">
               <div className="flex-1 space-y-6">
                  <Badge label="Ótica Du & Edu" />
                  <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                     Visão que transforma histórias há 15 anos
                  </h1>
                  <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
                     Somos uma ótica familiar em Blumenau que combina
                     acolhimento, tecnologia e os melhores fabricantes do mundo
                     para entregar óculos confortáveis, duráveis e com o seu
                     estilo.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                     <Badge label="Diversidade de estilos" />
                     <Badge label="Lentes premium" />
                     <Badge label="Ajuste personalizado" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                     <a
                        className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                        href="#contato"
                     >
                        Agende sua visita
                     </a>
                     <a
                        className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                        href="#receita"
                     >
                        Entenda sua receita
                     </a>
                     <a
                        className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                        href="#sobre"
                     >
                        Conheça nossa história
                     </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                     <div className="flex items-center gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        Atendimento de segunda a sábado
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-brand-400" />
                        Rua Almirante Barroso, 45, sala 3 - Vila Nova, Blumenau
                     </div>
                  </div>
               </div>
               <div className="relative flex-1">
                  <div className="absolute -left-10 -top-12 hidden h-40 w-40 rounded-full bg-brand-500/25 blur-3xl md:block" />
                  <div className="relative rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur">
                     <div className="space-y-4 rounded-2xl bg-gradient-to-br from-brand-500/10 via-white/5 to-slate-900 p-6 text-sm text-slate-200">
                        <div className="flex items-center justify-between">
                           <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-brand-200">
                                 Desde 2009
                              </p>
                              <p className="text-lg font-semibold text-white">
                                 Cuidando da sua visão
                              </p>
                           </div>
                           <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-brand-100 ring-1 ring-brand-300/40">
                              15 anos
                           </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-left">
                           {[
                              {
                                 label: 'Armações selecionadas',
                                 value: 'Coleções nacionais e importadas',
                              },
                              {
                                 label: 'Lentes sob medida',
                                 value: 'Progressivas, digitais e fotossensíveis',
                              },
                              {
                                 label: 'Garantia real',
                                 value: 'Ajustes e manutenção sem burocracia',
                              },
                              {
                                 label: 'Entrega rápida',
                                 value: 'Montagem e revisões internas',
                              },
                           ].map((item) => (
                              <div
                                 key={item.label}
                                 className="rounded-xl border border-white/10 bg-white/5 p-3"
                              >
                                 <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-200">
                                    {item.label}
                                 </p>
                                 <p className="text-sm font-medium text-white">
                                    {item.value}
                                 </p>
                              </div>
                           ))}
                        </div>
                        <p className="text-xs text-slate-300">
                           Cada lente é ajustada considerando sua rotina,
                           profissão e conforto. Nosso objetivo é que você se
                           sinta seguro desde a escolha até a primeira leitura.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <main
            className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-10 sm:py-16"
            id="sobre"
         >
            <SectionCard title="Nossa história e propósito" id="sobre">
               <div className="grid gap-8 lg:grid-cols-3">
                  {highlights.map((item) => (
                     <div
                        key={item.title}
                        className="flex flex-col gap-3 rounded-2xl bg-white/5 p-4 shadow-inner shadow-black/20"
                     >
                        <h3 className="font-display text-lg font-semibold text-white">
                           {item.title}
                        </h3>
                        <p className="text-sm text-slate-200">
                           {item.description}
                        </p>
                     </div>
                  ))}
               </div>
            </SectionCard>

            <SectionCard
               title="Serviços pensados para o seu dia a dia"
               id="servicos"
            >
               <div className="grid gap-6 md:grid-cols-3">
                  {services.map((service) => (
                     <div
                        key={service.title}
                        className="space-y-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-slate-900 p-4"
                     >
                        <Badge label={service.badge} />
                        <h3 className="font-display text-lg font-semibold text-white">
                           {service.title}
                        </h3>
                        <p className="text-sm text-slate-200">
                           {service.description}
                        </p>
                     </div>
                  ))}
               </div>
            </SectionCard>

            <SectionCard
               title="Marcas que você encontra na Ótica Du & Edu"
               id="marcas"
            >
               <div className="grid gap-6 md:grid-cols-2">
                  {brands.map((brand) => (
                     <div
                        key={brand.name}
                        className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                     >
                        <div className="flex items-center justify-between gap-2">
                           <h3 className="font-display text-xl font-semibold text-white">
                              {brand.name}
                           </h3>
                           <span className="rounded-full bg-brand-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-100 ring-1 ring-brand-400/50">
                              Premium
                           </span>
                        </div>
                        <p className="text-sm font-medium text-brand-100">
                           {brand.tagline}
                        </p>
                        <ul className="space-y-2 text-sm text-slate-200">
                           {brand.points.map((point) => (
                              <li key={point} className="flex gap-2">
                                 <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-300" />
                                 <span>{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </SectionCard>

            <SectionCard
               title="Como ler sua receita oftalmológica"
               className="scroll-mt-24"
               id="receita"
            >
               <div className="grid gap-6 md:grid-cols-2">
                  {prescriptionBasics.map((item) => (
                     <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                     >
                        <div className="flex items-center gap-2 text-brand-200">
                           <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-400" />
                           <h3 className="font-display text-lg font-semibold text-white">
                              {item.title}
                           </h3>
                        </div>
                        <p className="mt-2 text-sm text-slate-200">
                           {item.description}
                        </p>
                     </div>
                  ))}
               </div>
               <div className="mt-6 rounded-2xl border border-brand-400/30 bg-brand-500/10 p-4 text-sm text-brand-50">
                  <p className="font-semibold">Dica rápida:</p>
                  <p>
                     Traga sua receita e nós conferimos todas as medidas (DP,
                     altura de montagem, curva base) para que a lente seja
                     ajustada com precisão ao seu rosto e armação.
                  </p>
               </div>
            </SectionCard>

            <SectionCard
               title="Visite a Ótica Du & Edu"
               className="scroll-mt-24"
               id="contato"
            >
               <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                  <div className="space-y-4">
                     <p className="text-lg font-semibold text-white">
                        Estamos prontos para receber você em Blumenau.
                     </p>
                     <div className="space-y-2 text-sm text-slate-200">
                        <p>
                           <strong>Endereço:</strong> {address.street} -{' '}
                           {address.district}, {address.city}
                        </p>
                        <p>
                           <strong>CEP:</strong> {address.zip}
                        </p>
                        <p>
                           <strong>Contato rápido:</strong> visite a loja ou
                           envie mensagem para agendar uma consultoria
                           personalizada.
                        </p>
                     </div>
                     <div className="flex flex-wrap gap-3 text-sm text-slate-100">
                        <Badge label="Pequenos ajustes imediatos" />
                        <Badge label="Equipe especializada" />
                        <Badge label="Leitura Digital" />
                     </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                     <iframe
                        title="Mapa Ótica Du & Edu"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.796190130211!2d-49.090684923967!3d-26.903925490927486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df19b227f4f7d3%3A0x4fef1e9f0d515e7d!2sR.%20Alm.%20Barroso%2C%2045%20-%20Sala%203%20-%20Vila%20Nova%2C%20Blumenau%20-%20SC%2C%2089035-402!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        allowFullScreen
                        className="h-full min-h-[280px] w-full border-0"
                     />
                  </div>
               </div>
            </SectionCard>
         </main>

         <footer className="border-t border-white/10 bg-slate-950/80 py-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-10">
               <div>
                  <p className="font-display text-lg font-semibold text-white">
                     Ótica Du & Edu
                  </p>
                  <p>
                     {address.street} - {address.district}, {address.city} | CEP{' '}
                     {address.zip}
                  </p>
               </div>
               <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-brand-100">
                  <span className="rounded-full bg-brand-500/20 px-3 py-1 ring-1 ring-brand-400/40">
                     Visão com propósito
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                     Atendimento acolhedor
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                     Tecnologia global
                  </span>
               </div>
            </div>
         </footer>
      </div>
   );
}

export default App;
