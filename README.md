## env example

- Get your api key from Clerk for the authentication then paste in the `.env`
    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...
    ```
- Add the redirect and clerk sign in url folders in the `.env`:
    ```
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
    ```
- Get your api key from Neondb for the Database:
    ```
    DATABASE_URL="postgresql://neondb_owner:..."
    ```
- Get the api key for the upload from Uploadthing:
    ```
    UPLOADTHING_TOKEN=...
    ```


## Getting Started

- git clone the repo
- Install the packages:
    ```
    npm install
    ```
- run the development server:

    ```bash
    npm run dev
    ```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

