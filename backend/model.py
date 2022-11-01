import joblib

def model_prediction(X):
    
    model = joblib.load('model_Sequential.pkl')
    y_pred = model.predict(X)
    return y_pred