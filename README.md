# PDF READER 
It's my pet project. On **React/Redux** and **Node.js/Mongo DB**

[![https://www.youtube.com/watch?v=XQSHXvm3q44](https://media4.giphy.com/media/r94AV9iCqjE7QDIScv/giphy.gif?cid=790b76112f87a60aeb4f86f5a496b508c217f2139a6ffef4&rid=giphy.gif&ct=g)](https://www.youtube.com/watch?v=XQSHXvm3q44)

[*link video* ](https://www.youtube.com/watch?v=gkgss86uMcE)


# Stack 

 **Backend**:new_moon:
 - [Fastify](https://www.fastify.io/)
 - [Mongodb](https://www.mongodb.com/)
 - [Node-poppler](https://github.com/Fdawgs/node-poppler)

**Frontend**:full_moon:

 - [React](https://github.com/facebook/react)
 - [Redux-Toolkit](https://github.com/reduxjs/redux-toolkit)
 - [Material-UI](https://github.com/mui/material-ui)
 - [Axios](https://github.com/axios/axios)
 - [React-PDF](https://github.com/wojtekmaj/react-pdf)
 - [Testing-Library](https://github.com/testing-library)

## How it works.
**Backend**:new_moon:
```mermaid
graph LR
A[Client] ----> B((/FilesAll))
A[Client] ----> C((/FileForRead))
A[Client] ----> D((/FileInfo))
A[Client] ----> E((/UploadFile))
A[Client] ----> F((/DeleteFiles))
A[Client] ----> M((/cdn/CoverFile))
B((/FilesAll))----> v[get files in DB ]
 C((/FileForRead))----> 1[DownloadFile and send buffer ]
D((/FileInfo)) ---->  14[File Info with DB   ]
E((/UploadFile)) ---->  44[write file at DB ]
F((/DeleteFiles)) ---->434[each file which include at array  delete  ]
M((/cdn/CoverFile)) ----> t[if cover there is  in cache ]
M((/cdn/CoverFile)) ----> f[ if cover there is  not in cache ]
 t[ if cover there is  in cache ] ----> 6[get cover   in cache ]
  f[  if cover there is  in cache ] ----> 0[get cover in buffer then save in cache then  return cover  ]
```
**Frontend**:full_moon:
```mermaid
  
  
graph  TD

Store[Store]  ======>  AboutFileContainer((AboutFileContainer))

Store[Store]  ======>  HomeContainer((HomeContainer))

Store[Store]  ======>  ReadContainer((ReadContainer))

App[App]  ---->  AboutFileContainer((AboutFileContainer))

App[App]  ---->  HomeContainer((HomeContainer))

App[App]  ---->  ReadContainer((ReadContainer))

ReadContainer  ---->  Read{Read}

Read{Read}  ---->  ReadUI

Read{Read}  ---->  Loading

AboutFileContainer  ---->  AboutFile

HomeContainer((HomeContainer))  ---->  Home{Home}

Home{Home}  ---->  HomeUI((HomeUI))

Home{Home}  ---->  ErrorPage

HomeUI((HomeUI))  ---->  AddBook

AddBook  ---->  FileDrop  ---->  AdditionalInfo  ---->  Finish

AboutFile{AboutFile}  ---->  ErrorPage

AboutFile{AboutFile}  ---->  UI
  
```

