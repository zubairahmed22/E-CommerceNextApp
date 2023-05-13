CREATE DATABASE testphase;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(250)NOT NULL,
    user_email VARCHAR(250)NOT NULL,
    user_password VARCHAR(250),
    token varchar(250) DEFAULT NULL,
    verify varchar(100) DEFAULT '0',
    user_role INT DEFAULT '0'

);

CREATE TABLE categories(
    cate_id SERIAL PRIMARY KEY,
    cate_name VARCHAR(250)NOT NULL,
    created_at TIME DEFAULT CURRENT_TIME,
    created_on DATE DEFAULT CURRENT_DATE

);
 
INSERT INTO categories(cate_name)VALUES('laptop');

INSERT INTO users (user_name,user_email,user_password)VALUES(
    'ahmedbaloch','ahmed@gmail.com','baloch123',
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(250) NOT NULL,
    product_dis VARCHAR(250) NOT NULL,
    price INT,
    cate_id INT,
    FOREIGN KEY(cate_id) 
	REFERENCES categories(cate_id)  ON DELETE CASCADE,
    product_img text,
    stok INT,
    sold INT DEFAULT(0),
    created_at TIME DEFAULT CURRENT_TIME,
    created_on DATE DEFAULT CURRENT_DATE
    
);
CREATE TABLE orderItem(
    item_id SERIAL PRIMARY KEY,
    item_name varchar,
    count_item INT,
    price INT,
    product_id INT NOT NULL,
    FOREIGN KEY(product_id) 
    REFERENCES products(product_id) ON DELETE CASCADE
);
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    transaction_id INT,
    products varchar[],
    user_name varchar,
    user_email varchar,
    user_address varchar,
    paid INT DEFAULT '0',
    user_city varchar,
    created_at TIME DEFAULT CURRENT_TIME,
    created_on DATE DEFAULT CURRENT_DATE
);

INSERT INTO products(product_name,product_dis,price,cate_id,stok,sold,product_image)
VALUES('HP Notebook','New hp notebook with new slek style',50000,1);
