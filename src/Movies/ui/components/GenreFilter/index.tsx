import type { Genre } from '../../../data/schemas/Movie.schemas'
import { Chip, Chips } from './StyledComponents'

interface GenreFilterProps {
  genres: Genre[]
  activeGenreId: number | null
  onSelect: (genreId: number | null) => void
}

const GenreFilter = ({ genres, activeGenreId, onSelect }: GenreFilterProps) => (
  <Chips>
    <Chip type="button" $active={activeGenreId === null} onClick={() => onSelect(null)}>
      All Discover
    </Chip>
    {genres.map((genre) => (
      <Chip
        key={genre.id}
        type="button"
        $active={activeGenreId === genre.id}
        onClick={() => onSelect(genre.id)}
      >
        {genre.name}
      </Chip>
    ))}
  </Chips>
)

export default GenreFilter