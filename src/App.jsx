// import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// import AdminRoute from './components/AdminRoute';
// import EmployeeRoute from './components/EmployeeRoute';
// import SupplierRoute from './components/SupplierRoute';
// import CustomerRoute from './components/CustomerRoute';
// import DashboardLayout from './components/DashboardLayout';
// import SupplierLayout from './components/SupplierLayout';
// import CustomerLayout from './components/CustomerLayout';
// import NotFound from './pages/NotFound';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import ForgotPassword from './pages/ForgotPassword';
// import ResetPassword from './pages/ResetPassword';

// import AdminDashboard from './pages/AdminDashboard';
// import Employees from './pages/Employees';
// import EmployeeForm from './pages/EmployeeForm';
// import EmployeeProfile from './pages/EmployeeProfile';
// import Customers from './pages/Customers';
// import Suppliers from './pages/Suppliers';
// import SupplierForm from './pages/SupplierForm';
// import SupplierDetail from './pages/SupplierDetail';
// import PurchaseOrders from './pages/PurchaseOrders';
// import CreatePurchaseOrder from './pages/CreatePurchaseOrder';
// import PurchaseOrderDetail from './pages/PurchaseOrderDetail';
// import Inventory from './pages/Inventory';
// import Invoices from './pages/Invoices';
// import Payments from './pages/Payments';
// import AdminSettings from './pages/AdminSettings';

// // Employee Pages
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import EmployeeOrders from './pages/EmployeeOrders';
// import NewOrderPage from './pages/NewOrderPage';
// import OrderDetailPage from './pages/OrderDetailPage';
// import Schedule from './pages/Schedule';
// import EmployeeTasks from './components/EmployeeTasks';
// import EmployeeReports from './pages/EmployeeReports';
// import EmployeeMessages from './pages/EmployeeMessages';
// import ManageOrders from './pages/ManageOrders';

// // Supplier Pages
// import SupplierDashboard from './pages/SupplierDashboard';
// import SupplierOrders from './pages/SupplierOrders';
// import SupplierInventory from './pages/SupplierInventory';
// import SupplierPayments from './pages/SupplierPayments';
// import SupplierSettings from './pages/SupplierSettings';

// // Customer Pages
// import CustomerDashboard from './pages/CustomerDashboard';
// import PaymentHistory from './pages/PaymentHistory';
// import Support from './pages/Support';
// import CustomerForm from './pages/CustomerForm';
// import CustomerDetails from './pages/CustomerDetails';
// import CustomerNewOrder from './pages/CustomerNewOrder';
// import CustomerOrders from './pages/CustomerOrders';

// // Import AdminRegistrationForm and React hooks
// import { useState, useEffect } from 'react';
// import AdminRegistrationForm from './components/AdminRegistrationForm';

// // Admin Setup Check Component - SIMPLIFIED VERSION
// const AdminSetupCheck = ({ children }) => {
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setChecking(false);
//     }, 1000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   if (checking) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading application...</p>
//         </div>
//       </div>
//     );
//   }

//   return children;
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
          
//           {/* Admin setup route */}
//           <Route path="/setup-admin" element={
//             <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//               <AdminRegistrationForm />
//             </div>
//           } />

//           {/* Protected routes */}
          
//      {/* Admin routes */}
// <Route path="/admin/*" element={
//   <ProtectedRoute>
//     <AdminRoute>
    
