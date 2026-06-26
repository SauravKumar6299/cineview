import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, CloseButton, Dialog } from './StyledComponents'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  label?: string
}

const Modal = ({ isOpen, onClose, children, label }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <Backdrop onClick={onClose} role="dialog" aria-modal="true" aria-label={label}>
      <Dialog onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={onClose} aria-label="Close">
          ×
        </CloseButton>
        {children}
      </Dialog>
    </Backdrop>,
    document.body,
  )
}

export default Modal