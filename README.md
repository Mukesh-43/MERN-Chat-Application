# MERN Chat Application

## HOSTED LINK: https://mern-chat-application-58sh.onrender.com/

It is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.
It has a rest Api backend and used all the requests in frontend.

## Tech Stacks Used

Client: React JS, Chakra UI

Server: Node JS, Express JS

Database: Mongo DB

Styling: Tailwind.css


## API Reference

#### Registration

```http
  POST /api/user
```
#### Login user

```http
  POST /api/user/login
```
#### Search user

```http
  GET /api/user?search=${search}
```
#### Create a chat or acess the chat

```http
  POST /api/chat
```
#### Fetching Chat

```http
  GET /api/chat
```
#### Create a group

```http
  POST /api/chat/group
```
#### Rename a group

```http
  PUT /api/chat/rename
```
#### Add user to group

```http
  PUT /api/chat/groupadd
```
#### Remove from group

```http
  PUT /api/chat/groupremove
```
#### Sending a message

```http
  POST /api/message
```
#### Fetching all messages for a chat

```http
  GET /api/message/${chatId}
```

## Functionalities 

## Pages:

### SignUp page:
![App Screenshot](https://res.cloudinary.com/dsvfqcuwy/image/upload/v1712603997/Screenshot_89_q9qdzv.png)

### Login Page:
![App Screenshot](https://res.cloudinary.com/dsvfqcuwy/image/upload/v1712603997/Screenshot_88_pblcf1.png)

### Search:
![App Screenshot](https://res.cloudinary.com/dsvfqcuwy/image/upload/v1712603996/Screenshot_92_s9jyxc.png)

### Profile:
![App Screenshot](https://res.cloudinary.com/dsvfqcuwy/image/upload/v1712603995/Screenshot_90_goqfbv.png)

### Chat page:
![App Screenshot](https://res.cloudinary.com/dsvfqcuwy/image/upload/v1712603995/Screenshot_91_gk6oxl.png)

### Create group:
![App Screenshot](https://res.cloudinary.com/dsvfqcuwy/image/upload/v1712603995/Screenshot_93_dqmme4.png)

### Update Group:
![App Screenshot](https://res.cloudinary.com/dsvfqcuwy/image/upload/v1712603996/Screenshot_94_d3ujwd.png)

