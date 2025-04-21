import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Heart, Bird } from "lucide-react";

const Services = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold text-foreground">
          Мои услуги
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Комплексный подход к развитию и поддержке детей с особенностями развития
          и их семей
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                {service.icon}
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const services = [
  {
    title: "Диагностика развития",
    description:
      "Профессиональная оценка когнитивных, эмоциональных и социальных аспектов развития вашего ребенка",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    title: "Индивидуальные занятия",
    description:
      "Персонализированная работа с учетом индивидуальных особенностей и потребностей каждого ребенка",
    icon: <Bird className="h-6 w-6 text-primary" />,
  },
  {
    title: "Семейное консультирование",
    description:
      "Поддержка и практические рекомендации для родителей по взаимодействию с ребенком",
    icon: <Heart className="h-6 w-6 text-primary" />,
  },
  {
    title: "Групповые занятия",
    description:
      "Развитие социальных навыков и коммуникативных способностей в малых группах",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
];

export default Services;
