# AaharSetu: Ration Corruption Control System

AaharSetu is a comprehensive digital solution designed to streamline the ration distribution system and combat corruption. It provides a transparent platform for beneficiaries, shopkeepers, and administrators to manage food distribution efficiently.

## 🚀 Features

- **Role-Based Access Control**: Separate interfaces and permissions for Beneficiaries, Shopkeepers, and Admins.
- **Digital Ration Cards**: Support for different ration types (White, Saffron, and Yellow cards) based on eligibility.
- **Secure Transactions**: QR Code integration for verifying and recording ration distributions.
- **Complaint Management**: A system for beneficiaries to lodge complaints and track their resolution.
- **Admin Dashboard**: Oversight of all shops, transactions, and user activities.
- **Shop Management**: Tools for shopkeepers to manage stocks and record sales.
- **Responsive Design**: Built with React and Bootstrap for a seamless experience across devices.

## 🛠️ Tech Stack

- **Frontend**: React.js (v17), Bootstrap 4, Axios, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose).
- **Authentication**: JWT (JSON Web Tokens), Bcryptjs.
- **Deployment**: Docker, Docker Compose.

## 📁 Project Structure

```text
.
├── backend/            # Express server, MongoDB models, routes, and controllers
├── public/             # Static assets
├── src/                # React source code
│   ├── components/     # UI components (Admin, Shopkeeper, Beneficiary modules)
│   ├── App.js          # Main application entry and routing
│   └── index.js        # React DOM rendering
├── Dockerfile          # Frontend Docker configuration
├── docker-compose.yml  # Orchestration for frontend, backend, and database
└── package.json        # Frontend dependencies and scripts
```

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18 or later)
- MongoDB (Local or Atlas)
- Docker & Docker Compose (optional for containerized setup)

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd AaharSetu-main
   ```

2. **Backend Configuration**:
   - Navigate to the `backend` directory: `cd backend`
   - Install dependencies: `npm install`
   - Create a `.env` file and add your MongoDB URI:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
   - Start the backend: `npm run dev` (uses nodemon)

3. **Frontend Configuration**:
   - Navigate back to the root directory: `cd ..`
   - Install dependencies: `npm install`
   - Start the frontend: `npm start`
   - Access the app at `http://localhost:3000`

### Docker Setup

To run the entire stack using Docker:

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```
2. The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string (Backend) |
| `PORT` | Port for the backend server (default: 5000) |
| `REACT_APP_API_URL` | API endpoint for the frontend (default: http://localhost:5000) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
