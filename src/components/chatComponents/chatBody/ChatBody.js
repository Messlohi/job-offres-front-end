import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import { UserContext } from "../../../firebase/Provider";


const ChatBody = ()=>  {
const {currentUser} = useContext(UserContext)

const {id} = useParams();
let idSender=""
let idReceiver=""

useEffect(() => {
     idSender = id.split('...')[0]
     idReceiver = id.split('...')[1]
     console.log(idSender)
}, [currentUser])

return (
  <div className="main__chatbody">
    {/* <ChatList  /> */}
    {
      console.log(id)
    }
    <ChatContent idSender={idSender} idReceiver={idReceiver}  id={id} />
  </div>
);

}

export default ChatBody;