import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input/70 dark:bg-input/30 data-[state=checked]:bg-checkbox data-[state=checked]:text-checkbox-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-6 shrink-0 rounded-[6px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 group-hover:data-[state=checked]:bg-checkbox/80 group-hover:border-input",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
      {!props.checked && 
        <span className="grid place-content-center text-current transition-none"><CheckIcon className="size-3.5 opacity-0 hover:opacity-20 group-hover:opacity-20" /></span>}
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
