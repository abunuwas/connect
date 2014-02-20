from django.conf.urls import patterns, url
from accounts import views

urlpatterns = patterns('',
    # Auth
    url(
        r'^login/$',
        'django.contrib.auth.views.login',
        {'template_name': 'accounts/login.html'},
        name='login'
    ),
    url(
        r'^logout/$',
        'django.contrib.auth.views.logout',
        {
            'next_page': '/',
            'template_name': 'accounts/login.html'
        },
        name='logout'
    ),

    # Account settings
    url(r'^settings/$', 'accounts.views.account_settings', name='account-settings'),
    url(r'^profile/$', 'accounts.views.profile_settings', name='profile-settings'),

    # Moderators
    url(r'^moderators/$', 'accounts.views.invite_member', name='moderators'),
    url(r'^moderators/review-membership-applications$', 'accounts.views.review_applications', name='review-applications'),
    url(r'^moderators/review-abuse-reports$', 'accounts.views.review_abuse', name='review-abuse'),
    url(r'^moderators/logs$', 'accounts.views.logs', name='logs'),
)
