from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os
import io

app = Flask(__name__)
CORS(app)

print(tf.__version__)

model = load_model('densenet_svc_model.h5')

class_labels = ['Actinic keratosis', 'Dermatofibroma', 'Melanocytic nevus', 'Vascular lesion']
# class_labels = ['Dermatofibroma', 'Actinic keratosis', 'Melanocytic nevus', 'Vascular lesion']


@app.route('/')
def home():
    return "Hello from the server!!"

@app.route('/upload', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file'}), 400

    file = request.files['file']
    img_data = file.read()

    img = image.load_img(io.BytesIO(img_data), target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img /= 255.0
    # print("######################################",img,"######################################")
    prediction = model.predict(img)
    # print("######################################",prediction,"######################################")
    predicted_class = np.argmax(prediction, axis=-1)
    label = class_labels[predicted_class[0]]
    print(label)
    return jsonify({'prediction': label})

if __name__ == '__main__':
    app.run(debug=True)
