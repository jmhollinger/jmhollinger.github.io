export interface Person {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  location: string;
  languages?: string[];
}

export interface Social {
  name: string;
  icon: string;
  link: string;
}

export interface Home {
  path: string;
  image: string;
  label: string;
  title: string;
  description: string;
  headline: React.ReactNode;
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  subline: React.ReactNode;
}

export interface Experience {
  company: string;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}

export interface Education {
  name: string;
  description: React.ReactNode;
}

export interface Skill {
  title: string;
  description: React.ReactNode;
  tags?: Array<{
    name: string;
    icon: string;
  }>;
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}

export interface About {
  path: string;
  label: string;
  title: string;
  description: string;
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: React.ReactNode;
  };
  work: {
    display: boolean;
    title: string;
    experiences: Experience[];
  };
  studies: {
    display: boolean;
    title: string;
    institutions: Education[];
  };
  technical: {
    display: boolean;
    title: string;
    skills: Skill[];
  };
}

export interface RoutesConfig {
  [key: string]: boolean;
}

export interface DisplayConfig {
  location: boolean;
  time: boolean;
  themeSwitcher: boolean;
}

export interface ProtectedRoutesConfig {
  [key: string]: boolean;
}

export interface FontsConfig {
  heading: any;
  body: any;
  label: any;
  code: any;
}

export interface StyleConfig {
  theme: string;
  neutral: string;
  brand: string;
  accent: string;
  solid: string;
  solidStyle: string;
  border: string;
  surface: string;
  transition: string;
  scaling: string;
}

export interface DataStyleConfig {
  variant: string;
  mode: string;
  height: number;
  axis: {
    stroke: string;
  };
  tick: {
    fill: string;
    fontSize: number;
    line: boolean;
  };
}

export interface EffectsConfig {
  mask: {
    cursor: boolean;
    x: number;
    y: number;
    radius: number;
  };
  gradient: {
    display: boolean;
    opacity: number;
    x: number;
    y: number;
    width: number;
    height: number;
    tilt: number;
    colorStart: string;
    colorEnd: string;
  };
  dots: {
    display: boolean;
    opacity: number;
    size: string;
    color: string;
  };
  grid: {
    display: boolean;
    opacity: number;
    color: string;
    width: string;
    height: string;
  };
  lines: {
    display: boolean;
    opacity: number;
    color: string;
    size: string;
    thickness: number;
    angle: number;
  };
}

export interface MailchimpConfig {
  action: string;
  effects: EffectsConfig;
}

export interface SchemaConfig {
  logo: string;
  type: string;
  name: string;
  description: string;
  email: string;
}

export interface SameAsConfig {
  [key: string]: string;
}

export interface SocialSharingConfig {
  display: boolean;
  platforms: {
    [key: string]: boolean;
  };
}
