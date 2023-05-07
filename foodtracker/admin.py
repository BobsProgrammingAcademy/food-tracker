from django.contrib import admin

from .models import User, Food, FoodCategory, FoodLog, Image, Weight

admin.site.register(User)
admin.site.register(Food)
admin.site.register(FoodCategory)
admin.site.register(FoodLog)
admin.site.register(Image)
admin.site.register(Weight)
