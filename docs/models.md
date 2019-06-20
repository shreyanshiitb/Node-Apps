# Models

## TensorFlow

For TensorFlow models, you can load with commands and configuration like these.

```
python server.js --model_base_path="./models/tensorflow_template_application_model" --model_platform="tensorflow"
```


```bash
curl -u admin:admin -H "Content-Type: application/json" -X POST -d '{"data": {"keys": [[11.0], [2.0]], "features": [[1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1]]}}' http://127.0.0.1:8500
```


## Scikit-learn

For Scikit-learn models, you can load with commands and configuration like these.

```
python server.js --model_base_path="./models/scikitlearn_iris/model.joblib" --model_platform="scikitlearn"

python server.js --model_base_path="./models/scikitlearn_iris/model.pickle" --model_platform="scikitlearn"
```


```bash
curl -u admin:admin -H "Content-Type: application/json" -X POST -d '{"data": {"keys": [[11.0], [2.0]], "features": [[1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1]]}}' http://127.0.0.1:8500
```
