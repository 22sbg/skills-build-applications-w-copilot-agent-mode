from django.core.management.base import BaseCommand
from django.conf import settings
from octofit_tracker import models

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete all data
        models.User.objects.all().delete()
        models.Team.objects.all().delete()
        models.Activity.objects.all().delete()
        models.Leaderboard.objects.all().delete()
        models.Workout.objects.all().delete()

        # Create teams
        marvel = models.Team.objects.create(name='Team Marvel')
        dc = models.Team.objects.create(name='Team DC')

        # Create users
        tony = models.User.objects.create(name='Tony Stark', email='tony@marvel.com', team=marvel)
        steve = models.User.objects.create(name='Steve Rogers', email='steve@marvel.com', team=marvel)
        bruce = models.User.objects.create(name='Bruce Wayne', email='bruce@dc.com', team=dc)
        clark = models.User.objects.create(name='Clark Kent', email='clark@dc.com', team=dc)

        # Create activities
        models.Activity.objects.create(user=tony, type='run', duration=30)
        models.Activity.objects.create(user=steve, type='cycle', duration=45)
        models.Activity.objects.create(user=bruce, type='swim', duration=60)
        models.Activity.objects.create(user=clark, type='run', duration=50)

        # Create workouts
        models.Workout.objects.create(name='Morning Cardio', description='Cardio for all')
        models.Workout.objects.create(name='Strength Training', description='Strength for all')

        # Create leaderboard
        models.Leaderboard.objects.create(user=tony, score=100)
        models.Leaderboard.objects.create(user=steve, score=90)
        models.Leaderboard.objects.create(user=bruce, score=95)
        models.Leaderboard.objects.create(user=clark, score=98)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
