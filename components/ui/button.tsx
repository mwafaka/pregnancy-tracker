import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-peach-400 to-peach-500 text-white shadow-lg shadow-peach-200/50 hover:shadow-xl hover:shadow-peach-200/60 hover:from-peach-500 hover:to-peach-600 active:scale-[0.97] dark:shadow-peach-900/30",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:scale-[0.97]",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground active:scale-[0.97]",
        secondary:
          "bg-gradient-to-br from-lavender-400 to-lavender-500 text-white shadow-lg shadow-lavender-200/50 hover:shadow-xl hover:shadow-lavender-200/60 hover:from-lavender-500 hover:to-lavender-600 active:scale-[0.97] dark:shadow-lavender-900/30",
        ghost:
          "glass hover:bg-surface-secondary hover:shadow-md active:scale-[0.97]",
        link: "text-peach-500 underline-offset-4 hover:underline dark:text-peach-400",
      },
      size: {
        default: "h-10 px-5 py-2 gap-2",
        sm: "h-9 rounded-lg px-3 text-xs gap-1.5",
        lg: "h-12 rounded-xl px-8 text-base gap-2.5",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
