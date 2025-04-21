import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-accent/30 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground">
            Отзывы родителей
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Что говорят родители о нашем сотрудничестве
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                    <img
                      src="/placeholder.svg"
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.relation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    rating: 5,
    content:
      "После нескольких месяцев занятий мы заметили значительные улучшения в развитии речи нашего сына. Спасибо за ваш индивидуальный подход и терпение.",
    author: "Елена М.",
    relation: "Мама Кирилла, 5 лет",
  },
  {
    rating: 5,
    content:
      "Благодаря вашим консультациям мы наконец-то нашли общий язык с дочерью. Ваши рекомендации реально работают и помогли создать гармоничную атмосферу в семье.",
    author: "Дмитрий К.",
    relation: "Папа Софии, 7 лет",
  },
  {
    rating: 5,
    content:
      "Групповые занятия помогли моему ребенку преодолеть социальную тревожность. Теперь он с удовольствием общается с другими детьми и даже нашел друзей.",
    author: "Анна П.",
    relation: "Мама Максима, 6 лет",
  },
];

export default Testimonials;
