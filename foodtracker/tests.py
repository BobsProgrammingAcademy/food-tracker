from django.test import TestCase, Client
from django.urls import reverse
from .models import User, FoodCategory


class UserModelUnitTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create(email='john@test.com', username='John', password='pass123')

    def test_user_model(self):
        data = self.user
        self.assertTrue(isinstance(data, User))
        self.assertIsInstance(data, User)
        self.assertEqual(str(data.username), 'John')


class FoodCategoryUnitTestCase(TestCase):
    def setUp(self):
        self.category = FoodCategory.objects.create(category_name='Vegetables')

    def test_food_category_model(self):
        data = self.category
        self.assertIsInstance(data, FoodCategory)
        self.assertEqual(str(data.category_name), 'Vegetables')


class IndexRequestTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_index_view(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)


class LoginRequestTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_login_view(self):
        response = self.client.get(reverse('login'))
        self.assertEqual(response.status_code, 200)


class RegisterRequestTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_login_view(self):
        response = self.client.get(reverse('register'))
        self.assertEqual(response.status_code, 200)


class FoodListRequestTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_food_list_view(self):
        response = self.client.get(reverse('food_list'))
        self.assertEqual(response.status_code, 200)


class CategoriesRequestTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_categories_view(self):
        response = self.client.get('/categories')
        self.assertEqual(response.status_code, 200)
