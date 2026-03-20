import { useState } from 'react'
import HerbHero from '../components/Hero'
import HerbSnapshot from '../components/Snapshot'
import HerbTabs from '../components/Tabs'
import { herbData, plantPartLabels } from '../data/herbs.mock'
import type { PlantPart } from '../types/herb.types'

const HerbDetailPage = () => {
  const [selectedPart, setSelectedPart] = useState<PlantPart>('fullPlant')

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbf8] via-[#f3f8f5] to-[#fbf8f1] text-slate-900">
      <div className="mx-auto w-full max-w-[1160px] px-6 py-14">
        <HerbHero
          herbData={herbData}
          selectedPart={selectedPart}
          onSelectPart={setSelectedPart}
          plantPartLabels={plantPartLabels}
        />
        <HerbSnapshot herbData={herbData} />
        <HerbTabs herbData={herbData} />
      </div>
    </div>
  )
}

export default HerbDetailPage
