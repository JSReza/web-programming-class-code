import * as myFetch from '../models/myfetch.ts'
 
 export function api<T>(action: string): Promise<T> {
   return myFetch.api<T>(action)
 }