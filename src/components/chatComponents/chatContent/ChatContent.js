import React, { Component, useState, createRef, useEffect } from "react";
import { database } from "../../../firebase/firebase.utils";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import { getUserById } from "../../../api/api.users";

export default class ChatContent extends Component {
  
  messagesEndRef = createRef(null);
  chatItms = [
 
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
      displayName:"",
      img :"",
      idSender :"",
      idReceiver :""
    };
  }

  setUpChatKey = async (idSender,idRecvier) => {
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
  
     sendMessage = async (idSender, idReceiver,message) => {
    if(idSender=="" || idReceiver=="") return;
    const chatKey = await this.setUpChatKey(idSender,idReceiver);
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


  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  getAllMesages =  (idSender ,idReceiver) => {
    database.ref(`all_users/${idSender}/chats/${idReceiver}`).once('value',async snap=> {
      if(snap.exists()){
        database.ref(`all_chats/${snap.val()}`).on('child_added',snap=> {
          console.log(snap.val())
          let typee = ""
          if(snap.val().idSender!=idSender) typee="other"
          this.chatItms.push({
            key: this.chatItms.length+1,
            type: typee,
            msg: snap.val().message,
            image:
              "https://saccade.ca/img/autiste-apropos.svg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
        })

      }

    })

  }

    componentDidMount() {

      let  idSender = this.props.id.split('...')[0]
      let   idReceiver = this.props.id.split('...')[1]
        this.setState({
          idSender : idSender,
          idReceiver : idReceiver
        })

        getUserById(idReceiver).then(userPayload => {
          let user = userPayload.data;
          this.setState({
            displayName : user.nomComplet,
            img : user.imgPath
          })
          this.getAllMesages(idSender,idReceiver)
        })

    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          // this.chatItms.push({
          //   key: 1,
          //   type: "",
          //   msg: this.state.msg,
          //   image:
          //     "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          // });
          this.sendMessage(idSender,idReceiver,this.state.msg);
         // this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image={this.state.img}
              />
              <p>{this.state.displayName}</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