//       <Routes>
//         <Route index element={<AdminDashboard />} />
//         <Route path="dashboard" element={<AdminDashboard />} />
//         <Route path="employees" element={<Employees />} />
//         <Route path="employees/add" element={<EmployeeForm />} />
//         <Route path="employees/edit/:id" element={<EmployeeForm />} />
//         <Route path="employees/:id" element={<EmployeeProfile adminView />} />
//         <Route path="customers" element={<Customers />} />
//         <Route path="suppliers" element={<Suppliers />} />
//         <Route path="suppliers/add" element={<SupplierForm />} />
//         <Route path="suppliers/:id" element={<SupplierDetail />} />
//         <Route path="suppliers/edit/:id" element={<SupplierForm />} />
//         <Route path="orders" element={<EmployeeOrders adminView />} />
//         <Route path="orders/new" element={<NewOrderPage adminView />} />
//         <Route path="orders/:orderId" element={<OrderDetailPage adminView />} />
//         <Route path="purchase-orders" element={<PurchaseOrders />} />
//         <Route path="purchase-orders/new" element={<CreatePurchaseOrder />} />
//         <Route path="purchase-orders/:orderId" element={<PurchaseOrderDetail />} />
//         <Route path="inventory" element={<Inventory />} />
//         <Route path="invoices" element={<Invoices />} />
//         <Route path="payments" element={<Payments />} />
//         <Route path="settings" element={<AdminSettings />} />
//         <Route path="*" element={<Navigate to="dashboard" replace />} />
//       </Routes>
//     </AdminRoute>
//   </ProtectedRoute>
// } />

//           {/* Employee routes - FIXED */}
//           <Route path="/employee/*" element={
//             <ProtectedRoute>
//               <EmployeeRoute>
//                 <Routes>
//                   <Route index element={<Navigate to="dashboard" replace />} /> {/* ADDED REDIRECT */}
//                   <Route path="dashboard" element={<EmployeeDashboard />} />
//                   <Route path="profile/:id" element={<EmployeeProfile />} />
//                   <Route path="orders" element={<EmployeeOrders />} />
//                   <Route path="orders/new" element={<NewOrderPage />} />
//                   <Route path="orders/:orderId" element={<OrderDetailPage />} />
//                   <Route path="manage-orders" element={<ManageOrders />} />
//                   <Route path="customers" element={<Customers employeeView />} />
//                   <Route path="customers/add" element={<CustomerForm />} />
//                   <Route path="customers/edit/:id" element={<CustomerForm />} />
//                   <Route path="customers/:id" element={<CustomerDetails />} />
//                   <Route path="schedule" element={<Schedule />} />
//                   <Route path="tasks" component={<EmployeeTasks />} />
//                   <Route path="reports" component={<EmployeeReports />} />
//                   <Route path="messages" component={<EmployeeMessages />} />
//                   <Route path="*" element={<Navigate to="dashboard" replace />} />
//                 </Routes>
//               </EmployeeRoute>
//             </ProtectedRoute>
//           } />

//           {/* Supplier routes */}
//           <Route path="/supplier/*" element={
//             <ProtectedRoute>
//               <SupplierRoute>
//                 <SupplierLayout>
//                   <Routes>
//                     <Route index element={<Navigate to="dashboard" replace />} />
//                     <Route path="dashboard" element={<SupplierDashboard />} />
//                     <Route path="orders" element={<SupplierOrders />} />
//                     <Route path="orders/:orderId" element={<PurchaseOrderDetail external />} />
//                     <Route path="inventory" element={<SupplierInventory />} />
//                     <Route path="payments" element={<SupplierPayments />} />
//                     <Route path="settings" element={<SupplierSettings />} />
//                     <Route path="*" element={<Navigate to="dashboard" replace />} />
//                   </Routes>
//                 </SupplierLayout>
//               </SupplierRoute>
//             </ProtectedRoute>
//           } />

//           {/* Customer routes - FIXED */}
//           <Route path="/customer/*" element={
//             <ProtectedRoute>
//               <CustomerRoute>
//                 <Routes>
//                   <Route index element={<Navigate to="dashboard" replace />} /> {/* ADDED REDIRECT */}
//                   <Route path="dashboard" element={<CustomerDashboard />} />
//                   <Route path="orders" element={<CustomerOrders />} />
//                   <Route path="orders/new" element={<CustomerNewOrder />} />
//                   <Route path="orders/:orderId" element={<OrderDetailPage customerView />} />
//                   <Route path="payment-history" element={<PaymentHistory />} />
//                   <Route path="support" element={<Support />} />
//                   <Route path="*" element={<Navigate to="dashboard" replace />} />
//                 </Routes>
//               </CustomerRoute>
//             </ProtectedRoute>
//           } />

