// This file contains fallback mock data for fields not yet present in the DB
export type PlantMockFallback = {
  id: string
  snapshot?: any
  doshaInteraction?: any
  dravyagunaBreakdown?: any
  classicalReferences?: any
  classicalFormulations?: any
  clinicalIndications?: any
}

export const plantDetailsMockData: PlantMockFallback[] = [
  {
    "id": "ashwagandha",
    "snapshot": {
      "rasa": [
        "Tikta (bitter; reduces heaviness and clears stagnation)",
        "Kashaya (astringent; tones and stabilizes tissues)",
        "Madhura (sweet; nourishes and rebuilds)"
      ],
      "guna": [
        "Laghu (light; supports digestibility and non-cloying action)",
        "Snigdha (unctuous; nourishes dryness and depletion)"
      ],
      "virya": "Ushna (warming potency that supports circulation, metabolism, and Vata-Kapha reduction)",
      "vipaka": "Madhura (sweet post-digestive effect that favors long-term nourishment and tissue restoration)",
      "prabhava": "Balya and Rasayana action with restorative nervous-system support.",
      "doshaEffect": "Primarily pacifies Vata and Kapha; may aggravate Pitta in excess, hot climates, or heat-dominant constitutions."
    },
    "doshaInteraction": {
      "vata": {
        "effect": "Pacifies",
        "explanation": "Its Snigdha guna, Madhura Vipaka, and restorative Rasayana nature directly address dryness, weakness, anxiety, fatigue, and sleep disturbance associated with aggravated Vata."
      },
      "kapha": {
        "effect": "Generally pacifies",
        "explanation": "Its Ushna Virya helps counter Kapha coldness, sluggishness, and low metabolic drive, though the nourishing side of the herb means use should still be individualized in very heavy or congestive Kapha states."
      },
      "pitta": {
        "effect": "May aggravate",
        "explanation": "Its Ushna Virya can increase heat in Pitta-dominant individuals, especially with excess use, active inflammation, acidity, or hot weather, even though its restorative profile may still be useful in selected cases."
      }
    },
    "dravyagunaBreakdown": [
      {
        "name": "Rasa",
        "meaning": "Tikta, Kashaya, and Madhura tastes.",
        "function": "Balances mild clearing and toning effects with deeper nourishment and rebuilding support, helping the herb act without becoming too harsh or overly reducing.",
        "clinicalRelevance": "Helps explain why Ashwagandha is useful in stress, weakness, and recovery states where the patient needs restoration and steadiness instead of a purely stimulating tonic."
      },
      {
        "name": "Guna",
        "meaning": "Laghu and Snigdha qualities.",
        "function": "Maintains digestibility while also providing unctuous, tissue-supportive nourishment that reduces dryness, irritability, and instability in depleted constitutions.",
        "clinicalRelevance": "Useful in dry, depleted, fatigued constitutions needing rebuilding without excessive heaviness, such as chronic stress with poor sleep and low stamina."
      },
      {
        "name": "Virya",
        "meaning": "Ushna or hot potency.",
        "function": "Supports warmth, circulation, and metabolic activation, helping the herb move beyond passive nourishment into active restoration.",
        "clinicalRelevance": "Favors Vata-Kapha states with coldness and low energy, but requires caution in heat-dominant Pitta conditions, gastritis, or hot seasons."
      },
      {
        "name": "Vipaka",
        "meaning": "Madhura or sweet post-digestive effect.",
        "function": "Supports long-term nourishment and anabolic tissue recovery after digestion, reinforcing the herb’s strengthening and restorative effect over time.",
        "clinicalRelevance": "Relevant in prolonged restorative use, debility, convalescence, and reproductive depletion where sustained rebuilding is required."
      }
    ],
    "classicalReferences": [
      {
        "bookName": "Charaka Samhita",
        "section": "Sutra Sthana, Balya Mahakashaya context",
        "description": "Associated with strength-promoting and restorative therapeutic groupings."
      },
      {
        "bookName": "Charaka Samhita",
        "section": "Chikitsa Sthana, Rasayana sections",
        "description": "Linked with rejuvenative use and restoration of vitality in depleted patients."
      },
      {
        "bookName": "Sushruta Samhita",
        "section": "Balya-related references",
        "description": "Reflects its long-standing use as a tissue-supportive and strength-promoting herb."
      },
      {
        "bookName": "Bhavaprakasha Nighantu",
        "section": "Guduchyadi Varga",
        "description": "Provides practical materia medica context for properties, actions, and applications."
      }
    ],
    "classicalFormulations": [
      {
        "formulationName": "Ashwagandha Churna",
        "type": "Churna",
        "uses": "General weakness, low stamina, nervous exhaustion, convalescence",
        "dosage": "Typically 3-6 g daily with milk, ghee, or honey depending on context."
      },
      {
        "formulationName": "Ashwagandharishta",
        "type": "Arishta",
        "uses": "Debility, low strength, nervous-system support, recovery support",
        "dosage": "Often 15-30 mL after meals in diluted form."
      },
      {
        "formulationName": "Ashwagandha Ghrita",
        "type": "Ghrita",
        "uses": "Vata disorders, debility, reproductive and nervous-system support",
        "dosage": "Small measured doses, often taken with warm milk or water."
      }
    ],
    "clinicalIndications": [
      {
        "condition": "Stress and Anxiety",
        "description": "Used to calm nervous-system overactivity, improve resilience under chronic stress, and reduce exhaustion associated with prolonged mental strain. Its nourishing Snigdha quality and sweet post-digestive effect help counter the depletion that often accompanies anxious, overworked states.",
        "partUsed": "Root",
        "effectivenessLevel": "Moderate support"
      },
      {
        "condition": "Insomnia",
        "description": "Supports sleep initiation and overall sleep quality, especially where poor sleep is linked to worry, fatigue, or Vata aggravation. By grounding the system and reducing excessive nervous excitation, it helps make sleep more restorative rather than merely sedating.",
        "partUsed": "Root",
        "effectivenessLevel": "Moderate support"
      },
      {
        "condition": "General Weakness and Convalescence",
        "description": "Traditionally given in weakness, tissue depletion, low stamina, and slow post-illness recovery, often with milk or ghee. Its Rasayana and Balya actions support tissue rebuilding, endurance, and the gradual return of strength after chronic illness or overexertion.",
        "partUsed": "Root",
        "effectivenessLevel": "Strong traditional use"
      },
      {
        "condition": "Immunity and Recovery",
        "description": "Supports general resilience and recovery in stress-related or chronic low-energy states rather than acting as an acute anti-infective herb. It is most relevant when immune fragility is linked with exhaustion, poor sleep, or depleted Ojas-like vitality.",
        "partUsed": "Root",
        "effectivenessLevel": "Traditional support"
      },
      {
        "condition": "Joint Disorders",
        "description": "Used in chronic inflammatory or degenerative conditions where pain coexists with weakness, fatigue, or tissue depletion. The herb is valued less as a rapid analgesic and more as a strengthening support in patients whose joints are affected by long-term Vata aggravation.",
        "partUsed": "Root",
        "effectivenessLevel": "Supportive use"
      },
      {
        "condition": "Reproductive Health",
        "description": "Included in Vajikarana-oriented care to support vitality, endurance, and reproductive strength in exhausted constitutions. It is chosen where sexual or reproductive weakness is associated with nervous depletion, low stamina, and poor recovery capacity.",
        "partUsed": "Root",
        "effectivenessLevel": "Strong traditional use"
      }
    ]
  },
  {
    "id": "tulsi",
    "snapshot": {
      "rasa": [
        "Katu (pungent; disperses and stimulates)",
        "Tikta (bitter; lightens and clears)"
      ],
      "guna": [
        "Laghu (light; reduces heaviness)",
        "Ruksha (dry; checks excess moisture and Kapha)"
      ],
      "virya": "Ushna (warming potency that opens channels and reduces cold stagnation)",
      "vipaka": "Katu (pungent post-digestive effect that sustains lightness and Kapha reduction)",
      "prabhava": "Pranavaha support with aromatic clearing action.",
      "doshaEffect": "Pacifies Kapha and Vata; may increase Pitta in excess."
    },
    "doshaInteraction": {
      "vata": {
        "effect": "May pacify mildly",
        "explanation": "Its warming nature can help Vata when coldness, sluggish circulation, or respiratory congestion are present, though the Ruksha quality can aggravate already dry or depleted Vata if overused."
      },
      "kapha": {
        "effect": "Pacifies",
        "explanation": "The pungent, light, and aromatic qualities strongly reduce heaviness, mucus, and stagnation."
      },
      "pitta": {
        "effect": "May aggravate in excess",
        "explanation": "Its hot, pungent profile can increase heat in sensitive Pitta constitutions if overused, especially in patients with burning sensation, acidity, or excessive internal heat."
      }
    },
    "dravyagunaBreakdown": [
      {
        "name": "Rasa",
        "meaning": "Katu and Tikta tastes.",
        "function": "Clears Kapha, stimulates movement, and reduces heaviness by encouraging warmth, flow, and subtle channel opening in the respiratory and digestive systems.",
        "clinicalRelevance": "Supports use in congestion, sluggish digestion, and dullness with mucus accumulation."
      },
      {
        "name": "Guna",
        "meaning": "Laghu and Ruksha qualities.",
        "function": "Lightens and dries excessive moisture, helping counter mucus, dampness, and lethargy without creating a heavy residue.",
        "clinicalRelevance": "Useful in Kapha excess but should be balanced in very dry constitutions."
      },
      {
        "name": "Virya",
        "meaning": "Ushna potency.",
        "function": "Warms, stimulates, and disperses stagnation, especially where coldness is trapping Kapha in the chest or slowing digestion.",
        "clinicalRelevance": "Important in respiratory and cold-heavy presentations."
      },
      {
        "name": "Vipaka",
        "meaning": "Katu post-digestive effect.",
        "function": "Sustains reducing and stimulating action after digestion so the herb continues to lighten Kapha even beyond the immediate aromatic effect.",
        "clinicalRelevance": "Supports long-term Kapha reduction in daily use."
      }
    ],
    "classicalReferences": [
      {
        "bookName": "Charaka Samhita",
        "section": "Kasa and Shwasa contexts",
        "description": "Tulsi is associated with respiratory benefit and aromatic clearing in traditional practice."
      },
      {
        "bookName": "Bhavaprakasha Nighantu",
        "section": "Haritakyadi Varga",
        "description": "Describes Tulsi as pungent, heating, and useful in Kapha and respiratory disorders."
      }
    ],
    "classicalFormulations": [
      {
        "formulationName": "Tulsi Swarasa",
        "type": "Fresh juice",
        "uses": "Respiratory discomfort, cough, mild digestive sluggishness",
        "dosage": "Fresh expressed juice in practitioner-guided amounts."
      },
      {
        "formulationName": "Tulsi Phanta",
        "type": "Infusion",
        "uses": "Daily respiratory and stress-support tea",
        "dosage": "Prepared as a light infusion from leaves."
      }
    ],
    "clinicalIndications": [
      {
        "condition": "Cold and Cough",
        "description": "Its warming aromatic action helps reduce congestion, support expectoration, and improve comfort during Kapha-dominant upper respiratory complaints. By combining pungent taste with Ushna Virya, it helps mobilize stuck mucus and improve respiratory clarity.",
        "partUsed": "Leaf",
        "effectivenessLevel": "Strong traditional use"
      },
      {
        "condition": "Stress Support",
        "description": "Frequently used in daily infusions to improve mental steadiness and resilience under mild stress. Its aromatic nature can gently lift dullness while supporting clearer breathing and a more settled subjective sense of well-being.",
        "partUsed": "Leaf",
        "effectivenessLevel": "Supportive use"
      },
      {
        "condition": "Digestive Sluggishness",
        "description": "Useful in cold, heavy digestion with mild bloating and low digestive responsiveness. The herb helps stimulate appetite and light digestive movement when Kapha dampness is slowing the gut.",
        "partUsed": "Leaf"
      }
    ]
  },
  {
    "id": "turmeric",
    "snapshot": {
      "rasa": [
        "Tikta (bitter; clears and reduces)",
        "Katu (pungent; stimulates and penetrates)"
      ],
      "guna": [
        "Laghu (light; reduces heaviness)",
        "Ruksha (dry; checks excessive oiliness and Kapha)"
      ],
      "virya": "Ushna (warming potency that stimulates circulation and metabolic responsiveness)",
      "vipaka": "Katu (pungent post-digestive effect that sustains reducing and scraping action)",
      "prabhava": "Lekhana and complexion-supportive action.",
      "doshaEffect": "Generally reduces Kapha and supports Pitta-Kapha balance when properly used."
    },
    "doshaInteraction": {
      "vata": {
        "effect": "May require balancing",
        "explanation": "The drying Ruksha quality can aggravate Vata unless given with suitable anupana such as ghee or in mixed formulations that soften its reducing nature."
      },
      "kapha": {
        "effect": "Pacifies",
        "explanation": "Its pungent, bitter, light qualities reduce heaviness, stagnation, and excess secretions."
      },
      "pitta": {
        "effect": "Context-dependent",
        "explanation": "Although heating, it is also used in blood and skin contexts; tolerance depends on constitution, dose, and whether the preparation is balanced with cooling or unctuous substances."
      }
    },
    "dravyagunaBreakdown": [
      {
        "name": "Rasa",
        "meaning": "Tikta and Katu tastes.",
        "function": "Supports clearing, drying, and stimulating action by reducing metabolic stagnation, excess secretions, and inflammatory burden.",
        "clinicalRelevance": "Useful in inflammatory, Kapha, and skin-oriented indications."
      },
      {
        "name": "Guna",
        "meaning": "Laghu and Ruksha qualities.",
        "function": "Reduces heaviness and excessive oiliness, helping tissues that are damp, sluggish, or congested become more metabolically responsive.",
        "clinicalRelevance": "Supports use in metabolic and Kapha-dominant states."
      },
      {
        "name": "Virya",
        "meaning": "Ushna potency.",
        "function": "Promotes circulation and metabolic activation, improving movement in tissues that are inflamed, stagnant, or poorly perfused.",
        "clinicalRelevance": "Important in sluggish inflammatory conditions."
      },
      {
        "name": "Vipaka",
        "meaning": "Katu post-digestive effect.",
        "function": "Maintains reducing and drying effect after digestion, so the herb continues to oppose Kapha and Ama-like heaviness beyond the initial dose.",
        "clinicalRelevance": "Useful where persistent Kapha reduction is needed."
      }
    ],
    "classicalReferences": [
      {
        "bookName": "Sushruta Samhita",
        "section": "Kushtha and wound-related contexts",
        "description": "Turmeric is valued in skin, cleansing, and healing applications."
      },
      {
        "bookName": "Bhavaprakasha Nighantu",
        "section": "Haridradi Varga",
        "description": "Describes Haridra in relation to complexion, itching, and metabolic disorders."
      }
    ],
    "classicalFormulations": [
      {
        "formulationName": "Haridra Khanda",
        "type": "Powdered compound",
        "uses": "Allergic and skin-related complaints",
        "dosage": "Taken in measured spoon doses as directed."
      },
      {
        "formulationName": "Nisha Amalaki",
        "type": "Powder / tablet",
        "uses": "Metabolic and glucose-support contexts",
        "dosage": "Depends on formulation strength and practitioner guidance."
      }
    ],
    "clinicalIndications": [
      {
        "condition": "Inflammatory Conditions",
        "description": "Used to support management of chronic low-grade inflammatory patterns and tissue irritation. Its bitter-pungent profile helps reduce stagnation and supports cleaner metabolic handling in tissues burdened by Ama-like accumulation.",
        "partUsed": "Rhizome",
        "effectivenessLevel": "Moderate support"
      },
      {
        "condition": "Skin Disorders",
        "description": "Traditionally applied internally and externally in itching, discoloration, and inflammatory skin complaints. Its combination of cleansing, complexion-supportive, and reducing actions explains its long association with skin care in Ayurveda.",
        "partUsed": "Rhizome",
        "effectivenessLevel": "Strong traditional use"
      },
      {
        "condition": "Metabolic Sluggishness",
        "description": "Included where Kapha-related heaviness and impaired metabolic responsiveness are present. By stimulating metabolic clarity without being a heavy tonic, it supports long-term correction rather than only symptomatic relief.",
        "partUsed": "Rhizome"
      }
    ]
  },
  {
    "id": "brahmi",
    "snapshot": {
      "rasa": [
        "Tikta (bitter; clarifies and cools)",
        "Kashaya (astringent; tones and steadies)"
      ],
      "guna": [
        "Laghu (light; aids clarity)",
        "Sara (flow-promoting; supports subtle movement)"
      ],
      "virya": "Sheeta (cooling potency that reduces heat and overactivity)",
      "vipaka": "Madhura (sweet post-digestive effect that supports steady nourishment)",
      "prabhava": "Medhya effect with calm cognitive support.",
      "doshaEffect": "Pacifies Pitta and Vata when used properly; may increase Kapha if overused in heavy constitutions."
    },
    "doshaInteraction": {
      "vata": {
        "effect": "Pacifies gently",
        "explanation": "Helps calm mental restlessness and nervous overactivity when depletion is not dominated by cold dryness, especially when the mind is scattered but not profoundly depleted."
      },
      "kapha": {
        "effect": "May increase mildly",
        "explanation": "Its cooling and somewhat softening nature may not suit very heavy or sluggish Kapha states unless combined with more stimulating herbs that prevent further dullness."
      },
      "pitta": {
        "effect": "Pacifies",
        "explanation": "Its cooling, calming profile is especially useful where mental heat, irritability, sharp overactivity, or burnout are dominant features."
      }
    },
    "dravyagunaBreakdown": [
      {
        "name": "Rasa",
        "meaning": "Tikta and Kashaya tastes.",
        "function": "Clarifies and tones without excessive stimulation, helping mental function sharpen without creating nervous agitation or heat.",
        "clinicalRelevance": "Supports use in mental overactivity and subtle inflammatory heat."
      },
      {
        "name": "Guna",
        "meaning": "Laghu and Sara qualities.",
        "function": "Lightness supports mental clarity and flow, while the subtle mobile quality helps thoughts feel less stuck or congested.",
        "clinicalRelevance": "Useful in study and concentration-oriented applications."
      },
      {
        "name": "Virya",
        "meaning": "Sheeta potency.",
        "function": "Cools excess heat and agitation, supporting a calmer, less irritable nervous system and steadier cognition.",
        "clinicalRelevance": "Important in Pitta-linked irritability and mental burnout."
      },
      {
        "name": "Vipaka",
        "meaning": "Madhura post-digestive effect.",
        "function": "Supports nourishment and gentle steadiness over time, making the herb suitable for longer cognitive-support programs rather than quick stimulation.",
        "clinicalRelevance": "Relevant in long-term cognitive support routines."
      }
    ],
    "classicalReferences": [
      {
        "bookName": "Charaka Samhita",
        "section": "Medhya Rasayana context",
        "description": "Brahmi is associated with cognition-supportive Rasayana use."
      },
      {
        "bookName": "Bhavaprakasha Nighantu",
        "section": "Medhya herb listings",
        "description": "Recognized for its mental clarity and nervous-system supportive roles."
      }
    ],
    "classicalFormulations": [
      {
        "formulationName": "Brahmi Ghrita",
        "type": "Ghrita",
        "uses": "Memory, concentration, mental calmness",
        "dosage": "Traditionally given in measured doses with warm water or milk."
      },
      {
        "formulationName": "Saraswatarishta",
        "type": "Arishta",
        "uses": "Speech, cognition, and nervous-system support",
        "dosage": "Commonly taken after meals in diluted form."
      }
    ],
    "clinicalIndications": [
      {
        "condition": "Memory and Learning Support",
        "description": "Traditionally used to support recall, retention, and clarity in study-oriented or mentally fatigued individuals. Its Medhya reputation reflects a capacity to calm mental overactivity while improving steadiness of attention over time.",
        "partUsed": "Whole plant",
        "effectivenessLevel": "Strong traditional use"
      },
      {
        "condition": "Anxiety and Restlessness",
        "description": "Useful where mental overactivity, irritability, or subtle anxious agitation is present. The cooling and clarifying profile makes it especially relevant where the mind feels overheated rather than merely dull.",
        "partUsed": "Whole plant"
      },
      {
        "condition": "Sleep Disturbance",
        "description": "Supports calmness and may help where sleep issues are linked to overactive mental processing. It is more suitable for mentally busy, irritable, or overstimulated states than for simple physical exhaustion alone.",
        "partUsed": "Whole plant"
      }
    ]
  },
  {
    "id": "mint",
    "snapshot": {
      "rasa": [
        "Katu (pungent; stimulates lightly)",
        "Tikta (bitter; cools and clears)"
      ],
      "guna": [
        "Laghu (light; reduces heaviness and supports easy digestion)"
      ],
      "virya": "Sheeta (cooling potency that refreshes and eases heat)",
      "vipaka": "Katu (pungent post-digestive effect that prevents excessive heaviness)",
      "prabhava": "Cooling aromatic digestive support.",
      "doshaEffect": "Pacifies Pitta and Kapha in many digestive contexts; may aggravate Vata in excess."
    },
    "doshaInteraction": {
      "vata": {
        "effect": "May aggravate in excess",
        "explanation": "Its cooling and light nature may be too reducing in cold, dry, Vata-dominant individuals, particularly if used frequently in concentrated forms."
      },
      "kapha": {
        "effect": "Pacifies mildly",
        "explanation": "Its light aromatic quality can reduce stagnation and digestive dullness, especially when Kapha presents as post-meal heaviness rather than deep congestion."
      },
      "pitta": {
        "effect": "Pacifies",
        "explanation": "The cooling effect is particularly useful in heat-related digestive discomfort, mouth burning, or warm-weather digestive irritability."
      }
    },
    "dravyagunaBreakdown": [
      {
        "name": "Rasa",
        "meaning": "Katu and Tikta tastes.",
        "function": "Stimulates and clarifies while reducing heaviness, making the herb refreshing rather than deeply heating or strongly reducing.",
        "clinicalRelevance": "Useful for mild digestive correction and freshness."
      },
      {
        "name": "Guna",
        "meaning": "Laghu quality.",
        "function": "Lightens digestion and relieves heaviness, especially after rich food or in warm climates where appetite feels dull but heat is present.",
        "clinicalRelevance": "Good for post-meal or hot-weather digestive support."
      },
      {
        "name": "Virya",
        "meaning": "Sheeta potency.",
        "function": "Cools heat and refreshes, helping the body and senses feel clearer without heavy sedation.",
        "clinicalRelevance": "Important in Pitta and summer digestive use."
      },
      {
        "name": "Vipaka",
        "meaning": "Katu post-digestive effect.",
        "function": "Maintains light digestive stimulation after use so the herb cools without leaving digestion excessively sluggish.",
        "clinicalRelevance": "Supports reduction of mild Kapha heaviness."
      }
    ],
    "classicalReferences": [
      {
        "bookName": "Regional Nighantu traditions",
        "section": "Aromatic household herbs",
        "description": "Mint-like herbs are included in digestive and refreshing herb traditions, though less central than major classical dravyas."
      }
    ],
    "classicalFormulations": [
      {
        "formulationName": "Pudina Swarasa",
        "type": "Fresh juice",
        "uses": "Digestive freshness, nausea, summer use",
        "dosage": "Small fresh quantities used in household practice."
      }
    ],
    "clinicalIndications": [
      {
        "condition": "Indigestion",
        "description": "Useful in mild bloating, heaviness, and low digestive comfort where aromatic cooling support is preferred. It helps freshen the upper digestive tract while gently reducing heat and stagnation.",
        "partUsed": "Leaf"
      },
      {
        "condition": "Nausea",
        "description": "Mint leaf preparations may calm mild nausea and improve subjective freshness. The herb works best where the patient feels hot, stale, or subjectively burdened rather than cold and depleted.",
        "partUsed": "Leaf"
      },
      {
        "condition": "Heat and Mouth Freshness",
        "description": "Commonly used to cool the palate and provide refreshing digestive support in hot climates. Its value is practical and sensory as well as therapeutic, particularly in summer digestive discomfort.",
        "partUsed": "Leaf"
      }
    ]
  },
  {
    "id": "ginger",
    "snapshot": {
      "rasa": [
        "Katu (pungent; stimulates digestion and breaks stagnation)"
      ],
      "guna": [
        "Laghu (light; reduces heaviness and sluggishness)",
        "Snigdha (mildly unctuous; prevents excessive harshness)"
      ],
      "virya": "Ushna (warming potency that kindles Agni and improves circulation)",
      "vipaka": "Madhura (sweet post-digestive effect that softens its pungent intensity over time)",
      "prabhava": "Agni-supporting deepana-pachana action.",
      "doshaEffect": "Pacifies Vata and Kapha; may aggravate Pitta in excess."
    },
    "doshaInteraction": {
      "vata": {
        "effect": "Pacifies",
        "explanation": "Its warmth and mild unctuousness help address cold, weak, and irregular digestive Vata patterns, especially where gas, chill, and poor appetite appear together."
      },
      "kapha": {
        "effect": "Pacifies strongly",
        "explanation": "The pungent heating action reduces heaviness, mucus, and sluggishness effectively, making ginger one of the more direct Kapha-reducing household herbs."
      },
      "pitta": {
        "effect": "May aggravate",
        "explanation": "Its strong heating nature can worsen heat, burning, reflux, or inflammatory sensitivity in Pitta-dominant constitutions, particularly in dry powdered form."
      }
    },
    "dravyagunaBreakdown": [
      {
        "name": "Rasa",
        "meaning": "Katu taste.",
        "function": "Stimulates, disperses, and activates by improving Agni, circulation, and the breakdown of cold, damp, stagnant states.",
        "clinicalRelevance": "Central to its use in Agni and Ama conditions."
      },
      {
        "name": "Guna",
        "meaning": "Laghu and Snigdha qualities.",
        "function": "Lightens heaviness while retaining some softness and flow, which helps ginger remain effective without becoming purely desiccating.",
        "clinicalRelevance": "Makes it warming yet broadly usable in digestive care."
      },
      {
        "name": "Virya",
        "meaning": "Ushna potency.",
        "function": "Warms the body and stimulates circulation and metabolism, helping tissues that are cold, congested, or sluggish become more responsive.",
        "clinicalRelevance": "Important in cold, congested, Kapha-heavy conditions."
      },
      {
        "name": "Vipaka",
        "meaning": "Madhura post-digestive effect.",
        "function": "Balances its pungency with a more nourishing end-effect, which partly explains why ginger is broadly tolerated in culinary and therapeutic use.",
        "clinicalRelevance": "Helps explain its broader tolerance compared with more purely reducing herbs."
      }
    ],
    "classicalReferences": [
      {
        "bookName": "Charaka Samhita",
        "section": "Agni and Ama management contexts",
        "description": "Ginger is widely associated with deepana and pachana functions in digestive therapeutics."
      },
      {
        "bookName": "Bhavaprakasha Nighantu",
        "section": "Shunthi descriptions",
        "description": "Highlights ginger’s pungency, digestive support, and Kapha-reducing nature."
      }
    ],
    "classicalFormulations": [
      {
        "formulationName": "Trikatu",
        "type": "Powder",
        "uses": "Digestive stimulation, Kapha reduction, Ama management",
        "dosage": "Small measured doses in compound form."
      },
      {
        "formulationName": "Sunthi Churna",
        "type": "Powder",
        "uses": "Digestive weakness, cold digestive patterns",
        "dosage": "Traditionally used in small grams-per-day quantities."
      }
    ],
    "clinicalIndications": [
      {
        "condition": "Poor Digestion",
        "description": "Used to improve appetite, kindle digestive fire, and reduce heaviness and sluggish post-meal digestion. Its pungent warming action helps digest Ama-like accumulation and restore movement in a cold or slow digestive system.",
        "partUsed": "Rhizome",
        "effectivenessLevel": "Strong traditional use"
      },
      {
        "condition": "Nausea",
        "description": "Supports nausea relief in a variety of contexts through warming aromatic action. This is clinically relevant because ginger can settle the stomach while also improving digestive directionality instead of merely suppressing sensation.",
        "partUsed": "Rhizome",
        "effectivenessLevel": "Moderate support"
      },
      {
        "condition": "Cold and Congestion",
        "description": "Useful in respiratory conditions characterized by coldness, mucus, and sluggish circulation. By warming and mobilizing Kapha, it helps transform a heavy congested presentation into a more active clearing response.",
        "partUsed": "Rhizome"
      }
    ]
  },
  {
    "id": "jatamansi",
    "snapshot": {
      "rasa": [
        "Tikta (bitter; clarifies and cools)",
        "Kashaya (astringent; steadies and tones)"
      ],
      "guna": [
        "Laghu (light; clears mental heaviness)",
        "Snigdha (softening; helps calm rather than dry)"
      ],
      "virya": "Sheeta (cooling potency that reduces irritation and mental heat)",
      "vipaka": "Katu (pungent post-digestive effect that preserves subtle clarity)",
      "prabhava": "Calming action on mind and sleep quality.",
      "doshaEffect": "Pacifies Pitta and Kapha and helps calm disturbed Vata in the mind."
    },
    "doshaInteraction": {
      "vata": {
        "effect": "Calms disturbed mental Vata",
        "explanation": "Its grounding aromatic action helps steady the mind and improve restfulness, especially when Vata is disturbed in the manovaha dimension rather than the body alone."
      },
      "kapha": {
        "effect": "Pacifies mildly",
        "explanation": "Useful where dullness coexists with emotional heaviness, though it is not primarily a reducing herb and works better for subtle mental clouding than for gross Kapha accumulation."
      },
      "pitta": {
        "effect": "Pacifies",
        "explanation": "Its cooling calming nature makes it especially relevant in heated mental states, irritability, agitation, and disturbed sleep linked with Pitta excess."
      }
    },
    "dravyagunaBreakdown": [
      {
        "name": "Rasa",
        "meaning": "Tikta and Kashaya tastes.",
        "function": "Clarifies and tones the system while reducing excess heat, especially in the mind and subtle channels associated with emotional agitation.",
        "clinicalRelevance": "Useful in agitated, heat-linked mental patterns."
      },
      {
        "name": "Guna",
        "meaning": "Laghu and Snigdha qualities.",
        "function": "Balances lightness with softening support so the herb calms without becoming excessively drying or mentally dulling.",
        "clinicalRelevance": "Helps calm without being overly drying."
      },
      {
        "name": "Virya",
        "meaning": "Sheeta potency.",
        "function": "Cools and settles overactivity, helping sleep, emotional steadiness, and sensory quieting in agitated constitutions.",
        "clinicalRelevance": "Important in irritability, insomnia, and mental heat."
      },
      {
        "name": "Vipaka",
        "meaning": "Katu post-digestive effect.",
        "function": "Retains subtle clearing action after digestion, supporting calm clarity rather than heaviness after repeated use.",
        "clinicalRelevance": "Supports mental clarity along with calming action."
      }
    ],
    "classicalReferences": [
      {
        "bookName": "Bhavaprakasha Nighantu",
        "section": "Jatamansi references",
        "description": "Describes the herb in relation to calming and aromatic medicinal use."
      }
    ],
    "classicalFormulations": [
      {
        "formulationName": "Jatamansi Churna",
        "type": "Powder",
        "uses": "Sleep, calmness, mental steadiness",
        "dosage": "Small measured doses, often individualized."
      },
      {
        "formulationName": "Medhya and manas-support compounds",
        "type": "Compound formulation",
        "uses": "Emotional steadiness and sleep support",
        "dosage": "Depends on the formulation."
      }
    ],
    "clinicalIndications": [
      {
        "condition": "Insomnia",
        "description": "Supports sleep quality and mental quieting in patients with restlessness, irritability, or overactive thought patterns. Its cooling and aromatic qualities help settle heated mental activity rather than forcing sleep through heaviness alone.",
        "partUsed": "Root and rhizome",
        "effectivenessLevel": "Traditional support"
      },
      {
        "condition": "Anxiety and Mental Restlessness",
        "description": "Used where the mind is unsettled, overstimulated, or emotionally labile. It is most suitable when anxiety has a restless, heated, or sensory-overloaded character rather than a purely cold, depleted presentation.",
        "partUsed": "Root and rhizome"
      },
      {
        "condition": "Stress-related Fatigue",
        "description": "Supports recovery when nervous depletion is accompanied by poor rest and emotional strain. Its role is to calm the mind while making recuperation more possible through improved restfulness and reduced inner agitation.",
        "partUsed": "Root and rhizome"
      }
    ]
  }
];

export const getPlantDetailById = (id: string) =>
  plantDetailsMockData.find((plant) => plant.id === id);
