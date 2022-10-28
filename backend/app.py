from flask import Flask,request,jsonify,send_file,url_for
from flask_cors import CORS
import base64

app = Flask(__name__)
CORS(app)

@app.route("/forecast", methods = ["POST"])
def forecast():
    req = request.get_json(silent=False, force=True)
    passengerCount = req['passengerCount']
    tripDistance = req['tripDistance']
    ratecodeID = req['ratecodeID']
    puLocationID = req['puLocationID']
    doLocationID = req['doLocationID']
    averageSpeedInHour = req['averageSpeedInHour']
    ridesInHour = req['ridesInHour']
    time = req['time']
    print(passengerCount)
    print(tripDistance)
    print(ratecodeID)
    print(puLocationID)
    print(doLocationID)
    print(averageSpeedInHour)
    print(ridesInHour)
    print(time)
    return jsonify("Forecast")