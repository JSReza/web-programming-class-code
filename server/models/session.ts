import * as myFetch from './myfetch.ts'
 
 export function api<T>(action: string): Promise<T> {
   return myFetch.api<T>(action)
 }