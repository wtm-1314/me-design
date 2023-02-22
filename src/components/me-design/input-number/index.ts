import MInputNumber from './src/Main.vue'

MInputNumber.install = (app:any) =>{
  app.component(MInputNumber.name,MInputNumber)
}

export default MInputNumber