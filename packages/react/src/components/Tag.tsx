import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils"

const tagVariants = cva(
  "inline-flex items-center rounded-full border font-regular gap-2 px-4 py-1 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      color: {
        primary:
          "bg-blueSolid text-white border-transparent hover:bg-blueSolid/80",
        secondary:
          "bg-grey50 text-grey400 border-transparent hover:bg-grey50/80",
        success: 
          "border-transparent bg-greenSoft text-greenPrimary hover:bg-greenSoft/80",
        warning:
          "border-transparent bg-orangeSoft text-orangePrimary hover:bg-orangeSoft/80",
        destructive:
          "border-transparent bg-pinkSoft text-pinkPrimary hover:bg-pinkSoft/80",
        cyan:
          "border-transparent bg-cyanSoft text-cyanSolid hover:bg-cyanSoft/80",
        outline: "text-foreground",
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
        className: "text-blueSolid bg-blueSoft",
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

export interface TagProps
  extends VariantProps<typeof tagVariants> {
    className?: string,
    children?: React.ReactNode 
    rightIcon?: React.ReactNode
    leftIcon?: React.ReactNode
  }
    
function Tag({ className, variant, color, children, leftIcon, rightIcon }: TagProps) {
  return (
    <div className={cn(tagVariants({ variant, color }), className)}>
      {leftIcon ? leftIcon : null}
      {children ? children : null}
      {rightIcon ? rightIcon : null}
    </div>
  )
}

export { Tag, tagVariants }
