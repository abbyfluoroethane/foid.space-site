// What the pages share: the nav, and the data from src/data.
import { parse } from 'yaml';
import servicesYaml from './data/services.yml?raw';
import friendsYaml from './data/friends.yml?raw';

export const NAV = [
  { href: '/', name: 'home' },
  { href: '/friends/', name: 'friends' },
  { href: '/about/', name: 'about' },
];

export interface Service {
  name: string;
  url: string;
  logo?: string;
  img?: string;
  icon?: string;
  desc?: string;
  size?: 'square' | 'wide';
  color?: string;
  wordmark?: boolean;
  mark?: boolean;
}
export interface Friend {
  name: string;
  handle?: string;
  desc: string;
  links?: { label: string; url: string }[];
}

export const SERVICES = parse(servicesYaml) as Service[];
export const FRIENDS = parse(friendsYaml) as Friend[];

// The icons in src/icons, by file name without .svg.
const icons = import.meta.glob<string>('./icons/*.svg', { eager: true, query: '?raw', import: 'default' });
export const icon = (name: string) => icons[`./icons/${name}.svg`];
