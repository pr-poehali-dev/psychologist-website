import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">Детский психолог</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Психологическая помощь детям с особенностями развития и их семьям
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Контакты
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@childpsychologist.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Разделы сайта
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                to="/"
                className="hover:text-primary"
              >
                Главная
              </Link>
              <Link
                to="/about"
                className="hover:text-primary"
              >
                Обо мне
              </Link>
              <Link
                to="/services"
                className="hover:text-primary"
              >
                Услуги
              </Link>
              <Link
                to="/contacts"
                className="hover:text-primary"
              >
                Контакты
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Детский психолог. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
