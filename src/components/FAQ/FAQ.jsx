import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "What time is check-in?",
      answer: "Check-in starts at 2 PM."
    },
    {
      question: "Do you offer free breakfast?",
      answer: "Yes, complimentary breakfast is included."
    },
    {
      question: "Is parking available?",
      answer: "Yes, free parking is available."
    }
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
}

export default FAQ;