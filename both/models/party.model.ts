//I dont understnad export interface Party extends. 

import { CollectionObject } from './collection-object.model';

export interface Party extends CollectionObject {
  name: string;
  description: string;
  location: string;
}
