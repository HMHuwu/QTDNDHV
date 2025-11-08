from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import news, activities

app = FastAPI(title="QTDND Hồng Việt API")

# CORS cho phép Next.js gọi
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # hoặc origin cụ thể nếu deploy
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gắn router
app.include_router(news.router, prefix="/api", tags=["News"])
app.include_router(activities.router, prefix="/api", tags=["Activities"])

@app.get("/")
def root():
    return {"message": "QTDND HV Backend is running!"}
