
# Discord Clone

This is a learning project following a tutorial by `CodeWithAntonio` that aims to create a discord like web app built with `Next.js`, `React.js`, `TailwindCSS`.   
It also uses `Clerk` for the authentication, `Prisma` for database Management, `NeonDB` for the database, `LiveKit` for audio and video streaming.

## Demo

There might be some problems with the sockets on vercel however you can still see the frontend. In case I also deployed on render:

- Vercel:
    https://webapp-chat-application.vercel.app/
- Render:
    https://webapp-chat.onrender.com

## Features

- User authentication with Clerk
- Chat messages with WebSockets
- File uploads with Uploadthing
- Video and audio calls with LiveKit
- Server and channel management

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/phlearning/discord-clone.git
    cd discord-clone
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up the environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```properties
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

    DATABASE_URL=your_database_url

    UPLOADTHING_TOKEN=your_uploadthing_token

    LIVEKIT_API_KEY=your_livekit_api_key
    LIVEKIT_API_SECRET=your_livekit_api_secret
    NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Documentation

- [Next.js docs](https://nextjs.org/docs)
- [Clerk docs](https://clerk.com/docs)
- [UploadThing docs](https://docs.uploadthing.com/)
- [NeonDB docs](https://neon.tech/docs/introduction)
- [LiveKit docs](https://docs.livekit.io/home/)


## Acknowledgements

This project has been made following the lessons here below:

 - [CodeWithAntonio](https://www.codewithantonio.com/projects/team-chat-platform)
 - [Youtube Version](https://www.youtube.com/watch?v=ZbX4Ok9YX94)
