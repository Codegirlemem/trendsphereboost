function Contact({ children }) {
  return (
    <div className="font-montserrat ">
      <h3 className="mb-6 text-xl font-semibold">Contact</h3>
      <div className="flex flex-col gap-2">
        <div>
          <a href="mailto:http://www.minglingtrendsmarketing.com">{children}</a>
        </div>
        <p>FAQs</p>
        <p>Help/Support</p>
        <p>
          {' '}
          <a href="tel:+23490279322297">+23490279322297</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
