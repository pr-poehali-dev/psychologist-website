import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-secondary/30 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-medium text-foreground">
            Детский психолог
          </span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {/* Исправлено: используем NavigationMenuLink вместо вложения Link внутри NavigationMenuLink */}
              <NavigationMenuLink 
                className={navigationMenuTriggerStyle()} 
                asChild
              >
                <Link to="/">Главная</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              {/* Исправлено: используем NavigationMenuLink вместо вложения Link внутри NavigationMenuLink */}
              <NavigationMenuLink 
                className={navigationMenuTriggerStyle()} 
                asChild
              >
                <Link to="/about">Обо мне</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              {/* Исправлено: используем NavigationMenuLink вместо вложения Link внутри NavigationMenuLink */}
              <NavigationMenuLink 
                className={navigationMenuTriggerStyle()} 
                asChild
              >
                <Link to="/contacts">Контакты</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

const services = [
  {
    title: "Диагностика развития",
    href: "/services/diagnostics",
    description:
      "Комплексная оценка когнитивных, эмоциональных и социальных аспектов развития ребенка",
  },
  {
    title: "Индивидуальные занятия",
    href: "/services/individual",
    description:
      "Персонализированная работа с учетом особенностей и потребностей вашего ребенка",
  },
  {
    title: "Семейное консультирование",
    href: "/services/family",
    description:
      "Поддержка и рекомендации для родителей по взаимодействию с ребенком",
  },
  {
    title: "Групповые занятия",
    href: "/services/group",
    description:
      "Развитие социальных навыков в безопасной и поддерживающей среде",
  },
];

export default Header;
