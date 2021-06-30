import { getTranslationProps } from '@app/web-ssr/locale/utils/getTranslationProps/getTranslationProps';
import { Wrapper, Text } from '@lib/frontend/core/components';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { i18n } from '../../next-i18next.config';

const Test = () => <Wrapper><Text>Test</Text></Wrapper>

export default Test;
