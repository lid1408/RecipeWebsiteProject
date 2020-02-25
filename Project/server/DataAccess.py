
from flask import Flask, jsonify,json
import psycopg2
import random

def DataAccessForHomePage():
    conn = psycopg2.connect(user="lidor",
                                password="lidor1408",
                                host="localhost",
                                port="5431",
                                database="lidor")

    cur = conn.cursor()
    postgreSQL_select_Query = "select * from homepage order by id"
    cur.execute(postgreSQL_select_Query)
    js_records = cur.fetchall()
    return js_records
    conn.commit()

def Insertfunc(cart_data, AmountoChange, StackToUpdate, Instack):
    conn = psycopg2.connect(database='lidor', user='lidor', password='lidor1408', port="5431", host="localhost")

    with conn:
        cur = conn.cursor()
        cur.execute("INSERT INTO users (id, full_name, email, country, city, street, credit_card_number, exp_month, exp_year, cvv, amount, price, product_name) VALUES (%s,%s, %s, %s,%s, %s, %s,%s, %s, %s, %s, %s,%s)" ,(cart_data))
        cur.execute("SELECT * FROM users")
        rows = cur.fetchall()
        ChosenProduct = str(cart_data[12]).split(",")
        AmountoChange = AmountoChange.split(",")
        Instack = Instack.split(",")
        removeLast = Instack.pop(-1)
        removeLast = ChosenProduct.pop(-1)
        lengthAmount = len(AmountoChange)
        removeLast = AmountoChange.pop(-1)
        cur.execute("SELECT * FROM orders_stack ")
        if lengthAmount <= 2 : 
            cur.execute("UPDATE orders_stack SET amount_in = %s WHERE amount_in =  %s " , (AmountoChange, StackToUpdate))
            
        if lengthAmount >= 3:
            for i in range(0,lengthAmount-1):
                cur.execute("UPDATE orders_stack SET amount_in = %s WHERE amount_in =  %s " , (AmountoChange[i], Instack[i]))
                
        conn.commit()

def stackdata():
    conn = psycopg2.connect(user="lidor",
                            password="lidor1408",
                            host="localhost",
                            port="5431",
                            database="lidor")
    cur = conn.cursor()
    postgreSQL_select_STACK_Query = ("select * from orders_stack")
    cur.execute(postgreSQL_select_STACK_Query)
    ROWS = cur.fetchall()
    #for ROW in ROWS:
    FirstProduct = ROWS[0]
    SecondProduct = ROWS[1]
    ThirdProduct = ROWS[2]
    FourthProduct = ROWS[3]
    #return (ROWS)
    print (FirstProduct, SecondProduct, ThirdProduct, FourthProduct)
    return (FirstProduct, SecondProduct, ThirdProduct, FourthProduct)
    conn.commit()

def RandomRecipePage():
        conn = psycopg2.connect(user="lidor",
                            password="lidor1408",
                            host="localhost",
                            port="5431",
                            database="lidor")
    cur = conn.cursor()
    postgreSQL_select_STACK_Query = ("select * from RandomRecipe")
    cur.execute(postgreSQL_select_STACK_Query)
    Rows = cur.fetchall()
    RecipesList = []
    for Row in Rows:
        RecipesList = [Row] + RecipesList
        print (RecipesList)



