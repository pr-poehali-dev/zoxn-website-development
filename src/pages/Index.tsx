import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Cpu, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 container animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Откройте для себя <span className="text-zoxn">ZOXN</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Инновационное приложение, которое изменит ваше представление о современных технологиях
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-zoxn hover:bg-zoxn-dark text-white">
                <Download className="w-4 h-4 mr-2" />
                Скачать ZOXN
              </Button>
              <Button variant="outline" className="border-zoxn text-zoxn hover:bg-zoxn-light">
                Узнать больше
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-zoxn-light rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zoxn/30 to-transparent"></div>
              <span className="text-5xl md:text-6xl font-bold text-zoxn">ZOXN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают ZOXN</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-zoxn-light p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="text-zoxn w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Молниеносная скорость</h3>
              <p className="text-gray-600">Работает быстрее, чем вы успеваете моргнуть. Никаких задержек и зависаний.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-zoxn-light p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-zoxn w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Надежная защита</h3>
              <p className="text-gray-600">Ваши данные в безопасности с нашей продвинутой системой шифрования.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-zoxn-light p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cpu className="text-zoxn w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Умные технологии</h3>
              <p className="text-gray-600">ИИ-алгоритмы обучаются вашим привычкам для персонализированного опыта.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300 mt-auto">
        <div className="container text-center">
          <p className="text-sm">© 2023 ZOXN. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
