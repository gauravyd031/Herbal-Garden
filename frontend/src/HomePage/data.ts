import { BookOpen, Bot, Github, Leaf, Linkedin, Mail } from 'lucide-react'

export const backgroundOrbs = [
  {
    id: 1,
    delay: 0,
    duration: 8,
    x: '10%',
    y: '10%',
    size: '400px',
    color: 'rgba(16, 185, 129, 0.3)',
  },
  {
    id: 2,
    delay: 2,
    duration: 10,
    x: '70%',
    y: '20%',
    size: '500px',
    color: 'rgba(20, 184, 166, 0.25)',
  },
  {
    id: 3,
    delay: 4,
    duration: 12,
    x: '50%',
    y: '60%',
    size: '450px',
    color: 'rgba(52, 211, 153, 0.2)',
  },
  {
    id: 4,
    delay: 1,
    duration: 9,
    x: '80%',
    y: '70%',
    size: '350px',
    color: 'rgba(16, 185, 129, 0.15)',
  },
]

export const navItems = ['Home', 'Explore', 'Diseases', 'About']

export const featuredHerbs = [
  {
    id: 1,
    name: 'Tulsi',
    sanskritName: 'Tulasi',
    latinName: 'Ocimum tenuiflorum',
    benefit: 'Supports pranavaha srotas and adaptive stress response',
    evidence: 'Strong clinical support',
    traditionalUse: 'Medhya and krimighna in traditional use',
    caution: 'Avoid during pregnancy unless advised',
    diseases: ['Anxiety', 'Cold', 'Cough'],
    tags: ['stress', 'immunity', 'caffeine-free', 'katu'],
    rasa: 'Katu, Tikta',
    guna: 'Laghu, Ruksha',
    virya: 'Ushna',
    vipaka: 'Katu',
    doshaEffect: 'Pacifies Kapha-Vata, may increase Pitta in excess',
    classicalReference: 'Charaka Samhita - Sutra Sthana',
    bentoSpan: 'lg:col-span-2',
    image:
      'https://images.unsplash.com/photo-1602082406080-ca5a1fbaf8f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJhc2lsJTIwcGxhbnQlMjBsZWF2ZXN8ZW58MXx8fHwxNzcwNzE2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Haridra',
    sanskritName: 'Haridra',
    latinName: 'Curcuma longa',
    benefit: 'Useful in kushtha, prameha, and inflammatory states',
    evidence: 'Moderate clinical support',
    traditionalUse: 'Varnya, kandughna, and shothahara usage',
    caution: 'Can interact with blood thinners',
    diseases: ['Diabetes', 'Digestion'],
    tags: ['inflammation', 'daily-use', 'tikta'],
    rasa: 'Tikta, Katu',
    guna: 'Laghu, Ruksha',
    virya: 'Ushna',
    vipaka: 'Katu',
    doshaEffect: 'Pacifies Kapha and Pitta (context dependent)',
    classicalReference: 'Sushruta Samhita - Sutra Sthana',
    bentoSpan: 'lg:col-span-1',
    image:
      'https://images.unsplash.com/photo-1673208126879-18094b40d9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHJvb3QlMjBnb2xkZW58ZW58MXx8fHwxNzcwNzE2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Shunthi',
    sanskritName: 'Shunthi',
    latinName: 'Zingiber officinale',
    benefit: 'Deepana-pachana herb for agni and ama management',
    evidence: 'Strong clinical support',
    traditionalUse: 'Amapachana and grahani support',
    caution: 'May cause reflux in high doses',
    diseases: ['Digestion', 'Cold', 'Cough'],
    tags: ['digestion', 'nausea', 'warming', 'katu'],
    rasa: 'Katu',
    guna: 'Laghu, Snigdha',
    virya: 'Ushna',
    vipaka: 'Madhura',
    doshaEffect: 'Pacifies Vata-Kapha, can aggravate Pitta in excess',
    classicalReference: 'Charaka Samhita - Chikitsa Sthana',
    bentoSpan: 'lg:col-span-1',
    image:
      'https://images.unsplash.com/photo-1763019228611-b2bce31c89d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW5nZXIlMjByb290JTIwZnJlc2h8ZW58MXx8fHwxNzcwNzA3NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Jatamansi',
    sanskritName: 'Jatamansi',
    latinName: 'Nardostachys jatamansi',
    benefit: 'Supports manovaha srotas and nidra quality',
    evidence: 'Moderate clinical support',
    traditionalUse: 'Used as medhya and manas-shamaka',
    caution: 'Can cause drowsiness',
    diseases: ['Anxiety', 'Insomnia'],
    tags: ['sleep', 'calm', 'caffeine-free', 'tikta'],
    rasa: 'Tikta, Kashaya',
    guna: 'Laghu, Snigdha',
    virya: 'Sheeta',
    vipaka: 'Katu',
    doshaEffect: 'Pacifies Pitta-Kapha and calms Vata',
    classicalReference: 'Bhavaprakasha Nighantu - Guduchyadi Varga',
    bentoSpan: 'lg:col-span-2',
    image:
      'https://images.unsplash.com/photo-1724605948220-ed4db553972d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBwdXJwbGV8ZW58MXx8fHwxNzcwNjg5OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
]

export const diseases = ['Cough', 'Cold', 'Diabetes', 'Digestion', 'Anxiety', 'Insomnia']

export const conversationalPrompts = [
  'dravya for vata-kapha kasa with classical reference',
  'herbs for mandagni with rasa and guna details',
  'revision notes for prameha herbs with evidence',
]

export const searchFilters = [
  'Dosha focused',
  'Classical reference',
  'Evidence-backed',
  'Revision friendly',
]

export const patientConversationalPrompts = [
  'herbs for better sleep without caffeine',
  'natural options for cold and cough',
  'daily anti-inflammatory herbs for beginners',
]

export const patientSearchFilters = [
  'Evidence-backed',
  'Beginner-safe',
  'Caffeine-free',
  'Evening calm',
]

export const motionTokens = {
  fast: 0.12,
  medium: 0.24,
  slow: 0.4,
}

export const features = [
  {
    icon: Leaf,
    title: 'Classical Text Integration',
    description: 'Aligned with Charaka, Sushruta, and Nighantu references',
  },
  {
    icon: BookOpen,
    title: 'Modern Research References',
    description: 'Clinical evidence mapped to Ayurvedic concepts for learning',
  },
  {
    icon: Bot,
    title: 'AI Revision Support',
    description: 'Simplified explanations for faster exam preparation',
  },
]

export const patientFeatures = [
  {
    icon: Leaf,
    title: 'Natural Healing',
    description: 'Explore plant-based remedies',
  },
  {
    icon: BookOpen,
    title: 'Trusted Knowledge',
    description: 'Verified by herbal experts',
  },
  {
    icon: Bot,
    title: 'AI-Powered Explanations',
    description: 'Simple, intelligent insights',
  },
]

export const studyModules = [
  'Dravyaguna',
  'Rog Nidana',
  'Panchakarma',
  'Ayurvedic Formulations',
  'Clinical Case Insights',
  'MCQ Practice',
]

export const footerLinks = ['Explore Herbs', 'Diseases', 'About', 'Disclaimer']

export const socialLinks = [
  { icon: Github, label: 'GitHub' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Mail, label: 'Email' },
]
