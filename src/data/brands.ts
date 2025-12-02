export type Brand = {
  name: string;
  description: string;
  highlights: string[];
};

export const brands: Brand[] = [
  {
    name: 'Varilux',
    description:
      'Referência mundial em lentes progressivas, oferecendo transições suaves entre distâncias para uma visão confortável em qualquer situação.',
    highlights: [
      'Tecnologia avançada para reduzir distorções e ampliar o campo de visão.',
      'Projetos personalizados para o seu estilo de vida e hábitos visuais.',
      'Conforto imediato na adaptação às lentes multifocais.',
    ],
  },
  {
    name: 'Kodak',
    description:
      'Lentes com a herança da marca em precisão ótica e cores vivas, entregando nitidez e contraste impressionantes.',
    highlights: [
      'Tratamentos antirreflexo e proteção UV de alto desempenho.',
      'Opções leves e resistentes para o dia a dia.',
      'Tecnologia de foco rápido para uso prolongado em telas.',
    ],
  },
  {
    name: 'Prime',
    description:
      'Lentes modernas que combinam design leve com excelente custo-benefício para quem busca estilo e performance.',
    highlights: [
      'Acabamentos premium que valorizam armações finas e minimalistas.',
      'Proteção contra luz azul para conforto digital.',
      'Resistência a riscos e facilidade de limpeza.',
    ],
  },
  {
    name: 'Optview',
    description:
      'Portfólio completo de lentes personalizadas para diferentes necessidades visuais, com produção de alta precisão.',
    highlights: [
      'Mapeamento digital das medidas para ajuste perfeito.',
      'Tecnologias para reduzir reflexos e halos de luz à noite.',
      'Versões fotossensíveis que se adaptam rapidamente à luminosidade.',
    ],
  },
  {
    name: 'Zeiss',
    description:
      'Referência em precisão alemã, garantindo visão cristalina e tratamentos que aumentam a durabilidade das lentes.',
    highlights: [
      'Revestimentos antirreflexo e antiarranhões líderes de mercado.',
      'Lentes digitais com foco rápido para quem alterna entre telas e espaços abertos.',
      'Controle rigoroso de qualidade para cores e contraste superiores.',
    ],
  },
  {
    name: 'Hoya',
    description:
      'Tecnologia japonesa para lentes ultrafinas, leves e estáveis, ideais para uso diário e prolongado.',
    highlights: [
      'Tratamentos como BlueControl e Hi-Vision LongLife para maior proteção.',
      'Designs que minimizam distorções laterais, aumentando o campo de visão.',
      'Alta resistência a sujeira, água e manchas.',
    ],
  },
];
