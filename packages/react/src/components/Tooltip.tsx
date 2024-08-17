import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
 
import { cn } from "../utils"
 
const TooltipProvider = TooltipPrimitive.Provider
 
const TooltipRoot = TooltipPrimitive.Root
 
const TooltipTrigger = TooltipPrimitive.Trigger
 
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-white px-4 py-2.5 text-sm shadow-md leading-none",
      className
    )}
    {...props}
  >
    {children}
    <TooltipPrimitive.Arrow className="stroke-slate-400 fill-white" />
  </TooltipPrimitive.Content>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

const Tooltip = {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
}

export { Tooltip }