import { forwardRef } from 'react'

import { cva, type VariantProps } from "class-variance-authority"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { UserAddIcon } from '../icons'

import { cn } from "../utils"

export interface AvatarListProps {
  variant?: 'combined' | 'separate'
  children: React.ReactNode[]
  className?: string
  maxAvatar?: number
  avatarPlus?: boolean
  avatarPlusOnClick?: () => void
}

const avatarListVariants = cva(
  "z-10 flex rtl:space-x-reverse",
  {
    variants: {
      variant: {
        combined: '-space-x-4',
        separate: 'space-x-0.5',
      }
    },
    defaultVariants: {
      variant: "combined",
    }
  }
)

const AvatarList = ({ children, variant = 'combined', maxAvatar, avatarPlus, avatarPlusOnClick, className }: AvatarListProps) => {
  const avatarsTotal = children.length
  const showAvatarPlus = (avatarsTotal > (maxAvatar ?? avatarsTotal)) || avatarPlus

  const avatars = typeof maxAvatar !== 'undefined' ? children.slice(0, maxAvatar) : children

  return (
    <div
      className={cn(avatarListVariants({ variant }), className)}
    >
      {avatars}
      {showAvatarPlus ? <>
        <AvatarRoot
          className='flex items-center justify-center bg-grey50 border-grey50 hover:bg-grey100 hover:border-grey100 cursor-pointer'
          onClick={avatarPlusOnClick}
        >
          <UserAddIcon className='aspect-square size-4 text-grey400' />
        </AvatarRoot>
      </> : null}
    </div>
  )
}

const AvatarRoot = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white",
      className
    )}
    {...props}
  >
    {children}
  </AvatarPrimitive.Root>
))
AvatarRoot.displayName = AvatarPrimitive.Root.displayName

const AvatarOnline = () => {
  return (
    <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-green-500 space-x-0.5" />
  )
}

const AvatarImage = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const Avatar = {
  List: AvatarList,
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Online: AvatarOnline,
}

export { Avatar }
