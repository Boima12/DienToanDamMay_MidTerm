# Cloud Computing Midterm project - Cao Hoang Phuoc Bao
<br><br>

# Prerequisite (after first time cloned this project)
> 1. Install project libraries
> ```cmd
> npm install
> ```
> <br>
> 
> 2. Setting up .env file, i have a .env.example file as an example, you can copy majority of them but need to fill in some fields as:
> ```.env
> MONGO_DB_NAME - your own MongoDB database name
> SESSION_SECRET - can simply go to https://randomkeygen.com/ and grab a secret key
> MONGO_SESSION_URI - your MongoDB account with full privileges connection string
> MONGO_URI - same as MONGO_SESSION_URI (i know the code in this project kinda rushed :[] )
> MONGO_URI_USER_READONLY - your MongoDB account with read access only connection string
> MONGO_URI_USER_WRITEONLY - your MongoDB account with write access only connection string
> ```
> <br>
<br><br>


# Run this project locally 
> 1. run the start command
> ```cmd
> npm start
> ```
> <br>
> 
> 2. Goto http://localhost:5000/books (default port is 5000 as in .env.example, your can be different base on your .env settings)
> <br>
> 
> 3. To turn off localhost, simply press "Ctrl + C" at the terminal you hosted this on
> <br>