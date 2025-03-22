import { ArrowRight, BrainCircuit, FileText, MessageSquareText, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

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
