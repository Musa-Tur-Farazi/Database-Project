# MyTour - Hotel Booking Web Application

A full-stack hotel booking platform built with React, Express.js, and Oracle Database. Users can search for nearby hotels by location, view available rooms, book reservations with date-based availability checking, and manage their profiles. Hotel admins can manage rooms, services, pricing, and view reservation lists through a dedicated dashboard.

## Features

### Customer Features
- **Location-based hotel search** using Geoapify geocoding API with distance filtering (< 1000 km radius)
- **Top-rated hotels** displayed on the homepage, sorted by rating
- **Room availability checking** with date-range conflict detection via SQL queries
- **Room booking** with room type selection, quantity, and paid/free service add-ons
- **Payment processing** with card/mobile payment options
- **Booking confirmation** via PDF memo generation and email notification
- **Booking history** showing past and upcoming reservations
- **User profile management** with address and contact updates

### Admin Features
- **Hotel management dashboard** for viewing and managing owned hotels
- **Room type management** - add, update, and configure room types with images and pricing
- **Room inventory** - add/remove individual rooms, with reservation conflict checks
- **Service management** - add/update/delete free amenities and paid services
- **Reservation list** - view all bookings with check-in/out dates, amounts, and customer IDs
- **Admin profile management** via stored procedure

### Authentication
- Separate login flows for customers and hotel admins
- User registration with email verification
- Cookie-based session persistence (8-hour expiry)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 17, React Router v6, Material UI, React Bootstrap, MDB React |
| **Backend** | Node.js, Express.js |
| **Database** | Oracle Database 19c |
| **ORM/Driver** | node-oracledb |
| **Geocoding** | Geoapify API + geolib (distance calculations) |
| **Email** | Nodemailer (Gmail SMTP) |
| **PDF** | PDFKit (booking memo generation) |
| **Auth** | bcryptjs, jsonwebtoken, cookie-based sessions |

## Project Structure

```
MyTour/
├── client/                          # React frontend
│   ├── public/
│   │   └── login.html
│   └── src/
│       ├── App.js                   # Main app with routing configuration
│       ├── index.js                 # React entry point
│       ├── components/
│       │   ├── Home.js              # Homepage with search, carousel, top-rated hotels
│       │   ├── Login.js             # Admin/User login with role selection
│       │   ├── Signup.js            # Customer registration form
│       │   ├── Navbar.js            # Navigation bar
│       │   ├── About.js             # About page
│       │   ├── Contact.js           # Contact form
│       │   ├── Booking.js           # Room & service selection for booking
│       │   ├── BookingDate.js       # Date picker for bookings
│       │   ├── PaymentMethod.js     # Payment method selection
│       │   ├── CardPayment.js       # Card payment form
│       │   ├── AfterSubmitBooking.js # Booking confirmation page
│       │   ├── AfterSearchFromHome.js # Search results display
│       │   ├── detailedViewHotel.js # Hotel detail with room types & services
│       │   ├── AdminDrawer.js       # Admin sidebar navigation
│       │   ├── AdminProfile.js      # Admin profile management
│       │   ├── FirstPageAdmin.js    # Admin hotel listing
│       │   ├── ServiceTable.js      # Admin service management
│       │   ├── ReservationList.js   # Admin reservation viewer
│       │   ├── UserDrawer.js        # User sidebar navigation
│       │   ├── UserProfile.js       # User profile management
│       │   ├── DashboardBooking.js  # User booking dashboard
│       │   ├── VisitedPlaces.js     # User booking history
│       │   └── ...                  # Additional helper components
│       └── assets/
│           ├── css/                 # Stylesheets
│           └── images/              # UI images and icons
│
├── server/                          # Express.js backend
│   ├── app.js                       # Main server entry point & route definitions
│   ├── Authentication/
│   │   ├── connection.js            # Oracle DB connection singleton (Repository base class)
│   │   ├── authController.js        # Register, login (admin/user), contact endpoints
│   │   └── authRepository.js        # Auth SQL queries, email verification
│   ├── Searching/
│   │   ├── searchController.js      # Location search & top-rated endpoints
│   │   ├── searchRepository.js      # Geocoding, distance calc, hotel queries
│   │   ├── hotelSearchController.js # Hotel detail endpoint
│   │   └── hotelSearchRepository.js # Room availability & service queries
│   ├── Admin/
│   │   ├── adminController.js       # Admin CRUD endpoints
│   │   └── adminRepository.js       # Admin SQL queries & stored procedures
│   ├── User/
│   │   ├── userController.js        # User booking history & profile endpoints
│   │   └── userRepository.js        # User SQL queries & stored procedures
│   └── Booking/
│       ├── bookController.js        # Booking creation endpoint
│       └── bookRepository.js        # Booking SQL, PDF generation, email
│
├── database/
│   └── SQLdump.sql                  # Complete Oracle schema & seed data
│
├── .gitignore
└── README.md
```