//           {/* Common protected routes */}
//           <Route path="/profile" element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           } />

//           {/* 404 route - MUST BE LAST */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;





import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import EmployeeRoute from './components/EmployeeRoute';
import SupplierRoute from './components/SupplierRoute';
import CustomerRoute from './components/CustomerRoute';
import DashboardLayout from './components/DashboardLayout';
import SupplierLayout from './components/SupplierLayout';
import CustomerLayout from './components/CustomerLayout';
import NotFound from './pages/NotFound';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import AdminDashboard from './pages/AdminDashboard';
import Employees from './pages/Employees';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeProfile from './pages/EmployeeProfile';
import Customers from './pages/Customers';
import Suppliers from './pages/Suppliers';
import SupplierForm from './pages/SupplierForm';
import SupplierDetail from './pages/SupplierDetail';
import PurchaseOrders from './pages/PurchaseOrders';
import CreatePurchaseOrder from './pages/CreatePurchaseOrder';
import PurchaseOrderDetail from './pages/PurchaseOrderDetail';
import Inventory from './pages/Inventory';
import Invoices from './pages/Invoices';
import Payments from './pages/Payments';
import AdminSettings from './pages/AdminSettings';

// Employee Pages
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeOrders from './pages/EmployeeOrders';
import NewOrderPage from './pages/NewOrderPage';
import OrderDetailPage from './pages/OrderDetailPage';
import Schedule from './pages/Schedule';
import EmployeeTasks from './components/EmployeeTasks';
import EmployeeReports from './pages/EmployeeReports';
import EmployeeMessages from './pages/EmployeeMessages';
import ManageOrders from './pages/ManageOrders';

// Supplier Pages
import SupplierDashboard from './pages/SupplierDashboard';
import SupplierOrders from './pages/SupplierOrders';
import SupplierInventory from './pages/SupplierInventory';
import SupplierPayments from './pages/SupplierPayments';
import SupplierSettings from './pages/SupplierSettings';

// Customer Pages
import CustomerDashboard from './pages/CustomerDashboard';
import PaymentHistory from './pages/PaymentHistory';
import Support from './pages/Support';
import CustomerForm from './pages/CustomerForm';
import CustomerDetails from './pages/CustomerDetails';
import CustomerNewOrder from './pages/CustomerNewOrder';
import CustomerOrders from './pages/CustomerOrders';

// Import AdminRegistrationForm and React hooks
import { useState, useEffect } from 'react';
import AdminRegistrationForm from './components/AdminRegistrationForm';

// Admin Setup Check Component - SIMPLIFIED VERSION
const AdminSetupCheck = ({ children }) => {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChecking(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading application...</p>
        </div>
      </div>
    );
  }

  return children;
};

