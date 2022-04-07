from django.urls import path
from . import views

urlpatterns = [
    path('api/contribute/contact', views.ContactListCreate.as_view() ),
    path('api/contribute/organization', views.OrganizationListCreate.as_view() ),
    path('api/contribute/funding-agency', views.FundingAgencyListCreate.as_view() ),
    path('api/contribute/monitor-location', views.MonitorLocationListCreate.as_view() ),
]