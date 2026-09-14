# Express.js Practice 🚀

A collection of **Express.js practice programs and backend exercises** created while learning and strengthening my understanding of Express.js and Node.js backend development.

This repository contains hands-on practice with **routing, HTTP methods, middleware, request/response handling, REST APIs, query parameters, route parameters, static files, validation, and basic backend logic**.

---

## 📌 About This Repository

This repository documents my learning journey with **Express.js**.

The programs are focused on understanding how Express.js is used to build backend applications and APIs. Each file covers a particular concept or practice task.

I am continuously adding new programs and exercises as I learn more about backend development.

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **JavaScript**
* **HTML**
* **REST APIs**
* **JSON**
* **File System (fs)**
* **HTTP Methods**
* **Middleware**

---

## 📚 Concepts Practiced

### 1. Express.js Basics

* Creating an Express server
* `express()`
* `app.listen()`
* Routes and route handlers
* Request and response objects
* Sending responses using `res.send()`
* Sending JSON using `res.json()`
* HTTP status codes

### 2. Routing

* Basic routing
* Route paths
* Route parameters
* Query parameters
* Multiple routes
* Different HTTP methods

Example:

```javascript
app.get("/users/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
```

### 3. HTTP Methods

Practice with:

* `GET`
* `POST`
* `PUT`
* `PATCH`
* `DELETE`

These exercises helped me understand how different HTTP methods are used while working with REST APIs.

---

### 4. Request & Response Handling

Practiced working with:

* `req.params`
* `req.query`
* `req.body`
* `req.headers`
* `res.send()`
* `res.json()`
* `res.status()`

---

### 5. Middleware

Practiced creating and using custom middleware such as:

* Logger middleware
* Validation middleware
* Authentication/authorization concepts
* Multiple middleware functions
* `next()`
* Request processing before route execution

Example:

```javascript
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);
```

---

### 6. REST API Practice

Created practice APIs using JavaScript objects and JSON data.

Examples include:

* Student data
* Movie data
* Products
* Gym members
* Filtering data
* Finding data using IDs
* Adding new records
* Updating records
* Deleting records

---

### 7. Query Parameters

Practiced filtering data using query parameters.

Example:

```text
/api/products?brand=HP
```

---

### 8. Static Files

Practiced serving:

* HTML files
* CSS files
* Static assets

Using:

```javascript
app.use(express.static("src"));
```

---

### 9. File Handling

Practiced working with files and JSON data using Node.js modules such as:

```javascript
fs
path
```

---

## 📂 Repository Structure

The repository contains individual practice files for different Express.js concepts:

```text
Express.js-Practice/
│
├── src/
│
├── Admin.html
├── StudentData.js
├── Syllabus.js
│
├── app.js
├── app1.js
├── app2.js
├── app3.js
├── app4.js
├── app5.js
├── app6.js
├── app7.js
├── app8.js
├── app9.js
├── app10.js
├── app11.js
│
├── server.js
├── Task1.js
├── practicepart3.js
├── moviesData.js
├── members.json
│
├── index.html
├── file404.html
│
├── questions.txt
├── task.txt
├── task2.txt
├── task3.txt
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/student-BPSMV/Express.js-Practice.git
```

### 2. Navigate to the project

```bash
cd Express.js-Practice
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run an Express file

For example:

```bash
node app.js
```

Or run any other practice file:

```bash
node app1.js
```

### 5. Open in browser

Depending on the port used by the program:

```text
http://localhost:3000
```

---

## 🎯 Learning Goals

Through this repository, I am focusing on:

* Understanding Express.js fundamentals
* Building REST APIs
* Understanding request/response cycles
* Working with routes
* Understanding middleware
* Handling HTTP methods
* Working with parameters and query strings
* Serving static files
* Practicing backend logic
* Preparing for **MERN Stack development and technical interviews**

---

## 🚀 What's Next?

I plan to continue expanding this repository with:

* Express Router
* Advanced middleware
* Authentication & authorization
* Error-handling middleware
* MongoDB integration
* Mongoose
* CRUD APIs
* JWT authentication
* API validation
* Complete backend projects

---

## 👩‍💻 Author

**Nandini Sharma**

B.Tech Computer Science & Engineering Graduate
MERN Full Stack Developer

### Connect With Me

* GitHub: [student-BPSMV](https://github.com/student-BPSMV)
* LinkedIn: [Nandini Sharma](https://www.linkedin.com/in/nandini-sharma-218379273/)

---

⭐ If you find this repository useful, feel free to explore the practice programs and follow my learning journey!
