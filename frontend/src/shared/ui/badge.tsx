import type { HTMLAttributes } from 'react'
import { cn } from '../utils/cn'

type BadgeProps = HTMLAttributes<HTMLSpanElement>

export const Badge = ({ className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        className,
      )}
      {...props}
    />
  )
}
