import { writable } from 'svelte/store';

export const header = writable(true);
export const footer = writable(true);
export const body = writable(true);
export const thumbnail = writable(true);

export const cardStyle = writable('boxed');
export const cardType = writable('news');
export const cardThumbnailUrl = writable('#');
export const cardTitle = writable('Super card');
export const cardSubtilte = writable('this is a card');
export const cardBodyContetn = writable(
  'this card is super card you can do a lot with it for example show/hide image change card link-urlthis card is super card you can do a lot with it for example show/hide image change card link-url'
);
export const cardLinkTitle = writable('This is link');
export const cardLinkUrl = writable('https://google.com');


