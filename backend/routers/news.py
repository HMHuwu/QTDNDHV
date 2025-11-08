from fastapi import APIRouter
from data.news_data import news_list, featured_news, news_categories

router = APIRouter()

# @router.get("/")
# def get_all_news():
#     return {
#         "featured": featured_news,
#         "news": news_list
#     }
@router.get("/news")
def get_all_news():
    return {
        "featured": featured_news,
        "categories": news_categories,
        "news": news_list
    }