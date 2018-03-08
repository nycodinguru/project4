# WristAdvisor Online Watch Shop

### MVP
- Full CRUD functionality
- Auth sign-up/log-in
- Browse Products

### Reach Goals
- Shopping Cart
- Admin privileges (product management)
- image upload via Cloudinary

### User Story

After arriving on the landing page an anonymous user is only able to browse the products on the site. 
#### Account Creation
However upon creating an account and logging in they are able to add items to their cart.  Creating an account requires information about the user to be collected in a form which is then sent to the server to be stored in the database. However the password is not stored, only its one-way hash. 

#### Shopping Cart Management
Adding items to a cart involves posting items to an individual user's Shopping Cart table. This is initiated after the add to cart button is pushed. Items sit in this table until they are either paid for or removed. If the items are paid for a new table will be created for a new order belonging to the shopping cart table, and the items availability status will toggle from true to false.

### Database Structure

![alt text](https://i.imgur.com/UiFE0CDl.png)

### Wireframes

![alt text](https://i.imgur.com/GH03WD2m.jpg)
![alt text](https://i.imgur.com/N74O3xXm.jpg)
![alt text](https://i.imgur.com/9QHb8Xvm.jpg)
![alt text](https://i.imgur.com/COHk48Im.jpg)

### Technologies

- React.js front-end
- Ruby on Rails back-end
- Postgres db
- Cloudinary API
- ES6, HTML5, CSS3

### Timeline

- 3/9/18 - Building the db structure + seed data
- 3/10/18 - Building React.js (routes) front-end and Rails back-end (routes, controllers, models)
- 3/11/18 - Creating Views
- 3/12/18 - Intergrating Auth
- 3/13/18 - Intergrating Shopping Cart Feature
- 3/14/18 - Styling/CSS + bug testing
- 3/15/18 - Fixing bugs
- 3/16/18 - Present completed MVP @ GA Science Fair
