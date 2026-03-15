"""
Django settings for metrospace_backend project.
"""

from pathlib import Path
import dj_database_url
import os

BASE_DIR = Path(__file__).resolve().parent.parent

import os

ALLOWED_HOSTS = ['*']   # later you can restrict to your domain

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')


# SECURITY

SECRET_KEY = 'django-insecure-!gu)c&wmnlm=j*8gq*j!(1i32)jcs_^8-(6ug!(0#q%)19yh*n'

DEBUG = True

ALLOWED_HOSTS = ["metrospace-project-1.onrender.com", "localhost", "127.0.0.1"]


# APPLICATIONS

INSTALLED_APPS = [

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # third-party
    'rest_framework',
    'corsheaders',

    # local apps
    'consultation',

]


# MIDDLEWARE

MIDDLEWARE = [

    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

]


ROOT_URLCONF = 'metrospace_backend.urls'


# TEMPLATES

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'metrospace_backend.wsgi.application'


# DATABASE (PostgreSQL)

DATABASES = {

    'default': dj_database_url.config(
        default=os.environ.get("postgresql://metrospace_user:lwyCOEtnHQzcM1CoDvkxnPIUpMXQAy3m@dpg-d6r83on5r7bs738s55g0-a/metrospace")
    )
}

        # 'ENGINE': 'django.db.backends.postgresql',

        # 'NAME': 'metrospace_db',

        # 'USER': 'metro_user',

        # 'PASSWORD': 'metro123',

        # 'HOST': '127.0.0.1',

        # 'PORT': '5432',

    




# PASSWORD VALIDATION

AUTH_PASSWORD_VALIDATORS = [

    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },

    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },

    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },

    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },

]


# INTERNATIONALIZATION

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# STATIC FILES

STATIC_URL = 'static/'


# DEFAULT PRIMARY KEY

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# CORS SETTINGS (Allow React frontend)

CORS_ALLOW_ALL_ORIGINS = [
     "https://metrospace-project.vercel.app"
]

CORS_ALLOW_ALL_ORIGINS = "True"