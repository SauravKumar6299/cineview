import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useCollection, type MediaSnapshot } from '../../../../Collection'
import {
  Checkbox,
  EmptyText,
  ListName,
  ListOption,
  Panel,
  Title,
  Trigger,
  Wrap,
} from './StyledComponents'

interface AddToListPopoverProps {
  snapshot: MediaSnapshot
  compact?: boolean
}

const AddToListPopover = observer(({ snapshot, compact = false }: AddToListPopoverProps) => {
  const { t } = useTranslation('collection')
  const collection = useCollection()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrap>
      <Trigger type="button" onClick={() => setIsOpen((current) => !current)}>
        {compact ? '+' : t('lists.addToList.button')}
      </Trigger>

      {isOpen ? (
        <Panel>
          <Title>{t('lists.addToList.title')}</Title>

          {collection.lists.length === 0 ? (
            <EmptyText>{t('lists.addToList.empty')}</EmptyText>
          ) : (
            collection.lists.map((list) => (
              <ListOption key={list.id}>
                <Checkbox
                  type="checkbox"
                  checked={collection.isInList(list.id, snapshot.mediaType, snapshot.id)}
                  onChange={() => collection.toggleListItem(list.id, snapshot)}
                />
                <ListName>{list.name}</ListName>
              </ListOption>
            ))
          )}
        </Panel>
      ) : null}
    </Wrap>
  )
})

export default AddToListPopover