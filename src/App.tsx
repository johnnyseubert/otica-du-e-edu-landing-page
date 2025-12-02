import type { ReactNode } from 'react';
import { clsx } from 'clsx';

const brands = [
   {
      name: 'Varilux',
      summary:
         'Referência mundial em lentes progressivas com tecnologia digital para ampliar o campo de visão e proporcionar transições suaves.',
      highlights: [
         'Mais conforto em visão de perto, intermediária e longe',
         'Design personalizado para reduzir distorções',
         'Ideal para quem busca adaptação rápida em multifocais',
      ],
   },
   {
      name: 'Kodak Lens',
      summary:
         'Lentes com tradição em nitidez e fidelidade de cores, aliando tratamentos resistentes e proteção diária.',
      highlights: [
         'Tratamentos antirreflexo e antirriscos confiáveis',
         'Excelente equilíbrio entre qualidade óptica e custo',
         'Alta definição de contraste para dirigir e trabalhar',
      ],
   },
   {
      name: 'Prime',
      summary:
         'Lentes confortáveis com ótimo custo-benefício, pensadas para quem busca desempenho diário sem abrir mão de estilo.',
      highlights: [
         'Opções para diferentes graus e estilos de armação',
         'Boa performance em ambientes internos e externos',
         'Disponível em materiais leves para uso prolongado',
      ],
   },
   {
      name: 'Optview',
      summary:
         'Soluções digitais personalizadas que valorizam a ergonomia visual e a estabilidade da imagem.',
      highlights: [
         'Mapeamento preciso para centragem avançada',
         'Versatilidade para óculos de uso contínuo',
         'Nitidez estável em telas e leitura',
      ],
   },
   {
      name: 'Zeiss',
      summary:
         'Precisão alemã reconhecida no mundo todo, com proteção completa contra raios UV e excelente controle de aberrações.',
      highlights: [
         'Campo de visão amplo e bem equilibrado',
         'Revestimentos premium para maior durabilidade',
         'Nitidez constante em diferentes condições de luz',
      ],
   },
   {
      name: 'Hoya',
      summary:
         'Lentes leves e resistentes, conhecidas por tratamentos modernos que facilitam a rotina e reduzem cansaço visual.',
      highlights: [
         'Tecnologias anti-embaçamento e antirreflexo',
         'Materiais finos que valorizam o conforto',
         'Ótimo desempenho para quem usa telas por longos períodos',
      ],
   },
];

const prescriptionItems = [
   {
      title: 'Esférico (ESF)',
      description:
         'Indica o grau para miopia (sinal -) ou hipermetropia (sinal +). Define a potência principal da lente para enxergar de longe ou perto.',
      tip: 'Graus mais altos pedem materiais finos e ajustes especiais para manter leveza e estética.',
   },
   {
      title: 'Cilindro (CIL)',
      description:
         'Mostra a correção do astigmatismo e trabalha junto com o eixo. Equilibra distorções e deixa contornos mais nítidos.',
      tip: 'Quando o cilindro é elevado, centragem e armação bem ajustada fazem toda a diferença na adaptação.',
   },
   {
      title: 'Eixo',
      description:
         'Número em graus (0° a 180°) que orienta o cilindro na lente. Ele direciona a correção para o ponto certo da sua visão.',
      tip: 'Manter o eixo exato durante a montagem evita embaçado e melhora o conforto visual imediato.',
   },
   {
      title: 'Adição (ADD)',
      description:
         'Valor extra usado em multifocais ou lentes ocupacionais para leitura e trabalho próximo. Complementa a visão de perto.',
      tip: 'Uma boa adição combinada com design progressivo de qualidade garante transições suaves entre as distâncias.',
   },
];

const stats = [
   { label: 'Anos de experiência', value: '15+' },
   { label: 'Marcas líderes', value: '6' },
   { label: 'Clientes atendidos', value: 'Milhares' },
];

