import { Modal } from '../../../../Common'
import { Frame } from './StyledComponents'

interface TrailerModalProps {
  videoKey: string
  isOpen: boolean
  onClose: () => void
}

const TrailerModal = ({ videoKey, isOpen, onClose }: TrailerModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} label="Trailer">
    <Frame>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
        title="Trailer"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
      />
    </Frame>
  </Modal>
)

export default TrailerModal