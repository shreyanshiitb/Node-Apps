# Features

## Multiple Models

It supports serve multiple models and multiple versions of these models. You can run the server with this configuration.

```json
{
  "model_config_list": [
    {
      "name": "tensorflow_template_application_model",
      "base_path": "./models/tensorflow_template_application_model/",
      "platform": "tensorflow"
    }, {
      "name": "deep_image_model",
      "base_path": "./models/deep_image_model/",
      "platform": "tensorflow"
    }, {
       "name": "mxnet_mlp_model",
       "base_path": "./models/mxnet_mlp/mx_mlp",
       "platform": "mxnet"
    }
  ]
}
```

```bash
python server.js --model_config_file="./examples/model_config_file.json"
```

## Authentication

We can enable basic auth for all the APIs and any anonymous request is denied.

Now start the server with the configured username and password.

```bash
./server.py --model_base_path="./models/scikitlearn_iris/finalized_model.pickle" --enable_auth=True --auth_username="admin" --auth_password="admin"
```

If you are using the Web dashboard, just type your certification. If you are using clients, give the username and password within the request.

```bash
curl -u admin:admin -H "Content-Type: application/json" -X POST -d '{"data": {"keys": [[11.0], [2.0]], "features": [[1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1]]}}' http://127.0.0.1:8500
```
