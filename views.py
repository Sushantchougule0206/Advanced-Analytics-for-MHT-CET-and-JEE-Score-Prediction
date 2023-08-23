import json
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
import joblib
import os
# Create your views here.


@api_view(['GET', 'POST'])
def cetscoreprediction(request):
    if request.method == "POST":
        boardTwee = request.data['boardTwee']
        tenMath = request.data['tenMath']
        tenSci = request.data['tenSci']
        mockOne = request.data['mockOne']
        mockTwo = request.data['mockTwo']
        mockThree = request.data['mockThree']
        selfstudy = request.data['selfstudy']
        modelInput = [[boardTwee, tenMath,
                       tenSci, mockOne, mockTwo, mockThree, selfstudy]]
    
        ""
        cetmodel = joblib.load("C:/Users/SUSHANT/models/model.pkl")
        prediction = cetmodel.predict(modelInput)
        print(prediction)
        return HttpResponse(prediction, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def jeescoreprediction(request):
    if request.method == "POST":
        jboardTwee = request.data['jboardTwee']
        jtenMath = request.data['jtenMath']
        jtenSci = request.data['jtenSci']
        jmockOne = request.data['jmockOne']
        jmockTwo = request.data['jmockTwo']
        jmockThree = request.data['jmockThree']
        jselfstudy = request.data['jselfstudy']
        modelInput = [[jboardTwee, jtenMath,
                       jtenSci, jmockOne, jmockTwo, jmockThree, jselfstudy]]
        jeemodel = joblib.load("C:/Users/SUSHANT/models/filename.pkl")
        prediction = jeemodel.predict(modelInput)
        print(prediction)
        return HttpResponse(prediction, status=status.HTTP_200_OK)
