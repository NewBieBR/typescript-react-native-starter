import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'src/hooks/useSelector';
import {setAppTheme} from 'src/modules/app/actions';
import {Themes, ThemeType} from 'src/theme';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text};
`;

const SettingsPageComponent = (): JSX.Element => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>{t('settings')}</Title>
      {Object.keys(Themes).map((themeType) => {
        return (
          <Button
            key={themeType}
            title={themeType}
            onPress={() => {
              dispatch(setAppTheme(themeType as ThemeType));
            }}
          />
        );
      })}
    </Container>
  );
};

export const SettingsPage = memo(SettingsPageComponent);
