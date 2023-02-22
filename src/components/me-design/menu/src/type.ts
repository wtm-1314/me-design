export interface menuItem {
  key:string,
  title:string,
  path:string,
  children?:menuItem [],
  slotName?:string,
  name:string
}