import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import { cn } from '../utils/cn'

type CollapsibleContextValue = {
  open: boolean
  toggle: () => void
}

const CollapsibleContext = createContext<CollapsibleContextValue | null>(null)

const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext)
  if (!context) {
    throw new Error('Collapsible components must be used within <Collapsible>.')
  }
  return context
}

type CollapsibleProps = {
  children: ReactNode
  defaultOpen?: boolean
}

export const Collapsible = ({ children, defaultOpen = false }: CollapsibleProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const value = useMemo(
    () => ({ open, toggle: () => setOpen((previous) => !previous) }),
    [open],
  )

  return <CollapsibleContext.Provider value={value}>{children}</CollapsibleContext.Provider>
}

type CollapsibleTriggerProps = HTMLAttributes<HTMLButtonElement>

export const CollapsibleTrigger = ({ className, ...props }: CollapsibleTriggerProps) => {
  const { open, toggle } = useCollapsibleContext()

  return (
    <button
      type="button"
      data-state={open ? 'open' : 'closed'}
      className={cn(className)}
      onClick={toggle}
      {...props}
    />
  )
}

type CollapsibleContentProps = HTMLAttributes<HTMLDivElement>

export const CollapsibleContent = ({ className, ...props }: CollapsibleContentProps) => {
  const { open } = useCollapsibleContext()

  if (!open) {
    return null
  }

  return <div className={cn(className)} {...props} />
}
