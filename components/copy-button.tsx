"use client"

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  onCopy: () => void
}

export function CopyButton({ value, onCopy, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setHasCopied(true)
    onCopy()
    setTimeout(() => setHasCopied(false), 2000)
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
        className
      )}
      onClick={handleCopy}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <Check className="h-3 w-3" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  )
}

