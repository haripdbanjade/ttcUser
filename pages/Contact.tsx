import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({ name: false, email: false, subject: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation if field has been touched
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    // Check if there are any errors
    if (Object.values(newErrors).every(error => error === '')) {
      // Mock submission
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({ name: false, email: false, subject: false, message: false });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Visit our campus or send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">Tilottama-2, Yogikuti</p>
                  <p className="text-gray-600">Rupandehi, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+977-71-123456</p>
                  <p className="text-gray-600">+977-9857012345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@tilottama.edu.np</p>
                  <p className="text-gray-600">admissions@tilottama.edu.np</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Sun - Fri: 6:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Saturday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-48 bg-gray-200 rounded-xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/600/300?grayscale" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-600 font-semibold bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm">Google Maps Integration</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h2>
            
            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-lg flex items-start gap-3">
                <CheckCircle className="shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-bold">Message Sent Successfully!</h3>
                  <p className="text-sm mt-1">Thank you for reaching out. We will get back to you as soon as possible.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                      errors.name && touched.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                    } outline-none focus:ring-2 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && touched.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                      errors.email && touched.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                    } outline-none focus:ring-2 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                    errors.subject && touched.subject ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                  } outline-none focus:ring-2 transition-all`}
                  placeholder="Inquiry about Science Program"
                />
                {errors.subject && touched.subject && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                    errors.message && touched.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                  } outline-none focus:ring-2 transition-all resize-none`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && touched.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {submitted ? 'Message Sent!' : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;