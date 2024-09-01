import { type ComponentProps } from 'react'

import { type ClassValue } from "clsx"
import { cn } from "../utils"

export const ButtonColor = {
  primary: 'primary',
  secondary: 'secondary'
} as const

export const ButtonVariant = {
  'filled': 'filled',
  'outlined': 'outlined'
} as const

type ButtonColor = keyof typeof ButtonColor
type ButtonVariant = keyof typeof ButtonVariant

type ButtonColorsClass = { [key in ButtonColor]: ClassValue }
type ButtonVariantsClass = { [key in ButtonVariant]: ButtonColorsClass }
type ButtonDisabledClass = { [key in ButtonVariant]: ClassValue }

export type ButtonProps = {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
} & ComponentProps<'button'>

export function Button({
  children,
  className,
  disabled,
  color = 'primary',
  variant = 'filled',
  rightIcon,
  leftIcon,
  ...props
}: ButtonProps) {
  const variants: ButtonVariantsClass = {
    filled: {
      primary: 'bg-blueSolid text-white',
      secondary: 'bg-grey50 text-grey400'
    },
    outlined: {
      primary: 'bg-transparent text-blueSolid border border-grey50',
      secondary: 'bg-transparent text-grey400 border border-grey50'
    }
  }

  const disabledClasses: ButtonDisabledClass = {
    filled: 'cursor-not-allowed opacity-50 text-white',
    outlined: 'cursor-not-allowed opacity-50 text-grey400'
  }
  
  return (
    <button
      className={cn(
        "flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md hover:opacity-90 focus:outline-none",
        disabled ? disabledClasses[variant] : variants[variant][color],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon ? leftIcon : null}
      {children ? children : null}
      {rightIcon ? rightIcon : null}
    </button>
  )
}
