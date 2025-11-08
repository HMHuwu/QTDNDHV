from fastapi import APIRouter
from data.activities_data import activities, stats

router = APIRouter()


@router.get("/activities")
def get_all_activities():
    return {
        "activities": activities,
        "stats": stats,
    }
