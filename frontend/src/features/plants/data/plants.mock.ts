import type { Plant, PlantDetail } from '../types/plant.types'

export const plantCategories = ['All', 'Medicinal', 'Herbs', 'Roots'] as const

const ashwagandhaDetail: PlantDetail = {
  id: 'ashwagandha',
  name: 'Ashwagandha',
  hindiName: 'अश्वगंधा (Asgandh)',
  scientificName: 'Withania somnifera (L.) Dunal',
  family: 'Solanaceae',
  category: 'Medicinal',
  image:
    'https://images.unsplash.com/photo-1738428302791-c8c6f67496c2?auto=format&fit=crop&w=900&q=80',
  summary:
    'A premier Ayurvedic Rasayana valued for restoring strength, calming Vata, and improving resilience during chronic stress and debility.',
  tagline: 'A classical Rasayana herb balancing restoration, resilience, sleep, and strength.',
  description:
    'Ashwagandha is one of Ayurveda’s most respected restorative herbs, used primarily for nervous exhaustion, weakness, poor sleep, recovery, and reproductive vitality.',
  region: 'Dry subtropical regions of India, North Africa, and the Middle East',
  partsUsed: ['Root', 'Leaf'],
  uses: [
    'Stress and anxiety support',
    'Sleep and nervous-system restoration',
    'General debility and convalescence',
    'Reproductive vitality support',
  ],
  benefits: [
    'Supports resilience and recovery in chronically stressed or depleted constitutions.',
    'Traditionally used to improve sleep quality, stamina, and nervous-system steadiness.',
    'Combines nourishing and stabilizing actions rather than acting as a simple stimulant.',
  ],
  careTips: [
    'Prefers full sun and dry, well-drained soil.',
    'Avoid overwatering once the plant is established.',
    'Harvest roots only after full maturity for medicinal use.',
  ],
  caution:
    'Use cautiously in pregnancy, hyperthyroid states, active gastritis, and with sedatives or thyroid medications.',
  synonyms: ['Indian Ginseng', 'Winter Cherry', 'Vajigandha', 'Varahakarni'],
  categoryTags: ['Rasayana', 'Balya', 'Adaptogen', 'Vajikarana-supportive'],
  images: {
    wholePlant:
      'https://images.unsplash.com/photo-1738428302791-c8c6f67496c2?auto=format&fit=crop&w=900&q=80',
    leaf:
      'https://images.unsplash.com/photo-1603050979049-fd4ef4f9014d?auto=format&fit=crop&w=900&q=80',
    flower:
      'https://images.unsplash.com/photo-1624243037263-01bb87a0a0c7?auto=format&fit=crop&w=900&q=80',
    root:
      'https://images.unsplash.com/photo-1633945443550-7d6860a2d9e6?auto=format&fit=crop&w=900&q=80',
    stem:
      'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=900&q=80',
  },
  identification: {
    wholePlantDescription:
      'A small branching perennial shrub, usually 35 to 75 cm tall, with dull green foliage and an understated bushy habit.',
    characteristics: {
      height: 'Approximately 35-75 cm in mature growth.',
      leaves:
        'Simple, ovate to broadly elliptic, dull green, softly pubescent, and somewhat velvety in texture.',
      flowers:
        'Small, inconspicuous, greenish to greenish-yellow flowers borne in the leaf axils.',
      fruit:
        'Orange-red berry enclosed in a papery inflated calyx, useful as a field marker.',
      root:
        'Stout cylindrical root, buff to light brown externally and whitish internally; primary medicinal part.',
      smell:
        'Characteristic horse-like odor from the root, reflected in the name Ashwagandha.',
    },
    habitat:
      'Thrives in dry subtropical climates, especially in sandy or well-drained soils with strong sunlight.',
    similarPlants: [
      {
        name: 'Physalis species',
        difference:
          'May resemble Ashwagandha in the enclosed berry structure but lacks the characteristic medicinal root profile and odor.',
      },
      {
        name: 'Withania coagulans',
        difference:
          'Related species with different fruit use and therapeutic emphasis; Ashwagandha root is more strongly tied to Rasayana use.',
      },
    ],
  },
  snapshot: {
    rasa: ['Tikta', 'Kashaya', 'Madhura'],
    guna: ['Laghu', 'Snigdha'],
    virya: 'Ushna',
    vipaka: 'Madhura',
    prabhava: 'Balya and Rasayana action with restorative nervous-system support.',
    doshaEffect:
      'Primarily pacifies Vata and Kapha; may aggravate Pitta in excess, hot climates, or heat-dominant constitutions.',
  },
  overview: {
    detailedDescription:
      'Ashwagandha holds a central place in Ayurvedic practice as a Rasayana and strength-promoting herb, especially in states of depletion, stress, nervous exhaustion, poor sleep, reproductive weakness, and slow recovery after illness. Its importance lies in its ability to nourish while stabilizing: it supports tissue building, steadies aggravated Vata, and helps restore endurance without behaving like a harsh stimulant. In modern integrative practice, it is commonly positioned as an adaptogenic herb, but within the Ayurvedic framework its significance is broader, spanning vitality, sleep, reproductive support, and convalescent care.',
  },
  clinicalIndications: [
    {
      condition: 'Stress and Anxiety',
      description:
        'Used to calm nervous-system overactivity, improve resilience under chronic stress, and reduce the exhaustion associated with prolonged mental strain.',
      partUsed: 'Root',
      effectivenessLevel: 'Moderate support',
    },
    {
      condition: 'Insomnia',
      description:
        'Supports sleep initiation and overall sleep quality, especially where poor sleep is linked to worry, fatigue, or Vata aggravation.',
      partUsed: 'Root',
      effectivenessLevel: 'Moderate support',
    },
    {
      condition: 'General Weakness and Convalescence',
      description:
        'Traditionally given in weakness, tissue depletion, low stamina, and slow post-illness recovery, often with milk or ghee.',
      partUsed: 'Root',
      effectivenessLevel: 'Strong traditional use',
    },
    {
      condition: 'Immunity and Recovery',
      description:
        'Supports general resilience and recovery in stress-related or chronic low-energy states rather than acting as an acute anti-infective herb.',
      partUsed: 'Root',
      effectivenessLevel: 'Traditional support',
    },
    {
      condition: 'Joint Disorders',
      description:
        'Used in chronic inflammatory or degenerative conditions where pain coexists with weakness, fatigue, or tissue depletion.',
      partUsed: 'Root',
      effectivenessLevel: 'Supportive use',
    },
    {
      condition: 'Reproductive Health',
      description:
        'Included in Vajikarana-oriented care to support vitality, endurance, and reproductive strength in exhausted constitutions.',
      partUsed: 'Root',
      effectivenessLevel: 'Strong traditional use',
    },
  ],
  doshaInteraction: {
    vata: {
      effect: 'Pacifies',
      explanation:
        'Its nourishing, stabilizing, and restorative profile directly addresses dryness, weakness, anxiety, fatigue, and sleep disturbance associated with aggravated Vata.',
    },
    kapha: {
      effect: 'Generally pacifies',
      explanation:
        'The hot potency helps counter coldness and sluggishness, though its building quality means use should be individualized in heavy Kapha states.',
    },
    pitta: {
      effect: 'May aggravate',
      explanation:
        'Its Ushna Virya can increase heat in Pitta-dominant individuals, especially with excess use, inflammatory conditions, or hot weather.',
    },
  },
  dravyagunaBreakdown: [
    {
      name: 'Rasa',
      meaning: 'Tikta, Kashaya, and Madhura tastes.',
      function:
        'Balances clearing and toning effects with nourishment and rebuilding support.',
      clinicalRelevance:
        'Helps explain why Ashwagandha is both restorative and balancing instead of merely stimulating.',
    },
    {
      name: 'Guna',
      meaning: 'Laghu and Snigdha qualities.',
      function:
        'Maintains digestibility while also providing unctuous, tissue-supportive nourishment.',
      clinicalRelevance:
        'Useful in dry, depleted, fatigued constitutions needing rebuilding without excessive heaviness.',
    },
    {
      name: 'Virya',
      meaning: 'Ushna or hot potency.',
      function: 'Supports warmth, circulation, and metabolic activation.',
      clinicalRelevance:
        'Favors Vata-Kapha states but requires caution in heat-dominant Pitta conditions.',
    },
    {
      name: 'Vipaka',
      meaning: 'Madhura or sweet post-digestive effect.',
      function: 'Supports long-term nourishment and anabolic tissue recovery.',
      clinicalRelevance:
        'Relevant in prolonged restorative use, debility, and convalescence.',
    },
  ],
  classicalReferences: [
    {
      bookName: 'Charaka Samhita',
      section: 'Sutra Sthana, Balya Mahakashaya context',
      description:
        'Associated with strength-promoting and restorative therapeutic groupings.',
    },
    {
      bookName: 'Charaka Samhita',
      section: 'Chikitsa Sthana, Rasayana sections',
      description:
        'Linked with rejuvenative use and restoration of vitality in depleted patients.',
    },
    {
      bookName: 'Sushruta Samhita',
      section: 'Balya-related references',
      description:
        'Reflects its long-standing use as a tissue-supportive and strength-promoting herb.',
    },
    {
      bookName: 'Bhavaprakasha Nighantu',
      section: 'Guduchyadi Varga',
      description:
        'Provides practical materia medica context for properties, actions, and applications.',
    },
  ],
  classicalFormulations: [
    {
      formulationName: 'Ashwagandha Churna',
      type: 'Churna',
      uses: 'General weakness, low stamina, nervous exhaustion, convalescence',
      dosage: 'Typically 3-6 g daily with milk, ghee, or honey depending on context.',
    },
    {
      formulationName: 'Ashwagandharishta',
      type: 'Arishta',
      uses: 'Debility, low strength, nervous-system support, recovery support',
      dosage: 'Often 15-30 mL after meals in diluted form.',
    },
    {
      formulationName: 'Ashwagandha Ghrita',
      type: 'Ghrita',
      uses: 'Vata disorders, debility, reproductive and nervous-system support',
      dosage: 'Small measured doses, often taken with warm milk or water.',
    },
  ],
  modernResearch: [
    {
      studyType: 'Systematic review and meta-analysis',
      findings:
        'Associated with reduced perceived stress and anxiety compared with placebo, though heterogeneity and certainty limitations remain.',
      source: 'Salve et al., 2022',
      strength: 'Moderate',
    },
    {
      studyType: 'Randomized double-blind placebo-controlled trial',
      findings:
        'Improved sleep quality, sleep onset latency, and anxiety scores in adults with insomnia and anxiety symptoms.',
      source: 'Langade et al., 2019',
      strength: 'Moderate',
    },
    {
      studyType: 'Systematic review and meta-analysis on sleep',
      findings:
        'Showed a small but significant positive effect on sleep, especially in insomnia subgroups and with higher-dose standardized extracts.',
      source: 'Cheah et al., 2021',
      strength: 'Moderate',
    },
  ],
  safetyDosage: {
    contraindications: [
      'Pregnancy',
      'Breastfeeding',
      'Known hypersensitivity to Ashwagandha preparations',
    ],
    cautions: [
      'Use carefully in hyperthyroid states or thyroid medication users.',
      'Use cautiously in autoimmune conditions and before surgery.',
      'Avoid excess use in strong Pitta constitutions or active gastritis.',
    ],
    interactions: [
      'Sedatives and CNS depressants',
      'Thyroid medications',
      'Antidiabetic medications',
      'Antihypertensives',
      'Immunosuppressants',
    ],
    dosage: [
      {
        form: 'Churna',
        amount: '3-6 g daily',
        notes: 'Often given in divided doses with milk, ghee, or honey.',
      },
      {
        form: 'Standardized extract',
        amount: '300 mg twice daily',
        notes: 'Common study range; depends on extract strength and withanolide standardization.',
      },
      {
        form: 'Kwatha or decoction',
        amount: 'Varies by formulation',
        notes: 'Less common in modern retail products; dosing should follow practitioner guidance.',
      },
    ],
  },
}

