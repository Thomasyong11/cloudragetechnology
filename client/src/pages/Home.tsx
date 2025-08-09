import { Link } from "wouter";
import { CheckCircle, Zap, Shield, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy/10 rounded-full blur-3xl animate-float" style={{animationDelay: "-3s"}}></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-orange/10 rounded-full blur-3xl animate-float" style={{animationDelay: "-1.5s"}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">Simplifying</span><br />
                <span className="text-navy">Smart Living</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Integrated home automation that's secure, efficient, and effortless. 
                Professional installation and training by certified consultants across Ontario.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange to-orange/80 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    data-testid="button-book-consultation"
                  >
                    Book Your Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-cyan text-cyan px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan hover:text-white transition-all duration-300"
                    data-testid="button-explore-services"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage" />
                  <span>Energy Efficient</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage" />
                  <span>Secure & Reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage" />
                  <span>Professional Install</span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-fade-in">
              <div className="relative">
                {/* Main smartphone device */}
                <div className="w-80 h-96 mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-gradient-to-br from-slate-100 to-white rounded-2xl h-full p-4 relative overflow-hidden">
                    {/* App interface mockup */}
                    <div className="grid grid-cols-2 gap-3 h-full">
                      <div className="bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-xl p-3 flex flex-col items-center justify-center">
                        <Zap className="w-8 h-8 text-cyan mb-2" />
                        <span className="text-xs font-medium">Lighting</span>
                      </div>
                      <div className="bg-gradient-to-br from-orange/20 to-orange/10 rounded-xl p-3 flex flex-col items-center justify-center">
                        <Shield className="w-8 h-8 text-orange mb-2" />
                        <span className="text-xs font-medium">Security</span>
                      </div>
                      <div className="bg-gradient-to-br from-sage/20 to-sage/10 rounded-xl p-3 flex flex-col items-center justify-center">
                        <Zap className="w-8 h-8 text-sage mb-2" />
                        <span className="text-xs font-medium">Energy</span>
                      </div>
                      <div className="bg-gradient-to-br from-navy/20 to-navy/10 rounded-xl p-3 flex flex-col items-center justify-center">
                        <Settings className="w-8 h-8 text-navy mb-2" />
                        <span className="text-xs font-medium">Network</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating automation icons */}
                <div className="absolute -top-4 -left-4 glass rounded-full p-3 animate-float">
                  <Zap className="w-6 h-6 text-cyan" />
                </div>
                <div className="absolute -top-4 -right-4 glass rounded-full p-3 animate-float" style={{animationDelay: "-1s"}}>
                  <Shield className="w-6 h-6 text-orange" />
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-full p-3 animate-float" style={{animationDelay: "-2s"}}>
                  <Settings className="w-6 h-6 text-sage" />
                </div>
                <div className="absolute -bottom-4 -right-4 glass rounded-full p-3 animate-float" style={{animationDelay: "-3s"}}>
                  <Settings className="w-6 h-6 text-navy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Choose Smart Living?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the perfect blend of comfort, security, and efficiency with our professional smart home solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Energy Efficiency */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sage to-sage/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Energy-Efficient Smart Systems</h3>
              <p className="text-gray-600">Automated lighting, climate control, and appliance management that reduces energy waste and lowers monthly bills while maintaining perfect comfort.</p>
            </div>

            {/* Security */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Security and Peace of Mind</h3>
              <p className="text-gray-600">Advanced smart locks, motion sensors, doorbell cameras, and real-time monitoring keep your home and family safe 24/7 from anywhere in the world.</p>
            </div>

            {/* Professional Installation */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan to-cyan/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Professional Installation & Training</h3>
              <p className="text-gray-600">Certified consultants provide expert installation, integration, and comprehensive training so you can confidently enjoy your smart home from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by homeowners across Ontario for professional smart home solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="glass border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">"Cloudrage Technology transformed our home into a smart, energy-efficient haven. The installation was seamless and the training was thorough. We love controlling everything from our phones!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan to-navy rounded-full flex items-center justify-center text-white font-semibold">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Sarah Mitchell</div>
                    <div className="text-sm text-gray-600">Toronto Homeowner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="glass border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">"The security system gives us complete peace of mind. Professional installation, excellent support, and the mobile app works perfectly. Highly recommend Cloudrage!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange to-sage rounded-full flex items-center justify-center text-white font-semibold">
                    DL
                  </div>
                  <div>
                    <div className="font-semibold text-navy">David Lee</div>
                    <div className="text-sm text-gray-600">Ottawa Business Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="glass border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">"Our energy bills dropped significantly after Cloudrage installed our smart home system. The automated lighting and climate control are game-changers!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage to-cyan rounded-full flex items-center justify-center text-white font-semibold">
                    RJ
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Rachel Johnson</div>
                    <div className="text-sm text-gray-600">Hamilton Landlord</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your smart home automation needs and create the perfect solution for your lifestyle.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange to-orange/80 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              data-testid="button-get-started"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
