# Let me Ask - AI-Powered Q&A Platform

A modern web application that allows users to create rooms, ask questions, and receive AI-generated answers based on audio transcriptions. Built with React, Fastify, and Google Gemini AI.

## 🚀 Features

- **Room Management**: Create and manage rooms for different topics
- **Audio Recording**: Record audio files that get transcribed to text
- **AI-Powered Q&A**: Ask questions and receive intelligent answers based on audio content
- **Semantic Search**: Advanced vector-based search using embeddings
- **Real-time Processing**: Instant transcription and answer generation
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **React Query** for server state management
- **React Hook Form** with Zod validation
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Day.js** for date formatting

### Backend
- **Fastify** with TypeScript
- **Drizzle ORM** for database management
- **PostgreSQL** with pgvector extension for vector search
- **Google Gemini AI** for transcription and answer generation
- **Zod** for validation and type safety

### Infrastructure
- **Docker Compose** for PostgreSQL with pgvector
- **Biome** for linting and code formatting

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **Docker** and **Docker Compose**
- **Google Gemini API Key** (get it from [Google AI Studio](https://makersuite.google.com/app/apikey))

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd nlw-2025
```

### 2. Set up the database

```bash
cd server
docker-compose up -d
```

This will start a PostgreSQL database with the pgvector extension enabled.

### 3. Configure environment variables

Create a `.env` file in the `server` directory:

```bash
cd server
cp .env.example .env  # if you have an example file
```

Add your environment variables:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Install dependencies and run migrations

```bash
# Install server dependencies
cd server
npm install

# Run database migrations
npm run db:migrate

# Seed the database (optional)
npm run db:seed
```

### 5. Start the backend server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will be running on `http://localhost:3333`

### 6. Start the frontend

In a new terminal:

```bash
cd web
npm install
npm run dev
```

The frontend will be running on `http://localhost:5173`

## 📁 Project Structure

```
nlw-2025/
├── server/                 # Backend application
│   ├── src/
│   │   ├── db/            # Database schema and migrations
│   │   ├── http/          # API routes
│   │   ├── services/      # Business logic (Gemini AI)
│   │   └── server.ts      # Main server file
│   ├── docker/            # Docker configuration
│   └── docker-compose.yaml
├── web/                   # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── http/          # API client hooks
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
│   └── public/            # Static assets
└── README.md
```

## 🔧 Available Scripts

### Backend (server/)

```bash
npm run dev          # Start development server with hot reload
npm start           # Start production server
npm run db:generate # Generate new database migrations
npm run db:migrate  # Run database migrations
npm run db:seed     # Seed database with sample data
```

### Frontend (web/)

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 🎯 How it Works

1. **Room Creation**: Users create rooms to organize their Q&A sessions
2. **Audio Upload**: Users can record or upload audio files to the room
3. **Transcription**: The audio is automatically transcribed using Google Gemini AI
4. **Embedding Generation**: The transcribed text is converted to vector embeddings
5. **Question Asking**: Users can ask questions about the audio content
6. **Semantic Search**: The system finds the most relevant audio chunks using vector similarity
7. **AI Answer Generation**: Gemini AI generates answers based on the relevant context

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port (default: 3333) | No |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `GEMINI_API_KEY` | Google Gemini API key | Yes |

## 🐳 Docker

The project includes Docker Compose for easy database setup:

```bash
# Start the database
docker-compose up -d

# Stop the database
docker-compose down
```

## 📚 API Endpoints

- `GET /rooms` - List all rooms
- `POST /rooms` - Create a new room
- `GET /rooms/:roomId/questions` - Get questions for a room
- `POST /rooms/:roomId/questions` - Create a new question
- `POST /rooms/:roomId/audio` - Upload audio file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

This project was built as part of the **NLW (Next Level Week)** course by Rocketseat in July 2025. The course focuses on building modern web applications with cutting-edge technologies.

---

Made with ❤️ during NLW 2025 