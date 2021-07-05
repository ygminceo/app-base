export interface LandingFooterProps {
  onContactModalOpen(): any;
}

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
