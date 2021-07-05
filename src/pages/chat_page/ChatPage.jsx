import React from 'react'


import ChatBody from '../../components/chatComponents/chatBody/ChatBody';

import { database } from '../../firebase/firebase.utils';

import './ChatPage.scss'


class ChatPage extends React.Component {


    //  setUpChatKey = async (idSender,idRecvier) => {
    //     const senderChatRef =  database.ref(`all_users/${idSender}`).child("chats").child(idRecvier)
    //     const receiverChatRef =  database.ref(`all_users/${idRecvier}`).child("chats").child(idSender)
    //     let chatKey="ssss";
    //     await senderChatRef.once('value',(snap)=> {
    //         if(!snap.exists()){
    //             chatKey = database.ref('all_chats').push().key
    //             senderChatRef.set(chatKey);
    //             receiverChatRef.set(chatKey);
    //         }else {
    //           chatKey = snap.val();
    //         }
    //     })
    //     return chatKey;
    //   }
      
    //     sendMessage = async (idSender, idReceiver,message) => {
    //     if(idSender=="" || idReceiver=="") return;
    //     const chatKey = await setUpChatKey(idSender,idReceiver);
    //     const createdAt = new Date();
    //     const chatRef = database.ref(`all_chats/${chatKey}`)
    //     const messageKey = chatRef.push().key
    //     chatRef.child(messageKey).set({
    //         message,
    //         createdAt : createdAt.toISOString(), 
    //         idSender,
    //         idReceiver,
    //         messageKey,
    //         vu : false
    //     })
    //   }
      




    render(){
        return(
            <div className="__main"> 
                <ChatBody/>
            </div>
        )
    }
}

export default ChatPage;