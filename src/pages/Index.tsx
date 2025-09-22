import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const portfolioProjects = [
  {
    id: 1,
    title: "Увеличение конверсии на 340%",
    client: "Fashion маркетплейс",
    description: "Редизайн карточек товаров и процесса покупки",
    metrics: {
      conversion: "+340%",
      revenue: "+2.8M₽",
      userSatisfaction: "+85%"
    },
    tags: ["UX/UI", "A/B тестирование", "Аналитика"],
    image: "/img/0f072955-18e4-413e-bde4-04a7dfa4cd71.jpg"
  },
  {
    id: 2,
    title: "Оптимизация мобильной версии",
    client: "Электроника маркетплейс", 
    description: "Адаптация интерфейса под мобильные устройства",
    metrics: {
      conversion: "+280%",
      revenue: "+1.9M₽",
      userSatisfaction: "+92%"
    },
    tags: ["Mobile First", "Responsive", "Performance"],
    image: "/img/e80bf0f3-4383-4b5b-a59b-41312b2f8ce8.jpg"
  }
];

const services = [
  {
    icon: "Palette",
    title: "UX/UI Дизайн",
    description: "Создаем интуитивные интерфейсы, которые конвертируют посетителей в покупателей"
  },
  {
    icon: "TrendingUp",
    title: "Аналитика и A/B тесты",
    description: "Измеряем результативность каждого изменения и оптимизируем под ваши KPI"
  },
  {
    icon: "Smartphone",
    title: "Мобильная оптимизация",
    description: "Адаптируем дизайн под все устройства для максимальной конверсии"
  },
  {
    icon: "Users",
    title: "CX исследования",
    description: "Изучаем поведение пользователей и создаем персонализированный опыт"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Palette" size={24} className="text-primary" />
              <span className="font-inter font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DesignLab
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Получить консультацию
              </Button>
            </div>
            <div className="md:hidden">
              <Icon name="Menu" size={24} className="text-foreground" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-6 text-primary border-primary/50 bg-primary/5">
                💎 Дизайн для маркетплейсов
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-inter font-bold text-foreground mb-6 leading-tight">
                Увеличиваем конверсию 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> на 340%</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Профессиональный дизайн интерфейсов для маркетплейсов, который превращает посетителей в покупателей. 
                Работаем на результат с гарантией ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Обсудить проект
                </Button>
                <Button variant="outline" size="lg" className="border-accent/50 text-accent hover:bg-accent/10">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть кейсы
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8 pt-8 border-t border-purple-500/20">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">340%</div>
                  <div className="text-sm text-foreground/60">Рост конверсии</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-foreground/60">Проектов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">₽15M+</div>
                  <div className="text-sm text-foreground/60">Дополнительная выручка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
                <img 
                  src="/img/b2261fa6-a7bf-46c6-9e5b-7ab2a9435802.jpg" 
                  alt="Команда дизайнеров за работой"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent/50 bg-accent/5">
              ⚡ Наши услуги
            </Badge>
            <h2 className="text-4xl font-inter font-bold text-foreground mb-6">
              Комплексные решения для маркетплейсов
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Предлагаем полный спектр услуг по дизайну и оптимизации интерфейсов маркетплейсов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-inter text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/50 bg-primary/5">
              🏆 Портфолио
            </Badge>
            <h2 className="text-4xl font-inter font-bold text-foreground mb-6">
              Кейсы с измеримыми результатами
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Каждый проект подкреплен конкретными метриками роста конверсии и выручки
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="bg-card/50 backdrop-blur-sm border-purple-500/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-inter text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {project.client}
                      </CardDescription>
                    </div>
                  </div>
                  <p className="text-foreground/70 mt-3">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{project.metrics.conversion}</div>
                      <div className="text-sm text-foreground/60">Конверсия</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{project.metrics.revenue}</div>
                      <div className="text-sm text-foreground/60">Выручка</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{project.metrics.userSatisfaction}</div>
                      <div className="text-sm text-foreground/60">Satisfaction</div>
                    </div>
                  </div>
                  <Separator className="mb-4 bg-purple-500/20" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} className="bg-accent/20 text-accent border-accent/30 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-accent/50 text-accent hover:bg-accent/10">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Посмотреть все кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-accent border-accent/50 bg-accent/5">
                👥 О нас
              </Badge>
              <h2 className="text-4xl font-inter font-bold text-foreground mb-6">
                Экспертная команда дизайнеров
              </h2>
              <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
                Мы специализируемся исключительно на дизайне маркетплейсов уже 5 лет. 
                Знаем все тонкости пользовательского поведения в e-commerce и создаем интерфейсы, 
                которые мотивируют к покупке.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Фокус на ROI</h4>
                    <p className="text-foreground/70 text-sm">Каждое решение направлено на рост конверсии</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Data-driven подход</h4>
                    <p className="text-foreground/70 text-sm">Все решения основаны на данных и тестировании</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Быстрая реализация</h4>
                    <p className="text-foreground/70 text-sm">Первые результаты уже через 2-3 недели</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Гарантия результата</h4>
                    <p className="text-foreground/70 text-sm">Если конверсия не растет — возвращаем деньги</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Icon name="Users" size={20} className="mr-2" />
                Познакомиться с командой
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-purple-500/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-sm text-foreground/60">Лет опыта</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-purple-500/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm text-foreground/60">Проектов</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-purple-500/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">340%</div>
                  <div className="text-sm text-foreground/60">Макс. рост</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-purple-500/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">₽15M+</div>
                  <div className="text-sm text-foreground/60">Доп. выручка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50 bg-primary/5">
            💬 Контакты
          </Badge>
          <h2 className="text-4xl font-inter font-bold text-foreground mb-6">
            Готовы увеличить конверсию вашего маркетплейса?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Обсудим ваш проект и покажем, как наш опыт поможет увеличить продажи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Icon name="Mail" size={20} className="mr-2" />
              Отправить Email
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <p className="text-foreground/60">
              © 2024 DesignLab. Дизайн-агентство для маркетплейсов
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}