import { ArrowRight, BrainCircuit, FileText, MessageSquareText, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import ChatbotButton from "./components/ChatbotButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Chatbot */}
      <Chatbot />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-indigo-100">
        <div className="container py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              Medical Reports,
              <span className="text-indigo-600"> Simplified</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-lg">
              MedAI uses fine-tuned machine learning to instantly summarize complex medical reports into clear, actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight size={16} />
              </button>
              <button className="btn-outline">
                Book Demo
              </button>
            </div>
            <p className="text-sm text-slate-500">No credit card required. 14-day free trial.</p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-white p-4 rounded-xl shadow-xl max-w-md mx-auto">
              <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 p-2 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-indigo-700 font-medium">
                  <BrainCircuit size={20} />
                  <span>MedAI Summarization</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <p className="text-sm text-slate-700">Uploaded: Patient MRI Report (2.4 MB)</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-slate-900">MedAI Summary</h3>
                  <p className="text-slate-700 text-sm">
                    <span className="font-medium">Key findings:</span> No acute intracranial abnormality. Mild age-related atrophy. 
                    <span className="font-medium">Recommendation:</span> No immediate follow-up needed. Consider cognitive assessment if symptoms progress.
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="btn-secondary flex items-center gap-2 text-sm">
                    <MessageSquareText size={16} />
                    Ask MedAI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Powerful AI, <span className="text-indigo-600">Simple Interface</span>
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
              Our advanced AI model is trained on millions of medical documents to provide accurate, relevant summaries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit className="text-indigo-600" />,
                title: "Smart Summarization",
                description: "Our fine-tuned model understands medical terminology and context to provide accurate summaries."
              },
              {
                icon: <MessageSquareText className="text-indigo-600" />,
                title: "Interactive Q&A",
                description: "Ask follow-up questions about any report to get instant clarification on specific details."
              },
              {
                icon: <FileText className="text-indigo-600" />,
                title: "Multiple Formats",
                description: "Works with PDFs, DOCXs, and even scanned documents through advanced OCR technology."
              },
              {
                icon: <Sparkles className="text-indigo-600" />,
                title: "Customizable Outputs",
                description: "Tailor summaries to focus on diagnoses, treatments, or follow-up recommendations."
              },
              {
                icon: <ShieldCheck className="text-indigo-600" />,
                title: "HIPAA Compliant",
                description: "End-to-end encryption and secure infrastructure designed for healthcare data."
              },
              {
                icon: <UserRound className="text-indigo-600" />,
                title: "Team Collaboration",
                description: "Share insights with colleagues while maintaining access controls and audit logs."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Demo Section */}
      <section id="chatbot" className="py-16 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Interactive AI <span className="text-emerald-400">Medical Assistant</span>
            </h2>
            <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
              Our AI chatbot understands medical terminology and can interpret complex reports in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-indigo-800/50 p-5 rounded-xl border border-indigo-700">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MessageSquareText className="text-emerald-400" size={20} />
                  Natural Conversations
                </h3>
                <p className="text-indigo-200">
                  Ask follow-up questions, request clarification, or dive deeper into specific aspects of a medical report.
                </p>
              </div>
              
              <div className="bg-indigo-800/50 p-5 rounded-xl border border-indigo-700">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <FileText className="text-emerald-400" size={20} />
                  Upload Any Report
                </h3>
                <p className="text-indigo-200">
                  Simply upload your medical reports in PDF, DOCX, or image format and get instant insights.
                </p>
              </div>
              
              <div className="bg-indigo-800/50 p-5 rounded-xl border border-indigo-700">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <BrainCircuit className="text-emerald-400" size={20} />
                  Contextual Understanding
                </h3>
                <p className="text-indigo-200">
                  Our AI remembers your conversation context and builds a comprehensive understanding of your medical history.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-indigo-600 text-white p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.5V6.5M18.5 8.5C18.5 6.01472 16.4853 4 14 4C12.1259 4 10.5087 5.08554 9.76455 6.66793M5.5 8.5C5.5 6.01472 7.51472 4 10 4C10.1685 4 10.3344 4.00858 10.4976 4.02544M18.5 15.5C18.5 17.9853 16.4853 20 14 20H10C7.51472 20 5.5 17.9853 5.5 15.5C5.5 13.0147 7.51472 11 10 11H14C16.4853 11 18.5 13.0147 18.5 15.5ZM14 11V20M10 11V20M18.5 11V15.5M5.5 11V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">MedAI Assistant</h3>
                    <p className="text-xs text-indigo-100">Medical report expert</p>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 max-h-[380px] overflow-y-auto space-y-4">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-white p-3 rounded-lg rounded-tl-none border border-slate-200">
                      <p>Hello! I'm MedAI, your medical report assistant. How can I help you today?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-indigo-600 text-white p-3 rounded-lg rounded-tr-none">
                      <p>I just got my MRI results. Can you help me understand what "mild cortical atrophy" means?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-white p-3 rounded-lg rounded-tl-none border border-slate-200">
                      <p>"Mild cortical atrophy" refers to a slight shrinkage of the cerebral cortex, the outer layer of the brain. This is often an age-related finding and can be normal in older adults. It's characterized by widening of the brain's sulci (grooves) and sometimes enlargement of the ventricles. Would you like me to explain the potential clinical significance?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-indigo-600 text-white p-3 rounded-lg rounded-tr-none">
                      <p>Yes, should I be concerned about this finding?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-white p-3 rounded-lg rounded-tl-none border border-slate-200">
                      <p>Mild cortical atrophy by itself is generally not a cause for immediate concern, especially if it's the only finding. It's commonly seen in normal aging. However, the clinical significance depends on several factors including your age, symptoms, and other findings in the report. I'd recommend discussing this with your healthcare provider, who can put this finding in the context of your overall health picture.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-t border-slate-200 bg-white">
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-500 rounded-lg bg-slate-100">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.44 11.05L12.25 2.42C12.09 2.27 11.89 2.18 11.67 2.18C11.46 2.18 11.26 2.27 11.1 2.42L1.91 11.05C1.56 11.36 1.39 11.86 1.47 12.34C1.54 12.82 1.86 13.22 2.3 13.39L4.3 14.13V21C4.3 21.55 4.75 22 5.3 22H18.04C18.59 22 19.04 21.55 19.04 21V14.13L21.04 13.39C21.48 13.22 21.8 12.82 21.87 12.34C21.95 11.86 21.78 11.36 21.44 11.05ZM12 15.93C10.76 15.93 9.75 14.92 9.75 13.68C9.75 12.43 10.76 11.43 12 11.43C13.24 11.43 14.25 12.43 14.25 13.68C14.25 14.92 13.24 15.93 12 15.93Z" fill="currentColor"/>
                      </svg>
                    </button>
                    <input
                      type="text"
                      placeholder="Ask about a medical report..."
                      className="flex-1 py-2 px-3 rounded-lg border border-slate-300 focus:outline-none"
                    />
                    <button className="p-2 text-white bg-indigo-600 rounded-lg">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-400 opacity-20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <ChatbotButton />
            <p className="mt-2 text-indigo-200 text-sm">No sign-up required to explore the demo</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Trusted by Healthcare Professionals
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
              See how MedAI is transforming workflow efficiency in healthcare settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "MedAI has cut our report review time by 50%, allowing me to focus more on patient care and less on paperwork.",
                author: "Dr. Sarah Johnson",
                role: "Neurologist, Boston Medical Center"
              },
              {
                quote: "The accuracy of the summaries is impressive. I've caught nuances in reports I might have otherwise missed during a busy day.",
                author: "Dr. Michael Chen",
                role: "Radiologist, Cleveland Clinic"
              },
              {
                quote: "Implementing MedAI across our hospital system has improved our efficiency and reduced physician burnout significantly.",
                author: "Lisa Patel",
                role: "Chief Medical Information Officer, Memorial Healthcare"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="space-y-4">
                  <p className="italic text-slate-700">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium text-slate-900">{testimonial.author}</p>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
              Choose the plan that works for your practice or institution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$99",
                description: "Perfect for individual practitioners",
                features: [
                  "100 report summaries per month",
                  "Basic Q&A functionality",
                  "PDF and DOCX support",
                  "Email support"
                ]
              },
              {
                name: "Professional",
                price: "$299",
                description: "Ideal for small to medium practices",
                features: [
                  "500 report summaries per month",
                  "Advanced Q&A functionality",
                  "All file formats including OCR",
                  "Priority support",
                  "Team collaboration features"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For hospitals and healthcare systems",
                features: [
                  "Unlimited report summaries",
                  "Full API access",
                  "Custom model training",
                  "Dedicated account manager",
                  "SSO and advanced security",
                  "Custom integrations"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border ${
                  plan.highlighted 
                    ? 'border-indigo-200 shadow-lg bg-gradient-to-b from-indigo-50 to-white' 
                    : 'border-slate-200 bg-white'
                }`}
              >
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <div className="mt-4 mb-4">
                  <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-600">/month</span>}
                </div>
                <p className="text-slate-700 mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={plan.highlighted ? "btn-primary w-full" : "btn-outline w-full"}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-indigo-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Medical Workflow?
          </h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of healthcare professionals using MedAI to save time and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Start Your Free Trial
            </button>
            <button className="bg-indigo-500 text-white hover:bg-indigo-400 px-6 py-3 rounded-lg font-medium transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">MedAI</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HIPAA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p>© {new Date().getFullYear()} MedAI, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
