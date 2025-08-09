import { Users, Award, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-navy mb-6">About Cloudrage Technology</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the future of smart home automation in Ontario with professional, reliable, and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Cloudrage Technology specializes in designing and installing integrated smart home systems across Ontario. Founded in 2023 by certified Home Automation Consultant Okikiola Akanbi, the company is built on a vision to simplify and enhance modern living through technology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From smart lighting to advanced security, we provide solutions that are functional, reliable, and tailored to your lifestyle. Our commitment to excellence and customer-first approach ensures every installation exceeds expectations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">100+</div>
                  <div className="text-gray-600">Homes Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan mb-2">2023</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern smart home technology display in professional setting" 
                  className="w-full h-96 object-cover" 
                />
                
                {/* Floating certification badges */}
                <div className="absolute top-4 right-4 glass rounded-lg p-3">
                  <div className="text-xs font-semibold text-navy mb-1">Certified</div>
                  <div className="text-xs text-gray-600">Home Automation</div>
                </div>
                
                <div className="absolute bottom-4 left-4 glass rounded-lg p-3">
                  <div className="text-xs font-semibold text-navy mb-1">Ontario</div>
                  <div className="text-xs text-gray-600">Licensed & Insured</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Meet the Founder</h2>
            <p className="text-xl text-gray-600">Passionate about technology and committed to excellence.</p>
          </div>

          <Card className="glass border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-navy to-cyan rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      OA
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-navy mb-2">Okikiola Akanbi</h3>
                      <p className="text-lg text-gray-600 mb-2">Certified Home Automation Consultant</p>
                      <p className="text-sm text-cyan font-semibold">Founder & CEO</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    With extensive experience in smart home technology and a passion for innovation, Okikiola founded Cloudrage Technology to bring professional, reliable home automation solutions to Ontario homeowners.
                  </p>
                  
                  <p className="text-gray-600">
                    His vision is to make smart home technology accessible, understandable, and beneficial for every family, combining technical expertise with exceptional customer service.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                    <Award className="w-8 h-8 text-orange" />
                    <div>
                      <div className="font-semibold text-navy">Certified Professional</div>
                      <div className="text-sm text-gray-600">Home Automation Specialist</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                    <Users className="w-8 h-8 text-cyan" />
                    <div>
                      <div className="font-semibold text-navy">Customer-First Approach</div>
                      <div className="text-sm text-gray-600">Personalized Solutions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                    <Shield className="w-8 h-8 text-sage" />
                    <div>
                      <div className="font-semibold text-navy">Licensed & Insured</div>
                      <div className="text-sm text-gray-600">Ontario, Canada</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Customer First</h3>
              <p className="text-gray-600">Every decision we make is guided by what's best for our customers and their families.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan to-cyan/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every installation, training session, and customer interaction.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sage to-sage/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Trust</h3>
              <p className="text-gray-600">Building lasting relationships through transparency, reliability, and honest communication.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Innovation</h3>
              <p className="text-gray-600">Staying ahead of technology trends to bring you the latest and most effective solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
