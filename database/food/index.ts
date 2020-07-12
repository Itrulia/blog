import { Food } from './food-model';
import { chicken } from './meat/chicken';
import { lamb } from './meat/lamb';
import { beef } from './meat/beef';
import { pork } from './meat/pork';

export const food: Food[] = [...chicken, ...lamb, ...beef, ...pork];
