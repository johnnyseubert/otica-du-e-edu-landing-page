export type PrescriptionTerm = {
  term: string;
  description: string;
  tip: string;
};

export const prescriptionTerms: PrescriptionTerm[] = [
  {
    term: 'Esférico (ESF)',
    description:
      'Indica se você é míope (valor negativo) ou hipermetrope (valor positivo) e aponta a força principal da lente.',
    tip: 'Valores maiores pedem lentes mais finas ou com materiais especiais para conforto e estética.',
  },
  {
    term: 'Cilíndrico (CIL)',
    description:
      'Mostra o grau do astigmatismo, corrigindo distorções causadas pela curvatura irregular da córnea.',
    tip: 'Nem todas as receitas têm este campo; quando presente, ele precisa ser considerado para visão nítida.',
  },
  {
    term: 'Eixo (AX)',
    description:
      'Ângulo que orienta onde o astigmatismo deve ser compensado; vai de 0º a 180º e acompanha o valor cilíndrico.',
    tip: 'É fundamental manter o eixo exato na montagem da lente para não gerar desconforto visual.',
  },
  {
    term: 'Adição (ADD)',
    description:
      'Valor usado em lentes multifocais ou ocupacionais para leitura e tarefas próximas.',
    tip: 'A adição cria a zona de perto; combinada com o grau de longe, define a harmonia das transições na lente.',
  },
];
