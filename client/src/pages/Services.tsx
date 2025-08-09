import { Link } from "wouter";
import { CheckCircle, ClipboardList, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-navy mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional smart home solutions designed, installed, and supported by certified experts.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1: Design & Consultation */}
            <Card className="glass border-0 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-cyan/80 rounded-2xl flex items-center justify-center mb-6">
                  <ClipboardList className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Home Automation Design & Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Get expert guidance with virtual or in-person consultations. We create personalized automation blueprints with suggested devices tailored to your lifestyle and budget.
                </p>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Virtual or in-person consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Personalized automation blueprint
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Device recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Budget planning and phasing
                  </li>
                </ul>
                <Link href="/contact">
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan to-cyan/80 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    data-testid="button-consult-design"
                  >
                    Book a Consult
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Service 2: Installation & Setup */}
            <Card className="glass border-0 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange/80 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Smart Home Installation & Setup</h3>
                <p className="text-gray-600 mb-6">
                  Professional installation of lighting, thermostats, locks, and cameras. Complete mobile app and voice control integration with comprehensive customer training.
                </p>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Professional device installation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Mobile app & voice integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Comprehensive training
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Ongoing support included
                  </li>
                </ul>
                <Link href="/contact">
                  <Button 
                    className="w-full bg-gradient-to-r from-orange to-orange/80 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    data-testid="button-consult-installation"
                  >
                    Book a Consult
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Service 3: Security System Integration */}
            <Card className="glass border-0 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy/80 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Smart Security System Integration</h3>
                <p className="text-gray-600 mb-6">
                  Complete security solution with motion sensors, window sensors, doorbell cameras, and smart locks. Real-time remote monitoring via smartphones for total peace of mind.
                </p>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Motion & window sensors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Doorbell cameras & smart locks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    Real-time mobile monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    24/7 alert system
                  </li>
                </ul>
                <Link href="/contact">
                  <Button 
                    className="w-full bg-gradient-to-r from-navy to-navy/80 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    data-testid="button-consult-security"
                  >
                    Book a Consult
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, straightforward steps to your smart home transformation.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan to-navy rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Consultation</h3>
              <p className="text-gray-600">We assess your needs, lifestyle, and goals to create a custom plan.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange to-sage rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Design</h3>
              <p className="text-gray-600">Custom blueprint with device recommendations and implementation timeline.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sage to-cyan rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Installation</h3>
              <p className="text-gray-600">Professional installation with minimal disruption to your daily routine.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-navy to-orange rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Training</h3>
              <p className="text-gray-600">Comprehensive training and ongoing support to maximize your investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our services.</p>
          </div>

          <div className="space-y-8">
            <Card className="glass border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">How long does a typical installation take?</h3>
                <p className="text-gray-600">Most installations are completed within 1-2 days, depending on the scope of your project. We work efficiently to minimize disruption to your daily routine.</p>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">Do you provide ongoing support after installation?</h3>
                <p className="text-gray-600">Yes! We provide comprehensive training and ongoing support to ensure you get the most from your smart home system. Our team is always available to help.</p>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">Can you work with my existing devices?</h3>
                <p className="text-gray-600">Absolutely. We specialize in integrating new smart devices with your existing systems to create a seamless, unified experience.</p>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">What brands do you recommend?</h3>
                <p className="text-gray-600">We work with leading brands like Nest, Ring, Philips Hue, and more. Our recommendations are based on quality, reliability, and your specific needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
