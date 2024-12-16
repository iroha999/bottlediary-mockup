from fastapi import FastAPI

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json") # FastAPIインスタンスを作成

@app.get("/api/py/helloFastApi") #サーバーが起動しているか確認するためのエンドポイント
def hello_fast_api(): # エンドポイントの処理
    return {"message": "server status: OK"} # レスポンス