// Admin Debug Component
const AdminConsoleDebug = () => {
  const [admins, setAdmins] = useState([]);
  const [localStorageKeys, setLocalStorageKeys] = useState([]);
  const [debugInfo, setDebugInfo] = useState({});
  
  useEffect(() => {
    // Function to search for admin data
    const debugAdmins = () => {
      console.log('=== ADMIN DEBUG INFO ===');
      console.log('Searching localStorage for admin data...');
      
      // Get all localStorage keys
      const allKeys = Object.keys(localStorage);
      setLocalStorageKeys(allKeys);
      
      // Check for common user data patterns
      const possibleUserKeys = allKeys.filter(key => 
        key.toLowerCase().includes('user') || 
        key.toLowerCase().includes('auth') ||
        key.toLowerCase().includes('admin')
      );
      
      const usersData = {};
      
      // Check each possible key
      possibleUserKeys.forEach(key => {
        try {
          const value = localStorage.getItem(key);
          if (value) {
            const parsed = JSON.parse(value);
            usersData[key] = parsed;
            
            console.log(`\nFound data in key: "${key}"`);
            console.log('Data:', parsed);
            
            // If it's an array of users or a single user
            if (Array.isArray(parsed)) {
              const adminUsers = parsed.filter(item => 
                item && (item.role === 'admin' || item.isAdmin === true)
              );
              if (adminUsers.length > 0) {
                console.log(`Found ${adminUsers.length} admin(s) in "${key}":`, adminUsers);
                setAdmins(prev => [...prev, ...adminUsers]);
              }
            } else if (parsed.role === 'admin' || parsed.isAdmin === true) {
              console.log(`Found admin user in "${key}":`, parsed);
              setAdmins(prev => [...prev, parsed]);
            }
          }
        } catch (error) {
          // Not JSON, check if it contains admin data
          const value = localStorage.getItem(key);
          if (value && value.includes('admin')) {
            console.log(`Non-JSON data in "${key}" that contains "admin":`, value.substring(0, 100));
          }
        }
      });
      
      // Also check for users specifically
      const usersKey = allKeys.find(key => 
        key.toLowerCase() === 'users' || 
        key.toLowerCase() === 'app_users' ||
        key.toLowerCase() === 'user_data'
      );
      
      if (usersKey) {
        try {
          const usersValue = localStorage.getItem(usersKey);
          if (usersValue) {
            const users = JSON.parse(usersValue);
            if (Array.isArray(users)) {
              const adminUsers = users.filter(user => user.role === 'admin');
              console.log(`\nFound ${adminUsers.length} admin users in "${usersKey}"`);
              setAdmins(prev => [...adminUsers]);
            }
          }
        } catch (error) {
          console.error(`Error parsing "${usersKey}":`, error);
        }
      }
      
      // Check sessionStorage too
      console.log('\n=== Checking sessionStorage ===');
      const sessionKeys = Object.keys(sessionStorage);
      sessionKeys.forEach(key => {
        try {
          const value = sessionStorage.getItem(key);
          if (value && (value.includes('admin') || value.includes('@'))) {
            console.log(`sessionStorage key "${key}":`, JSON.parse(value));
          }
        } catch (e) {
          // Not JSON
        }
      });
      
      setDebugInfo(usersData);
      
      console.log('\n=== SEARCH COMPLETE ===');
      console.log('Total admin users found:', admins.length);
      console.log('=========================');
    };
    
    debugAdmins();
  }, []);
  
  // Function to manually search all localStorage
  const searchAllStorage = () => {
    console.clear();
    console.log('=== MANUAL STORAGE SEARCH ===');
    
    // Search localStorage
    Object.keys(localStorage).forEach(key => {
      try {
        const value = localStorage.getItem(key);
        const parsed = JSON.parse(value);
        console.log(`Key: ${key}`, parsed);
      } catch {
        const value = localStorage.getItem(key);
        if (value && (value.includes('@') || value.includes('admin'))) {
          console.log(`Key: ${key} (raw):`, value.substring(0, 150));
        }
      }
    });
    
    alert('Check console for complete storage dump (F12 → Console)');
  };
  
  // Function to clear all admin data (use carefully!)
  const resetAdminData = () => {
    if (window.confirm('⚠️ WARNING: This will clear all user data from localStorage. Continue?')) {
      localStorage.clear();
      sessionStorage.clear();
      alert('All storage cleared. Page will reload.');
      window.location.reload();
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6 text-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-400">🔍 Admin Account Recovery</h1>
          <button 
            onClick={() => window.location.href = '/login'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
          >
            Go to Login
          </button>
        </div>
        
        <div className="mb-8">
          <div className="flex gap-4 mb-4">
            <button 
              onClick={searchAllStorage}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
              Search All Storage
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg"
            >
              Refresh Data
            </button>
            <button 
              onClick={resetAdminData}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Reset All Data
            </button>
          </div>
          
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <p className="text-green-300 font-semibold mb-2">📋 Instructions:</p>
            <ol className="list-decimal pl-5 space-y-1 text-gray-300">
              <li>Check your browser console (F12 → Console tab) for admin details</li>
              <li>Look for email addresses in the data below</li>
              <li>Try logging in with found email addresses</li>
              <li>If no password is visible, check if you stored it elsewhere</li>
              <li>Use "Reset All Data" as last resort (clears everything)</li>
            </ol>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-bold text-blue-300 mb-3">📊 Admin Users Found: {admins.length}</h2>
            {admins.length > 0 ? (
              <div className="space-y-3">
                {admins.map((admin, index) => (
                  <div key={index} className="p-3 bg-gray-600 rounded border border-green-500">
                    <p><span className="font-semibold text-yellow-300">Email:</span> {admin.email || 'No email'}</p>
                    <p><span className="font-semibold text-yellow-300">Name:</span> {admin.name || admin.username || 'Not set'}</p>
                    <p><span className="font-semibold text-yellow-300">Role:</span> {admin.role || 'admin'}</p>
                    <p><span className="font-semibold text-yellow-300">ID:</span> {admin.id || admin._id || 'No ID'}</p>
                    {admin.password && (
                      <p><span className="font-semibold text-yellow-300">Password Hash:</span> {admin.password.substring(0, 30)}...</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-gray-600 rounded text-center">
                <p className="text-red-300 font-semibold">No admin users found in localStorage</p>
                <p className="text-gray-400 mt-2">Try searching all storage or check your AuthContext</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-bold text-blue-300 mb-3">🗄️ LocalStorage Keys ({localStorageKeys.length})</h2>
            <div className="max-h-64 overflow-y-auto">
              <ul className="space-y-2">
                {localStorageKeys.map((key, index) => (
                  <li key={index} className="p-2 bg-gray-600 rounded">
                    <span className="font-mono text-sm text-green-300">{key}</span>
                    <span className="text-gray-400 text-sm ml-2">
                      ({localStorage.getItem(key)?.length || 0} chars)
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-bold text-blue-300 mb-3">🔧 Common Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-gray-600 rounded">
              <h3 className="font-bold text-yellow-300 mb-2">Option 1: Check AuthContext</h3>
              <p className="text-gray-300 text-sm">Look in your AuthContext.js file to see where user data is stored.</p>
            </div>
            <div className="p-3 bg-gray-600 rounded">
              <h3 className="font-bold text-yellow-300 mb-2">Option 2: Database Check</h3>
              <p className="text-gray-300 text-sm">If using a backend, check your database directly for admin users.</p>
            </div>
            <div className="p-3 bg-gray-600 rounded">
              <h3 className="font-bold text-yellow-300 mb-2">Option 3: Registration Flow</h3>
              <p className="text-gray-300 text-sm">Try visiting /setup-admin to create a new admin account.</p>
            </div>
            <div className="p-3 bg-gray-600 rounded">
              <h3 className="font-bold text-yellow-300 mb-2">Option 4: Browser DevTools</h3>
              <p className="text-gray-300 text-sm">In DevTools → Application → Storage, inspect all storage areas.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-900 border border-yellow-700 rounded-lg">
          <p className="font-bold text-yellow-300">⚠️ Security Warning:</p>
          <p className="text-yellow-200 text-sm mt-1">
            This page exposes sensitive data. Remove the `/debug-admin` route from your code after recovering your admin account!
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // Quick debug on app load (development only)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🔧 App loaded - checking for admin data...');
      
      // Quick check for any user data
      const checkForData = () => {
        const userKeys = ['users', 'user', 'auth', 'currentUser', 'app_users'];
        userKeys.forEach(key => {
          const data = localStorage.getItem(key);
          if (data) {
            try {
              const parsed = JSON.parse(data);
              console.log(`Found data in "${key}":`, parsed);
            } catch (e) {
              console.log(`Non-JSON data in "${key}":`, data.substring(0, 100));
            }
          }
        });
      };
      
      // Run after a short delay
      setTimeout(checkForData, 1000);
    }
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/debug-admin" element={<AdminConsoleDebug />} /> {/* Debug route */}
          
          {/* Admin setup route */}
          <Route path="/setup-admin" element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
              <AdminRegistrationForm />
            </div>
          } />

          {/* Protected routes */}
          
          {/* Admin routes */}
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminRoute>
                <Routes>
                  <Route index element={<AdminDashboard />} />
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="employees" element={<Employees />} />
                  <Route path="employees/add" element={<EmployeeForm />} />
                  <Route path="employees/edit/:id" element={<EmployeeForm />} />
                  <Route path="employees/:id" element={<EmployeeProfile adminView />} />
                  <Route path="customers" element={<Customers />} />
                  <Route path="suppliers" element={<Suppliers />} />
                  <Route path="suppliers/add" element={<SupplierForm />} />
                  <Route path="suppliers/:id" element={<SupplierDetail />} />
                  <Route path="suppliers/edit/:id" element={<SupplierForm />} />
                  <Route path="orders" element={<EmployeeOrders adminView />} />
                  <Route path="orders/new" element={<NewOrderPage adminView />} />
                  <Route path="orders/:orderId" element={<OrderDetailPage adminView />} />
                  <Route path="purchase-orders" element={<PurchaseOrders />} />
                  <Route path="purchase-orders/new" element={<CreatePurchaseOrder />} />
                  <Route path="purchase-orders/:orderId" element={<PurchaseOrderDetail />} />
                  <Route path="inventory" element={<Inventory />} />
                  <Route path="invoices" element={<Invoices />} />
                  <Route path="payments" element={<Payments />} />
                  <Route path="settings" element={<AdminSettings />} />
                  <Route path="*" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </AdminRoute>
            </ProtectedRoute>
          } />

          {/* Employee routes */}
          <Route path="/employee/*" element={
            <ProtectedRoute>
              <EmployeeRoute>
                <Routes>
                  <Route index element={<Navigate to="dashboard" replace />} />
                  <Route path="dashboard" element={<EmployeeDashboard />} />
                  <Route path="profile/:id" element={<EmployeeProfile />} />
                  <Route path="orders" element={<EmployeeOrders />} />
                  <Route path="orders/new" element={<NewOrderPage />} />
                  <Route path="orders/:orderId" element={<OrderDetailPage />} />
                  <Route path="manage-orders" element={<ManageOrders />} />
                  <Route path="customers" element={<Customers employeeView />} />
                  <Route path="customers/add" element={<CustomerForm />} />
                  <Route path="customers/edit/:id" element={<CustomerForm />} />
                  <Route path="customers/:id" element={<CustomerDetails />} />
                  <Route path="schedule" element={<Schedule />} />
                  <Route path="tasks" component={<EmployeeTasks />} />
                  <Route path="reports" component={<EmployeeReports />} />
                  <Route path="messages" component={<EmployeeMessages />} />
                  <Route path="*" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </EmployeeRoute>
            </ProtectedRoute>
          } />

          {/* Supplier routes */}
          <Route path="/supplier/*" element={
            <ProtectedRoute>
              <SupplierRoute>
                <SupplierLayout>
                  <Routes>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<SupplierDashboard />} />
                    <Route path="orders" element={<SupplierOrders />} />
                    <Route path="orders/:orderId" element={<PurchaseOrderDetail external />} />
                    <Route path="inventory" element={<SupplierInventory />} />
                    <Route path="payments" element={<SupplierPayments />} />
                    <Route path="settings" element={<SupplierSettings />} />
                    <Route path="*" element={<Navigate to="dashboard" replace />} />
                  </Routes>
                </SupplierLayout>
              </SupplierRoute>
            </ProtectedRoute>
          } />

          {/* Customer routes */}
          <Route path="/customer/*" element={
            <ProtectedRoute>
              <CustomerRoute>
                <Routes>
                  <Route index element={<Navigate to="dashboard" replace />} />
                  <Route path="dashboard" element={<CustomerDashboard />} />
                  <Route path="orders" element={<CustomerOrders />} />
                  <Route path="orders/new" element={<CustomerNewOrder />} />
                  <Route path="orders/:orderId" element={<OrderDetailPage customerView />} />
                  <Route path="payment-history" element={<PaymentHistory />} />
                  <Route path="support" element={<Support />} />
                  <Route path="*" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </CustomerRoute>
            </ProtectedRoute>
          } />

          {/* Common protected routes */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />

          {/* 404 route - MUST BE LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
