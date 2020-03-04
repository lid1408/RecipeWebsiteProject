
from DataAccess import DataAccessForHomePage
from DataAccess import Insertfunc
from DataAccess import stackdata
from DataAccess import RandomRecipePage
from flask import Flask, jsonify, render_template, url_for, request, redirect
import psycopg2 , random, json
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
def RecipesGenrator():
    RandomRecipe = RandomRecipePage()
    @app.route("/RandomRecipeLink")
    def RandomRecipeGenrator():
        return jsonify(RandomRecipe)

RecipesData = DataAccessForHomePage() 
@app.route("/cakes")
def index():
    return jsonify(RecipesData)

@app.route("/process_cart", methods = ["POST", "GET"])
def process_cart():
    if request.method == "POST":
        user =(str(request.form["id"]), str(request.form["fullname"]), str(request.form["Email"]), str(request.form["Country"]), str(request.form["City"]), str(request.form["Street"]), str(request.form["ccnum"]), str(request.form["EM"]), str(request.form["EY"]) ,str(request.form["cvv"]), str(request.form["ChosenAmount/s"]), str(request.form["FullPrice"]) ,str(request.form["ChosenProductName"]))
        NewStack = request.form["AmountLeftAfterPurchase"]
        CurrentStack = request.form["AmountInStack"]
        Insertfunc(user,NewStack,CurrentStack)
        return redirect("http://127.0.0.1:5500/client/HTML/OrderConfirmationPage.html" ,code=302)
    else:
        return "ERROR"

@app.route("/<usr>")
def user(usr):
    return f"<p> {usr} </p>"

RecipesGenrator()
@app.route("/MyStack")
def stack():
    StackData=stackdata()
    return jsonify(StackData)
if __name__ == "__main__":
    app.run(debug=True)

