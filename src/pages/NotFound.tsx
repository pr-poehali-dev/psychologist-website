import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center py-16 text-center">
        <h1 className="mb-4 text-7xl font-bold text-primary">404</h1>
        <h2 className="mb-6 text-2xl font-medium">Страница не найдена</h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          Извините, страница, которую вы ищете, не существует или была
          перемещена.
        </p>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
