src/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── ProductCard.js
│   └── SectionHeader.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Products.js
│   ├── Contact.js
│   └── ThankYou.js
├── assets/
│   ├── images/
│   └── styles/
│       ├── main.css
│       └── custom.scss
├── App.js
└── index.js


Database Maintenance Plan
Weekly Tasks
Backup Verification:

sql
Copy
-- Check backup status
SELECT 
  TABLE_SCHEMA,
  TABLE_NAME,
  UPDATE_TIME
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = 'maosix_management'
ORDER BY UPDATE_TIME DESC;
User Activity Review:

sql
Copy
-- Check recent user activity
SELECT 
  u.username,
  COUNT(al.id) AS actions,
  MAX(al.created_at) AS last_action
FROM users u
LEFT JOIN audit_log al ON u.id = al.user_id
GROUP BY u.id
ORDER BY last_action DESC;
Monthly Tasks
Database Optimization:

sql
Copy
-- Optimize all tables
SELECT CONCAT('OPTIMIZE TABLE ', TABLE_NAME, ';')
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = 'maosix_management';
Performance Review:

sql
Copy
-- Check slow queries
SELECT * FROM mysql.slow_log
ORDER BY start_time DESC
LIMIT 50;





maosix-api/
├── config/
│   └── config.js          # Configuration files
├── controllers/           # Route controllers
│   ├── authController.js
│   ├── procedureController.js
│   ├── purchaseController.js
│   └── userController.js
├── middlewares/
│   ├── authMiddleware.js   # Authentication middleware
│   └── errorMiddleware.js  # Error handling middleware
├── models/
│   ├── index.js           # Sequelize models initialization
│   ├── user.model.js
│   ├── procedure.model.js
│   ├── version.model.js
│   ├── purchase.model.js
│   └── audit.model.js
├── routes/
│   ├── auth.routes.js
│   ├── procedure.routes.js
│   ├── purchase.routes.js
│   └── user.routes.js
├── services/              # Business logic
│   ├── auth.service.js
│   └── user.service.js
├── utils/                 # Utility functions
│   ├── logger.js
│   └── apiResponse.js
├── .env                   # Environment variables
├── app.js                 # Main application file
└── server.js              # Server entry point















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
