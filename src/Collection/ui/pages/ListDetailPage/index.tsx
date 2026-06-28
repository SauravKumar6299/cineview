import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { Button, EmptyState, Image, RatingBadge, TMDB_IMAGE_SIZES, buildImageUrl } from '../../../../Common'
import { useCollection, type CustomListItem } from '../../../../Collection'
import {
  BackLink,
  Description,
  Grid,
  Header,
  Item,
  ItemBody,
  ItemMeta,
  ItemTitleLink,
  ItemTop,
  Meta,
  NotFoundWrap,
  Page,
  PosterLink,
  RemoveButton,
  Title,
} from './StyledComponents'

const getDetailPath = (item: CustomListItem) =>
  item.mediaType === 'movie' ? `/movie/${item.mediaId}` : `/tv/${item.mediaId}`

const ListDetailPage = observer(() => {
  const { t } = useTranslation('collection')
  const { listId } = useParams()
  const collection = useCollection()
  const list = listId ? collection.getList(listId) : null

  if (!list) {
    return (
      <NotFoundWrap>
        <h1>{t('lists.detail.notFoundTitle')}</h1>
        <p>{t('lists.detail.notFoundBody')}</p>
        <Link to="/lists">
          <Button>{t('lists.detail.backToLists')}</Button>
        </Link>
      </NotFoundWrap>
    )
  }

  return (
    <Page>
      <BackLink to="/lists">← {t('lists.detail.backToLists')}</BackLink>

      <Header>
        <Title>{list.name}</Title>
        {list.description ? <Description>{list.description}</Description> : null}
        <Meta>{t('lists.itemCount', { count: list.items.length })}</Meta>
      </Header>

      {list.items.length === 0 ? (
        <EmptyState message={t('lists.detail.empty')} />
      ) : (
        <Grid>
          {list.items.map((item) => (
            <Item key={item.id}>
              <PosterLink to={getDetailPath(item)}>
                <Image
                  src={buildImageUrl(item.snapshot.posterPath, TMDB_IMAGE_SIZES.poster)}
                  alt={item.snapshot.title}
                />
              </PosterLink>

              <ItemBody>
                <ItemTop>
                  <div>
                    <ItemTitleLink to={getDetailPath(item)}>
                      {item.snapshot.title}
                    </ItemTitleLink>
                    <ItemMeta>
                      <span>
                        {item.mediaType === 'movie'
                          ? t('watchlist.mediaType.movie')
                          : t('watchlist.mediaType.tv')}
                      </span>
                      {item.snapshot.releaseDate ? (
                        <span>{item.snapshot.releaseDate.slice(0, 4)}</span>
                      ) : null}
                      <RatingBadge value={item.snapshot.voteAverage} />
                    </ItemMeta>
                  </div>

                  <RemoveButton
                    type="button"
                    onClick={() => collection.removeFromList(list.id, item.mediaType, item.mediaId)}
                  >
                    {t('lists.detail.removeItem')}
                  </RemoveButton>
                </ItemTop>
              </ItemBody>
            </Item>
          ))}
        </Grid>
      )}
    </Page>
  )
})

export default ListDetailPage