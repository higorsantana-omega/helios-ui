import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils"

const badgeCountVariants = cva(
  "inline-flex items-center justify-center size-8 rounded-full border font-regular px-1 py-1 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      color: {
        primary: 
          "border-transparent bg-greenSoft text-greenPrimary hover:bg-greenSoft/80",
        secondary:
          "bg-grey50 text-grey400 border-transparent hover:bg-grey50/80"
      },
      variant: {
        filled: "",
        outlined: "border bg-transparent",
      }
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "outlined",
        className: "text-greenSolid bg-greenSoft",
      },
      {
        color: "secondary",
        variant: "outlined",
        className: "text-grey400 bg-transparent border border-grey100",
      }
    ],
    defaultVariants: {
      color: "primary",
      variant: "filled",
    },
  }
)

export interface BadgeCountProps
  extends VariantProps<typeof badgeCountVariants> {
    className?: string,
    children?: React.ReactNode
  }
    
function BadgeCount({ className, variant, color, children }: BadgeCountProps) {
  return (
    <div className={cn(badgeCountVariants({ variant, color }), className)}>
      {children ? children : null}
    </div>
  )
}

export { BadgeCount, badgeCountVariants }
