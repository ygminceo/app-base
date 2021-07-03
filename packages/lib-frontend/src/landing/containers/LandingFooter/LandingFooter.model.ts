export interface LandingFooterProps {}

interface LandingFooterLinkModel {
  title: string;
  icon: string;
  pathname: string;
}

export interface LandingFooterLinkGroupModel {
  title: string;
  icon: string;
  links: LandingFooterLinkModel[];
}
