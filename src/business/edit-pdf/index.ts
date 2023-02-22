import MEditPdf from './src/Main.vue'

MEditPdf.install = app =>{
  app.component(MEditPdf.name,MEditPdf)
}

export default MEditPdf