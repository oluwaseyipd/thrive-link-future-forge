
"use client"

import React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-lg md:max-w-2xl ${className}`}>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
