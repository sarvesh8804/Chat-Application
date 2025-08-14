# FriendZone - Real-time Chat Application

FriendZone is a modern real-time chat application built with **Next.js**, **TypeScript**, **Redis**, and **Pusher**, featuring instant messaging, dynamic user interfaces, and responsive design.

---

## Features

- Real-time messaging using **Pusher**.
- Persistent chat history stored in **Redis**.
- Responsive UI with **Next.js** and **Tailwind CSS**.
- User authentication via **NextAuth.js**.
- Profile pictures and message timestamps.
- Smooth scrolling and message alignment for conversation clarity.

---

## Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS  
- **Backend:** Next.js API routes, Redis  
- **Real-time Communication:** Pusher  
- **Authentication:** NextAuth.js  
- **Other Libraries:** date-fns, axios, react-textarea-autosize  

---

## Getting Started

### Prerequisites

- Node.js v18+  
- Redis server  
- Pusher account  

### Installation

```bash
git clone https://github.com/yourusername/friendzone.git
cd friendzone
npm install

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
REDIS_URL=redis://localhost:6379
PUSHER_APP_ID=your_pusher_app_id
PUSHER_KEY=your_pusher_key
PUSHER_SECRET=your_pusher_secret
PUSHER_CLUSTER=your_pusher_cluster

npm run dev
```

<img width="1918" height="906" alt="image" src="https://github.com/user-attachments/assets/d5f35b90-20c0-481d-b3d2-eb931655ff22" />


