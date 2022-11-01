from flask import Flask,request,jsonify,send_file,url_for
from flask_cors import CORS
from model import model_prediction
import base64
import pandas as pd

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
    print("passengerCount : "+str(passengerCount))
    print("tripDistance : "+str(tripDistance))
    print("ratecodeID : "+str(ratecodeID))
    print("puLocationID : "+str(puLocationID))
    print("doLocationID : "+str(doLocationID))
    print("averageSpeedInHour : "+str(averageSpeedInHour))
    print("ridesInHour : "+str(ridesInHour))
    print("time : "+str(time))
    print("------------------")
    pickupYear = time[0:4]
    pickupMonth = time[5:7]
    pickupDay = time[8:10]
    pickupHour = time[11:13]
    pickupMinute = time[14:16]
    pickupSecond = time[17:19]
    df = pd.DataFrame([[passengerCount,tripDistance,ratecodeID,puLocationID,
    doLocationID,pickupYear,pickupMonth,pickupDay,pickupHour,
    pickupMinute,pickupSecond,averageSpeedInHour,ridesInHour]])
    res = model_prediction(df)
    print(res)
    return jsonify("Forecast")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)