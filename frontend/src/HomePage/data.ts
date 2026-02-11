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
    name: 'Holy Basil',
    benefit: 'Immunity & stress relief',
    image:
      'https://images.unsplash.com/photo-1602082406080-ca5a1fbaf8f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJhc2lsJTIwcGxhbnQlMjBsZWF2ZXN8ZW58MXx8fHwxNzcwNzE2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Turmeric',
    benefit: 'Anti-inflammatory healing',
    image:
      'https://images.unsplash.com/photo-1673208126879-18094b40d9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHJvb3QlMjBnb2xkZW58ZW58MXx8fHwxNzcwNzE2NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Ginger',
    benefit: 'Digestion & nausea relief',
    image:
      'https://images.unsplash.com/photo-1763019228611-b2bce31c89d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW5nZXIlMjByb290JTIwZnJlc2h8ZW58MXx8fHwxNzcwNzA3NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Lavender',
    benefit: 'Relaxation & sleep',
    image:
      'https://images.unsplash.com/photo-1724605948220-ed4db553972d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBwdXJwbGV8ZW58MXx8fHwxNzcwNjg5OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
]

export const diseases = ['Cough', 'Cold', 'Diabetes', 'Digestion', 'Anxiety', 'Insomnia']

export const features = [
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

export const footerLinks = ['Explore Herbs', 'Diseases', 'About', 'Disclaimer']

export const socialLinks = [
  { icon: Github, label: 'GitHub' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Mail, label: 'Email' },
]
