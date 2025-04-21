import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                Помощь детям с особенностями развития
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Создаю безопасное пространство, где каждый ребенок может
                раскрыть свой потенциал и получить необходимую поддержку.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/contacts">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
                  Записаться на консультацию
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">Узнать больше обо мне</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-primary/30 bg-muted shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Психолог"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
    </section>
  );
};

export default Hero;
