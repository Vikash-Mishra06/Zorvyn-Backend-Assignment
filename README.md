# Zorvyn Backend Assignment

## Overview
This is a backend system for a finance dashboard that supports user roles, financial records management, dashboard analytics, and role-based access control.

## Live API

Render Deployed Link:
https://zorvyn-backend-assignment-61vw.onrender.com

You can test APIs using Postman.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Features

### 1. User & Role Management
- Create users with roles (viewer, analyst, admin)
- Role-based permissions

### 2. Authentication
- JWT-based login
- Protected routes

### 3. Financial Records
- Create, read records
- Filter by type, category, date

### 4. Dashboard APIs
- Total income
- Total expense
- Net balance
- Category breakdown
- Recent transactions

### 5. Access Control
- Viewer: read-only
- Analyst: view + analytics
- Admin: full access

## API Endpoints

### Auth
- POST /api/users/create
- POST /api/users/login

### Records
- POST /api/records
- GET /api/records

### Dashboard
- GET /api/dashboard/summary
- GET /api/dashboard/categories
- GET /api/dashboard/recent

## Setup Instructions

```bash
git clone <repo>
cd project
npm install
npm run dev
