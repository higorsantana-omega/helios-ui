import { forwardRef } from 'react'

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils"
import { Label } from './Label'
import { CancelIcon, TickIcon, InformationCircleIcon } from '../icons'

const inputVariants = cva(
  "flex h-10 w-full rounded-md text-black border border-grey100 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-grey200",
  {
    variants: {
      state: {
        success: "border-greenPrimary",
        error: "border-pinkPrimary",
      },
      direction: {
        left: 'pl-10'
      },
      additionalSection: {
        left: 'pl-32',
        right: 'pr-32'
      }
    },
  }
)

const additionalSectionVariants = cva(
  'absolute border border-grey100 inset-y-0 flex items-center bg-grey200 gap-2 text-gray-400 w-28 max-w-28 overflow-hidden',
  {
    variants: {
      direction: {
        left: 'left-0 pl-3 rounded-l-md',
        right: 'right-0 pr-3 rounded-r-md'
      }
    }
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    state?: 'success' | 'error'
    title: string
    details?: string
    helperLabel?: string
    rightIcon?: React.ReactNode
    leftIcon?: React.ReactNode
    additionalSection?: {
      icon?: React.ReactNode
      text?: string
      direction?: 'left' | 'right'
    }
  }
 
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, state, title, details, helperLabel, rightIcon, leftIcon, additionalSection, ...props }, ref) => {
    const icon = {
      error: <CancelIcon className='text-pinkPrimary size-3' strokeWidth={2.5} />,
      success: <TickIcon className='text-greenPrimary size-3' strokeWidth={2.5} />
    }

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className='flex gap-1 py-0.5 text-black text-sm'>
          {title}
          {details && (
            <span className="text-xs text-grey400 mt-0.5">
              ({details})
            </span>
          )}
        </Label>
        <div className="relative">
          <input
            type={type}
            className={cn(
              inputVariants({ state, direction: leftIcon ? 'left' : null, additionalSection: additionalSection?.direction }),
              className
            )}
            ref={ref}
            {...props}
          />
          {additionalSection?.direction === 'left' && (
            <div className={cn(additionalSectionVariants({ direction: 'left' }))}>
              {additionalSection?.icon}
              <span className="truncate">
                {additionalSection?.text}
              </span>
            </div>
          )}
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {leftIcon}
            </div>
          )}
          {state && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {icon[state]}
            </div>
          )}
          {(rightIcon && !state) && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {rightIcon}
            </div>
          )}
          {additionalSection?.direction === 'right' && (
            <div className={cn(additionalSectionVariants({ direction: 'right' }))}>
              {additionalSection?.icon}
              <span className="truncate">
                {additionalSection?.text}
              </span>
            </div>
          )}
        </div>
        {helperLabel && (
          <span className="text-xs text-grey400 flex gap-1">
            <InformationCircleIcon className='text-grey400 size-3 mt-1' />
            {helperLabel}
          </span>
        )}
      </div>
      
    )
  }
)

Input.displayName = "Input"
 
export { Input }
