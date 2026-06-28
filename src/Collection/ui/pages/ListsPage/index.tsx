import { useState, type FormEvent } from 'react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Button, EmptyState, Image, TMDB_IMAGE_SIZES, buildImageUrl } from '../../../../Common'
import { useCollection } from '../../../../Collection'
import {
  CardActions,
  Counter,
  Description,
  Field,
  FormActions,
  FormCard,
  Grid,
  Header,
  HeaderCopy,
  Input,
  ListCard,
  ListTitle,
  Meta,
  Page,
  PreviewPoster,
  PreviewRow,
  Subtitle,
  TextArea,
  Title,
} from './StyledComponents'

const ListsPage = observer(() => {
  const { t } = useTranslation('collection')
  const collection = useCollection()
  const [isCreating, setIsCreating] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [editingListId, setEditingListId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')

  const resetCreateForm = () => {
    setName('')
    setDescription('')
    setIsCreating(false)
  }

  const handleCreate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const created = collection.createList(name, description)
    if (created) resetCreateForm()
  }

  const startRename = (listId: string, currentName: string) => {
    setEditingListId(listId)
    setEditingName(currentName)
  }

  const saveRename = () => {
    if (!editingListId) return
    collection.renameList(editingListId, editingName)
    setEditingListId(null)
    setEditingName('')
  }

  const handleDelete = (listId: string) => {
    if (window.confirm(t('lists.actions.confirmDelete'))) {
      collection.deleteList(listId)
    }
  }

  return (
    <Page>
      <Header>
        <HeaderCopy>
          <Title>{t('lists.title')}</Title>
          <Subtitle>{t('lists.subtitle')}</Subtitle>
        </HeaderCopy>

        {!isCreating ? (
          <Button type="button" onClick={() => setIsCreating(true)}>
            {t('lists.create')}
          </Button>
        ) : null}
      </Header>

      {isCreating ? (
        <FormCard onSubmit={handleCreate}>
          <Field>
            {t('lists.nameLabel')}
            <Input
              maxLength={60}
              value={name}
              placeholder={t('lists.namePlaceholder')}
              onChange={(event) => setName(event.target.value)}
              autoFocus
            />
            <Counter $warning={name.length >= 50}>{t('lists.nameCounter', { count: name.length })}</Counter>
          </Field>

          <Field>
            {t('lists.descriptionLabel')}
            <TextArea
              value={description}
              placeholder={t('lists.descriptionPlaceholder')}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Field>

          <FormActions>
            <Button type="submit" disabled={!name.trim()}>
              {t('lists.actions.save')}
            </Button>
            <Button type="button" variant="ghost" onClick={resetCreateForm}>
              {t('lists.actions.cancel')}
            </Button>
          </FormActions>
        </FormCard>
      ) : null}

      {collection.lists.length === 0 ? (
        <EmptyState message={t('lists.empty')} />
      ) : (
        <Grid>
          {collection.lists.map((list) => (
            <ListCard key={list.id}>
              {editingListId === list.id ? (
                <>
                  <Input
                    maxLength={60}
                    value={editingName}
                    onChange={(event) => setEditingName(event.target.value)}
                    autoFocus
                  />
                  <CardActions>
                    <Button type="button" onClick={saveRename} disabled={!editingName.trim()}>
                      {t('lists.actions.save')}
                    </Button>
                    <Button type="button" variant="ghost" onClick={() => setEditingListId(null)}>
                      {t('lists.actions.cancel')}
                    </Button>
                  </CardActions>
                </>
              ) : (
                <>
                  <ListTitle to={`/lists/${list.id}`}>{list.name}</ListTitle>
                  <Description>{list.description}</Description>
                  <Meta>{t('lists.itemCount', { count: list.items.length })}</Meta>

                  <PreviewRow>
                    {list.items.slice(0, 4).map((item) => (
                      <PreviewPoster key={item.id}>
                        <Image
                          src={buildImageUrl(item.snapshot.posterPath, TMDB_IMAGE_SIZES.poster)}
                          alt={t('lists.posterPreviewAlt', { title: item.snapshot.title })}
                        />
                      </PreviewPoster>
                    ))}
                  </PreviewRow>

                  <CardActions>
                    <Button type="button" variant="ghost" onClick={() => startRename(list.id, list.name)}>
                      {t('lists.actions.rename')}
                    </Button>
                    <Button type="button" variant="ghost" onClick={() => handleDelete(list.id)}>
                      {t('lists.actions.delete')}
                    </Button>
                  </CardActions>
                </>
              )}
            </ListCard>
          ))}
        </Grid>
      )}
    </Page>
  )
})

export default ListsPage