import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Blog() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-navy mb-6">Latest Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about smart home trends and tips from our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Featured Post 1 */}
            <Card className="glass border-0 overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Modern smart home interior with connected devices and automation displays" 
                className="w-full h-64 object-cover" 
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-cyan text-white px-3 py-1 rounded-full text-sm font-medium">Smart Living</span>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{currentDate}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">Why Smart Homes Are the Future of Comfortable Living</h2>
                <p className="text-gray-600 mb-6">
                  The way we live is changing faster than ever. Smart home technology is no longer a luxury — it's becoming an essential part of comfortable, efficient, and secure living. From controlling your lights with your phone to automating your thermostat based on your routine, the possibilities are endless.
                </p>
                <p className="text-gray-600 mb-6">
                  One of the biggest advantages of a smart home is convenience. With the right setup, all your devices — from lights and locks to cameras and thermostats — can be controlled from a single app or even with your voice. This means less hassle, more control, and more time to focus on what really matters.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-navy to-cyan rounded-full flex items-center justify-center text-white text-sm font-bold">
                      CT
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">Cloudrage Technology</div>
                      <div className="text-gray-600 text-xs">Smart Home Experts</div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-cyan hover:text-navy font-semibold text-sm"
                    data-testid="button-read-more-1"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Post 2 */}
            <Card className="glass border-0 overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Smart security system with cameras, sensors and mobile monitoring interface" 
                className="w-full h-64 object-cover" 
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-medium">Security</span>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>December 15, 2024</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">5 Ways Smart Security Protects Your Family</h2>
                <p className="text-gray-600 mb-6">
                  Discover how modern smart security systems provide comprehensive protection through motion sensors, real-time alerts, and remote access control that keeps your family safe 24/7.
                </p>
                <p className="text-gray-600 mb-6">
                  Smart homes also bring significant energy savings. Automated lighting, climate control, and appliance management can reduce wasted electricity and lower your monthly bills. Over time, these savings can make your smart home system pay for itself.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-navy to-cyan rounded-full flex items-center justify-center text-white text-sm font-bold">
                      CT
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">Cloudrage Technology</div>
                      <div className="text-gray-600 text-xs">Smart Home Experts</div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-cyan hover:text-navy font-semibold text-sm"
                    data-testid="button-read-more-2"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Full Article Content for Featured Post */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass border-0">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-600">
                  <h3 className="text-2xl font-bold text-navy mb-6">The Complete Guide to Smart Home Benefits</h3>
                  
                  <p className="mb-6">
                    Smart homes also bring significant energy savings. Automated lighting, climate control, and appliance management can reduce wasted electricity and lower your monthly bills. Over time, these savings can make your smart home system pay for itself.
                  </p>
                  
                  <p className="mb-6">
                    Security is another major benefit. With smart locks, motion sensors, doorbell cameras, and remote alerts, you can monitor your home from anywhere in the world. Whether you're on vacation or just at the office, you'll have peace of mind knowing your property is protected.
                  </p>
                  
                  <p className="mb-8">
                    At Cloudrage Technology, we design and install smart home systems that are simple to use, reliable, and tailored to your lifestyle. Whether you're starting small or going all-in, we make it easy to take the first step toward a home that works for you.
                  </p>

                  <div className="bg-gradient-to-r from-cyan/10 to-navy/10 p-6 rounded-lg border-l-4 border-cyan">
                    <h4 className="text-xl font-bold text-navy mb-3">Ready to Get Started?</h4>
                    <p className="mb-4">Transform your home with professional smart automation solutions. Our certified consultants are ready to help you design the perfect system for your lifestyle.</p>
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-orange to-orange/80 text-white" data-testid="button-get-consultation">
                        Get Your Free Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Blog Posts */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">More Smart Home Insights</h2>
            <p className="text-xl text-gray-600">Explore our latest articles and guides.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Additional Post 1 */}
            <Card className="glass border-0 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-sage text-white px-3 py-1 rounded-full text-sm font-medium">Energy</span>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>December 10, 2024</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Smart Thermostats: Save Money While Staying Comfortable</h3>
                <p className="text-gray-600 text-sm mb-4">Learn how smart thermostats can reduce your energy bills by up to 23% while maintaining perfect comfort.</p>
                <Button variant="ghost" className="text-cyan p-0 h-auto" data-testid="button-read-thermostat">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Additional Post 2 */}
            <Card className="glass border-0 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-navy text-white px-3 py-1 rounded-full text-sm font-medium">Automation</span>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>December 5, 2024</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Voice Control: The Future is Here</h3>
                <p className="text-gray-600 text-sm mb-4">Discover how voice assistants can transform your daily routines and make your home truly hands-free.</p>
                <Button variant="ghost" className="text-cyan p-0 h-auto" data-testid="button-read-voice">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Additional Post 3 */}
            <Card className="glass border-0 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-medium">Tips</span>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>December 1, 2024</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Getting Started: Your First Smart Home Devices</h3>
                <p className="text-gray-600 text-sm mb-4">A beginner's guide to choosing your first smart home devices and building your automated ecosystem.</p>
                <Button variant="ghost" className="text-cyan p-0 h-auto" data-testid="button-read-started">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-gradient-to-r from-navy to-cyan text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              data-testid="button-view-all-posts"
            >
              View All Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
