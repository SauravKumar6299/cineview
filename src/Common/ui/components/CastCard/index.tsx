import { Image, buildImageUrl, TMDB_IMAGE_SIZES } from '../../../../Common'
import type { CastMember } from '../../../../Movies/data/schemas/Movie.schemas'
import { Avatar, Card, Character, Name } from './StyledComponents'

interface CastCardProps {
  member: CastMember
}

const CastCard = ({ member }: CastCardProps) => (
  <Card>
    <Avatar>
      <Image src={buildImageUrl(member.profile_path, TMDB_IMAGE_SIZES.profile)} alt={member.name} />
    </Avatar>
    <Name title={member.name}>{member.name}</Name>
    <Character title={member.character}>{member.character}</Character>
  </Card>
)

export default CastCard