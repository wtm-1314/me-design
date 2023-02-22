import { createApp } from 'vue';
import Message from './Main.vue';

interface messageType {
  type:string,
  msg:string,
  duration?:number,
  theme?:string
}
export default (obj:messageType) =>{
    let container = document.querySelector('#ming-msg-container');

    if(!container){
        container = document.createElement('div');
        container.id = 'ming-msg-container';
        document.body.appendChild(container);
    }
    const msgNode = document.createElement('div');
    const id = 'm-msg-'+ new Date().getTime().toString(32);
    msgNode.className = 'item';
    msgNode.id = id;
    container?.appendChild(msgNode);
    createApp(Message,{
        ...obj,
        bindId:id
    }).mount(`#${id}`);
};