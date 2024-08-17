import { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils"

import { AddCircleIcon } from '../icons'

const linkVariants = cva(
  "inline-flex items-center cursor-pointer font-bold gap-2 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "text-blueSolid hover:text-blueSolid/80"
      }
    },
    defaultVariants: {
      variant: "primary"
    },
  }
)

export interface LinkRootProps
  extends VariantProps<typeof linkVariants> {
    className?: string,
    children?: React.ReactNode
  }
    
function LinkRoot({ className, variant, children }: LinkRootProps) {
  return (
    <div className={cn(linkVariants({ variant }), className)}>
      {children ? children : null}
    </div>
  )
}

export interface LinkContentProps extends ComponentProps<'a'> {}

function LinkContent ({ ...props }: LinkContentProps) {
  return (
    <a {...props} />
  )
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return <AddCircleIcon {...props} className="text-blueSolid mt-0.5" />
}

const Link = {
  Root: LinkRoot,
  Content: LinkContent,
  Icon: LinkIcon
}

export { Link, linkVariants }
