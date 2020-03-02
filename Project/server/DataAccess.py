
from flask import Flask, jsonify,json
import psycopg2
import random
conn = psycopg2.connect(database='lidor', user='lidor', password='lidor1408', port="5431", host="localhost")

def DataAccessForHomePage():
    
    cur = conn.cursor()
    postgreSQL_select_Query = "select * from homepage order by id"
    cur.execute(postgreSQL_select_Query)
    js_records = cur.fetchall()
    return js_records
    conn.commit()

def Insertfunc(cart_data, AmountoChange, StackToUpdate, Instack):
    
    with conn:
        cur = conn.cursor()
        cur.execute("INSERT INTO users (id, full_name, email, country, city, street, credit_card_number, exp_month, exp_year, cvv, amount, price, product_name) VALUES (%s,%s, %s, %s,%s, %s, %s,%s, %s, %s, %s, %s,%s)" ,(cart_data))
        cur.execute("SELECT * FROM users")
        rows = cur.fetchall()
        #ChosenProduct = str(cart_data[12]).split(",")
        AmountoChange = AmountoChange.split(",")
        StackToUpdate = StackToUpdate.split(",")
        #removeLast = ChosenProduct.pop(-1)
        lengthAmount = len(AmountoChange)
        cur.execute("SELECT * FROM orders_stack ")
        if lengthAmount <= 2: 
            cur.execute("UPDATE orders_stack SET amount_in = %s WHERE amount_in =  %s " , (AmountoChange[0], Instack))
        if lengthAmount >= 3:
            removeLast = AmountoChange.pop(-1)
            removeLast = StackToUpdate.pop(-1)
            for i in range(0,lengthAmount-1):
                cur.execute("UPDATE orders_stack SET amount_in = %s WHERE amount_in =  %s " , (AmountoChange[i], StackToUpdate[i]))

        conn.commit()

def stackdata():
    
    cur = conn.cursor()
    postgreSQL_select_STACK_Query = ("select * from orders_stack")
    cur.execute(postgreSQL_select_STACK_Query)
    ROWS = cur.fetchall()
    FirstProduct = ROWS[0]
    SecondProduct = ROWS[1]
    ThirdProduct = ROWS[2]
    FourthProduct = ROWS[3]
    return (FirstProduct, SecondProduct, ThirdProduct, FourthProduct)
    conn.commit()

def RandomRecipePage():
    
    cur = conn.cursor()
    postgreSQL_select_STACK_Query = ("select * from RandomRecipe")
    cur.execute(postgreSQL_select_STACK_Query)
    Rows = cur.fetchall()
    RecipesList = []
    for Row in Rows:
        RecipesList = [Row] + RecipesList
    return (RecipesList)


