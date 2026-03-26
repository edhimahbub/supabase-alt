# Supabase Alternative Demo

## What it does
This is a VPS-based backend that works as a simple alternative to Supabase functions.

## Base URL
http://173.214.162.237:3001/api

## Endpoints
- GET /health
- GET /functions/hello
- GET /env-check
- GET /functions/get-users
- GET /functions/verify-secret
- POST /functions/echo
- POST /functions/create-user

## Folder structure
- src/functions = function files
- src/routes/api.js = route mapping
- src/config/db.js = database connection

## How to add a new function
1. Create a file in src/functions
2. Import it in src/routes/api.js
3. Add the route
4. Restart pm2

## Commands
- pm2 restart supabase-alt
- pm2 logs supabase-alt
