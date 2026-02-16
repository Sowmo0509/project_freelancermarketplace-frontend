"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Provides a wrapper around Radix TooltipProvider that forwards props and sets a default `delayDuration` of 0.
 *
 * @param delayDuration - Milliseconds to wait before showing the tooltip; defaults to `0`.
 * @param props - All other props are forwarded to `TooltipPrimitive.Provider`.
 * @returns A `TooltipPrimitive.Provider` element with `data-slot="tooltip-provider"`, the provided `delayDuration`, and any forwarded props.
 */
function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

/**
 * Renders the Radix Tooltip root element that manages tooltip open/close behavior.
 *
 * Passes all received props to TooltipPrimitive.Root and sets data-slot="tooltip".
 *
 * @returns The Tooltip root React element
 */
function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

/**
 * Renders a tooltip trigger that forwards all props to Radix UI's Tooltip Trigger and sets a stable `data-slot="tooltip-trigger"` attribute.
 *
 * @param props - Props forwarded to `TooltipPrimitive.Trigger`
 * @returns A JSX element that renders the tooltip trigger with forwarded props
 */
function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

/**
 * Renders tooltip content inside a portal with themed styling and a positioned arrow.
 *
 * @param className - Additional CSS classes to merge with the default tooltip styling
 * @param sideOffset - Distance in pixels between the trigger and the tooltip; defaults to 0
 * @param children - Content to display inside the tooltip
 * @param props - Additional props forwarded to Radix TooltipPrimitive.Content
 * @returns A React element containing the tooltip content and its arrow
 */
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }