import { config } from '@lib/common/core/utils/Config/Config';
import { AppLayout } from '@lib/frontend/app/layouts';
import { Button, Image, ProgressBar, Text, Wrapper } from '@lib/frontend/core/components';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import React from 'react';
import { default as FA } from 'react-native-vector-icons/FontAwesome';

const PUBLIC_URL = config.get<string>('REACT_APP_PUBLIC_URL', '');

const POSTER_WIDTH = 410;
const INFO_WIDTH = 400;

const SOCIAL_ICON_SIZE = 20;
export const EventPage = () => {
  const social = (
    <Wrapper row spacingTight>
      <FA name="instagram" size={SOCIAL_ICON_SIZE} color={CommonTheme.colors.primary.main} />
      <FA name="spotify" size={SOCIAL_ICON_SIZE} color={CommonTheme.colors.primary.main} />
      <FA name="soundcloud" size={SOCIAL_ICON_SIZE} color={CommonTheme.colors.primary.main} />
    </Wrapper>
  );

  return (
    <AppLayout>
      <Wrapper grow center alignCenter>
        <Wrapper row spacing>
          {/* poster */}
          <Image
            src={`${PUBLIC_URL}/images/postersample.jpeg`}
            width={POSTER_WIDTH}
            height={(POSTER_WIDTH * 900) / 630}
          />

          <Wrapper spacing={30} width={INFO_WIDTH}>
            {/* Progress bar */}
            <Wrapper spacingTight>
              <ProgressBar />

              <Wrapper>
                <Text title primary>
                  $4,262
                </Text>
                <Text muted>
                  pledged of $6,000 total
                </Text>
              </Wrapper>

              <Text>
                <Text bold>132</Text> <Text muted>tickets sold</Text>
              </Text>

              <Text>
                <Text bold>15</Text> <Text muted>days to go</Text>
              </Text>

              <Button fullWidth>Buy Ticket</Button>
              <Text small muted>
                All or nothing. This event will only be funded if it reaches its goal by Wed, June
                15 2021 11:59 PM EDT.
              </Text>
            </Wrapper>

            {/* Date & Time */}
            <Wrapper>
              <Text bold>Date and Time</Text>
              <Text muted>Sat, June 17, 2021</Text>
              <Text muted>7:00 PM - 8:00 PM EDT</Text>
            </Wrapper>

            {/* Location */}
            <Wrapper>
              <Text bold>Location</Text>
              <Text muted>Brooklyn Grain</Text>
              <Text muted>1166 Manhattan Ave</Text>
              <Text muted>Brooklyn, NY 11222</Text>
            </Wrapper>

            {/* Artists */}
            <Wrapper spacingTight>
              <Text bold>Artists</Text>

              <Wrapper row spacing={40}>
                <Wrapper spacingTight center alignCenter>
                  <Image
                    src={`${PUBLIC_URL}/images/artist1.png`}
                    width={90}
                    height={90}
                    style={{ borderRadius: 45 }}
                  />
                  <Text bold>Huxley Kuhlmann</Text>
                  {social}
                </Wrapper>

                <Wrapper spacingTight center alignCenter>
                  <Image
                    src={`${PUBLIC_URL}/images/artist2.png`}
                    width={90}
                    height={90}
                    style={{ borderRadius: 45 }}
                  />
                  <Text bold>BTS</Text>
                  {social}
                </Wrapper>

                <Wrapper spacingTight center alignCenter>
                  <Image
                    src={`${PUBLIC_URL}/images/artist3.png`}
                    width={90}
                    height={90}
                    style={{ borderRadius: 45 }}
                  />
                  <Text bold>Justin Bieber</Text>
                  {social}
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </AppLayout>
  );
};
