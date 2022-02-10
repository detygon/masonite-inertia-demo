"""A WelcomeController Module."""
from masonite.inertia import Inertia
from masonite.controllers import Controller


class WelcomeController(Controller):
    """WelcomeController Controller Class."""

    def show(self, view: Inertia):
        return view.render("Welcome")
