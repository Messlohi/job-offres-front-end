import React, { useEffect , useContext,useState} from "react";
import "./chatList.css";

import ChatListItems from "./ChatListItems";
import { firestore ,database } from "../../../firebase/firebase.utils";
import { UserContext } from "../../../firebase/Provider";
import { getUserById } from "../../../api/api.users";


const getAllChatUser =  (uid) => {
  return new Promise(async (resolve,reject)=> {
      var allChatUsers = [];
      await database.ref(`all_users/${uid}/chats`).once('value',async (snap)=> {
        if(snap.exists()){
          let tabUsersKeys = Object.keys(snap.val());
        await tabUsersKeys.forEach(async (userKey,i,tab) => {
          let user = {};
         await  getUserById(userKey).then(userFetched => user= userFetched.data)
            allChatUsers.push({
              id : allChatUsers.length+1,
              name : user.nomComplet,
              active : true,
              isOnline: false
            })  
          })
        }
         resolve(allChatUsers);
  })
})
}



  const   setUpChatKey = async (idSender,idRecvier) => {
        const senderChatRef =  database.ref(`all_users/${idSender}`).child("chats").child(idRecvier)
        const receiverChatRef =  database.ref(`all_users/${idRecvier}`).child("chats").child(idSender)
        let chatKey="ssss";
        await senderChatRef.once('value',(snap)=> {
            if(!snap.exists()){
                chatKey = database.ref('all_chats').push().key
                senderChatRef.set(chatKey);
                receiverChatRef.set(chatKey);
            }else {
              chatKey = snap.val();
            }
        })
        return chatKey;
      }
      
      const   sendMessage = async (idSender, idReceiver,message) => {
        if(idSender=="" || idReceiver=="") return;
        const chatKey = await setUpChatKey(idSender,idReceiver);
        const createdAt = new Date();
        const chatRef = database.ref(`all_chats/${chatKey}`)
        const messageKey = chatRef.push().key
        chatRef.child(messageKey).set({
            message,
            createdAt : createdAt.toISOString(), 
            idSender,
            idReceiver,
            messageKey,
            vu : false
        })
      }


const  ChatList =(props) =>  {
const {currentUser} = useContext(UserContext)
const  [allChatUsers, setAllChatUsers] = useState([]);
const [fertchIn,setFetchIn] = useState(false);


  useEffect(async () => {
    if(currentUser != null){
        if(!fertchIn){
          await getAllChatUser(currentUser.id).then(chart => {
            setAllChatUsers(chart)
            setFetchIn(true)
          })
        }
    }
  }, [currentUser,fertchIn])

  

//  let allChatUsers = [
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
//       id: 1,
//       name: "Tim Hover",
//       active: true,
//       isOnline: true,
//     },
//     {
//       image:
//         "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
//       id: 2,
//       name: "Ayub Rossi",
//       active: false,
//       isOnline: false,
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
//       id: 3,
//       name: "Hamaad Dejesus",
//       active: false,
//       isOnline: false,
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
//       id: 4,
//       name: "Eleni Hobbs",
//       active: false,
//       isOnline: true,
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
//       id: 5,
//       name: "Elsa Black",
//       active: false,
//       isOnline: false,
//     },
//     {
//       image:
//         "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
//       id: 6,
//       name: "Kayley Mellor",
//       active: false,
//       isOnline: true,
//     },
//     {
//       image:
//         "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
//       id: 7,
//       name: "Hasan Mcculloch",
//       active: false,
//       isOnline: true,
//     },
//     {
//       image:
//         "https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg",
//       id: 8,
//       name: "Autumn Mckee",
//       active: false,
//       isOnline: false,
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
//       id: 9,
//       name: "Allen Woodley",
//       active: false,
//       isOnline: true,
//     },
//     {
//       image: "https://pbs.twimg.com/profile_images/770394499/female.png",
//       id: 10,
//       name: "Manpreet David",
//       active: false,
//       isOnline: true,
//     },
//   ];

    return (

      <div className="main__chatlist">
        <button className="btn-chat">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {console.log(allChatUsers.length)}
          {allChatUsers.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
}
export default ChatList; 