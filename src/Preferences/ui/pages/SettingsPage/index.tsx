import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../Auth'
import { Button } from '../../../../Common'
import { LANGUAGES, REGIONS } from '../../../core/constants/Preferences.constants'
import type { LanguageCode, RegionCode } from '../../../core/types/Preferences.types'
import { usePreferences } from '../../../data/store/usePreferences'
import {
  Card,
  Footer,
  Page,
  Row,
  RowHint,
  RowInfo,
  RowLabel,
  SegmentButton,
  Segmented,
  Select,
  Subtitle,
  Title,
} from './StyledComponents'

const SettingsPage = observer(() => {
  const { t } = useTranslation('settings')
  const preferences = usePreferences()
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <Page>
      <Title>{t('title')}</Title>
      <Subtitle>{t('subtitle')}</Subtitle>

      <Card>
        <Row>
          <RowInfo>
            <RowLabel>{t('language')}</RowLabel>
            <RowHint>{t('languageHint')}</RowHint>
          </RowInfo>
          <Select
            value={preferences.language}
            onChange={(event) => preferences.setLanguage(event.target.value as LanguageCode)}
          >
            {LANGUAGES.map((language) => (
              <option key={language.code} value={language.code}>
                {language.label}
              </option>
            ))}
          </Select>
        </Row>

        <Row>
          <RowInfo>
            <RowLabel>{t('region')}</RowLabel>
            <RowHint>{t('regionHint')}</RowHint>
          </RowInfo>
          <Select
            value={preferences.region}
            onChange={(event) => preferences.setRegion(event.target.value as RegionCode)}
          >
            {REGIONS.map((region) => (
              <option key={region.code} value={region.code}>
                {region.label}
              </option>
            ))}
          </Select>
        </Row>

        <Row>
          <RowInfo>
            <RowLabel>{t('theme')}</RowLabel>
            <RowHint>{t('themeHint')}</RowHint>
          </RowInfo>
          <Segmented role="group" aria-label={t('theme')}>
            <SegmentButton
              type="button"
              $active={preferences.theme === 'light'}
              onClick={() => preferences.setTheme('light')}
            >
              {t('light')}
            </SegmentButton>
            <SegmentButton
              type="button"
              $active={preferences.theme === 'dark'}
              onClick={() => preferences.setTheme('dark')}
            >
              {t('dark')}
            </SegmentButton>
          </Segmented>
        </Row>
      </Card>

      <Footer>
        <Button variant="ghost" onClick={handleLogout}>
          {t('logout')}
        </Button>
      </Footer>
    </Page>
  )
})

export default SettingsPage