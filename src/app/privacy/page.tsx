import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center font-display">Privacy Policy</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 font-display">ZestyRed Privacy Policy</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                This Privacy Policy describes how ZestyRed Foods Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares your personal information when you visit our website, use our services, or interact with us.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h3>
              
              <p>
                We collect information that you provide directly to us, such as when you:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out forms on our website</li>
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Contact our customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              
              <p>
                This information may include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h3>
              
              <p>
                We use the information we collect to:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our products and services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, promotions, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address fraudulent or illegal activity</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Sharing of Information</h3>
              
              <p>
                We may share your information with:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with whom we jointly offer products or services</li>
                <li>Law enforcement or other third parties as required by law</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Your Choices</h3>
              
              <p>
                You can opt out of receiving promotional communications from us by following the instructions in those communications. You can also update your account information or request deletion of your personal information by contacting us.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Changes to This Policy</h3>
              
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
              
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              
              <address className="not-italic mt-4">
                <p>ZestyRed Foods Pvt. Ltd.</p>
                <p>123 Tomato Lane, Food Park</p>
                <p>Mumbai, Maharashtra 400001</p>
                <p>India</p>
                <p>Email: privacy@zestyred.com</p>
                <p>Phone: +91 98765 43210</p>
              </address>
              
              <p className="mt-8">
                Last Updated: June 1, 2023
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}