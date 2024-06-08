import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentPage = () => {

    
    return (
        <div className="flex items-center justify-center min-h-screen w-2/3 mx-auto">
            <div className="w-full">
            <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
        </div>
        </div>
    );
};

export default PaymentPage;