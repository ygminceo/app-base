import { HomePageProps } from '@app/web-ssr/pages/Home/Home.model';
import { LandingLayout } from '@lib/frontend/landing/layouts';
import React from 'react';

export const HomePage = ({ ...props }: HomePageProps) => <LandingLayout />;
