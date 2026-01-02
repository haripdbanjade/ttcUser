import React from 'react';
import { ShieldCheck, Database, User, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary-900 py-20 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <ShieldCheck className="text-white" size={40} />
        </div>
        <h1 className="text-4xl font-bold text-white font-serif mb-4">Privacy Policy</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2>1. Introduction</h2>
          <p>
            Tilottama College ("we," "our," "us") is committed to protecting the privacy of our students, applicants, staff, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          
          <h4>Personal Data</h4>
          <p>
            Personally identifiable information, such as your name, email address, telephone number, and demographic information, that you voluntarily give to us when you fill out forms on our website (e.g., admission application, contact form).
          </p>
          
          <h4>Derivative Data</h4>
          <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Process your admission applications and other submissions.</li>
            <li>Send you newsletters, updates, and promotional materials related to our academic programs and events.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Maintain the security and operation of our website.</li>
          </ul>

          <h2>4. Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2>5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>6. Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 not-prose">
            <p className="flex items-center gap-3"><Mail className="text-primary-600" /> <strong>Email:</strong> info@tilottama.edu.np</p>
            <p className="flex items-center gap-3"><User className="text-primary-600" /> <strong>Attention:</strong> Data Protection Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
