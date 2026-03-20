import { Droplets, Flame, Leaf, Sparkles, Wind } from 'lucide-react'
import type { HerbData, PlantPart } from '../types/herb.types'

export const herbData: HerbData = {
  sanskrit: 'Ashwagandha',
  botanical: 'Withania somnifera (L.) Dunal',
  english: 'Indian Ginseng, Winter Cherry',
  summary:
    'A premier Rasayana herb renowned for adaptogenic and rejuvenative properties, widely used in nervous debility and stress-related disorders.',
  identificationFeatures: [
    'Perennial shrub with velvety leaves and greenish-yellow flowers',
    'Root has characteristic horse-like smell (ashwa = horse)',
    'Orange-red berries enclosed in papery calyx',
    'Grows 35-75 cm height in dry regions',
  ],
  similarPlants: [
    {
      name: 'Physalis species',
      difference: 'Lacks characteristic root odor; different leaf morphology',
    },
    {
      name: 'Withania coagulans',
      difference: 'Berries used for coagulation; different pharmacological profile',
    },
  ],
  plantImages: {
    fullPlant:
      'https://images.unsplash.com/photo-1738428302791-c8c6f67496c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2h3YWdhbmRoYSUyMHBsYW50JTIwbWVkaWNpbmFsJTIwaGVyYnxlbnwxfHx8fDE3NzA5MjQzODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    root:
      'https://images.unsplash.com/photo-1633945443550-7d6860a2d9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2h3YWdhbmRoYSUyMHJvb3QlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MDkyNDM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    leaf:
      'https://images.unsplash.com/photo-1603050979049-fd4ef4f9014d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2h3YWdhbmRoYSUyMGxlYXZlcyUyMGJvdGFuaWNhbHxlbnwxfHx8fDE3NzA5MjQzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    flower:
      'https://images.unsplash.com/photo-1624243037263-01bb87a0a0c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2h3YWdhbmRoYSUyMGZsb3dlciUyMHllbGxvd3xlbnwxfHx8fDE3NzA5MjQzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stem:
      'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  snapshot: {
    rasa: 'Tikta, Kashaya, Madhura',
    guna: 'Laghu, Snigdha',
    virya: 'Ushna',
    vipaka: 'Madhura',
    doshaEffect: { vata: 'pacifies', kapha: 'pacifies', pitta: 'aggravates' },
    prabhava: 'Balya, Rasayana',
  },
  overview: {
    description:
      'Ashwagandha is one of the most revered herbs in Ayurveda, classified as a Rasayana and Balya drug. The root is the primary medicinal part, though leaves are also used in certain preparations. It promotes strength, vitality, and mental clarity while calming the nervous system.',
    indications: [
      'Nervous exhaustion and stress-related disorders',
      'General debility and convalescence',
      'Insomnia and sleep disturbances',
      'Male and female reproductive health',
      'Arthritis and inflammatory conditions',
      'Cognitive decline and memory impairment',
      'Immune modulation and chronic infections',
    ],
    doshaEffects: [
      {
        dosha: 'Vata',
        effect: 'Pacifies',
        description:
          'Grounds, nourishes, and calms excess Vata through Snigdha and Ushna properties.',
      },
      {
        dosha: 'Kapha',
        effect: 'Pacifies',
        description:
          'Reduces excess Kapha through Ushna Virya and Laghu Guna, though sweet post-digestive effect may increase Kapha if overused.',
      },
      {
        dosha: 'Pitta',
        effect: 'May aggravate',
        description:
          'Hot potency can increase Pitta in excess or in hot seasons. Use cooling adjuvants for Pitta constitution.',
      },
    ],
  },
  dravyaguna: [
    {
      term: 'Rasa',
      value: 'Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)',
      icon: Leaf,
      detail: 'Predominant bitter and astringent tastes with mild sweetness',
    },
    {
      term: 'Guna',
      value: 'Laghu (Light), Snigdha (Unctuous)',
      icon: Wind,
      detail: 'Light quality aids digestion; unctuous quality nourishes tissues',
    },
    {
      term: 'Virya',
      value: 'Ushna (Hot)',
      icon: Flame,
      detail: 'Hot potency stimulates metabolism and digestive fire',
    },
    {
      term: 'Vipaka',
      value: 'Madhura (Sweet)',
      icon: Droplets,
      detail: 'Sweet post-digestive effect nourishes and builds tissues',
    },
    {
      term: 'Prabhava',
      value: 'Balya (Strength), Rasayana (Rejuvenation)',
      icon: Sparkles,
      detail: 'Special potency beyond pharmacological properties',
    },
    {
      term: 'Dosha Karma',
      value: 'Vata-Kapha Shamaka',
      icon: Wind,
      detail: 'Primary action on Vata and Kapha doshas',
    },
  ],
  classical: [
    {
      text: 'Charaka Samhita',
      reference: 'Sutra Sthana 25/40',
      context: 'Balya Mahakashaya (group of strength-promoting drugs)',
    },
    {
      text: 'Charaka Samhita',
      reference: 'Chikitsa Sthana 1/1/62-72',
      context: 'Rasayana Adhyaya (rejuvenation chapter)',
    },
    {
      text: 'Sushruta Samhita',
      reference: 'Sutra Sthana 38/68',
      context: 'Mentioned in Balya group',
    },
    {
      text: 'Ashtanga Hridaya',
      reference: 'Uttara Tantra 40/52-54',
      context: 'Vajikarana Rasayana (aphrodisiac rejuvenation)',
    },
    {
      text: 'Bhavaprakasha',
      reference: 'Guduchyadi Varga 190-191',
      context: 'Detailed properties and therapeutic indications',
    },
    {
      text: 'Raja Nighantu',
      reference: 'Shatahvadi Varga 64-66',
      context: 'Comprehensive drug description and uses',
    },
  ],
  formulations: [
    {
      name: 'Ashwagandha Churna',
      type: 'Simple formulation',
      note: 'Pure root powder with milk, ghee, or honey. Dose: 3-6g daily. Used for general weakness and nervous disorders.',
    },
    {
      name: 'Ashwagandharishta',
      type: 'Asava-Arishta',
      note: 'Self-generated alcohol-based preparation. Dose: 15-30ml twice daily after meals.',
    },
    {
      name: 'Ashwagandha Ghrita',
      type: 'Ghrita',
      note: 'Processed with Ashwagandha and other herbs. Dose: 5-10g with warm milk.',
    },
    {
      name: 'Brihat Ashwagandha Ghrita',
      type: 'Compound formulation',
      note: 'Complex formulation from Bhaishajya Ratnavali used in neurological disorders.',
    },
    {
      name: 'Ashwagandhadi Lehya',
      type: 'Avaleha',
      note: 'Semi-solid rejuvenating tonic for vitality, longevity, and immune support.',
    },
    {
      name: 'Chandraprabha Vati',
      type: 'Tablet formulation',
      note: 'Multi-ingredient classical formulation containing Ashwagandha for urinary and metabolic conditions.',
    },
  ],
  evidence: [
    {
      type: 'Systematic Review & Meta-analysis',
      finding:
        'Significant reduction in stress scores and serum cortisol levels in adults with chronic stress.',
      level: 'High',
      reference: 'Pratte MA et al. J Altern Complement Med. 2014;20(12):901-8',
    },
    {
      type: 'Randomized Controlled Trial',
      finding:
        'Improved muscle strength, size, and recovery in adults undergoing resistance training.',
      level: 'High',
      reference: 'Wankhede S et al. J Int Soc Sports Nutr. 2015;12:43',
    },
    {
      type: 'Double-blind RCT',
      finding: 'Enhanced memory and cognitive function in mild cognitive impairment.',
      level: 'High',
      reference: 'Choudhary D et al. J Diet Suppl. 2017;14(6):599-612',
    },
    {
      type: 'Clinical Trial',
      finding: 'Improved sleep quality and sleep onset latency in insomnia patients.',
      level: 'Moderate',
      reference: 'Langade D et al. Cureus. 2019;11(9):e5797',
    },
    {
      type: 'Randomized Placebo-controlled Trial',
      finding: 'Improved thyroid function in subclinical hypothyroid patients.',
      level: 'Moderate',
      reference: 'Sharma AK et al. J Altern Complement Med. 2018;24(3):243-248',
    },
  ],
  safety: {
    contraindications: [
      'Pregnancy - potential abortifacient properties due to uterine stimulation',
      'Active peptic ulcer disease - may increase gastric secretion',
      'Acute inflammatory conditions with high Pitta',
      'Hyperthyroidism - may increase thyroid hormone levels',
    ],
    cautions: [
      'Use cautiously with CNS depressants (sedatives, anxiolytics) - may have additive effects',
      'Monitor thyroid function if used long-term - may alter thyroid hormone levels',
      'May interact with immunosuppressants - has immunomodulatory properties',
      'Reduce dose in hot climates or during summer - Ushna Virya may aggravate Pitta',
      'May lower blood sugar - caution in diabetics on hypoglycemic medications',
      'Discontinue 2 weeks before surgery - may affect anesthesia and blood pressure',
    ],
    dosage:
      'Root powder (Churna): 3-6g daily in divided doses. Standardized extract: 300-500mg twice daily (typically 5% withanolides). Duration: minimum 2-3 months for Rasayana effects.',
  },
}

export const plantPartLabels: { key: PlantPart; label: string }[] = [
  { key: 'fullPlant', label: 'Full Plant' },
  { key: 'root', label: 'Root' },
  { key: 'leaf', label: 'Leaf' },
  { key: 'flower', label: 'Flower' },
  { key: 'stem', label: 'Stem' },
]
