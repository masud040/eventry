import PaymentForm from "../components/payment/PaymentForm";

export default function PaymentPage() {
  return (
    <section className="container">
      <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 className="mb-8 text-xl font-bold">Payment Details</h2>
        <PaymentForm />
      </div>
    </section>
  );
}
