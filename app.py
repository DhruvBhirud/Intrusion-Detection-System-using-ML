import flask
from flask import Flask, render_template, request, redirect
from eval import main
app = Flask(__name__)

#Basic Web Pages
#-------------------------------------------------------------------------------------------
@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/features")
def features():
    return render_template("features.html")

@app.route("/analysis")
def analysis():
    return render_template("analysis.html")

@app.route("/model")
def model():
    return render_template("model.html")
#-------------------------------------------------------------------------------------------

@app.route("/submit", methods=['POST'])
def submit():
    if request.method=="POST":
        type = request.form.get("traffic_type")
        expected = type
        type = type.lower()
        print(type)
        attacks = ["normal","dos","r2l","u2r","probe"]
        if type not in attacks:
            return render_template("index.html")
        pred, prob = main(type)

        dict = {"expected":expected,"predictions":attacks[pred], "normal":prob[0], "dos":prob[1], "u2r":prob[3], "r2l":prob[2], "probe":prob[4]}
        return render_template("result.html",dict=dict)


# Commands to run
#-------------------------------------------------------------------------------------------
# export FLASK_APP=server.py
# export FLASK_DEBUG=1
# python -m flask run --host 0.0.0.0 --port 5000