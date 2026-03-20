import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useMemo,
} from 'react'
import { cn } from '../utils/cn'

type TabsContextValue = {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within <Tabs>.')
  }
  return context
}

type TabsProps = {
  value: string
  onValueChange: (value: string) => void
  children: ReactNode
  className?: string
}

export const Tabs = ({ value, onValueChange, children, className }: TabsProps) => {
  const contextValue = useMemo(() => ({ value, onValueChange }), [value, onValueChange])

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

type TabsListProps = HTMLAttributes<HTMLDivElement>

export const TabsList = ({ className, ...props }: TabsListProps) => {
  return <div className={cn('inline-flex items-center', className)} {...props} />
}

type TabsTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  value: string
}

export const TabsTrigger = ({ value, className, ...props }: TabsTriggerProps) => {
  const { value: activeValue, onValueChange } = useTabsContext()
  const isActive = activeValue === value

  return (
    <button
      type="button"
      data-state={isActive ? 'active' : 'inactive'}
      onClick={() => onValueChange(value)}
      className={cn(className)}
      {...props}
    />
  )
}

type TabsContentProps = HTMLAttributes<HTMLDivElement> & {
  value: string
}

export const TabsContent = ({ value, className, ...props }: TabsContentProps) => {
  const { value: activeValue } = useTabsContext()
  if (activeValue !== value) {
    return null
  }

  return <div className={cn(className)} {...props} />
}