const simplePlantDetail = (plant: PlantDetail): PlantDetail => plant

export const plantDetailsMockData: PlantDetail[] = [
  ashwagandhaDetail,
  simplePlantDetail({
    id: 'tulsi',
    name: 'Tulsi',
    hindiName: 'तुलसी',
    scientificName: 'Ocimum tenuiflorum',
    family: 'Lamiaceae',
    category: 'Herbs',
    image:
      'https://images.unsplash.com/photo-1615485925873-8f3f1ac4f2bd?auto=format&fit=crop&w=900&q=80',
    summary: 'Sacred basil known for aromatic leaves and respiratory wellness support.',
    tagline: 'An aromatic household herb that sits between ritual, tea, and wellness.',
    description:
      'Tulsi is a fragrant herbal staple often used in teas, respiratory wellness blends, and daily health routines. Its familiar aroma and broad appeal make it ideal for a plant-first wellness product.',
    region: 'Indian subcontinent and tropical Southeast Asia',
    partsUsed: ['Leaf', 'Flower'],
    uses: ['Respiratory support', 'Daily tea blends', 'Stress support'],
    benefits: [
      'Frequently brewed as a daily herbal infusion',
      'Valued for fragrant leaves and versatile wellness use',
      'Easy to position as a gateway herb in plant libraries',
    ],
    careTips: [
      'Thrives in warm conditions with regular pruning',
      'Keep soil lightly moist but not soggy',
      'Pinch flowering tops to encourage dense leaf growth',
    ],
    caution: 'Use moderate amounts if you are sensitive to strong aromatic herbs.',
    synonyms: ['Holy Basil', 'Tulasi', 'Surasa'],
    categoryTags: ['Medhya-supportive', 'Kaphahara', 'Sacred herb'],
    images: {
      wholePlant:
        'https://images.unsplash.com/photo-1615485925873-8f3f1ac4f2bd?auto=format&fit=crop&w=900&q=80',
      leaf:
        'https://images.unsplash.com/photo-1602082406080-ca5a1fbaf8f6?auto=format&fit=crop&w=900&q=80',
      flower:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      root:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      stem:
        'https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=900&q=80',
    },
    identification: {
      wholePlantDescription:
        'An erect, highly aromatic branching herb or undershrub with green to purple tinged stems and opposite leaves.',
      characteristics: {
        height: 'Usually 30-90 cm depending on cultivation and climate.',
        leaves:
          'Opposite, ovate, softly toothed, highly aromatic leaves with glandular texture.',
        flowers:
          'Small purplish or whitish flowers arranged in terminal racemes.',
        fruit: 'Tiny nutlets formed after flowering.',
        root: 'Slender fibrous root system, not the primary medicinal focus.',
        smell: 'Strong clove-like, spicy, sweet aromatic odor.',
      },
      habitat:
        'Commonly cultivated around homes and temples; thrives in warm, sunny, well-drained environments.',
      similarPlants: [
        {
          name: 'Sweet Basil',
          difference:
            'Tulsi is more pungent and medicinally aromatic, with a stronger devotional and therapeutic identity than culinary basil.',
        },
      ],
    },
    snapshot: {
      rasa: ['Katu', 'Tikta'],
      guna: ['Laghu', 'Ruksha'],
      virya: 'Ushna',
      vipaka: 'Katu',
      prabhava: 'Pranavaha support with aromatic clearing action.',
      doshaEffect: 'Pacifies Kapha and Vata; may increase Pitta in excess.',
    },
    overview: {
      detailedDescription:
        'Tulsi is one of the most culturally and medicinally significant herbs in Ayurveda. It is valued for its aromatic, light, and penetrating action, especially in Kapha-dominant respiratory conditions, sluggishness, and cold-heavy constitutions. Beyond respiratory support, it is widely used in daily teas and preventive health routines, where it helps maintain clarity, digestive lightness, and stress resilience.',
    },
    clinicalIndications: [
      {
        condition: 'Cold and Cough',
        description:
          'Its warming aromatic action helps reduce congestion, support expectoration, and improve comfort during Kapha-dominant upper respiratory complaints.',
        partUsed: 'Leaf',
        effectivenessLevel: 'Strong traditional use',
      },
      {
        condition: 'Stress Support',
        description:
          'Frequently used in daily infusions to improve mental steadiness and resilience under mild stress.',
        partUsed: 'Leaf',
        effectivenessLevel: 'Supportive use',
      },
      {
        condition: 'Digestive Sluggishness',
        description:
          'Useful in cold, heavy digestion with mild bloating and low digestive responsiveness.',
        partUsed: 'Leaf',
      },
    ],
    doshaInteraction: {
      vata: {
        effect: 'May pacify mildly',
        explanation:
          'Its warming nature can help Vata when coldness and respiratory congestion are present, though excess dryness can aggravate depleted Vata.',
      },
      kapha: {
        effect: 'Pacifies',
        explanation:
          'The pungent, light, and aromatic qualities strongly reduce heaviness, mucus, and stagnation.',
      },
      pitta: {
        effect: 'May aggravate in excess',
        explanation:
          'Its hot, pungent profile can increase heat in sensitive Pitta constitutions if overused.',
      },
    },
    dravyagunaBreakdown: [
      {
        name: 'Rasa',
        meaning: 'Katu and Tikta tastes.',
        function: 'Clears Kapha, stimulates movement, and reduces heaviness.',
        clinicalRelevance:
          'Supports use in congestion, sluggish digestion, and dullness with mucus accumulation.',
      },
      {
        name: 'Guna',
        meaning: 'Laghu and Ruksha qualities.',
        function: 'Lightens and dries excessive moisture.',
        clinicalRelevance:
          'Useful in Kapha excess but should be balanced in very dry constitutions.',
      },
      {
        name: 'Virya',
        meaning: 'Ushna potency.',
        function: 'Warms, stimulates, and disperses stagnation.',
        clinicalRelevance:
          'Important in respiratory and cold-heavy presentations.',
      },
      {
        name: 'Vipaka',
        meaning: 'Katu post-digestive effect.',
        function: 'Sustains reducing and stimulating action after digestion.',
        clinicalRelevance:
          'Supports long-term Kapha reduction in daily use.',
      },
    ],
    classicalReferences: [
      {
        bookName: 'Charaka Samhita',
        section: 'Kasa and Shwasa contexts',
        description:
          'Tulsi is associated with respiratory benefit and aromatic clearing in traditional practice.',
      },
      {
        bookName: 'Bhavaprakasha Nighantu',
        section: 'Haritakyadi Varga',
        description:
          'Describes Tulsi as pungent, heating, and useful in Kapha and respiratory disorders.',
      },
    ],
    classicalFormulations: [
      {
        formulationName: 'Tulsi Swarasa',
        type: 'Fresh juice',
        uses: 'Respiratory discomfort, cough, mild digestive sluggishness',
        dosage: 'Fresh expressed juice in practitioner-guided amounts.',
      },
      {
        formulationName: 'Tulsi Phanta',
        type: 'Infusion',
        uses: 'Daily respiratory and stress-support tea',
        dosage: 'Prepared as a light infusion from leaves.',
      },
    ],
    modernResearch: [
      {
        studyType: 'Review',
        findings:
          'Tulsi shows promise in stress modulation, metabolic balance, and immune-support contexts, though many studies are small and heterogeneous.',
        source: 'Integrative herbal reviews',
        strength: 'Moderate',
      },
    ],
    safetyDosage: {
      contraindications: [],
      cautions: [
        'Use in moderation in heat-dominant constitutions.',
        'Concentrated extracts should be individualized in sensitive patients.',
      ],
      interactions: ['Potential additive effects with glucose-lowering regimens'],
      dosage: [
        {
          form: 'Leaf infusion',
          amount: '1-2 cups daily',
          notes: 'Common household preparation for routine use.',
        },
        {
          form: 'Fresh juice',
          amount: 'Small practitioner-guided quantities',
          notes: 'Traditionally used more acutely for respiratory support.',
        },
      ],
    },
  }),
  simplePlantDetail({
    id: 'turmeric',
    name: 'Turmeric',
    hindiName: 'हल्दी',
    scientificName: 'Curcuma longa',
    family: 'Zingiberaceae',
    category: 'Roots',
    image:
      'https://images.unsplash.com/photo-1615485737651-7986d54fd123?auto=format&fit=crop&w=900&q=80',
    summary: 'Bright golden rhizome valued for culinary use and anti-inflammatory potential.',
    tagline: 'A vivid rhizome bridging kitchen use, heritage remedies, and modern supplements.',
    description:
      'Turmeric moves easily between culinary and wellness contexts, making it one of the most accessible plants in an herbal catalog. It is frequently featured in blends centered on comfort, color, and inflammation support.',
    region: 'South Asia, especially India and surrounding tropical climates',
    partsUsed: ['Rhizome'],
    uses: ['Food and spice use', 'Inflammation-focused blends', 'Golden milk'],
    benefits: [
      'Recognized instantly by its bright color and culinary familiarity',
      'Easy to feature in both wellness and nutrition-focused experiences',
      'Works well in formulations, teas, and everyday food integration',
    ],
    careTips: [
      'Needs warm weather, humidity, and rich soil',
      'Plant rhizomes shallow and keep the soil evenly moist',
      'Harvest when the foliage yellows and begins to die back',
    ],
    caution: 'Use carefully with anticoagulant or gallbladder-related concerns.',
    synonyms: ['Haridra', 'Haldi', 'Nisha'],
    categoryTags: ['Kandughna', 'Varnya', 'Kaphahara'],
    images: {
      wholePlant:
        'https://images.unsplash.com/photo-1615485737651-7986d54fd123?auto=format&fit=crop&w=900&q=80',
      leaf:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      flower:
        'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
      root:
        'https://images.unsplash.com/photo-1673208126879-18094b40d9cf?auto=format&fit=crop&w=900&q=80',
      stem:
        'https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=900&q=80',
    },
    identification: {
      wholePlantDescription:
        'A rhizomatous perennial with broad tropical leaves and underground orange-yellow rhizomes.',
      characteristics: {
        height: 'Usually 60-100 cm.',
        leaves: 'Large lanceolate leaves arising in clumps from the rhizome.',
        flowers: 'Pale yellow to whitish flowers on a spike-like inflorescence.',
        fruit: 'Rarely emphasized in common medicinal identification.',
        root: 'Bright orange-yellow rhizome with strong staining property.',
        smell: 'Earthy, warm, slightly bitter-spicy aroma.',
      },
      habitat:
        'Cultivated in warm humid tropical climates with fertile, well-drained soil.',
      similarPlants: [
        {
          name: 'Wild Curcuma species',
          difference:
            'Related species may differ in aroma, rhizome color, and therapeutic profile; true turmeric has the classic bright yellow-orange rhizome.',
        },
      ],
    },
    snapshot: {
      rasa: ['Tikta', 'Katu'],
      guna: ['Laghu', 'Ruksha'],
      virya: 'Ushna',
      vipaka: 'Katu',
      prabhava: 'Lekhana and complexion-supportive action.',
      doshaEffect: 'Generally reduces Kapha and supports Pitta-Kapha balance when properly used.',
    },
    overview: {
      detailedDescription:
        'Turmeric is among the most versatile Ayurvedic herbs, valued in both internal and external applications. It is used in inflammatory states, skin disorders, metabolic sluggishness, and blood-related imbalances. Its role extends beyond medicine into food and ritual, making it one of the most integrated herbs in household health traditions.',
    },
    clinicalIndications: [
      {
        condition: 'Inflammatory Conditions',
        description:
          'Used to support management of chronic low-grade inflammatory patterns and tissue irritation.',
        partUsed: 'Rhizome',
        effectivenessLevel: 'Moderate support',
      },
      {
        condition: 'Skin Disorders',
        description:
          'Traditionally applied internally and externally in itching, discoloration, and inflammatory skin complaints.',
        partUsed: 'Rhizome',
        effectivenessLevel: 'Strong traditional use',
      },
      {
        condition: 'Metabolic Sluggishness',
        description:
          'Included where Kapha-related heaviness and impaired metabolic responsiveness are present.',
        partUsed: 'Rhizome',
      },
    ],
    doshaInteraction: {
      vata: {
        effect: 'May require balancing',
        explanation:
          'The drying quality can aggravate Vata unless given with suitable anupana or in mixed formulations.',
      },
      kapha: {
        effect: 'Pacifies',
        explanation:
          'Its pungent, bitter, light qualities reduce heaviness, stagnation, and excess secretions.',
      },
      pitta: {
        effect: 'Context-dependent',
        explanation:
          'Although heating, it is also used in blood and skin contexts; tolerance depends on constitution and formulation.',
      },
    },
    dravyagunaBreakdown: [
      {
        name: 'Rasa',
        meaning: 'Tikta and Katu tastes.',
        function: 'Supports clearing, drying, and stimulating action.',
        clinicalRelevance: 'Useful in inflammatory, Kapha, and skin-oriented indications.',
      },
      {
        name: 'Guna',
        meaning: 'Laghu and Ruksha qualities.',
        function: 'Reduces heaviness and excessive oiliness.',
        clinicalRelevance: 'Supports use in metabolic and Kapha-dominant states.',
      },
      {
        name: 'Virya',
        meaning: 'Ushna potency.',
        function: 'Promotes circulation and metabolic activation.',
        clinicalRelevance: 'Important in sluggish inflammatory conditions.',
      },
      {
        name: 'Vipaka',
        meaning: 'Katu post-digestive effect.',
        function: 'Maintains reducing and drying effect after digestion.',
        clinicalRelevance: 'Useful where persistent Kapha reduction is needed.',
      },
    ],
    classicalReferences: [
      {
        bookName: 'Sushruta Samhita',
        section: 'Kushtha and wound-related contexts',
        description: 'Turmeric is valued in skin, cleansing, and healing applications.',
      },
      {
        bookName: 'Bhavaprakasha Nighantu',
        section: 'Haridradi Varga',
        description:
          'Describes Haridra in relation to complexion, itching, and metabolic disorders.',
      },
    ],
    classicalFormulations: [
      {
        formulationName: 'Haridra Khanda',
        type: 'Powdered compound',
        uses: 'Allergic and skin-related complaints',
        dosage: 'Taken in measured spoon doses as directed.',
      },
      {
        formulationName: 'Nisha Amalaki',
        type: 'Powder / tablet',
        uses: 'Metabolic and glucose-support contexts',
        dosage: 'Depends on formulation strength and practitioner guidance.',
      },
    ],
    modernResearch: [
      {
        studyType: 'Systematic reviews',
        findings:
          'Curcumin-rich turmeric preparations show moderate evidence in inflammatory and joint-support settings, though formulation quality matters greatly.',
        source: 'Clinical review literature',
        strength: 'Moderate',
      },
    ],
    safetyDosage: {
      contraindications: ['Use cautiously in active gallbladder obstruction'],
      cautions: [
        'High-dose extracts may irritate sensitive digestion.',
        'Use caution with blood-thinning therapies.',
      ],
      interactions: ['Anticoagulants', 'Antiplatelet drugs'],
      dosage: [
        {
          form: 'Churna',
          amount: '1-3 g daily',
          notes: 'Often used with warm water, milk, or ghee depending on indication.',
        },
        {
          form: 'Standardized extract',
          amount: 'Varies by product',
          notes: 'Dose depends on curcuminoid concentration and absorption enhancers.',
        },
      ],
    },
  }),
  simplePlantDetail({
    id: 'brahmi',
    name: 'Brahmi',
    hindiName: 'ब्राह्मी',
    scientificName: 'Bacopa monnieri',
    family: 'Plantaginaceae',
    category: 'Medicinal',
    image:
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
    summary: 'Creeping herb traditionally associated with focus, memory, and calm cognition.',
    tagline: 'A small creeping herb often featured in memory and focus conversations.',
    description:
      'Brahmi is commonly introduced in focus and cognition-oriented herbal education. Its profile suits modern learning, concentration, and calm-support narratives for health-tech experiences.',
    region: 'Wetlands across India, Australia, and tropical regions',
    partsUsed: ['Whole plant'],
    uses: ['Cognitive support', 'Calm focus', 'Learning routines'],
    benefits: [
      'Fits well into student and concentration-oriented herbal collections',
      'Visually distinct as a soft, low-growing aquatic herb',
      'Often introduced as part of gentle daily wellness habits',
    ],
    careTips: [
      'Grows best in moist soil or shallow water conditions',
      'Prefers bright indirect light to partial sun',
      'Trim regularly to keep the plant dense and healthy',
    ],
    caution: 'Start gradually if using concentrated extracts or paired calming products.',
    synonyms: ['Jalabrahmi', 'Brahmi', 'Herb of grace'],
    categoryTags: ['Medhya', 'Nervine-supportive', 'Cognitive herb'],
    images: {
      wholePlant:
        'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
      leaf:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      flower:
        'https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=900&q=80',
      root:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      stem:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    },
    identification: {
      wholePlantDescription:
        'A small creeping succulent herb often found near water, with soft stems rooting at nodes.',
      characteristics: {
        height: 'Low-growing, mat-forming habit.',
        leaves: 'Small oblong fleshy leaves, opposite and smooth.',
        flowers: 'Small pale blue to whitish flowers with delicate petals.',
        fruit: 'Small capsule after flowering.',
        root: 'Fine roots emerge from creeping nodes.',
        smell: 'Mild, green, watery-herbaceous smell.',
      },
      habitat: 'Common in marshy ground, wetlands, and shallow water margins.',
      similarPlants: [
        {
          name: 'Centella asiatica',
          difference:
            'Often confused in popular naming, but Brahmi has succulent narrow leaves while Mandukaparni has rounded fan-like leaves.',
        },
      ],
    },
    snapshot: {
      rasa: ['Tikta', 'Kashaya'],
      guna: ['Laghu', 'Sara'],
      virya: 'Sheeta',
      vipaka: 'Madhura',
      prabhava: 'Medhya effect with calm cognitive support.',
      doshaEffect: 'Pacifies Pitta and Vata when used properly; may increase Kapha if overused in heavy constitutions.',
    },
    overview: {
      detailedDescription:
        'Brahmi is classically regarded as a Medhya herb, especially valued for memory, concentration, mental steadiness, and calm cognition. In Ayurveda it is used where the mind is overworked, overheated, or fatigued. Its cooling and clarifying nature makes it especially relevant in Pitta-related mental agitation and in learners requiring sustained cognitive support.',
    },
    clinicalIndications: [
      {
        condition: 'Memory and Learning Support',
        description:
          'Traditionally used to support recall, retention, and clarity in study-oriented or mentally fatigued individuals.',
        partUsed: 'Whole plant',
        effectivenessLevel: 'Strong traditional use',
      },
      {
        condition: 'Anxiety and Restlessness',
        description:
          'Useful where mental overactivity, irritability, or subtle anxious agitation is present.',
        partUsed: 'Whole plant',
      },
      {
        condition: 'Sleep Disturbance',
        description:
          'Supports calmness and may help where sleep issues are linked to overactive mental processing.',
        partUsed: 'Whole plant',
      },
    ],
    doshaInteraction: {
      vata: {
        effect: 'Pacifies gently',
        explanation:
          'Helps calm mental restlessness and nervous overactivity when depletion is not dominated by cold dryness.',
      },
      kapha: {
        effect: 'May increase mildly',
        explanation:
          'Its cooling and somewhat softening nature may not suit very heavy or sluggish Kapha states unless combined appropriately.',
      },
      pitta: {
        effect: 'Pacifies',
        explanation:
          'Its cooling, calming profile is especially useful where mental heat, irritability, or sharp overactivity is present.',
      },
    },
    dravyagunaBreakdown: [
      {
        name: 'Rasa',
        meaning: 'Tikta and Kashaya tastes.',
        function: 'Clarifies and tones without excessive stimulation.',
        clinicalRelevance: 'Supports use in mental overactivity and subtle inflammatory heat.',
      },
      {
        name: 'Guna',
        meaning: 'Laghu and Sara qualities.',
        function: 'Lightness supports mental clarity and flow.',
        clinicalRelevance: 'Useful in study and concentration-oriented applications.',
      },
      {
        name: 'Virya',
        meaning: 'Sheeta potency.',
        function: 'Cools excess heat and agitation.',
        clinicalRelevance: 'Important in Pitta-linked irritability and mental burnout.',
      },
      {
        name: 'Vipaka',
        meaning: 'Madhura post-digestive effect.',
        function: 'Supports nourishment and gentle steadiness over time.',
        clinicalRelevance: 'Relevant in long-term cognitive support routines.',
      },
    ],
    classicalReferences: [
      {
        bookName: 'Charaka Samhita',
        section: 'Medhya Rasayana context',
        description: 'Brahmi is associated with cognition-supportive Rasayana use.',
      },
      {
        bookName: 'Bhavaprakasha Nighantu',
        section: 'Medhya herb listings',
        description:
          'Recognized for its mental clarity and nervous-system supportive roles.',
      },
    ],
    classicalFormulations: [
      {
        formulationName: 'Brahmi Ghrita',
        type: 'Ghrita',
        uses: 'Memory, concentration, mental calmness',
        dosage: 'Traditionally given in measured doses with warm water or milk.',
      },
      {
        formulationName: 'Saraswatarishta',
        type: 'Arishta',
        uses: 'Speech, cognition, and nervous-system support',
        dosage: 'Commonly taken after meals in diluted form.',
      },
    ],
    modernResearch: [
      {
        studyType: 'Clinical studies and reviews',
        findings:
          'Bacopa extracts show supportive evidence for certain memory and information-processing outcomes, though effects are gradual rather than immediate.',
        source: 'Nootropic and herbal cognition literature',
        strength: 'Moderate',
      },
    ],
    safetyDosage: {
      contraindications: [],
      cautions: ['May cause digestive heaviness in some users', 'Start slowly with extracts'],
      interactions: ['Use caution with sedative regimens'],
      dosage: [
        {
          form: 'Whole herb powder',
          amount: '2-5 g daily',
          notes: 'Often given in divided doses or in ghrita-based formulations.',
        },
        {
          form: 'Standardized extract',
          amount: 'Product-dependent',
          notes: 'Typically used for cognitive-support protocols over several weeks.',
        },
      ],
    },
  }),
  simplePlantDetail({
    id: 'mint',
    name: 'Mint',
    hindiName: 'पुदीना',
    scientificName: 'Mentha spicata',
    family: 'Lamiaceae',
    category: 'Herbs',
    image:
      'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=900&q=80',
    summary: 'Cooling aromatic leaves frequently used in teas, tonics, and fresh preparations.',
    tagline: 'A fast-growing favorite that brings freshness, cooling notes, and easy usability.',
    description:
      'Mint is approachable, highly recognizable, and useful across both kitchen and wellness contexts. It works well for digestive, cooling, and freshness-led user journeys in a plant discovery interface.',
    region: 'Europe, West Asia, and now cultivated globally',
    partsUsed: ['Leaf'],
    uses: ['Tea blends', 'Digestive support', 'Fresh culinary use'],
    benefits: [
      'Beginner-friendly and instantly recognizable',
      'Adds a strong freshness cue to plant catalogs',
      'Useful for both culinary and herbal storytelling',
    ],
    careTips: [
      'Best grown in containers because it spreads aggressively',
      'Keep soil evenly moist and trim frequently',
      'Harvest often to promote tender new growth',
    ],
    caution: 'Very strong mint preparations may aggravate reflux in some users.',
    synonyms: ['Pudina', 'Spearmint'],
    categoryTags: ['Digestive herb', 'Cooling aromatic', 'Household herb'],
    images: {
      wholePlant:
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=900&q=80',
      leaf:
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=900&q=80',
      flower:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      root:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      stem:
        'https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=900&q=80',
    },
    identification: {
      wholePlantDescription:
        'A fast-spreading aromatic herb with square stems and bright green serrated leaves.',
      characteristics: {
        height: 'Usually 30-60 cm in garden conditions.',
        leaves: 'Opposite, serrated, strongly aromatic green leaves.',
        flowers: 'Small purple to pale lilac flowers in spikes.',
        fruit: 'Small seeds, though propagation is often vegetative.',
        root: 'Spreading rhizomatous root system.',
        smell: 'Fresh cooling mint aroma.',
      },
      habitat: 'Thrives in moist fertile soil with regular water and partial to full sun.',
      similarPlants: [
        {
          name: 'Peppermint',
          difference:
            'Spearmint is sweeter and less intensely mentholated than peppermint.',
        },
      ],
    },
    snapshot: {
      rasa: ['Katu', 'Tikta'],
      guna: ['Laghu'],
      virya: 'Sheeta',
      vipaka: 'Katu',
      prabhava: 'Cooling aromatic digestive support.',
      doshaEffect: 'Pacifies Pitta and Kapha in many digestive contexts; may aggravate Vata in excess.',
    },
    overview: {
      detailedDescription:
        'Mint is a widely used household herb valued for freshness, digestive relief, and cooling action. Though simpler than classical Rasayana herbs, it holds practical importance in daily Ayurvedic and culinary use, especially where heat, nausea, heaviness, or poor appetite need light aromatic correction.',
    },
    clinicalIndications: [
      {
        condition: 'Indigestion',
        description:
          'Useful in mild bloating, heaviness, and low digestive comfort where aromatic cooling support is preferred.',
        partUsed: 'Leaf',
      },
      {
        condition: 'Nausea',
        description:
          'Mint leaf preparations may calm mild nausea and improve subjective freshness.',
        partUsed: 'Leaf',
      },
      {
        condition: 'Heat and Mouth Freshness',
        description:
          'Commonly used to cool the palate and provide refreshing digestive support in hot climates.',
        partUsed: 'Leaf',
      },
    ],
    doshaInteraction: {
      vata: {
        effect: 'May aggravate in excess',
        explanation:
          'Its cooling and light nature may be too reducing in cold, dry, Vata-dominant individuals.',
      },
      kapha: {
        effect: 'Pacifies mildly',
        explanation:
          'Its light aromatic quality can reduce stagnation and digestive dullness.',
      },
      pitta: {
        effect: 'Pacifies',
        explanation:
          'The cooling effect is particularly useful in heat-related digestive discomfort.',
      },
    },
    dravyagunaBreakdown: [
      {
        name: 'Rasa',
        meaning: 'Katu and Tikta tastes.',
        function: 'Stimulates and clarifies while reducing heaviness.',
        clinicalRelevance: 'Useful for mild digestive correction and freshness.',
      },
      {
        name: 'Guna',
        meaning: 'Laghu quality.',
        function: 'Lightens digestion and relieves heaviness.',
        clinicalRelevance: 'Good for post-meal or hot-weather digestive support.',
      },
      {
        name: 'Virya',
        meaning: 'Sheeta potency.',
        function: 'Cools heat and refreshes.',
        clinicalRelevance: 'Important in Pitta and summer digestive use.',
      },
      {
        name: 'Vipaka',
        meaning: 'Katu post-digestive effect.',
        function: 'Maintains light digestive stimulation after use.',
        clinicalRelevance: 'Supports reduction of mild Kapha heaviness.',
      },
    ],
    classicalReferences: [
      {
        bookName: 'Regional Nighantu traditions',
        section: 'Aromatic household herbs',
        description:
          'Mint-like herbs are included in digestive and refreshing herb traditions, though less central than major classical dravyas.',
      },
    ],
    classicalFormulations: [
      {
        formulationName: 'Pudina Swarasa',
        type: 'Fresh juice',
        uses: 'Digestive freshness, nausea, summer use',
        dosage: 'Small fresh quantities used in household practice.',
      },
    ],
    modernResearch: [
      {
        studyType: 'Clinical and functional use literature',
        findings:
          'Mint preparations are commonly associated with digestive comfort and cooling sensory relief, though the evidence base is condition-specific.',
        source: 'Digestive herb literature',
        strength: 'Weak',
      },
    ],
    safetyDosage: {
      contraindications: [],
      cautions: ['Use carefully in reflux-prone individuals'],
      interactions: [],
      dosage: [
        {
          form: 'Fresh leaf infusion',
          amount: '1-2 cups daily',
          notes: 'Best suited to mild digestive or refreshing use.',
        },
      ],
    },
  }),
  simplePlantDetail({
    id: 'ginger',
    name: 'Ginger',
    hindiName: 'अदरक / सोंठ',
    scientificName: 'Zingiber officinale',
    family: 'Zingiberaceae',
    category: 'Roots',
    image:
      'https://images.unsplash.com/photo-1573414405995-45f8429a1171?auto=format&fit=crop&w=900&q=80',
    summary: 'Warming rhizome used for digestion, circulation, and flavor-forward remedies.',
    tagline: 'A bold warming root that anchors digestion-focused and cold-weather remedies.',
    description:
      'Ginger is a high-recognition root used across digestive support, warming tonics, and seasonal remedies. It adds strong familiarity and functional clarity to a plant detail experience.',
    region: 'Southeast Asia, now cultivated widely in tropical regions',
    partsUsed: ['Rhizome'],
    uses: ['Digestive support', 'Warming tonics', 'Cold-weather blends'],
    benefits: [
      'High-recognition ingredient for both food and wellness use',
      'Works naturally in digestive and warming plant collections',
      'Easy to integrate into teas, decoctions, and kitchen remedies',
    ],
    careTips: [
      'Plant fresh rhizomes in warm, rich, loose soil',
      'Keep moisture steady without waterlogging',
      'Harvest young rhizomes early or mature rhizomes later in the season',
    ],
    caution: 'Large amounts may irritate sensitive digestion or reflux-prone users.',
    synonyms: ['Shunthi', 'Ardraka', 'Sunthi'],
    categoryTags: ['Deepana', 'Pachana', 'Vata-Kapha herb'],
    images: {
      wholePlant:
        'https://images.unsplash.com/photo-1573414405995-45f8429a1171?auto=format&fit=crop&w=900&q=80',
      leaf:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      flower:
        'https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=900&q=80',
      root:
        'https://images.unsplash.com/photo-1763019228611-b2bce31c89d5?auto=format&fit=crop&w=900&q=80',
      stem:
        'https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=900&q=80',
    },
    identification: {
      wholePlantDescription:
        'A reed-like perennial with narrow leaves and underground aromatic rhizomes that form the primary medicinal material.',
      characteristics: {
        height: 'Usually 60-120 cm.',
        leaves: 'Long narrow lanceolate leaves on pseudo-stems.',
        flowers: 'Greenish-yellow flowers with purple markings in some cultivars.',
        fruit: 'Rarely used in identification for common medicinal practice.',
        root: 'Knotted beige rhizome with spicy pungent interior.',
        smell: 'Sharp, warming, distinctly spicy aroma.',
      },
      habitat: 'Cultivated in warm humid tropical conditions with loose fertile soil.',
      similarPlants: [
        {
          name: 'Galangal',
          difference:
            'Galangal is more camphoraceous and fibrous, while ginger is juicier and more familiar in pungent culinary and medicinal use.',
        },
      ],
    },
    snapshot: {
      rasa: ['Katu'],
      guna: ['Laghu', 'Snigdha'],
      virya: 'Ushna',
      vipaka: 'Madhura',
      prabhava: 'Agni-supporting deepana-pachana action.',
      doshaEffect: 'Pacifies Vata and Kapha; may aggravate Pitta in excess.',
    },
    overview: {
      detailedDescription:
        'Ginger is one of Ayurveda’s foundational digestive herbs and is used across a wide range of formulations for appetite, digestion, circulation, respiratory congestion, and cold-heavy states. Fresh and dry forms are distinguished in Ayurveda, each with nuanced applications, but both share a reputation for activating Agni and reducing Ama.',
    },
    clinicalIndications: [
      {
        condition: 'Poor Digestion',
        description:
          'Used to improve appetite, kindle digestive fire, and reduce heaviness and sluggish post-meal digestion.',
        partUsed: 'Rhizome',
        effectivenessLevel: 'Strong traditional use',
      },
      {
        condition: 'Nausea',
        description:
          'Supports nausea relief in a variety of contexts through warming aromatic action.',
        partUsed: 'Rhizome',
        effectivenessLevel: 'Moderate support',
      },
      {
        condition: 'Cold and Congestion',
        description:
          'Useful in respiratory conditions characterized by coldness, mucus, and sluggish circulation.',
        partUsed: 'Rhizome',
      },
    ],
    doshaInteraction: {
      vata: {
        effect: 'Pacifies',
        explanation:
          'Its warmth and mild unctuousness help address cold, weak, and irregular digestive Vata patterns.',
      },
      kapha: {
        effect: 'Pacifies strongly',
        explanation:
          'The pungent heating action reduces heaviness, mucus, and sluggishness effectively.',
      },
      pitta: {
        effect: 'May aggravate',
        explanation:
          'Its strong heating nature can worsen heat, burning, or reflux in Pitta-dominant constitutions.',
      },
    },
    dravyagunaBreakdown: [
      {
        name: 'Rasa',
        meaning: 'Katu taste.',
        function: 'Stimulates, disperses, and activates.',
        clinicalRelevance: 'Central to its use in Agni and Ama conditions.',
      },
      {
        name: 'Guna',
        meaning: 'Laghu and Snigdha qualities.',
        function: 'Lightens heaviness while retaining some softness and flow.',
        clinicalRelevance: 'Makes it warming yet broadly usable in digestive care.',
      },
      {
        name: 'Virya',
        meaning: 'Ushna potency.',
        function: 'Warms the body and stimulates circulation and metabolism.',
        clinicalRelevance: 'Important in cold, congested, Kapha-heavy conditions.',
      },
      {
        name: 'Vipaka',
        meaning: 'Madhura post-digestive effect.',
        function: 'Balances its pungency with a more nourishing end-effect.',
        clinicalRelevance: 'Helps explain its broader tolerance compared with more purely reducing herbs.',
      },
    ],
    classicalReferences: [
      {
        bookName: 'Charaka Samhita',
        section: 'Agni and Ama management contexts',
        description:
          'Ginger is widely associated with deepana and pachana functions in digestive therapeutics.',
      },
      {
        bookName: 'Bhavaprakasha Nighantu',
        section: 'Shunthi descriptions',
        description: 'Highlights ginger’s pungency, digestive support, and Kapha-reducing nature.',
      },
    ],
    classicalFormulations: [
      {
        formulationName: 'Trikatu',
        type: 'Powder',
        uses: 'Digestive stimulation, Kapha reduction, Ama management',
        dosage: 'Small measured doses in compound form.',
      },
      {
        formulationName: 'Sunthi Churna',
        type: 'Powder',
        uses: 'Digestive weakness, cold digestive patterns',
        dosage: 'Traditionally used in small grams-per-day quantities.',
      },
    ],
    modernResearch: [
      {
        studyType: 'Clinical studies and reviews',
        findings:
          'Ginger has supportive evidence for nausea management and some digestive applications, with a clearer modern evidence base than many culinary herbs.',
        source: 'Clinical digestive literature',
        strength: 'Moderate',
      },
    ],
    safetyDosage: {
      contraindications: [],
      cautions: ['Use carefully in reflux, burning sensation, or heat-dominant constitutions'],
      interactions: ['Potential additive effect with anticoagulant therapies'],
      dosage: [
        {
          form: 'Fresh ginger',
          amount: 'Small daily culinary to medicinal amounts',
          notes: 'Often used before meals or in tea.',
        },
        {
          form: 'Dry powder',
          amount: '1-3 g daily',
          notes: 'More heating than fresh form and should be individualized.',
        },
      ],
    },
  }),
  simplePlantDetail({
    id: 'jatamansi',
    name: 'Jatamansi',
    hindiName: 'जटामांसी',
    scientificName: 'Nardostachys jatamansi',
    family: 'Caprifoliaceae',
    category: 'Medicinal',
    image:
      'https://images.unsplash.com/photo-1724605948220-ed4db553972d?auto=format&fit=crop&w=900&q=80',
    summary: 'Himalayan aromatic root traditionally associated with calm and restfulness.',
    tagline: 'A more niche calming plant with a premium, restorative positioning.',
    description:
      'Jatamansi adds a more specialized medicinal profile to the catalog and fits sleep, calm, and restoration-oriented herbal collections. It is especially useful when the product needs a premium, less-common herb entry.',
    region: 'Alpine Himalayan regions',
    partsUsed: ['Root', 'Rhizome'],
    uses: ['Sleep support', 'Calming rituals', 'Aromatic formulations'],
    benefits: [
      'Adds depth to a medicinal catalog beyond the most common household herbs',
      'Useful for sleep-oriented or nervous system collections',
      'Distinct profile makes it suitable for premium educational content',
    ],
    careTips: [
      'Needs cool mountain-like conditions and careful cultivation',
      'Avoid heavy wet soil and excessive heat',
      'Source responsibly due to ecological sensitivity',
    ],
    caution: 'Prioritize sustainably sourced material and avoid overharvesting pressure.',
    synonyms: ['Spikenard', 'Bhutajata', 'Tapasvini'],
    categoryTags: ['Medhya-supportive', 'Manas herb', 'Calming root'],
    images: {
      wholePlant:
        'https://images.unsplash.com/photo-1724605948220-ed4db553972d?auto=format&fit=crop&w=900&q=80',
      leaf:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      flower:
        'https://images.unsplash.com/photo-1724605948220-ed4db553972d?auto=format&fit=crop&w=900&q=80',
      root:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      stem:
        'https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=900&q=80',
    },
    identification: {
      wholePlantDescription:
        'A Himalayan alpine herb with a tufted habit and aromatic rhizomatous roots valued medicinally.',
      characteristics: {
        height: 'Usually low-growing in alpine conditions.',
        leaves: 'Basal leaves with elongated form; upper leaves smaller.',
        flowers: 'Pinkish to pale purple clustered flowers.',
        fruit: 'Small dry fruit after flowering.',
        root: 'Aromatic dark rhizome and root mass, the main medicinal part.',
        smell: 'Deep earthy, musky, calming aroma.',
      },
      habitat:
        'Native to Himalayan high altitudes in cool rocky environments.',
      similarPlants: [
        {
          name: 'Valeriana species',
          difference:
            'Both are calming roots, but Jatamansi has a distinct aromatic tradition and Ayurvedic identity.',
        },
      ],
    },
    snapshot: {
      rasa: ['Tikta', 'Kashaya'],
      guna: ['Laghu', 'Snigdha'],
      virya: 'Sheeta',
      vipaka: 'Katu',
      prabhava: 'Calming action on mind and sleep quality.',
      doshaEffect: 'Pacifies Pitta and Kapha and helps calm disturbed Vata in the mind.',
    },
    overview: {
      detailedDescription:
        'Jatamansi is a valued Ayurvedic herb for the mind, sleep, emotional steadiness, and nervous-system calming. It is especially relevant where overactivity, irritability, disturbed sleep, or mental fatigue are accompanied by heat or subtle agitation. Its niche status and ecological sensitivity make it a more premium and carefully sourced medicinal plant.',
    },
    clinicalIndications: [
      {
        condition: 'Insomnia',
        description:
          'Supports sleep quality and mental quieting in patients with restlessness, irritability, or overactive thought patterns.',
        partUsed: 'Root and rhizome',
        effectivenessLevel: 'Traditional support',
      },
      {
        condition: 'Anxiety and Mental Restlessness',
        description:
          'Used where the mind is unsettled, overstimulated, or emotionally labile.',
        partUsed: 'Root and rhizome',
      },
      {
        condition: 'Stress-related Fatigue',
        description:
          'Supports recovery when nervous depletion is accompanied by poor rest and emotional strain.',
        partUsed: 'Root and rhizome',
      },
    ],
    doshaInteraction: {
      vata: {
        effect: 'Calms disturbed mental Vata',
        explanation:
          'Its grounding aromatic action helps steady the mind and improve restfulness.',
      },
      kapha: {
        effect: 'Pacifies mildly',
        explanation:
          'Useful where dullness coexists with emotional heaviness, though it is not primarily a reducing herb.',
      },
      pitta: {
        effect: 'Pacifies',
        explanation:
          'Its cooling calming nature makes it especially relevant in heated mental states and irritability.',
      },
    },
    dravyagunaBreakdown: [
      {
        name: 'Rasa',
        meaning: 'Tikta and Kashaya tastes.',
        function: 'Clarifies and tones the system while reducing excess heat.',
        clinicalRelevance: 'Useful in agitated, heat-linked mental patterns.',
      },
      {
        name: 'Guna',
        meaning: 'Laghu and Snigdha qualities.',
        function: 'Balances lightness with softening support.',
        clinicalRelevance: 'Helps calm without being overly drying.',
      },
      {
        name: 'Virya',
        meaning: 'Sheeta potency.',
        function: 'Cools and settles overactivity.',
        clinicalRelevance: 'Important in irritability, insomnia, and mental heat.',
      },
      {
        name: 'Vipaka',
        meaning: 'Katu post-digestive effect.',
        function: 'Retains subtle clearing action after digestion.',
        clinicalRelevance: 'Supports mental clarity along with calming action.',
      },
    ],
    classicalReferences: [
      {
        bookName: 'Bhavaprakasha Nighantu',
        section: 'Jatamansi references',
        description:
          'Describes the herb in relation to calming and aromatic medicinal use.',
      },
    ],
    classicalFormulations: [
      {
        formulationName: 'Jatamansi Churna',
        type: 'Powder',
        uses: 'Sleep, calmness, mental steadiness',
        dosage: 'Small measured doses, often individualized.',
      },
      {
        formulationName: 'Medhya and manas-support compounds',
        type: 'Compound formulation',
        uses: 'Emotional steadiness and sleep support',
        dosage: 'Depends on the formulation.',
      },
    ],
    modernResearch: [
      {
        studyType: 'Preclinical and limited clinical literature',
        findings:
          'Preliminary evidence suggests calming and neuroprotective potential, but robust human evidence remains limited.',
        source: 'Emerging medicinal herb literature',
        strength: 'Weak',
      },
    ],
    safetyDosage: {
      contraindications: [],
      cautions: ['Use carefully with sedative medications', 'Prioritize sustainable sourcing'],
      interactions: ['Potential additive calming effect with sedatives'],
      dosage: [
        {
          form: 'Powder',
          amount: 'Practitioner-guided small doses',
          notes: 'Typically used in calming or sleep-oriented protocols.',
        },
      ],
    },
  }),
]

export const plantsMockData: Plant[] = plantDetailsMockData.map(
  ({ id, name, scientificName, category, image, summary }) => ({
    id,
    name,
    scientificName,
    category,
    image,
    summary,
  }),
)

export const getPlantDetailById = (id: string) =>
  plantDetailsMockData.find((plant) => plant.id === id)
