import React from 'react';
import { FileText, Shield, Globe, AlertTriangle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary-900 py-20 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <FileText className="text-white" size={40} />
        </div>
        <h1 className="text-4xl font-bold text-white font-serif mb-4">Terms and Conditions</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg">
          Please read these terms carefully before using our website.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the Tilottama College website (the "Site"), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with all of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Use of Website</h2>
          <p>
            You agree to use the Site for lawful purposes only. You are prohibited from any use of the Site that would constitute a violation of any applicable law, regulation, rule or ordinance of any nationality, state, or locality or of any international law or treaty, or that could give rise to any civil or criminal liability.
          </p>
          
          <h2>3. Intellectual Property Rights</h2>
          <p>
            All content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of Tilottama College or its content suppliers and is protected by Nepalese and international copyright laws. Unauthorized use of any materials on this site is strictly prohibited.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            The information provided on this Site is for general informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. For official academic information, please refer to documents provided by the college administration.
          </p>
          
          <h2>5. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites or services that are not owned or controlled by Tilottama College. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>
          
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Tilottama College, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms and Conditions on this page. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us via our <a href="/contact">Contact Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
