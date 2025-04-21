import NavBar from "@/components/NavBar";
import StarAnimation from "@/components/StarAnimation";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Cpu, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Анимация звезд на заднем плане */}
      <StarAnimation />
      
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 container relative z-10 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Откройте для себя <span className="text-red-500">ZOXN</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              Инновационное приложение, которое изменит ваше представление о современных технологиях
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Скачать ZOXN
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-gray-900">
                Узнать больше
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-red-600/10 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/30 to-transparent"></div>
              <span className="text-5xl md:text-6xl font-bold text-red-500">ZOXN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black text-white border-t border-gray-800 relative z-10 animate-fade-in">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают ZOXN</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-800 hover:shadow-md transition-shadow">
              <div className="bg-red-600/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Лучшие читы</h3>
              <p className="text-gray-300">Получите преимущество в любой игре с нашими продвинутыми читами. Конкуренты не знают, что их ждёт.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-800 hover:shadow-md transition-shadow">
              <div className="bg-red-600/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Надежная защита</h3>
              <p className="text-gray-300">Ваши данные в безопасности с нашей продвинутой системой шифрования.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-800 hover:shadow-md transition-shadow">
              <div className="bg-red-600/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cpu className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Умные технологии</h3>
              <p className="text-gray-300">ИИ-алгоритмы обучаются вашим привычкам для персонализированного опыта.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-black text-white border-t border-gray-800 relative z-10 animate-fade-in">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-lg text-gray-300 max-w-lg mx-auto mb-8">
            Скачайте ZOXN сейчас и присоединитесь к миллионам довольных пользователей
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
            <Download className="w-5 h-5 mr-2" />
            Скачать ZOXN
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-300 border-t border-gray-800 mt-auto relative z-10">
        <div className="container text-center">
          <p className="text-sm">© 2023 ZOXN. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