## Database Schema

The Oracle database (`C##MyTour`) includes the following tables:

| Table | Description |
|-------|-------------|
| `CUSTOMER` | Customer profiles (name, address, phone, email, password) |
| `ADMIN` | Hotel admin profiles |
| `HOTEL` | Hotel details (name, address, rating, review) |
| `HOTEL_PIC` | Hotel images |
| `ROOMS` | Individual rooms (room_id, hotel_id, room_type) |
| `IMAGE_COST` | Room type images and cost per night |
| `BOOKING` | Bookings (check-in/out dates, customer reference) |
| `BOOKED` | Booking-to-room mapping (which rooms are booked) |
| `PAYMENT` | Payment records (method, amount, date) |
| `SERVICES` | Hotel services (free amenities & paid services) |
| `TOOK` | Booking-to-service mapping |

Stored procedures: `adminupdate`, `userupdate` for profile management.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **Oracle Database 19c** (or compatible version)
- **Oracle Instant Client** (for node-oracledb driver)

### Database Setup

1. Create an Oracle user:
   ```sql
   CREATE USER c##MyTour IDENTIFIED BY 123456;
   GRANT CONNECT, RESOURCE, DBA TO c##MyTour;
   ```

2. Import the schema and seed data:
   ```bash
   sqlplus c##MyTour/123456@localhost/orcl @database/SQLdump.sql
   ```

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install express express-session body-parser cors cookie-parser oracledb bcryptjs jsonwebtoken axios nodemailer geolib pdfkit
   ```

3. Update the Oracle connection settings in `Authentication/connection.js` if needed:
   ```javascript
   user: "c##MyTour",
   password: "123456",
   connectionString: "localhost/orcl"
   ```

4. Start the server:
   ```bash
   node app.js
   ```
   The backend runs on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install react react-dom react-router-dom axios react-bootstrap bootstrap mdb-react-ui-kit @mui/material @mui/icons-material @mui/lab @material-ui/core material-ui-popup-state i18n-iso-countries date-fns universal-cookie react-async
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The frontend runs on `http://localhost:3000`.

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/register` | Register a new customer |
| POST | `/loginadmin` | Admin login |
| POST | `/loginuser` | Customer login |
| POST | `/contact` | Send contact email |
| POST | `/address` | Search hotels by location |
| POST | `/toprated` | Get top-rated hotels |
| POST | `/hotelDetail` | Get hotel rooms & services by date range |
| POST | `/booking` | Create a new booking |
| POST | `/adminhotel` | Get admin's hotels |
| POST | `/adminhoteldetails` | Get hotel room types & rooms |
| POST | `/adminRoomTypeUpdate` | Update room type details |
| POST | `/adminRoomTypeAdd` | Add new room type |
| POST | `/adminRoomAdd` | Add a new room |
| POST | `/adminRoomDelete` | Remove a room |
| POST | `/adminservicedetails` | Get hotel services |
| POST | `/adminfreeServiceAdd` | Add free amenity |
| POST | `/adminpaidServiceAdd` | Add paid service |
| POST | `/adminupdateServiceUpdate` | Update a service |
| POST | `/adminServiceDelete` | Delete a service |
| POST | `/adminprofile` | Update admin profile |
| POST | `/reservation` | Get reservation list |
| POST | `/userprofile` | Update user profile |
| POST | `/prebooking` | Get past bookings |
| POST | `/futurebooking` | Get upcoming bookings |

## Authors

- **Musa Tur Farazi** (Student ID: 2005038)
- **Md. Rifat Hosain**

CSE, Bangladesh University of Engineering and Technology (BUET)

*Database Systems (CSE 216) Course Project*

## License

This project was developed as an academic course project at BUET.
