from masonite.inertia import InertiaMiddleware


class HandleInertiaRequests(InertiaMiddleware):
    exempt = []
