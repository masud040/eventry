import PaymentForm from "@/app/components/payment/PaymentForm";

export default function PaymentPage({ params: { eventId } }) {
  return (
    <section className="container">
      <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 className="mb-8 text-xl font-bold">Payment Details</h2>
        <PaymentForm eventId={eventId} />
      </div>
    </section>
  );
}
