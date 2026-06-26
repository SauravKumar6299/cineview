import { Badge } from './StyledComponents'

interface RatingBadgeProps {
  value: number
}

const RatingBadge = ({ value }: RatingBadgeProps) => <Badge>★ {value.toFixed(1)}</Badge>

export default RatingBadge