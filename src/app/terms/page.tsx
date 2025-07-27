import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center font-display">Terms of Service</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 font-display">ZestyRed Terms of Service</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                Welcome to ZestyRed! These Terms of Service (&quot;Terms&quot;) govern your use of the ZestyRed website and services. By accessing or using our website, you agree to be bound by these Terms.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Use of Our Website</h3>
              
              <p>
                You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use our website:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate ZestyRed, a ZestyRed employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Products and Services</h3>
              
              <p>
                All products and services offered on our website are subject to availability. We reserve the right to discontinue any product or service at any time. Prices for our products are subject to change without notice.
              </p>
              
              <p>
                We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor&apos;s display of any color will be accurate.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Orders and Payments</h3>
              
              <p>
                When you place an order through our website, you are making an offer to purchase products. We reserve the right to refuse or cancel your order at any time for reasons including but not limited to product availability, errors in product or pricing information, or problems identified by our credit and fraud avoidance department.
              </p>
              
              <p>
                We may ask for additional information before accepting an order, and we may verify the information you provide before accepting an order.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Intellectual Property Rights</h3>
              
              <p>
                The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by ZestyRed, its licensors, or other providers of such material and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Disclaimer of Warranties</h3>
              
              <p>
                Your use of our website, its content, and any products or services obtained through the website is at your own risk. The website, its content, and any products or services obtained through the website are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any warranties of any kind, either express or implied.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h3>
              
              <p>
                In no event will ZestyRed, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website, any websites linked to it, any content on the website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Changes to the Terms</h3>
              
              <p>
                We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
              
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <address className="not-italic mt-4">
                <p>ZestyRed Foods Pvt. Ltd.</p>
                <p>123 Tomato Lane, Food Park</p>
                <p>Mumbai, Maharashtra 400001</p>
                <p>India</p>
                <p>Email: legal@zestyred.com</p>
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