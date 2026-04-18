class Rock:
    def __init__(self, name, formation):
        self.name = name
        self.formation = formation

    def info(self):
        return f"{self.name} forms through {self.formation}."