const Section = ({
   id,
   title,
   subtitle,
   children,
   className,
}: {
   id?: string;
   title: string;
   subtitle?: string;
   children: ReactNode;
   className?: string;
}) => (
   <section id={id} className={clsx('py-16 sm:py-20', className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:px-10">
         <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
               Ótica Du & Edu
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
               {title}
            </h2>
            {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
         </div>
         {children}
      </div>
   </section>
);

function App() {
   return (
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
         <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
               <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg" />
                  <div>
                     <p className="text-sm font-semibold text-brand-600">
                        Ótica Du & Edu
                     </p>
                     <p className="text-xs text-slate-500">
                        Visão clara com cuidado pessoal
                     </p>
                  </div>
               </div>
               <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
                  <a href="#sobre" className="hover:text-brand-700">
                     Sobre
                  </a>
                  <a href="#marcas" className="hover:text-brand-700">
                     Marcas
                  </a>
                  <a href="#receita" className="hover:text-brand-700">
                     Entenda sua receita
                  </a>
                  <a href="#contato" className="hover:text-brand-700">
                     Contato
                  </a>
               </nav>
               <a
                  href="#contato"
                  className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700 sm:inline-flex"
               >
                  Agende uma visita
               </a>
            </div>
         </header>

         <main>
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
               <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2">
                  <div className="space-y-6">
                     <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">
                        Especialistas em cuidado visual há 15 anos
                     </div>
                     <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                        Enxergue o melhor da vida com a atenção da Ótica Du &
                        Edu
                     </h1>
                     <p className="text-lg text-slate-600">
                        Ajudamos você a escolher as lentes e armações ideais
                        para o seu estilo e a sua rotina. Trabalhamos com marcas
                        líderes e orientação completa para que cada detalhe da
                        sua receita seja respeitado.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <a
                           href="#marcas"
                           className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-700"
                        >
                           Conheça nossas lentes
                        </a>
                        <a
                           href="#contato"
                           className="rounded-full px-5 py-3 text-sm font-semibold text-brand-700 ring-2 ring-brand-200 transition hover:-translate-y-0.5 hover:ring-brand-400"
                        >
                           Agende um atendimento
                        </a>
                     </div>
                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {stats.map((stat) => (
                           <div
                              key={stat.label}
                              className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200"
                           >
                              <p className="text-2xl font-bold text-brand-700">
                                 {stat.value}
                              </p>
                              <p className="text-sm text-slate-600">
                                 {stat.label}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                     <div className="absolute inset-6 rounded-[32px] bg-gradient-to-br from-brand-200 via-white to-brand-100 blur-3xl" />
                     <div className="relative grid gap-4 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:grid-cols-2">
                        <div className="space-y-3 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white shadow-lg">
                           <p className="text-sm font-semibold">Onde estamos</p>
                           <p className="text-lg font-bold">
                              Rua Almirante Barroso, 45, sala 3
                           </p>
                           <p className="text-sm">
                              Vila Nova, Blumenau • CEP 89035-402
                           </p>
                        </div>
                        <div className="space-y-3 rounded-2xl border border-slate-200 p-4 text-slate-700 shadow-sm">
                           <p className="text-sm font-semibold text-brand-700">
                              Horário e contato
                           </p>
                           <p className="text-sm">Segunda a sexta, 9h às 18h</p>
                           <p className="text-sm">Sábado, 9h às 13h</p>
                           <p className="text-sm">
                              Fale com a gente e descubra a melhor solução para
                              seus olhos.
                           </p>
                        </div>
                        <div className="col-span-2 rounded-2xl border border-dashed border-brand-200 p-4 text-sm text-slate-600">
                           Há 15 anos ajudando pessoas a enxergarem com
                           conforto, segurança e estilo. Cada ajuste é feito com
                           cuidado artesanal para que você saia da loja
                           enxergando melhor e se sentindo incrível.
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <Section
               id="sobre"
               title="Nossa história"
               subtitle="Somos a Ótica Du & Edu, um espaço familiar que cresce com Blumenau há 15 anos, valorizando cada cliente com atenção personalizada."
            >
               <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="space-y-4 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
                     <h3 className="text-xl font-semibold text-brand-700">
                        Cuidado que atravessa gerações
                     </h3>
                     <p className="text-base text-slate-700">
                        Construímos uma relação próxima com nossos clientes:
                        entendemos hábitos, orientamos sobre lentes e
                        acompanhamos cada etapa até a adaptação. Nosso
                        compromisso é que você saia seguro sobre sua escolha e
                        volte sempre que precisar de manutenção ou novos óculos.
                     </p>
                     <p className="text-base text-slate-700">
                        Localizados na Rua Almirante Barroso, Nº 45, sala 3, no
                        bairro Vila Nova, oferecemos um ambiente acolhedor e
                        equipe treinada para traduzir sua receita em um par de
                        óculos confortável e bonito.
                     </p>
                  </div>
                  <div className="grid gap-4 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-100 p-6 ring-1 ring-brand-100">
                     <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                        <p className="text-sm font-semibold text-brand-700">
                           Diversidade para todos os gostos
                        </p>
                        <p className="text-base text-slate-700">
                           Armações clássicas, esportivas e autorais para
                           combinar com diferentes estilos. Ajustamos medidas e
                           encaixe para que a armação respeite seu formato de
                           rosto e sua rotina.
                        </p>
                     </div>
                     <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                        <p className="text-sm font-semibold text-brand-700">
                           Atenção a cada detalhe
                        </p>
                        <p className="text-base text-slate-700">
                           Conferimos centragem, espessura, tratamentos e
                           acabamentos para garantir conforto, durabilidade e a
                           estética que você merece.
                        </p>
                     </div>
                  </div>
               </div>
            </Section>

            <Section
               id="marcas"
               title="As lentes favoritas dos nossos clientes"
               subtitle="Trabalhamos com marcas líderes para oferecer nitidez, conforto e tecnologia em cada montagem."
            >
               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {brands.map((brand) => (
                     <div
                        key={brand.name}
                        className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200"
                     >
                        <div className="space-y-3">
                           <div className="flex items-center gap-3">
                              <span className="size-10 flex justify-center items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-center text-lg font-bold text-white shadow-md">
                                 {brand.name[0]}
                              </span>
                              <h3 className="text-xl font-semibold text-slate-900">
                                 {brand.name}
                              </h3>
                           </div>
                           <p className="text-sm text-slate-700">
                              {brand.summary}
                           </p>
                           <ul className="space-y-2 text-sm text-slate-700">
                              {brand.highlights.map((item) => (
                                 <li
                                    key={item}
                                    className="flex items-start gap-2"
                                 >
                                    <span
                                       className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500"
                                       aria-hidden
                                    />
                                    <span>{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-700">
                           Soluções personalizadas
                        </div>
                     </div>
                  ))}
               </div>
            </Section>

            <Section
               id="receita"
               title="Entenda sua receita de óculos"
               subtitle="Explicamos cada campo de forma simples para que você saiba exatamente o que está escolhendo."
               className="bg-white/80"
            >
               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {prescriptionItems.map((item) => (
                     <div
                        key={item.title}
                        className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200"
                     >
                        <h3 className="text-lg font-semibold text-brand-700">
                           {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-700">
                           {item.description}
                        </p>
                        <div className="mt-4 rounded-2xl bg-brand-50 p-4 text-sm text-brand-800 ring-1 ring-brand-100">
                           {item.tip}
                        </div>
                     </div>
                  ))}
               </div>
            </Section>

            <Section
               id="contato"
               title="Agende um atendimento personalizado"
               subtitle="Traga sua receita ou venha tirar suas dúvidas. Vamos orientar sobre materiais, tratamentos e armações ideais."
            >
               <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                     <h3 className="text-lg font-semibold text-brand-700">
                        Visite a loja
                     </h3>
                     <p className="mt-2 text-sm text-slate-700">
                        Rua Almirante Barroso, Nº 45, sala 3, Vila Nova,
                        Blumenau
                     </p>
                     <p className="text-sm text-slate-600">CEP 89035-402</p>
                     <div className="mt-4 flex flex-col gap-2 text-sm text-slate-700">
                        <span>Seg a Sex: 9h às 18h • Sáb: 9h às 13h</span>
                        <span>Estacionamento e ajustes rápidos na hora.</span>
                     </div>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-lg">
                     <h3 className="text-lg font-semibold">Vamos conversar?</h3>
                     <p className="mt-2 text-sm text-white/90">
                        Conte suas necessidades visuais, uso de telas e
                        atividades. Assim indicamos a lente ideal e ajudamos a
                        escolher a armação perfeita.
                     </p>
                     <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                        <a
                           href="mailto:contato@oticadu-edu.com"
                           className="rounded-full bg-white px-4 py-2 text-brand-700 shadow-sm transition hover:-translate-y-0.5"
                        >
                           contato@oticadu-edu.com
                        </a>
                        <a
                           href="tel:+554733334444"
                           className="rounded-full border border-white/60 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-white"
                        >
                           (47) 3333-4444
                        </a>
                     </div>
                  </div>
               </div>
            </Section>
         </main>

         <footer className="border-t border-slate-200 bg-white py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center sm:px-10">
               <div>
                  <p className="text-sm font-semibold text-brand-700">
                     Ótica Du & Edu
                  </p>
                  <p className="text-xs text-slate-600">
                     Visão clara, atendimento humano e marcas que você confia.
                  </p>
               </div>
               <div className="text-xs text-slate-500">
                  Rua Almirante Barroso, 45, sala 3 • Vila Nova • Blumenau
               </div>
            </div>
         </footer>
      </div>
   );
}

export default App;
