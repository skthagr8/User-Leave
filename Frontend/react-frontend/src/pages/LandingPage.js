import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Streamline Employee Leave Management
          </h1>
          <p className="text-lg mb-6">
            Easily manage employee leave requests with our efficient platform. 
            Save time and focus on what matters.
          </p>
          <a href="/Register" className="bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg font-semibold hover:bg-gray-200">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Features</h2>
          <p className="text-lg text-gray-600 mt-4">
            A powerful set of tools to help manage leave requests with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Leave Calendar</h3>
            <p className="text-gray-600">
              View and manage all leave requests in an intuitive calendar.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">Automated Approvals</h3>
            <p className="text-gray-600">
              Automate leave approvals and send instant notifications.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
            <p className="text-gray-600">
              Generate detailed reports on leave balances and employee absences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Simplify Employee Leave Management?
          </h2>
          <p className="text-lg mb-8">
            Sign up today and start streamlining your leave approval process!
          </p>
          <a href="/signup" className="bg-white text-blue-600 py-2 px-6 rounded-full shadow-lg font-semibold hover:bg-gray-200">
            Start Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 text-center">
        <p>&copy; 2024 Employee Leave Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
