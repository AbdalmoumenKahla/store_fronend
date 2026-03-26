# E-Commerce Store Application

A modern, fully-functional Angular e-commerce single-page application built with Angular 17+ and TypeScript. This application demonstrates best practices in Angular development, including component composition, routing, forms validation, and state management with services.

## Project Description

The Store Application is a complete e-commerce platform that allows users to:
- Browse a catalog of products with detailed information
- View product details including images, descriptions, and prices
- Add products to a shopping cart with quantity selection
- Review and modify cart contents
- Proceed to checkout with comprehensive form validation
- Complete orders and view order confirmation

## Features

✨ **Product Listing**
- Grid layout of all available products
- Product images, names, and prices
- Responsive design that works on all devices

📦 **Shopping Cart**
- Add items with custom quantities
- View cart items with product details
- Update item quantities
- Remove individual items
- Clear entire cart
- Real-time cart total calculation
- Cart badge showing item count in header

🛒 **Product Details**
- Full product information including photos, descriptions, and specifications
- Quantity selector with increment/decrement buttons
- Add to cart functionality with visual feedback
- Related products recommendation

💳 **Checkout & Forms**
- Multi-section checkout form (shipping and payment information)
- Input validation for all form fields
- Real-time validation feedback
- Order summary displayed during checkout

✅ **Order Confirmation**
- Detailed order confirmation page
- Order ID and date display
- Customer information review
- Itemized order summary with quantities and prices
- Total amount display

🎨 **Responsive Design**
- Mobile-first responsive design
- Desktop and tablet optimizations
- Touch-friendly interface

## Prerequisites

- Node.js (v18+)
- npm (v9+)
- Angular CLI globally installed: \
pm install -g @angular/cli\

## Installation & Setup

1. Run \
pm install\ to install all dependencies
2. Run \
g serve\ to start the development server
3. Navigate to \http://localhost:4200/\

## Project Structure

- \src/app/\ - Application components, services, and models
- \src/assets/\ - Static assets and data files
- \src/styles/\ - Global styles

## Key Components

- **HeaderComponent** - Navigation and cart badge
- **ProductListComponent** - Product grid display
- **ProductDetailComponent** - Individual product details
- **CartComponent** - Shopping cart management
- **CheckoutComponent** - Checkout form with validation
- **OrderConfirmationComponent** - Order success page

## Key Services

- **ProductService** - Fetches products from data.json
- **CartService** - Manages cart state with localStorage persistence

## Key Features

- Product listing with data from JSON file using HttpClient
- Shopping cart with add/remove functionality
- Checkout form with comprehensive validation
- Order confirmation page
- Responsive CSS styling
- LocalStorage-based cart persistence
- Angular routing for navigation
- Reactive forms with real-time validation

## Technologies

- Angular 17+
- TypeScript
- HTML5
- CSS3
- RxJS

## Code Quality

- Clean, organized component structure
- Type-safe with TypeScript interfaces
- Standalone components for modularity
- Separation of concerns with services
- Form validation best practices
- Responsive design patterns
